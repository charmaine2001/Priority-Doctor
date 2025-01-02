package tech.getarrays.patientmanager.model;

public class UserDTO {
//    @NotBlank
    private String username;
//    @Size(min = 8, message = "Password must be at least 8 characters long")
    private String password;

    // Getters and setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
