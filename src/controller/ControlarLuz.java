package controller;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.InetAddress;
import java.net.Socket;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

import Uteis.Uteis;

@WebServlet("/Controller/ControlarLuz")
public class ControlarLuz extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public ControlarLuz() {
        super();
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");  
		response.setCharacterEncoding("UTF-8");  
        response.setContentType("text/html"); 
        
		//pega o tipo dispositivo a ser acionado
		String funcao = request.getParameter("funcao");
		
		switch(funcao){
			case "lampada":
				//pega o comando enviado pela pagina
				String comando = request.getParameter("comando") + "\n";
				String retorno ="";
				
				//CRIA O ARRAY DE JSON
		        JSONArray jsonArray = new JSONArray();  
		        //OBJ JSON 
		        JSONObject statusDispositivo = new JSONObject();  
				
				//envia o comando para o arduino via rede
				if (comando!=null){
					//endereco ip do arduino na rede
					byte[] addr = {(byte) 192,(byte) 168,1,(byte) 200};
			        
					try { 
						// Cria um Socket cliente passando como parâmetro o ip e a porta do servidor   
						Socket cliente = new Socket(InetAddress.getByAddress(addr),80); 
		
						// Cria um stream de saída 
						DataOutputStream saida = new DataOutputStream(cliente.getOutputStream());
						saida.flush(); 
		
						// Cria um buffer que armazenará as informações retornadas pelo servidor
						BufferedReader inFromServer = new BufferedReader(new InputStreamReader(cliente.getInputStream()));
		
						//envia o comando para o arduino
						saida.write(comando.getBytes());
						
						//pega o retorno do arduino
						retorno = inFromServer.readLine();
		
						// Fecha o Socket
						cliente.close();  
						
						statusDispositivo.put("status", retorno);
							
					} catch(Exception e) {
						//VERIFICA SE OCORREU ALGUM ERRO E RETORNA PARA A TELA
				       	response.getWriter().write(Uteis.trataErro("Ocorreu um Erro ao acionar o dispositivo!"));
					} 
				}
				
		        jsonArray.put(statusDispositivo); //INSERE O OBJ JSON NO ARRAY
		        response.getWriter().write(jsonArray.toString()); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
			break;
		}
		
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}	
	
	
}
