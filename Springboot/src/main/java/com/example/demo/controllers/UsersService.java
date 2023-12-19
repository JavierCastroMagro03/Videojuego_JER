package com.example.demo.controllers;

import java.io.Console;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.models.Usuario;

@Service
public class UsersService
{
	
	private List<Usuario> userList;
	
	public UsersService(int numUsers)
	{
		userList = new ArrayList<>();
		
		
		
	}


	public Optional<Usuario> getUsuario(String n) 
	{
		
		Optional optional = Optional.empty();
		
		for(Usuario usuario: userList)
		{
			if(n.equals(usuario.getNombre()))
			{
				
				optional = Optional.of(usuario);
				
				return optional;
				
			}
		}
		
		
		return optional;

	}
	
	public Usuario save(Usuario usuario)
	{
		userList.add(usuario);
		
		return usuario;
		
	}

	public Optional<Usuario> deleteUsuario(String nombre) 
	{
		
		Optional optional = Optional.empty();
		
		for(Usuario usuario: userList)
		{
			if(nombre.equals(usuario.getNombre()))
			{
				
				optional = Optional.of(usuario);
				
				userList.remove(usuario);
				
				return optional;
				
			}
		}
		
		return optional;

	}
	
	public Usuario updateUser(Usuario usuario) {
		
		
		userList.get(usuario.getId()-1).setNombre(usuario.getNombre());
		userList.get(usuario.getId()-1).setContraseña(usuario.getPassword());
		
		
		return usuario;
	}
	
}