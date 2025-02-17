import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  items: MenuItem[] | undefined;
    ngOnInit() {
        this.items = [
           {
            label:'Pipe de Angular',
            icon: 'pi pi-desktop',
            items: [
              {
                label: 'Textos y Fechas',
                icon: 'pi pi-align-left',
                routerLink: '/'
              },
              {
                label: 'Numeros',
                icon: 'pi pi-dollar',
                routerLink: 'numeros'
              },
              {
                label: 'No comunes',
                icon: 'pi pi-globe',
                routerLink: 'no-comunes'
              }
            ]
           },
           {
            label:'Pipes Personalizados',
            icon:'pi pi-cog',
            routerLink:'ordenar'
           }
        ]
    }
}

