import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  @Input() isExpanded: boolean = false;
	@Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(
    private authService: AuthService,
    private router: Router
  ){

  }
	handleSidebarToggle(){
    this.toggleSidebar.emit(!this.isExpanded);
  }
  logout(){
    this.authService.isLoggedIn = false;
    this.router.navigate(['/login'])
  }
}
