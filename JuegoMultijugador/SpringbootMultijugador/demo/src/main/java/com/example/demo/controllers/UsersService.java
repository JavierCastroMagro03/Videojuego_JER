package com.example.demo.controllers;

import java.io.BufferedReader;
import java.io.Console;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
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
	
	private String chatLog;
	
	public UsersService(int numUsers)
	{
		userList = new ArrayList<>();
		nUsers = 0;
		
		chatLog = "";
		
	}


	public Usuario getUsuario(String n, String p) 
	{
		
		Optional optional = Optional.empty();
		
		
		for(int i = 0; i < userList.size(); i++){
			
			if(n.equals(userList.get(i).getNombre()) && p.equals(userList.get(i).getPassword()))
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
	
	public int setConnectedUsers(int usuariosConectados) {
		nUsers = usuariosConectados;
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

	public Optional<Usuario> deleteUsuario(int id) throws IOException 
	{
		
		Optional optional = Optional.empty();
		
		
		if(userList.size() >= id) {

			optional = Optional.of(userList.get(id));
			
			userList.remove(id);
			
			saveListToTXT();
			
			return optional;
			
		}

		
return null;
	}
	
	public Usuario updateUser(Usuario usuario) {
		
		
		userList.get(usuario.getId()-1).setNombre(usuario.getNombre());
		userList.get(usuario.getId()-1).setContraseña(usuario.getPassword());
		
		
		return usuario;
	}
	
public String actualizarNombreUsuario(int id, String name) throws IOException {
		
		userList.get(id).setNombre(name);
		
		saveListToTXT();
		
		return name;
	}

public String actualizarPassword(int id, String password) throws IOException {
	
	userList.get(id).setContraseña(password);

	saveListToTXT();
	
	return password;
}
	
	public void saveTXT (Usuario usuario) throws IOException
    {

        File myFile = new File("usuariosGuardados.txt");
        if (myFile.createNewFile())
        {
            System.out.println("File created:" + myFile.getName());
        }

        try(FileWriter writer = new FileWriter("usuariosGuardados.txt", true))
        {
            writer.write("Nombre: " + usuario.getNombre() + "; Contraseña: " + usuario.getPassword() + "\n");
        }
        catch (IOException e)
        {
            e.printStackTrace();
        }

    }
	
	public void saveListToTXT () throws IOException
    {

        File myFile = new File("usuariosGuardados.txt");
       
        if (myFile.createNewFile())
        {
            System.out.println("File created:" + myFile.getName());
        }
        else {
        	
        	
        }
        myFile.delete();
    	myFile.createNewFile();

        try(FileWriter writer = new FileWriter("usuariosGuardados.txt", true))
        {
        	
        	for(Usuario usuario: userList) {
            writer.write("Nombre: " + usuario.getNombre() + "; Contraseña: " + usuario.getPassword() + "\n");
        	}
        }
        catch (IOException e)
        {
            e.printStackTrace();
        }

    }

    public Boolean readTXT (Usuario usuario)
    {
        Boolean encontrado = false;
        try (FileReader fr = new FileReader("usuariosGuardados.txt")) 
        {
            BufferedReader br = new BufferedReader(fr);

            //Lectura del fichero
            String linea;

            while((linea=br.readLine())!=null)
            {
                if(linea.equals("Nombre: " + usuario.getNombre() + "; Contraseña: " + usuario.getPassword()))
                {
                    System.out.println("En el loop" + linea);
                    encontrado = true;
                    System.out.println(encontrado);
                    return encontrado;
                }
                System.out.println(linea);
            }

        }
        catch(Exception e) 
        {
            e.printStackTrace();
        }
        return encontrado;
    }
    
    public Boolean cargarUsuarios()
    {
    	Boolean encontrado = false;
    	List<Usuario> aux = new ArrayList<>();
        try (FileReader fr = new FileReader("usuariosGuardados.txt")) 
        {
            BufferedReader br = new BufferedReader(fr);
            String lista = br.readLine();
            while(lista!=null)
            {
            	
            	System.out.println(lista);
            	Usuario u = new Usuario(lista.split(";")[0].split(": ")[1],lista.split(";")[1].split(": ")[1],0,true);
            	System.out.println(u);
	            save(u);
	            lista = br.readLine();
            	
            }
            
        }
        catch(Exception e) 
        {
            e.printStackTrace();
        }
        return encontrado;
    }
    
    public void clearUserList() {

        userList.clear();
    }
    
    public String WriteInChat(String quote) {
    	
    	chatLog += quote + "\n";
    	
    	String[] lines = chatLog.split("\r\n|\r|\n");
    	
    	if(lines.length > 14) {
    		
    		chatLog = "";
    	for(int i = 0; i < lines.length-1; i++) {
    		
    		lines[i] = lines [i+1];
    		chatLog += lines[i] + "\n";
    		
    	}
    		
    	}
    	
    	return quote;
    	
    }
    
    public String GetChat() {
    	
    	return chatLog;
    	
    }
    
	public void saveChatToTXT (String s) throws IOException
    {

        File myFile = new File("chatLog.txt");
        if (myFile.createNewFile())
        {
            System.out.println("File created:" + myFile.getName());
        }

        try(FileWriter writer = new FileWriter("chatLog.txt", true))
        {
            writer.write(s + "\n");
        }
        catch (IOException e)
        {
            e.printStackTrace();
        }

    }
	
    public Boolean CargarChat()
    {
    	Boolean encontrado = false;
        try (FileReader fr = new FileReader("chatLog.txt")) 
        {
            BufferedReader br = new BufferedReader(fr);
            String lista = br.readLine();
            chatLog = "";
            while(lista!=null)
            {
            	
            	//chatLog += lista + "\n";
            	WriteInChat(lista);
            	
	            lista = br.readLine();
            	
            }
            
        }
        catch(Exception e) 
        {
            e.printStackTrace();
        }
        return encontrado;
    }
	
	
	
}