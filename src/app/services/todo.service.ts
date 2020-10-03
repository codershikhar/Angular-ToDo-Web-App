import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ITask, ITodoList } from "../models/app.models";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  constructor(private http: HttpClient) {}

  public listTodo(pageNumber, pageCount): Observable<Array<ITodoList>> {
    var url = `${environment.hostUrl}/api/v1/todo/list?pageNumber=${pageNumber}&pageCount=${pageCount}`;
    return this.http.get<Array<ITodoList>>(url);
  }

  public addTodo(todoList: ITodoList): Observable<ITodoList> {
    var url = `${environment.hostUrl}/api/v1/todo/add/`;
    return this.http.post<ITodoList>(url, todoList);
  }

  public deleteTodo(todoListId: number): Observable<any> {
    var url = `${environment.hostUrl}/api/v1/todo/delete/?id=${todoListId}`;
    return this.http.delete(url);
  }

  public listTask(todoId: number): Observable<Array<ITask>> {
    var url = `${environment.hostUrl}/api/v1/todo/task/list?id=${todoId}`;
    return this.http.get<Array<ITask>>(url);
  }

  public addTask(task: ITask): Observable<ITask> {
    var url = `${environment.hostUrl}/api/v1/todo/task/add/`;
    return this.http.post<ITask>(url, task);
  }

  public deleteTask(taskId: number): Observable<any> {
    var url = `${environment.hostUrl}/api/v1/todo/task/delete/?id=${taskId}`;
    return this.http.delete(url);
  }

  public completeTask(taskId: number): Observable<ITask> {
    var url = `${environment.hostUrl}/api/v1/todo/task/complete/?id=${taskId}`;
    return this.http.post<ITask>(url, null);
  }
}
