import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { FieldsetModule } from 'primeng/fieldset';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    BadgeModule, 
    AvatarModule, 
    InputTextModule, 
    RippleModule,
    FieldsetModule,
    ToolbarModule,
    TableModule 
  ]
})
export class PrimeNgModule { }
