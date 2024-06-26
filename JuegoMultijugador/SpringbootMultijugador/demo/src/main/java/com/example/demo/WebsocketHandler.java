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
	ObjectNode host = mapper.createObjectNode();
	
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		System.out.println("NUEVO JUGADOR CON ID " + session.getId() + " CONECTADO");
		
		
		host.put("EsHost", "0");
		
		if(sessions.isEmpty()) {
			sessions.put(session.getId(), session);
            host.put("EsHost", "1");
		}
		else 
		{ 
			sessions.put(session.getId(), session); 
		}
		

		String numUsers = "" + sessions.size();
		host.put("SesionesActivas", numUsers);
		
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
			//session.sendMessage(new TextMessage("SESION CERRADA"));
			//sessions.remove(session.getId(), session);
		}
		else if (sessions.size()==1)
		{
			sessions.remove(session.getId(), session);
		}

		System.out.println("SESIONES ACTIVAS: " + sessions);
	}
	
	/*private void usuariosActivos(WebSocketSession session, JsonNode node) throws IOException {
		ObjectNode counterNode = mapper.createObjectNode();
        
		counterNode.put("usuariosActivos", node.get("usuariosActivos").asInt());     

        //System.out.println("NODO: " + newNode);
        
		for(WebSocketSession participant : sessions.values()) 
		{
			participant.sendMessage(new TextMessage(counterNode.toString()));
		}
	}*/
	
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

        newNode.put("xFuego", node.get("xFuego").asDouble());
        //newNode.put("xFuego2", node.get("xFuego2").asDouble());

        newNode.put("xPinchos", node.get("xPinchos").asDouble());
        newNode.put("muevePinchos", node.get("muevePinchos").asBoolean());
       // newNode.put("xPinchos2", node.get("xPinchos2").asDouble());
        newNode.put("ganado", node.get("ganado").asBoolean());
        newNode.put("perdido", node.get("perdido").asBoolean());
        //newNode.put("salto", node.get("salto").asBoolean());

        newNode.put("lastCollidedBox", node.get("lastCollidedBox").asDouble());

        newNode.put("lastCollidedCoin", node.get("lastCollidedCoin").asDouble());

        newNode.put("midAir", node.get("midAir").asBoolean());

        newNode.put("vidas", node.get("vidas").asDouble());
        //newNode.put("fireScore", node.get("fireScore").asDouble());

        newNode.put("pause", node.get("pause").asBoolean());

        newNode.put("quit", node.get("quit").asBoolean());

        newNode.put("desconectado", node.get("desconectado").asBoolean());

        //System.out.println("NODO: " + newNode);

        for(WebSocketSession participant : sessions.values()) {
            if(!participant.getId().equals(session.getId())) {
                participant.sendMessage(new TextMessage(newNode.toString()));
            }
        }
	}
	
}
