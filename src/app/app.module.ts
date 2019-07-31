import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReminderComponent } from './pages/reminder/reminder.component';
import { Screen1Component } from './pages/screen1/screen1.component';
import { Screen2Component } from './pages/screen2/screen2.component';
import { Screen3Component } from './pages/screen3/screen3.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ReminderComponent,
    Screen1Component,
    Screen2Component,
    Screen3Component,
    ConfirmModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
  ],
  entryComponents: [ConfirmModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
