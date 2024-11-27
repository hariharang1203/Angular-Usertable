import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FramecomponentComponent } from './framecomponent/framecomponent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventcomponentComponent } from './eventcomponent/eventcomponent.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    FramecomponentComponent,
    EventcomponentComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
