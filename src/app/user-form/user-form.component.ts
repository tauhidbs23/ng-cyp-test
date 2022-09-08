import {Component, OnInit} from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from "../services/users/users.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  form: FormGroup;
  userDetails: any;
  userId: any;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.initForm();

    this.activatedRoute.params.subscribe(paramsId => {
      if (paramsId) {
        this.userId = paramsId;
        this.getSingleUser(paramsId['id']);
      }
    });

    // if (this.userDetails) {
    //   const {name, username, email, phone, website} = this.userDetails;
    //   console.log(name, username, email, phone, website);
    //   this.form.patchValue({name, username, email, phone, website})
    // }

  }

  getSingleUser(id: string): void {
    this.usersService.getUserById(id).subscribe(res => {
      this.userDetails = res;
      if (this.userDetails) {
        const {name, username, email, phone, website} = this.userDetails;
        console.log(name, username, email, phone, website);
        this.form.patchValue({name, username, email, phone, website})
      }
    });
  }

  initForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      website: new FormControl(null, [Validators.required])
    });
  }

  addNewUser(): void {
    if (this.form.value) {
      this.usersService.addUser(this.form.value).subscribe(res => {
        console.log('user created');
        this.router.navigate(['/users'], {replaceUrl: true});
      })
    }
  }

  updateUser(): void {
    if (this.form.value) {
      console.log('this.userId ->', this.userId?.id);
      this.usersService.editUser(this.userId?.id, this.form.value).subscribe(res => {
        console.log('update info updated successful');
        this.router.navigate(['/users'], {replaceUrl: true});
      })
    }
  }

}
