package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

import com.example.demo.controllers.UsersService;

@SpringBootApplication
@EnableWebSocket 
public class DemoApplication implements WebSocketConfigurer {
	
	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		registry.addHandler(handler(), "/user").setAllowedOrigins("*");
		
	}
	
	@Bean
	public WebsocketHandler handler()
	{
		return new WebsocketHandler();
	}
	
	@Bean
	public UsersService usersService()
	{
		return new UsersService(10);
	}
	
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}



}
