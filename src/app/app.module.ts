import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './module/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Cambia a español
import miEspañol from '@angular/common/locales/es-HN'
import { registerLocaleData } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationDriver } from '@angular/animations/browser';
import { MayusculasPipe } from './ventas/pipes/mayusculas.pipe';
registerLocaleData(miEspañol)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule,
    SharedModule,
    VentasModule,
    NoopAnimationsModule
   
   
  ],
  providers: [
  
    {provide:LOCALE_ID, useValue:'es-HN'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
