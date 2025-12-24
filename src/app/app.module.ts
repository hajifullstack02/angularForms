import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateApprochComponent } from './template-approch/template-approch.component';
import { ReactiveApprochComponent } from './reactive-approch/reactive-approch.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { LongTextPipe } from './long-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TemplateApprochComponent,
    ReactiveApprochComponent,
    PipeDemoComponent,
    LongTextPipe,
   
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
