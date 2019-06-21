import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoteFormComponent } from './vote-form/vote-form.component';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';
import { PresetButtonsComponent } from './preset-buttons/preset-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    VoteFormComponent,
    ResultComponent,
    PresetButtonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
