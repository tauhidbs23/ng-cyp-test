import {Component, OnInit} from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UsersService} from "../services/users/users.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.initForm();
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

}
