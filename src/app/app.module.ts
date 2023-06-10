import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepetirDirective } from './repetir.directive';
import { SiDirective } from './si.directive';

@NgModule({
  declarations: [
    AppComponent,
    RepetirDirective,
    SiDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
