import { NgModule } from '@angular/core';
import { EsnMenuComponent } from './esn-menu.component';
import { BrowserModule } from '@angular/platform-browser';
//import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    EsnMenuComponent
  ], 
  imports: [
    BrowserModule,

  ],
  exports: [
    EsnMenuComponent
  ]
})
export class EsnMenuModule { }
