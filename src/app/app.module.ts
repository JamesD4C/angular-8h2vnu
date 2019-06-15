import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExperienceComponent } from '../experience/experience.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ExperienceComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
