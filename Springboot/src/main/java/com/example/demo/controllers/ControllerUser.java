package com.example.demo.controllers;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.demo.models.Usuario;

@RestController
public class ControllerUser {

    private UsersService usersService;

    @Autowired
    public ControllerUser(UsersService usersService)
    {

        this.usersService = usersService;

    }

    @GetMapping("/usuario")
    public Usuario getUsuario(@RequestParam String nombre)
    {

        Optional usuario = usersService.getUsuario(nombre);
        
        if(usuario.isPresent())
        {
            return (Usuario) usuario.get();
        }
        
        return null;

    }

    @PostMapping("/crearUsuario")
    public Usuario createUser(@RequestBody Usuario usuario)
    {
        Usuario usuarioGuardado = usersService.save(usuario);

        return usuarioGuardado;
    }

    @DeleteMapping("/borrarUsuario")
    public Usuario deleteUsuario(@RequestParam String nombre)
    {
        Optional usuarioBorrado = usersService.deleteUsuario(nombre);
        
        if(usuarioBorrado.isPresent())
        {
            return (Usuario) usuarioBorrado.get();
        }
        
        return null;
    }
    
    @PutMapping("/actualizarUsuario")
    public Usuario updateUsuario(@RequestBody Usuario usuario)
    {
    	Usuario usuarioActualizado = usersService.updateUser(usuario);
    	
    	return usuarioActualizado;
    }

}
