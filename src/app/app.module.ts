import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ColorBoxComponent } from './color-box/color-box.component';
import { ColorButtonComponent } from './color-button/color-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ColorBoxComponent,
    ColorButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
