import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { ITask } from "src/app/models/app.models";
import { SnackbarService } from "src/app/services/snackbar.service";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"],
})
export class TaskComponent implements OnInit {
  @Input() task: ITask;
  @Output() statusChange = new EventEmitter();

  constructor(
    private todoService: TodoService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {}

  toggleComplete() {
    this.todoService.completeTask(this.task.id).subscribe(
      (res) => {
        console.log("completeTask", this.task.id, "res", res);
        this.statusChange.emit("toggleComplete");
        this.snackbarService.showSnakBar("Task Status Toggled");
      },
      (err) => {
        console.log("completeTask err", err);
        this.snackbarService.showSnakBar("Error Toggling Task Status");
      }
    );
  }

  deleteTask() {
    console.log("deleteTask", this.task.id);
    this.todoService.deleteTask(this.task.id).subscribe(
      (res) => {
        console.log("deleteTask res", res);
        this.statusChange.emit("deleted");
        this.snackbarService.showSnakBar("Task Deleted Successfully");
      },
      (err) => {
        console.error("deleteTask", err);
        this.snackbarService.showSnakBar("Error Deleting Task");
      }
    );
  }
}
