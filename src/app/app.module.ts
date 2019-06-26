import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoteFormComponent } from './vote-form/vote-form.component';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';
import { PresetButtonsComponent } from './preset-buttons/preset-buttons.component';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import localeHU from '@angular/common/locales/hu';

registerLocaleData(localeHU, 'hu');

@NgModule({
  declarations: [
    AppComponent,
    VoteFormComponent,
    ResultComponent,
    PresetButtonsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'hu-HU' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
