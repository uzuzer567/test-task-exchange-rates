import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ExchangeRateComponent } from './modules/exchange-rates/exchange-rate/exchange-rate.component';
import { ExchangeRatesListComponent } from './modules/exchange-rates/exchange-rates-list/exchange-rates-list.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './modules/store/reducers';
import { RatesEffect } from './modules/store/effects/rate.effects';
import { NoValuePipe } from './core/pipes/no-value.pipe';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRateComponent,
    ExchangeRatesListComponent,
    HeaderComponent,
    DropdownComponent,
    LoaderComponent,
    NoValuePipe,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([RatesEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
