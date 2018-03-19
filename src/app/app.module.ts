import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {RegistrationFormComponent}  from './registration-form/registration-form-component';


@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
