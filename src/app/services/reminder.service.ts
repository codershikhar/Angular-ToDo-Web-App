import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IReminder } from "../models/app.models";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ReminderService {
  constructor(private http: HttpClient) {}

  public listReminder(): Observable<Array<IReminder>> {
    var url = `${environment.hostUrl}/api/v1/reminder/list`;
    return this.http.get<Array<IReminder>>(url);
  }

  public addReminder(reminder: IReminder): Observable<IReminder> {
    var url = `${environment.hostUrl}/api/v1/reminder/add/`;
    return this.http.post<IReminder>(url, reminder);
  }

  public deleteReminder(reminderId: number): Observable<any> {
    var url = `${environment.hostUrl}/api/v1/reminder/delete/?id=${reminderId}`;
    return this.http.delete(url);
  }
}
