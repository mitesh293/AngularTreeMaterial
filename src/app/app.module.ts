import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule, MatIconModule, MatButtonModule, MatChipsModule, MatLabel, MatFormFieldModule } from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardModule} from 'primeng/card';
import {AccordionModule} from 'primeng/accordion';
import {ChipsModule} from 'primeng/chips';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTreeModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    CardModule,
    ChipsModule,
    AccordionModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
