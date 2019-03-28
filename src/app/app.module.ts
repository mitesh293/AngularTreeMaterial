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
import {ButtonModule} from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';
import { DisplayoptionModule } from './displayoption/displayoption.module';
import {PanelModule} from 'primeng/panel';
import {CheckboxModule} from 'primeng/checkbox';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {MatExpansionModule} from '@angular/material/expansion';
import { DataTableModule } from 'primeng/datatable';
import { PaginatorModule, MessageService } from 'primeng/primeng';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DialogModule,
    TableModule,
    MatExpansionModule,
    InputTextModule,
    RadioButtonModule,
    CheckboxModule,
    FormsModule,
    BrowserModule,
    PanelModule,
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
    MatFormFieldModule,
    ButtonModule,
    FieldsetModule,
    DisplayoptionModule,
    PaginatorModule,
    DataTableModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
