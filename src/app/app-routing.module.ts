import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { WorkingHoursComponent } from './working-hours/working-hours.component';
import { LeaveComponent } from './leave/leave.component';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SalaryComponent } from './salary/salary.component';
const routes: Routes = [
  {path:'attendance',component:AttendanceComponent},
  {path:'salary',component:SalaryComponent},
  {path:'leave',component:LeaveComponent},
  {path:'',component:HomeComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
