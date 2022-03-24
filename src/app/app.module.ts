import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AgmCoreModule } from "@agm/core";
import { AppComponent } from './app.component';

const apiKey = "";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: apiKey,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
