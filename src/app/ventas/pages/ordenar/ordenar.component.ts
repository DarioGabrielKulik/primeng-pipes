import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrl: './ordenar.component.css'
})
export class OrdenarComponent {
// nosotros:string = 'hola mundo';
btn:boolean = true;
orderPor:string = 'sin valor'
heroes:Heroe[] = [
  { 
  nombre:'Superman',
  vuela:true,
  color:Color.azul
  },
  { 
    nombre:'Batman',
    vuela:false,
    color:Color.negro
    },
    { 
      nombre:'Robin',
      vuela:false,
      color:Color.verde
      },
      { 
        nombre:'Derevil',
        vuela:false,
        color:Color.rojo
      }
      ,
      { 
        nombre:'Linterna Verde',
        vuela:true,
        color:Color.verde
      }
]
constructor() {}

mayusculas(){
this.btn = !this.btn;
}

ordenarPor(valor:string){
  this.orderPor = valor
}


items: MenuItem[] | undefined;

ngOnInit() {
    this.items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        }
    ];
}


   

  
}
