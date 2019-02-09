import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { WorkingHoursComponent } from './working-hours/working-hours.component';
import { LeaveComponent } from './leave/leave.component';
import { ProfileComponent } from './profile/profile.component';
import { SalaryComponent } from './salary/salary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AttendanceComponent,
    WorkingHoursComponent,
    LeaveComponent,
    ProfileComponent,
    SalaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
