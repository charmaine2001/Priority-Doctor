package tech.getarrays.patientmanager.model;

import jakarta.persistence.*;

import java.io.Serializable;
@Entity
public class Patient implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String name;
    private String email;
    private String phone;
    private String gender;
    private String address;
    @Column(nullable = false, updatable = false)
    private String patientCode;

    public Patient() {}

    public Patient(String name, String email, String phone, String gender, String address, String patientCode) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
        this.address = address;
        this.patientCode = patientCode;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getPatientCode() {
        return patientCode;
    }
    public void setPatientCode(String patientCode) {
        this.patientCode = patientCode;
    }

    @Override
    public String toString() {
        return "Patient{" +
                "id" + id +
                ", name='" + '\'' +
                ",email='" + '\'' +
                ",phone='"+ '\'' +
                ",gender='"+ '\'' +
                ",address='"+ '\'' +
                '}';

    }
}
