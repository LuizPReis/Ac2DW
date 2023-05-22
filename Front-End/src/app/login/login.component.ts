import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  email: string = "";
  nomeA: string = "";
  senhaA: string = "";
  erroA: string = "";

  constructor(private router: Router){}
  usuarioLogin()
  {
    if(this.nomeA == "" && this.senhaA == "" && this.email == "")
    {
      this.router.navigate(['/hamburgaria']);
    }
    else
    {
      this.erroA = "Erro no login";
    }

  }

}
