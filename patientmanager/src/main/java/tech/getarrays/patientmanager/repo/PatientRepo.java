package tech.getarrays.patientmanager.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.getarrays.patientmanager.model.Patient;

import java.util.Optional;

public interface PatientRepo extends JpaRepository<Patient, Long> {
    void deletePatientById(Long id);


    Optional<Patient> findPatientById(Long id);
}
