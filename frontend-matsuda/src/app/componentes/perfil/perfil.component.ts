import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/model/user.model';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user: user = new user("","","","","");
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data =>{this.user=data})
  }

}
