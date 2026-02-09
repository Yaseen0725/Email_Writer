package com.email.emailWriter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmailWriterApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmailWriterApplication.class, args);
		System.out.println("Email Writer Application Started");
	}
}
