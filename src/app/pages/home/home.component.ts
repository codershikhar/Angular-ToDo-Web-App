import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { IReminder, ITodoList } from "src/app/models/app.models";
import { ReminderService } from "src/app/services/reminder.service";
import { SnackbarService } from "src/app/services/snackbar.service";
import { TodoService } from "src/app/services/todo.service";
import { AddListPopupComponent } from "../add-list-popup/add-list-popup.component";
import { AddReminderPopupComponent } from "../add-reminder-popup/add-reminder-popup.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  todoLists: Array<ITodoList> = [];
  reminders: Array<IReminder> = [];
  totalLists: number = 0;
  currentPageSize: number = 5;
  currentPageNumber: number = 0;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private todoService: TodoService,
    private reminderService: ReminderService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.fetchTodoList();
    this.fetchReminders();
  }

  fetchTodoList() {
    this.todoService
      .listTodo(this.currentPageNumber, this.currentPageSize)
      .subscribe(
        (res) => {
          console.log("listTodo res", res);
          this.todoLists = res["data"];
          this.totalLists = res["count"];
        },
        (err) => {
          console.error("err", err);
          this.snackbarService.showSnakBar("Error Fetching ToDo List");
        }
      );
  }

  fetchReminders() {
    this.reminderService.listReminder().subscribe(
      (res) => {
        console.log("listReminder res", res);
        this.reminders = res;
      },
      (err) => {
        console.error("err", err);
        this.snackbarService.showSnakBar("Error Fetching Reminders");
      }
    );
  }

  paginationToDoList(event) {
    console.log("event", event);
    this.currentPageNumber = event.pageIndex;
    this.currentPageSize = event.pageSize;
    this.fetchTodoList();
  }

  gotoListPage(id) {
    this.router.navigate(["list", { id: id }]);
  }

  deleteTodoList(id) {
    console.log("deleteTodoList", id);
    this.todoService.deleteTodo(id).subscribe(
      (res) => {
        console.log("deleteTodo res", res);
        this.fetchTodoList();
        this.snackbarService.showSnakBar("ToDo List Deleted");
      },
      (err) => {
        console.error("deleteTodo", err);
        this.snackbarService.showSnakBar("Error Deleting ToDo List");
      }
    );
  }

  deleteReminder(id) {
    console.log("deleteReminder", id);
    this.reminderService.deleteReminder(id).subscribe(
      (res) => {
        console.log("deleteReminder res", res);
        this.fetchReminders();
        this.snackbarService.showSnakBar("Reminder Deleted");
      },
      (err) => {
        console.error("deleteReminder", err);
        this.snackbarService.showSnakBar("Error Deleting Reminder");
      }
    );
  }

  showAddReminderPopUp() {
    const dialogRef = this.dialog.open(AddReminderPopupComponent, {
      width: "250px",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed: ", result);
      this.fetchReminders();
    });
  }

  showAddListPopUp() {
    const dialogRef = this.dialog.open(AddListPopupComponent, {
      width: "250px",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed: ", result);
      this.fetchTodoList();
    });
  }
}
