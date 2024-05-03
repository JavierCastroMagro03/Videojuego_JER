package com.example.demo.models;

public class Usuario {
	// Atributos
	private int id;
    private String nombre;
    private String password;
    private Boolean existe;

    // Constructor
    public Usuario(String nombre, String password, int id, Boolean existe) {
        this.nombre = nombre;
        this.password = password;
        this.existe = false;
        this.id = id;
    }

    // Métodos de acceso
    public String getNombre() {
        return nombre;
    }
    
    public String getPassword() {
        return password;
    }
    
    public Boolean getExiste() {
        return existe;
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
    
    public void setExiste(Boolean existe) {
        this.existe = existe;
    }
    
    public void setId(int id)
    {
    	this.id = id;
    }
}
