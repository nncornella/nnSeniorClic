import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';

export const routes: Routes = [
  {
    path: "", component: AppComponent, pathMatch: "full"
  },
  {
    path: "login", component: LoginComponent, pathMatch: "full"
  },
  {
    path: "register", component: RegisterComponent, pathMatch: "full"
  }
];
export const routing = RouterModule.forRoot(routes);
