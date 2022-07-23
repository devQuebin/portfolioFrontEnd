import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
  

  constructor(private router: Router,
              private autenticacionService: AutenticacionService) { }

  ngOnInit(): void {
  }

login(){
  this.router.navigate(['/login'])
}

logged = () => this.autenticacionService.loggedIn();


onLogout() {
  this.autenticacionService.logoutUser();
}
}
