//package tech.getarrays.patientmanager.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/complaints")
//public class ComplaintController {
//    @Autowired
//    private ComplaintService complaintService;
//
//    @PostMapping
//    public ResponseEntity<?> logComplaint(@RequestBody ComplaintDTO complaintDTO, @AuthenticationPrincipal User user) {
//        complaintService.createComplaint(user.getId(), complaintDTO);
//        return ResponseEntity.ok("Complaint logged successfully");
//    }
//
//    @GetMapping
//    public ResponseEntity<List<Complaint>> getComplaints(@AuthenticationPrincipal User user) {
//        return ResponseEntity.ok(complaintService.getComplaintsByUser(user.getId()));
//    }
//}
