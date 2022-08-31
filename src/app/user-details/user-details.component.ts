import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from "../services/users/users.service";
import {IUserDetails} from "../users/users.config";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userDetails: any;

  constructor(private activatedRoute: ActivatedRoute,
              private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsId => {
      this.getSingleUser(paramsId['id']);
    });
  }

  getSingleUser(id: string): void {
    this.usersService.getUsersById(id).subscribe(res => {
      this.userDetails = res;
    });
  }

}
