// import { Component, OnInit } from '@angular/core';
// import { Patient } from './patient';
// import { PatientService } from './patient.service';
// import { HttpErrorResponse } from '@angular/common/http';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit{
//   public patients: Patient[] = [];
//   editPatient: Patient | null = null;
  

//   constructor(private patientService: PatientService){}

//   ngOnInit() {
//     this.getPatients();
//   }

//   public getPatients(): void{
//     this.patientService.getPatients().subscribe(
//       (response: Patient[]) => {
//         this.patients = response;
//       },
//       (error: HttpErrorResponse) => {
//         alert(error.message);
//       }
//     );
//   }

// this was a solution to the object might be null error that i kept encountering
  // public onAddPatient(addForm: NgForm): void {
    // Get the element by ID
    // const addPatientForm = document.getElementById('add-patient-form');
// Use non-null assertion operator to suppress null error
    // addPatientForm!.click(); // This assumes you are sure the element exists
// Attempt to add the patient
//     this.patientService.addPatient(addForm.value).subscribe(
//         (response: Patient) => {
//             console.log(response);
//             this.getPatients();
//             addForm.reset();
//         },
//         (error: HttpErrorResponse) => {
//             alert(error.message);
//             addForm.reset();
//         }
//     );
// }


  // public onUpdatePatients(patient: Patient): void {
  //   this.patientService.updatePatients(patient).subscribe(
  //     (response: Patient) => {
  //       console.log(response);
  //       this.getPatients();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  // public onDeletePatient(patientId: number): void {
  //   this.patientService.deletePatients(patientId).subscribe(
  //     (response: void) => {
  //       console.log(response);
  //       this.getPatients();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  // public searchPatient(key: string): void {
  //   console.log(key);
  //   const results: Patient[] = [];
  //   for (const patient of this.patients) {
  //     if (patient.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     || patient.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     || patient.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     || patient.address.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
  //       results.push(patient);
  //     }
  //   }
  //   this.patients = results;
  //   if (results.length === 0 || !key) {
  //     this.getPatients();
  //   }
  // }

  // edit(patient: Patient) {
  //   this.editPatient = patient;
  // }


// modified onopenmodal so taht it also accepts null values
  // public onOpenModal(patient: Patient| null, mode: string): void {
  //   const container = document.getElementById('main-container');
  //   const button = document.createElement('button');
  //   button.type = 'button';
  //   button.style.display = 'none';
  //   button.setAttribute('data-toggle', 'modal');
  //   if (mode === 'add') {
  //     button.setAttribute('data-target', '#addPatientModal');
  //   }
  //   if (mode === 'edit') {
  //     button.setAttribute('data-target', '#updatePatientModal');
  //   }
  //   if (mode === 'delete') {
  //     if(patient){
        //check if patient is not null
    //     this.onDeletePatient(patient.id);
    //     button.setAttribute('data-target', '#deletePatientModal');
    //   } else {
    //     console.error('Patient is null, cannot delete');
    //   }
      
    // }
    // these are modificastions i put up to solve the container might be empty error
//     if (container) { // Ensure container is not null
//       container.appendChild(button);
//       button.click();
//   }
//   }



// }














import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'patientmanagerapp';

}
