package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;

@RestController
@RequestMapping("/")
public class EmployeeController {
    
    @Autowired
    EmployeeRepository employeeRepository;
    
    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }
    
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
    	return employeeRepository.save(employee);
    }

    @GetMapping ("/register")
    public Employee getRegistered(@RequestParam String username, @RequestParam String password, @RequestParam String confirmpassword, @RequestParam String emailid, @RequestParam String mobilenumber, @RequestParam String carreg) {
        String s = "Username: " + username + "\n Email :" + emailid + "\n Mobile :" +mobilenumber;
        Employee e = new Employee("naam nahi pata", "ditto", username, password,"bits", emailid,mobilenumber,carreg);
        return e;
    }
}