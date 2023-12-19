package com.example.demo.models;

public class Usuario {
	// Atributos
	private int id;
    private String nombre;
    private String password;

    // Constructor
    public Usuario(String nombre, String password, int id) {
        this.nombre = nombre;
        this.password = password;
        this.id = id;
    }

    // Métodos de acceso
    public String getNombre() {
        return nombre;
    }
    
    public String getPassword() {
        return password;
    }
    
    public int getId()
    {
    	
    	return id;
    	
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setContraseña(String password) {
        this.password = password;
    }
    
    public void setId(int id)
    {
    	this.id = id;
    }
}
