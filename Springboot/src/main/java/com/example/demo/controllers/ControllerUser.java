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

import java.io.IOException;
import java.util.List;
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

        Usuario usuario = usersService.getUsuario(nombre);

        if(usuario != null)
        {
            return usuario;
        }

        return null;

    }
    
    @GetMapping("/usuarioConID")
    public Usuario getUsuarioViaId(@RequestParam int id)
    {

        Optional usuario = usersService.getUsuarioViaID(id);

        if(usuario.isPresent())
        {
            return (Usuario) usuario.get();
        }

        return null;

    }
    
    @GetMapping("/userList")
    public List<Usuario> getUserList()
    {

        return usersService.getUserList();

    }
    
    @GetMapping("/getOnlineUsers")
    public int getNumber()
    {

        int n = usersService.getConnectedUsers();
        

            return n;


    }
    
    @GetMapping("/disconnectUsers")
    public int minusUser()
    {

        int n = usersService.disconnectUser();
        

            return n;


    }
    
    @GetMapping("/connectUsers")
    public int addUser()
    {

        int n = usersService.connectUser();
        

            return n;


    }

    @PostMapping("/crearUsuario")
    public Usuario createUser(@RequestBody Usuario usuario) throws IOException
    {
        Usuario usuarioGuardado = usersService.save(usuario);
        
        usersService.saveTXT(usuario);
        
        usersService.readTXT(usuario);

        return usuarioGuardado;
    }

    @DeleteMapping("/borrarUsuario")
    public Usuario deleteUsuario(@RequestParam int id)
    {
        Optional<Usuario> usuarioBorrado = usersService.deleteUsuario(id);

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

    @PutMapping("/actualizarNombreUsuario")
    public String actualizarNombreUsuario(@RequestParam int id, @RequestParam String name)
    {

        String nuevoNombre;

        nuevoNombre = usersService.actualizarNombreUsuario(id, name);

        return nuevoNombre;

    }

    @PutMapping("/actualizarPassword")
    public String actualizarPassword(@RequestParam int id, @RequestParam String password)
    {

        String contra;

        System.out.print("HAsta aqui bien");
        contra = usersService.actualizarPassword(id, password);

        return contra;

    }


}
