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
	private int nUsers;
	
	public UsersService(int numUsers)
	{
		userList = new ArrayList<>();
		nUsers = 0;
		
		
		
	}


	public Usuario getUsuario(String n) 
	{
		
		Optional optional = Optional.empty();
		
		
		for(int i = 0; i < userList.size(); i++){
			
			if(n.equals(userList.get(i).getNombre()))
			{
			
				userList.get(i).setId(i);
				
				
				Usuario u = userList.get(i);
				//optional = Optional.of(usuario);
				
				return u;
				
			}
			
		}
		
		
		return null;

	}
	
	public Optional<Usuario> getUsuarioViaID(int i) 
	{

		if(userList.size() >= i) {
			
			return Optional.of(userList.get(i));
		}
		
		return null;

	}
	
	public List<Usuario> getUserList(){
		
		//Actualizo las IDS
for(int i = 0; i < userList.size(); i++){
					
				userList.get(i).setId(i);
				
}
		

		return userList;
	}
	
	public int getConnectedUsers() {
		
		return nUsers;
	}
	
public int connectUser() {
		nUsers++;
		
		return nUsers;
	}

public int disconnectUser() {
	nUsers--;
	return nUsers;
}
	
	public Usuario save(Usuario usuario)
	{
		userList.add(usuario);
		
		return usuario;
		
	}

	public Optional<Usuario> deleteUsuario(int id) 
	{
		
		Optional optional = Optional.empty();
		
		
		if(userList.size() >= id) {

			optional = Optional.of(userList.get(id));
			
			userList.remove(id);
			return optional;
			
		}
		
return null;
	}
	
	public Usuario updateUser(Usuario usuario) {
		
		
		userList.get(usuario.getId()-1).setNombre(usuario.getNombre());
		userList.get(usuario.getId()-1).setContraseña(usuario.getPassword());
		
		
		return usuario;
	}
	
public String actualizarNombreUsuario(int id, String name) {
		
		userList.get(id).setNombre(name);
		
		
		return name;
	}

public String actualizarPassword(int id, String password) {
	
	userList.get(id).setContraseña(password);
	
	
	return password;
}
	
}