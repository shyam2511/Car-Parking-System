package com.example.demo;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class emailSender {
    
    @Autowired
    private JavaMailSender mailSender;
    
    public void sendEmail(String toEmail) {
        
        SimpleMailMessage message = new SimpleMailMessage();
        Random rnd = new Random();
        int rand = rnd.nextInt(999999);
        String body = "Your OTP for Registration on CarParkingSolutions is " + String.valueOf(rand);
        message.setFrom("prajwalnayak007@gmail.com");
        message.setTo(toEmail);
        message.setText(body);
        message.setSubject("One time password for registration");
        
        mailSender.send(message);
        
        System.out.println("Mail Sent Successfully!");
    }
}
