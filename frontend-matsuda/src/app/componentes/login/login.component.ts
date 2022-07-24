import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  name : string | undefined;

  constructor(private formBuilder:FormBuilder, 
    public autenticacionService: AutenticacionService, //o private?
    private ruta:Router
    ) {
    this.form=this.formBuilder.group(
      {
        email:['',[Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(5)]]
      }
    );
   }
   isloged = () => this.autenticacionService.loggedIn();
  ngOnInit(): void {}
  
  get Email(){
    return this.form.get('email');
  }
  get Password(){
    return this.form.get('password');
  }
  
  onEnviar(event: Event){
    if (this.form.invalid){
      alert ('Usuario y contraseña mal ingresados.');
      return;
    }
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value).subscribe((data)=>{
      console.log (  JSON.stringify(data));
      this.ruta.navigate(['']);

    })
  }
  handleClear(){
    this.name = '';
  }

}
