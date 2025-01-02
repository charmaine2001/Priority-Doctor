package tech.getarrays.patientmanager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import tech.getarrays.patientmanager.model.AuthResponse;
import tech.getarrays.patientmanager.model.LoginDTO;
import tech.getarrays.patientmanager.model.UserDTO;
import tech.getarrays.patientmanager.service.PatientService;


@RestController
public class AuthController {
    @Autowired
    private PatientService patientService;


    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserDTO userDTO) {
        patientService.register(userDTO);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginDTO loginDTO) {
        String token = patientService.authenticate(loginDTO);
        return ResponseEntity.ok(new AuthResponse(token));
    }
}
