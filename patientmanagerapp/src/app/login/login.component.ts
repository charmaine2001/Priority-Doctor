import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// export class LoginComponent {
//   username = '';
//   password = '';
  

//   constructor(private authService: PatientService, private router: Router) {}
  
//   login() {
//     this.authService.login(this.username, this.password).subscribe(
//       (response: any) => {
//         localStorage.setItem('token', response.token); // Store the JWT token
//         this.router.navigate(['/dashboard']); // Redirect to dashboard or home
//       },
//       (error) => {
//         console.error('Login failed', error);
//         alert('Invalid username or password');
//       }
//     );
//   }
// }
// changes 
export class LoginComponent {
  loginForm: FormGroup;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: PatientService, 
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this.authService.login(username, password).subscribe(
        (response: any) => {
          
          localStorage.setItem('token', response.token);

          
          this.router.navigate(['/dashboard']);
          this.error = null; 
        },
        (error) => {
          console.error('Login failed', error);

          
          this.error = 'Invalid username or password';
        }
      );
    } else {
      
      this.error = 'Please fill in all required fields.';
    }
  }

  onCancel() {
   
    this.router.navigate(['/home']);
  }
}
