package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

import com.example.demo.emailSender;

@SpringBootApplication
public class BackendApplication {
    
    @Autowired
    private emailSender senderService;

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }
    
    @EventListener(ApplicationReadyEvent.class)
    public void sendMail() {
        senderService.sendEmail("f20200052@hyderabad.bits-pilani.ac.in");
    }
}