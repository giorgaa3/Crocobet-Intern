import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../Models/user.model';
import { ITodo } from '../Models/todo.model';
import { IPost } from '../Models/post.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private http = inject(HttpClient);

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.baseUrl}/users`);
  }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.baseUrl}/posts`);
  }

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(`${this.baseUrl}/todos`);
  }
}
