package com.example.demo;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class WebsocketHandler extends TextWebSocketHandler 
{

	private Map<String, WebSocketSession> sessions = new ConcurrentHashMap<>();
	private ObjectMapper mapper = new ObjectMapper();
	
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		System.out.println("NUEVO JUGADOR CON ID " + session.getId() + " CONECTADO");
		
		ObjectNode host = mapper.createObjectNode();
		host.put("EsHost", "0");
		
		if(sessions.isEmpty()) {
			sessions.put(session.getId(), session);
            host.put("EsHost", "1");
		}else { 
			sessions.put(session.getId(), session); 
		}
		
		System.out.println("HOST: " + host);
		System.out.println("SESIONES ACTIVAS: " + sessions);
		
		session.sendMessage(new TextMessage(host.toString()));
	}
	
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		//System.out.println("SESION CON ID " + session.getId() + " CERRADA");
		//sessions.remove(session.getId());
		if(sessions.size() == 2)
		{
			System.out.println("SESION DE JUEGO CERRADA");
			sessions.clear();
		}
		else if (sessions.size()==1)
		{
			sessions.remove(session.getId(), session);
		}

		System.out.println("SESIONES ACTIVAS: " + sessions);
	}
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException
	{
		JsonNode node = mapper.readTree(message.getPayload());
		
		enviarInfo(session, node);
	}
	
	private void enviarInfo(WebSocketSession session, JsonNode node) throws IOException {
		ObjectNode newNode = mapper.createObjectNode();
        
        newNode.put("ready", node.get("ready").asBoolean());     

        newNode.put("x", node.get("x").asDouble());
        newNode.put("y", node.get("y").asDouble());
        
        newNode.put("midAir", node.get("midAir").asBoolean());   
        
        newNode.put("vidas", node.get("vidas").asDouble());
        newNode.put("fireScore", node.get("fireScore").asDouble());
        
        //System.out.println("NODO: " + newNode);
        
		for(WebSocketSession participant : sessions.values()) {
			if(!participant.getId().equals(session.getId())) {
				participant.sendMessage(new TextMessage(newNode.toString()));
			}
		}
	}
	
}
