import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: UserModel[] = [];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(jsonUsers => {
      console.log(jsonUsers);
      this.users = jsonUsers;
    });
    }

  ngOnInit(): void {
  }

}
