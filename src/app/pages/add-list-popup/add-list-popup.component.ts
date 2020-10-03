import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { TodoService } from "src/app/services/todo.service";
import { ITodoList } from "src/app/models/app.models";
import { SnackbarService } from "src/app/services/snackbar.service";

@Component({
  selector: "app-add-list-popup",
  templateUrl: "./add-list-popup.component.html",
  styleUrls: ["./add-list-popup.component.scss"],
})
export class AddListPopupComponent implements OnInit {
  newTodoList: ITodoList = {
    name: "",
  };

  constructor(
    public dialogRef: MatDialogRef<AddListPopupComponent>,
    public todoService: TodoService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {}

  addList() {
    this.todoService.addTodo(this.newTodoList).subscribe(
      (res) => {
        console.log("addTodo", res);
        this.dialogRef.close("success");
        this.snackbarService.showSnakBar("ToDo Added Successfully");
      },
      (err) => {
        console.error("addTodo err", err);
        this.dialogRef.close("error");
        this.snackbarService.showSnakBar("Error Adding ToDo");
      }
    );
  }
}
