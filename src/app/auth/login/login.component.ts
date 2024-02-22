import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginFormModel: any = {
		username: "",
		password: ""
	};
  constructor( 
    private authService: AuthService,
    private router: Router
  ){}
  login(form: any){
    this.authService.isLoggedIn = true;
    this.router.navigate(['/pages'])
  }
}
