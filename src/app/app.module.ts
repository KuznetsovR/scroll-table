import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoneyPipe } from './pipes/money.pipe';
import {CommonModule} from "@angular/common";
import { MoneyDirective } from './directives/money.directive';
import { MoneyTableComponent } from './money-table/money-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MoneyPipe,
    MoneyDirective,
    MoneyTableComponent
  ],
  imports: [
    BrowserModule, CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
