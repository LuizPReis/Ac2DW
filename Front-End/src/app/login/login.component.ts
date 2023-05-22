import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  nomeA: string = "";
  senhaA: string = "";
  erroA: string = "";

  constructor(private router: Router){}
  usuarioLogin()
  {
    if(this.nomeA == "a" && this.senhaA == "123")
    {
      this.router.navigate(['/home']);
    }
    else
    {
      this.erroA = "Erro no login";
    }

  }

}
