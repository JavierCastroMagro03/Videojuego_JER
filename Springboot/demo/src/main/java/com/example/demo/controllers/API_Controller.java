package com.example.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class API_Controller {

    @GetMapping("/saludo")
    public String saludar() {
        return "¡Hola, mundo!";
    }

    @PostMapping("/ejemplo")
    public String ejemploPost(@RequestBody String mensaje) {
        return "Mensaje recibido: " + mensaje;
    }
}