import { ApplicationModule, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PatientService } from './patient.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { PatientInforComponent } from './patient_infor/patient_infor.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// add routes
// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
// ];

const routes: Routes = [
  // { path: '', component: AppComponent }, // Explicitly render AppComponent at root path
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'patient_infor', component: PatientInforComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PatientInforComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),

  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
