import { Component, inject, input } from '@angular/core';
import { IUser } from '../../../Models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = input<IUser>();
  private router = inject(Router);

  goToPosts(id: number): void {
    this.router.navigate(['/posts'], { queryParams: { id } });
  }

  goToTodos(id: number): void {
    this.router.navigate(['/todos'], { queryParams: { id } });
  }
}
