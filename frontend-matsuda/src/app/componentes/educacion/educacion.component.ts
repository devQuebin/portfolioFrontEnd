import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion.model';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem, } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  public educaciones: Educacion[] = [];
  public educaciones2 = this.educacionService.getEducacion();
  public editEducacion: Educacion | undefined;
  public deleteEducacion: Educacion | undefined;

  constructor(private educacionService: EducacionService,
    public autenticacionService: AutenticacionService) { }

  isloged = () => this.autenticacionService.loggedIn();

  ngOnInit(): void {
    this.getEducacion();
  }

  public getEducacion(): void {
    this.educacionService.getEducacion().subscribe({
      next: (Response: Educacion[]) => {
        this.educaciones = Response;
      },
      error: (error: HttpErrorResponse) => {
        console.log('error');
      }
    })
  }
  public onOpenModal(mode: string, educacion?: Educacion): void {
    const container = document.getElementById('modal_container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEducacionModal');
    } else if (mode === 'delete') {
      this.deleteEducacion = educacion;
      button.setAttribute('data-target', '#deleteEducacionModal');
    } else if (mode === 'edit') {
      this.editEducacion = educacion;
      button.setAttribute('data-target', '#editEducacionModal');
    }
    container?.appendChild(button);
    button.click();
  }
  public onAddEducacion(addForm: NgForm) {
    document.getElementById('add-educacion-form')?.click();
    this.educacionService.addEducacion(addForm.value).subscribe({
      next: (response: Educacion) => {
        console.log(response);
        this.getEducacion();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    })
  }
  public onUpdateEducacion(educacion: Educacion) {
    this.editEducacion = educacion;
    document.getElementById('add-educacion-form')?.click();
    this.educacionService.updateEducacion(educacion).subscribe({
      next: (response: Educacion) => {
        console.log(response);
        this.getEducacion();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }

    })
  }
  public onDeleteEducacion(idEdu: number): void {

    this.educacionService.deleteEducacion(idEdu).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getEducacion();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }

    })
  }

  onDrop(event: CdkDragDrop<Educacion[]>) {
    if (this.autenticacionService.loggedIn()) {
      if (event.previousContainer === event.container) {
        moveItemInArray(
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      } else {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      }
    }
  }

}

