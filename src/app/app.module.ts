import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ExchangeRateComponent } from './modules/exchange-rates/exchange-rate/exchange-rate.component';
import { ExchangeRatesListComponent } from './modules/exchange-rates/exchange-rates-list/exchange-rates-list.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { TranslationModule } from './modules/translation/translation.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './modules/store/reducers';
import { RatesEffect } from './modules/store/effects/rate.effects';
import { NoValuePipe } from './core/pipes/no-value.pipe';
import { HttpConfigInterceptor } from './core/interceptors/http-config.interceptor';
import { ModalComponent } from './shared/components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRateComponent,
    ExchangeRatesListComponent,
    HeaderComponent,
    DropdownComponent,
    LoaderComponent,
    NoValuePipe,
    ModalComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    TranslationModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([RatesEffect]),
  ],
  exports: [TranslationModule],
  providers: [
    [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpConfigInterceptor,
        multi: true,
      },
    ],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
