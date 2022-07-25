import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public user: User | undefined
  public editUser: User | undefined;

  constructor(public userService: UserService, 
    public autenticacionService: AutenticacionService) { }

    isloged = () => this.autenticacionService.loggedIn();

  ngOnInit(): void {
    this.getUser();
  }

  public getUser(): void {
    this.userService.getUser().subscribe({
      next: (Response: User) => {
        this.user = Response;
      },
      error: (error: HttpErrorResponse) => {
        console.log('error');
      }
    })
  }
  public onOpenModal(mode: string, user?: User): void {
    const container = document.getElementById('modal_container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
     
    button.setAttribute('data-target', '#editUserModal');

    container?.appendChild(button);
    button.click();
  }

  public onUpdateUser(user: User): void{
    this.editUser = user;
    this.userService.updateUser(user).subscribe({
      next: (response: User) => {
        console.log(response);
        this.getUser();
      },
      error: (error: HttpErrorResponse) => {
        console.log('error');
      }
    })
  }
  }
