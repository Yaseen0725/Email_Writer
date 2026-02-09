package com.email.emailWriter;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@AllArgsConstructor
@CrossOrigin(origins = "*")
@Slf4j
public class EmailGeneratorController {

    private final EmailGeneratorService emailGeneratorService;

    @PostMapping("/generate")
    public ResponseEntity<String> generateEmail(@RequestBody
                                                    EmailRequest emailRequest){
        log.info("Email Request Received");
       String response = emailGeneratorService.generateEmailReply(emailRequest);
       return ResponseEntity.ok(response);
    }
}