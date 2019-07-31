import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {FooterComponent} from './components/footer/footer.component';
// import { ReminderComponent } from './pages/reminder/reminder.component';
import { Screen1Component } from './pages/screen1/screen1.component';
import { Screen2Component } from './pages/screen2/screen2.component';
import { Screen3Component } from './pages/screen3/screen3.component';

const routes: Routes = [
  {
    path: '',
    component: Screen3Component,
    data: { title: 'reminder' }
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
