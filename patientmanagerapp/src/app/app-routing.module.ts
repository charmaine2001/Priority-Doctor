import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; 
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PatientInforComponent } from './patient_infor/patient_infor.component';




// importing new components into apparoutingmodule


// const routes: Routes = [
  
//   {path: 'home' , component: HomeComponent},
//   {path: 'login' , component: LoginComponent},
//   {path: 'profile', component:PatientInforComponent},
//   {path:'', redirectTo: '/home', pathMatch: 'full'},
//   {path: 'register', component: RegisterComponent}
  
// ];

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'patient_infor', component: PatientInforComponent },
  // Default route shows navigation in AppComponent without redirecting to HomeComponent
  // { path: '', pathMatch: 'full', redirectTo: '' },
  // { path: '**', redirectTo: '' }, // Redirect unknown routes to root
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }