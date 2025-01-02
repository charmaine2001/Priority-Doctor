package tech.getarrays.patientmanager.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import tech.getarrays.patientmanager.exception.UserNotFoundException;
import tech.getarrays.patientmanager.model.LoginDTO;
import tech.getarrays.patientmanager.model.Patient;
import tech.getarrays.patientmanager.model.UserDTO;
import tech.getarrays.patientmanager.repo.PatientRepo;

import java.util.List;
import java.util.UUID;

@Service
public class PatientService {
    private final PatientRepo patientRepo;

    @Autowired
    PatientService(PatientRepo patientRepo) {
        this.patientRepo = patientRepo;
    }

    public Patient addPatient(Patient patient) {
        patient.setPatientCode(UUID.randomUUID().toString());
        return patientRepo.save(patient);
    }

    public List<Patient> findAllPatients() {
        return patientRepo.findAll();
    }

    public Patient updatePatient(Patient patient) {
        return patientRepo.save(patient);
    }

    public Patient findPatientById(Long id) {
        return patientRepo.findPatientById(id)
                .orElseThrow(()-> new UserNotFoundException("User by id" +id + "was not found"));
    }

    public void deletePatient(long id) {
        patientRepo.deletePatientById(id);
    }

    public void register(UserDTO userDto) {
        // Your registration logic here
        // For example, saving the user to the database
    }

    public String authenticate(LoginDTO loginDto) {
        // Your authentication logic here
        // For example, checking username and password
        return "token"; // Replace with actual token generation logic
    }

}


