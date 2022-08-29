import { Component, OnInit } from '@angular/core';
import {UsersService} from "../services/users/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userList: any;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(users => {
      this.userList = users;
      console.log(users);
    })

  }

}
