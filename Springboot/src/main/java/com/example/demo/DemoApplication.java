package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.demo.controllers.UsersService;
import com.example.demo.controllers.SessionController;

@SpringBootApplication
public class DemoApplication {

	@Bean
	public UsersService usersService()
	{
		return new UsersService(10);
	}
	
	
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
