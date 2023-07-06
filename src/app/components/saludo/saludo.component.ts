import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  @Input()  nombre: string = "anonimo";

  constructor(){ }

  ngOnInit(): void {
    //instrucciones previas a la renderizacion del componente
    console.log("ngOnInit del componente saludo");
  }
  /*
  ejemplo para gestionar un evento de tipo click
  */
    alertaSaludo(): void{
        alert(`hola, ${this.nombre}, este es un mensaje de alerta desde un clik de boton`);


    }
}
