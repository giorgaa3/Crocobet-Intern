import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { ITodo } from '../../Models/todo.model';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos = signal<ITodo[]>([]);

  private dataService = inject(DataService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');

    this.dataService.getTodos().subscribe((allTodos) => {
      let filteredTodos: ITodo[];

      if (userId) {
        filteredTodos = allTodos.filter((todo) => todo.id === +userId);
      } else {
        filteredTodos = allTodos;
      }

      this.todos.set(filteredTodos);
    });
  }
}
