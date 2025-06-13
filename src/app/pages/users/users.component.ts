import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'; 
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IUser } from '../../Models/user.model';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, UserComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];
  searchTerm: string = '';

  private dataService = inject(DataService);
  private router = inject(Router);

  ngOnInit(): void {
    this.getUsers();
  }
onSearch(): void {
  this.searchTerm = this.searchTerm.trim();
}
  getUsers(): void {
    this.dataService.getUsers().subscribe((data: IUser[]) => {
      this.users = data;
      console.log(this.users);
    });
  }

  get filteredUsers(): IUser[] {
    return this.users.filter(
      (user) =>
        user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
