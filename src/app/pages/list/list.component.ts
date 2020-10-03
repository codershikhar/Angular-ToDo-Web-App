import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ITask } from "src/app/models/app.models";
import { SnackbarService } from "src/app/services/snackbar.service";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  todoListId: number = null;

  tasks: Array<ITask> = [];
  newTask: ITask = {
    todoList: null,
    task: null,
  };

  constructor(
    private todoService: TodoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.todoListId = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
    this.fetchTasks();
  }

  fetchTasks() {
    if (this.todoListId) {
      this.todoService.listTask(this.todoListId).subscribe(
        (res: Array<ITask>) => {
          console.log("listTask res", res);
          this.tasks = res;
        },
        (err) => {
          console.error("listTask err", err);
          this.snackbarService.showSnakBar("Error Fetching Tasks");
        }
      );
    } else {
      this.router.navigate([""]);
      this.snackbarService.showSnakBar("Something went Wrong");
    }
  }

  addNew() {
    this.newTask.todoList = this.todoListId;
    this.todoService.addTask(this.newTask).subscribe(
      (res) => {
        console.log("res", res);
        this.newTask.task = "";
        this.fetchTasks();
      },
      (err) => {
        console.log("err", err);
        this.snackbarService.showSnakBar("Error Adding New Tasks");
      }
    );
  }
}
