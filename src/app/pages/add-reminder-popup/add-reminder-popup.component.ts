import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { IReminder } from "src/app/models/app.models";
import { ReminderService } from "src/app/services/reminder.service";
import { SnackbarService } from "src/app/services/snackbar.service";

@Component({
  selector: "app-add-reminder-popup",
  templateUrl: "./add-reminder-popup.component.html",
  styleUrls: ["./add-reminder-popup.component.scss"],
})
export class AddReminderPopupComponent implements OnInit {
  reminder: IReminder = {
    title: "",
    description: "",
    dateTime: null,
  };

  constructor(
    public dialogRef: MatDialogRef<AddReminderPopupComponent>,
    private reminderService: ReminderService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {}

  addReminder() {
    this.reminderService.addReminder(this.reminder).subscribe(
      (res) => {
        console.log("addReminder", res);
        this.dialogRef.close("success");
        this.snackbarService.showSnakBar("Reminder Added Successfully");
      },
      (err) => {
        console.error("addReminder err", err);
        this.dialogRef.close("error");
        this.snackbarService.showSnakBar("Error Adding Reminder");
      }
    );
  }
}
