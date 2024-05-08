import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from './_types/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Dating App';
  users: any;

  constructor(private accountService: AccountService) {}
  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const newUser = localStorage.getItem('user');
    if (!newUser) return;
    const user: User = JSON.parse(newUser);
    this.accountService.setCurrentUser(user);
  }
}

export const environment = {
  production: false,
  apiUrl: 'https://localhost:5001/api',
};
