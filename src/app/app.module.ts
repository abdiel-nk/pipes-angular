import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UperrcasePipe } from './pipes/uperrcase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UperrcasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
