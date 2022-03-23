import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./_helpers/auth.guard";

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent, },
  {
    path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard],
    children: [
      { path: '', component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
