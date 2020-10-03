import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./pages/home/home.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDividerModule } from "@angular/material/divider";
import { MatCardModule } from "@angular/material/card";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { ListComponent } from "./pages/list/list.component";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { TaskComponent } from "./pages/list/task/task.component";
import { MatDialogModule } from "@angular/material/dialog";
import { AddReminderPopupComponent } from "./pages/add-reminder-popup/add-reminder-popup.component";
import { AddListPopupComponent } from "./pages/add-list-popup/add-list-popup.component";
import { HttpClientModule } from "@angular/common/http";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    TaskComponent,
    AddReminderPopupComponent,
    AddListPopupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDividerModule,
    MatCardModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
