package com.example.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class SessionController {
/*
	 
    @GetMapping("/connect")
    public String connect(HttpSession session) {
    	try {
            Integer connectedPlayers = (Integer) session.getAttribute("connectedPlayers");
            if (connectedPlayers == null) {
                connectedPlayers = 0;
            }
            connectedPlayers++;
            session.setAttribute("connectedPlayers", connectedPlayers);
            return "Connected! Total players: " + connectedPlayers;
        } catch (Exception e) {
            // Log the exception for debugging
            e.printStackTrace();
            return "Error occurred during connection.";
        }
    }

    @GetMapping("/disconnect")
    public String disconnect(HttpSession session) {
        int connectedPlayers = (int) session.getAttribute("connectedPlayers");
        connectedPlayers--;
        session.setAttribute("connectedPlayers", connectedPlayers);
        return "Disconnected! Total players: " + connectedPlayers;
    }
    
    */
}

