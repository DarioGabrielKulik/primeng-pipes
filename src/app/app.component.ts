import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 nombre:string='DariO gABRIEL Kilik'

 cambiarMayuscula(){
  console.log(this.nombre)
 }

 cambiarMinuscula(){}

}
