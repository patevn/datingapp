import { Component, OnInit } from '@angular/core';
import { environment } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { User } from '../_types/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: User | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getUsers() {
    this.http.get(environment.apiUrl + '/users').subscribe({
      next: (response: any) => (this.users = response),
      error: (error: any) => console.log(error),
      complete: () => console.log('Request is complete'),
    });
  }
}
