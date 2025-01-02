import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getPatients(): Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.apiServerUrl}/patient/all`)
  } 

  public addPatient(patient:Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.apiServerUrl}/patient/add,`,patient)
  } 

  public updatePatients(patient: Patient): Observable<Patient>{
    return this.http.put<Patient>(`${this.apiServerUrl}/patient/update`, patient)
  } 

  public deletePatients(patientId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/patient/delete/${patientId}`);
  }
  
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/auth/login`, { username, password });
  }

  // register(user: any): Observable<any> {
  //   return this.http.post(`${this.apiServerUrl}/auth/register`, user);
  // }

  getCurrentUser(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/auth/user`);
  }

  register(userData: { username: string; email: string; password: string }) {
    return this.http.post('/api/register', userData);
  }
  
  verifyCode(code: string) {
    return this.http.post('/api/verify', { code });
  }


}
