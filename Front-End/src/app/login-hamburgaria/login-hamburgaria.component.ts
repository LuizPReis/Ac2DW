import { Component } from '@angular/core';

@Component({
  selector: 'app-login-hamburgaria',
  templateUrl: './login-hamburgaria.component.html',
  styleUrls: ['./login-hamburgaria.component.css']
})
export class LoginHamburgariaComponent {
  burgers = [
    {likes: 0 }
  ];

  likeBurger(burger: any) {
    burger.likes++;
  }
}
