import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/servicios/user.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit {
  public user: User | undefined;
  
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data =>{this.user=data})
  }
}