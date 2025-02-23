import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
//
email: string | undefined;
password: string | undefined;
confirmPassword: string | undefined;
passwordError: boolean | undefined;

  public userService = inject(UsersService);

  constructor() {}

  register() {
    const user = { email: this.email, password: this.password };
    this.userService.register(user).subscribe((data) => {
      console.log(data);
    });
  }

}
