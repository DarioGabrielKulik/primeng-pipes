import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrl: './no-comunes.component.css'
})
export class NoComunesComponent {
nombre:string='fernando';
genero:string = 'masculino';

invitacionMapa={
  'masculino':'invitarlo',
  'femenino':'invitarla'
}

clientes:string[]=['Dario','Mabel','Santiago','Dylan','Sabrina','Kevin']
clientesMapa = {
  '=0':'no tenemos ningun cliente esperando',
  '=1':'tenemos un cliente esperando',
  '=2':'tenemos dos clientes esperando',
  'other':'tenemos # clientes esperando'
}

cambiarCliente(){
  this.nombre = 'Sabrina'
  this.genero = 'femenino'
}
borrarCliente(){
  this.clientes = this.clientes.slice(1)
}




persona = {
  nombre: 'fernando',
  edad: 35,
  direccion: 'argentina'
}

heroes=[
  {
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre: 'Robin',
    vuela: false
  },
  {
    nombre: 'Acuaman',
    vuela: false
  }
]

miOb = interval(1000)


valorPromesa = new Promise((resolver,reject)=> {
  setTimeout(()=> {
    resolver('tenemos una promesa')
  },3500)
})
}
