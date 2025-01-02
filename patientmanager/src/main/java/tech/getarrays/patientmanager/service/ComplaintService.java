//package tech.getarrays.patientmanager.service;
//
//public class ComplaintService {
//    private final ComplaintRepository complaintRepository;
//
//    @Autowired
//    public ComplaintService(ComplaintRepository complaintRepository) {
//        this.complaintRepository = complaintRepository;
//    }
//
//    // Method to create a complaint
//    public void createComplaint(Long userId, ComplaintDTO complaintDTO) {
//        Complaint complaint = new Complaint(); // Create a new Complaint entity
//        complaint.setUserId(userId); // Set the user ID
//        complaint.setDescription(complaintDTO.getDescription()); // Example property
//        complaint.setStatus("OPEN"); // Example status, adjust as necessary
//        // Save the complaint to the repository
//        complaintRepository.save(complaint);
//    }
//
//    // Method to retrieve complaints by user
//    public List<Complaint> getComplaintsByUser(Long userId) {
//        return complaintRepository.findByUserId(userId); // Adjust based on your repository method
//    }
//}
