import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
// export class RegisterComponent {
//   user = { username: '', password: '', email: '' };

//   constructor(private authService: PatientService, private router: Router) {}

//   register() {
//     this.authService.register(this.user).subscribe(
//       () => {
//         alert('Registration successful!');
//         this.router.navigate(['/login']);
//       },
//       (error) => {
//         console.error('Registration failed', error);
//         alert('Registration failed. Please try again.');
//       }
//     );
//   }

// }

export class RegisterComponent {
  registerForm: FormGroup;
  verificationForm: FormGroup;
  isRegistered = false;
  isVerified = false;
  showVerificationForm = false;
  error: string | null = null;
  successMessage: string | null = null;

  constructor(private fb: FormBuilder, private patientService: PatientService, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.verificationForm = this.fb.group({
      code: ['', Validators.required],
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      const { username, email, password } = this.registerForm.value;
      this.patientService.register({ username, email, password }).subscribe(
        () => {
          this.isRegistered = true;
          this.showVerificationForm = true;
          this.successMessage = 'A verification code has been sent to your email.';
          this.error = null;
        },
        (error) => {
          console.error('Registration failed:', error);
          this.error = 'Registration failed. Please try again.';
        }
      );
    }
  }

  onVerify() {
    if (this.verificationForm.valid) {
      const { code } = this.verificationForm.value;
      this.patientService.verifyCode(code).subscribe(
        () => {
          this.isVerified = true;
          this.successMessage = 'Verification successful! You can now log in.';
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Verification failed:', error);
          this.error = 'Invalid verification code. Please try again.';
        }
      );
    }
  }
}
