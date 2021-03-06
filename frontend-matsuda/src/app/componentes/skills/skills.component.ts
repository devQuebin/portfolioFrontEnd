import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Skills } from 'src/app/model/skills.model';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { SkillsService } from 'src/app/servicios/skills.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem, } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skillses: Skills[] = [];
  public skillses2 = this.skillsService.getSkills();
  public editSkills: Skills | undefined;
  public deleteSkills: Skills | undefined;

  constructor(private skillsService: SkillsService,
    public autenticacionService: AutenticacionService) { }

  isloged = () => this.autenticacionService.loggedIn();

  ngOnInit(): void {
    this.getSkills();
  }

  public getSkills(): void {
    this.skillsService.getSkills().subscribe({
      next: (Response: Skills[]) => {
        this.skillses = Response;
      },
      error: (error: HttpErrorResponse) => {
        console.log('error');
      }
    })
  }
  public onOpenModal(mode: string, skills?: Skills): void {
    const container = document.getElementById('modal_container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addSkillsModal');
    } else if (mode === 'delete') {
      this.deleteSkills = skills;
      button.setAttribute('data-target', '#deleteSkillsModal');
    } else if (mode === 'edit') {
      this.editSkills = skills;
      button.setAttribute('data-target', '#editSkillsModal');
    }
    container?.appendChild(button);
    button.click();
  }
  public onAddSkills(addForm: NgForm) {
    document.getElementById('add-skills-form')?.click();
    this.skillsService.addSkills(addForm.value).subscribe({
      next: (response: Skills) => {
        console.log(response);
        this.getSkills();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    })
  }
  public onUpdateSkills(skills: Skills) {
    this.editSkills = skills;
    document.getElementById('add-skills-form')?.click();
    this.skillsService.updateSkills(skills).subscribe({
      next: (response: Skills) => {
        console.log(response);
        this.getSkills();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }

    })
  }
  public onDeleteSkills(idSkills: number): void {

    this.skillsService.deleteSkills(idSkills).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getSkills();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }

    })
  }

  onDrop(event: CdkDragDrop<Skills[]>) {
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
