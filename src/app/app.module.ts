import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoOneComponent } from './demo-one.component';
import { DemoTwoComponent } from './demo-two.component';
import { NotNullPipe } from './not-null.pipe';

@NgModule({
  declarations: [AppComponent, DemoOneComponent, DemoTwoComponent, NotNullPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
