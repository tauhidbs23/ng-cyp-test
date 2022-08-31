import {Component, OnInit} from '@angular/core';
import {UsersService} from "../services/users/users.service";
import {IUserDetails} from "./users.config";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userList: IUserDetails[];

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.getAllUsers();

  }

  deleteUser(id: string): void {
    if (confirm("Are you sure to delete " + id)) {
      this.userList = this.userList.filter(t => t.id !== id);
    }
  }

  getAllUsers(): void {
    this.usersService.getUsers().subscribe(users => {
      this.userList = users;
      console.log(users);
    })
  }

}
