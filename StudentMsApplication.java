package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StudentMsApplication {

	public static void main(String[] args) {
		System.out.println("Welcome to Student Management System");
		SpringApplication.run(StudentMsApplication.class, args);
	}

}
