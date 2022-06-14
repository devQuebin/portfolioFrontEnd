import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(private datosportfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosportfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
    });
  }

}
