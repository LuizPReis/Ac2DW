import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginHamburgariaComponent } from './login-hamburgaria/login-hamburgaria.component';

const routes: Routes = [

  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "hamburgaria", component: LoginHamburgariaComponent},
  {path: "**", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
