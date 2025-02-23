import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
//
  email: string | undefined;
  password: string | undefined;

  public userService = inject(UsersService);

  constructor() {}

  login() {
    const user = { email: this.email, password: this.password };
    this.userService.login(user).subscribe((data) => {
      console.log(data);
    });
  }
}
