import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangeRateComponent } from './modules/exchange-rates/exchange-rate/exchange-rate.component';
import { ExchangeRatesListComponent } from './modules/exchange-rates/exchange-rates-list/exchange-rates-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRateComponent,
    ExchangeRatesListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
