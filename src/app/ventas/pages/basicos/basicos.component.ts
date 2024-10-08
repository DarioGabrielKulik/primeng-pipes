import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrl: './basicos.component.css'
})
export class BasicosComponent {
nombreLower:string ='dario'
nombreUpper:string ='DARIO'
nombreCompleto:string ='dArIo'

fecha:Date = new Date();

}
