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

import com.google.gson.Gson;

import Uteis.Retorno;
import Uteis.Uteis;
import dao.ComodoDAO;
import dao.LampadaDAO;
import dao.TemperaturaDAO;
import to.ComodoTO;
import to.TemperaturaTO;

@WebServlet("/Controller/Dispositivo")
public class DispositivoController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public DispositivoController() {
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
				int lp_id = Integer.parseInt(request.getParameter("lp_id"));
				Retorno retorno = new Retorno();
				String retornoArduino = "D";

				System.out.println("Comando: " + comando);
				System.out.println("id: " + lp_id);
				
				
				
				//CRIA O ARRAY DE JSON
		        JSONArray jsonArray = new JSONArray();  
		        //OBJ JSON 
		        JSONObject statusDispositivo = new JSONObject();  
				
				//envia o comando para o arduino via rede

				if (comando!=null){
					//endereco ip do arduino na rede
					byte[] addr = {(byte) 192,(byte) 168,1,(byte) 200};
			        
					try { 
//						// Cria um Socket cliente passando como parâmetro o ip e a porta do servidor   
//						Socket cliente = new Socket(InetAddress.getByAddress(addr),80); 
//		
//						// Cria um stream de saída 
//						DataOutputStream saida = new DataOutputStream(cliente.getOutputStream());
//						saida.flush(); 
//		
//						// Cria um buffer que armazenará as informações retornadas pelo servidor
//						BufferedReader inFromServer = new BufferedReader(new InputStreamReader(cliente.getInputStream()));
//		
//						//envia o comando para o arduino
//						saida.write(comando.getBytes());
//						
//						//pega o retorno do arduino
//						retornoArduino = inFromServer.readLine();
//		
//						// Fecha o Socket
//						cliente.close();  

						//ATUALIZA O STATUS DO DISPOSITIVO NO BANCO
						try{
							new LampadaDAO().updateStatus(lp_id, retornoArduino);
							retorno.setStatus(retornoArduino);
						}catch(Exception e){
							retorno.setError(Uteis.addSlashes(Uteis.trataErro(e)));
						}

					} catch(Exception e) {
						e.printStackTrace();
						//VERIFICA SE OCORREU ALGUM ERRO E RETORNA PARA A TELA
						retorno.setError(Uteis.trataErro("Ocorreu um Erro ao acionar o dispositivo!"));
					} 
				}

		  		//CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
		      	Gson gson = new Gson();
		      	String resposta = gson.toJson(retorno);
		      	
		        response.getWriter().write(resposta); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
			break;
			
			case "temperatura":
				response.getWriter().write(attTemperatura(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
			return;
			
			case "buscaDispositivo":
				response.getWriter().write(buscaDispositivo(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
			return;
			
		}
		
		
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}	
	
	
	
	
	
	
	
	
	
	
	
	//BUSCA TEMPERATURA
	public String attTemperatura(HttpServletRequest request, HttpServletResponse response){
		//pega o comando enviado pela pagina
		String tp_id = request.getParameter("tp_id");
		
        //PEGA O TemperaturaTO
		TemperaturaTO tempTO = null;
		try{
			tempTO = new TemperaturaDAO().buscaTemp(tp_id); 
		}catch(Exception e){
  			return new Gson().toJson(new Retorno("",Uteis.trataErro(e)));
		}
        
        //CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(tempTO);
    	
		return retorno;
	}
	
	
	
	
	//FUNCAO PARA BUSCAR OS DISPOSITIVOS DO COMODO
	public String buscaDispositivo(HttpServletRequest request, HttpServletResponse response){
		//PEGA A FUNCAO A SER EXECUTADA
        String cd_tipo = request.getParameter("cd_tipo");
        
        //PEGA O USUARIO DA SESSAO
		String us_nome = (String) request.getSession().getAttribute("usuarioLogado");
        

//        String us_nome = "maycon";
        
  		ComodoTO comodoTO = null;
  		
  		try{
  			comodoTO = new ComodoDAO().buscaDispositivos(cd_tipo, us_nome);
  		}catch(Exception e){
  			e.printStackTrace();
  			return new Gson().toJson(new Retorno("",Uteis.trataErro(e)));
  		}
  		
          
  		//CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
      	Gson gson = new Gson();
      	String retorno = gson.toJson(comodoTO);
      	
  		return retorno;
	}
	
}
