package controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;

import Uteis.Uteis;
import to.CameraTO;
import to.ComodoTO;
import to.LampadaTO;
import to.PortaoTO;
import to.TemperaturaTO;
import to.UsuarioTO;

@WebServlet("/Controller/Admin")
public class AdminController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public AdminController() {
        super();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	request.setCharacterEncoding("UTF-8");  
		response.setCharacterEncoding("UTF-8");  
        response.setContentType("text/html"); 
        
        //PEGA A FUNCAO A SER EXECUTADA
        String funcao = request.getParameter("funcao");
        String comando = request.getParameter("comando");;
        
		switch(funcao){
			case "usuario":
				if(comando.equals("busca")){
					response.getWriter().write(buscaUsuario(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
				if(comando.equals("insert")){
					response.getWriter().write(insereUsuario(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
				if(comando.equals("update")){
					response.getWriter().write(alteraUsuario(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
				if(comando.equals("exclui")){
					response.getWriter().write(excluiUsuario(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
			break;
			
			case "comodo":
				if(comando.equals("busca")){
					response.getWriter().write(buscaComodo(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
				if(comando.equals("insert")){
					response.getWriter().write(insereComodo(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
				if(comando.equals("update")){
					response.getWriter().write(alteraComodo(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
				if(comando.equals("exclui")){
					response.getWriter().write(excluiComodo(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
			break;
			
			case "lampada":
				if(comando.equals("busca")){
					response.getWriter().write(buscaLampada(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
				if(comando.equals("insert")){
					response.getWriter().write(insereLampada(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
				if(comando.equals("update")){
					response.getWriter().write(alteraLampada(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
				if(comando.equals("exclui")){
					response.getWriter().write(excluiLampada(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
			break;

			case "temperatura":
				if(comando.equals("busca")){
					response.getWriter().write(buscaTemperatura(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
				if(comando.equals("insert")){
					response.getWriter().write(insereTemperatura(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
				if(comando.equals("update")){
					response.getWriter().write(alteraTemperatura(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
				if(comando.equals("exclui")){
					response.getWriter().write(excluiTemperatura(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
			break;


			case "camera":
				if(comando.equals("busca")){
					response.getWriter().write(buscaCamera(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
				if(comando.equals("insert")){
					response.getWriter().write(insereCamera(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
				if(comando.equals("update")){
					response.getWriter().write(alteraCamera(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
				if(comando.equals("exclui")){
					response.getWriter().write(excluiCamera(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
			break;


			case "portao":
				if(comando.equals("busca")){
					response.getWriter().write(buscaPortao(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
				if(comando.equals("insert")){
					response.getWriter().write(inserePortao(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
				if(comando.equals("update")){
					response.getWriter().write(alteraPortao(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
				if(comando.equals("exclui")){
					response.getWriter().write(excluiPortao(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
			break;

			
			
			
			case "monta_combo":
				response.getWriter().write(montaCombo(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
			break;

		}    	
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
	
	
	
	
	
	
	
	

	//MONTA COMBO
	public String montaCombo(HttpServletRequest request, HttpServletResponse response){
		
        //PEGA O ComodoTO
		ComodoTO comodoTO = null;
		try{
			comodoTO = Uteis.connection_comodo().busca("");
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
        
        //CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(comodoTO);
    	
		return retorno;
	}
	
	
	
	
	//------------------------------------------
	//FUNCOES DA TABELA DE USUARIO
	//------------------------------------------
	
	//BUSCA USUARIO
	public String buscaUsuario(HttpServletRequest request, HttpServletResponse response){
		//pega o comando enviado pela pagina
		String busca = request.getParameter("busca");
		
        //PEGA O UsuarioTO
		UsuarioTO userTO = null;
		try{
			userTO = Uteis.connection_user().busca(busca);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
        
        //CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(userTO);
    	
		return retorno;
	}
	
	//GRAVA NOVO USUARIO
	public String insereUsuario(HttpServletRequest request, HttpServletResponse response){
		String us_nome = request.getParameter("us_nome");
		
		//PEGA O UsuarioTO
		UsuarioTO userTO = null;
		try{
			userTO = Uteis.connection_user().insere(us_nome);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		//CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(userTO);
    	
		return retorno;
	}
	
	//ALTERA DADOS DO USUARIO
	public String alteraUsuario(HttpServletRequest request, HttpServletResponse response){
		String us_nome = request.getParameter("us_nome");
		String us_nome_old = request.getParameter("us_nome_old");
		//PEGA O UsuarioTO
		UsuarioTO userTO = null;
		try{
			userTO = Uteis.connection_user().altera(us_nome, us_nome_old);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		//CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(userTO);
    	
		return retorno;
	}
	
	//EXCLUI USUARIO
	public String excluiUsuario(HttpServletRequest request, HttpServletResponse response){
		String us_nome = request.getParameter("us_nome");
	
		String retorno = "";
		try{
			retorno = Uteis.connection_user().exclui(us_nome);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		return retorno;
	}
	//--------------------------------------------
	//FIM FUNCOES DE USUARIO
	//--------------------------------------------

	

	//------------------------------------------
	//FUNCOES DA TABELA DE COMODO
	//------------------------------------------
	
	//BUSCA COMODO
	public String buscaComodo(HttpServletRequest request, HttpServletResponse response){
		//pega o comando enviado pela pagina
		String busca = request.getParameter("busca");
		
        //PEGA O ComodoTO
		ComodoTO comodoTO = null;
		try{
			comodoTO = Uteis.connection_comodo().busca(busca);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
        
        //CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(comodoTO);
    	
		return retorno;
	}
	
	//GRAVA NOVO COMODO
	public String insereComodo(HttpServletRequest request, HttpServletResponse response){
		String cd_nome = request.getParameter("cd_nome");
		//PEGA O ComodoTO
		ComodoTO comodoTO = null;
		try{
			comodoTO = Uteis.connection_comodo().insere(cd_nome);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		//CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(comodoTO);
    	
		return retorno;
	}
	
	//ALTERA DADOS DO COMODO
	public String alteraComodo(HttpServletRequest request, HttpServletResponse response){
		String cd_id= request.getParameter("cd_id");
		String cd_nome = request.getParameter("cd_nome");
		//PEGA O ComodoTO
		ComodoTO comodoTO = null;
		try{
			comodoTO = Uteis.connection_comodo().altera(cd_id, cd_nome);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		//CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(comodoTO);
    	
		return retorno;
	}
	
	//EXCLUI COMODO
	public String excluiComodo(HttpServletRequest request, HttpServletResponse response){
		String cd_id = request.getParameter("cd_id");
	
		String retorno = "";
		try{
			retorno = Uteis.connection_comodo().exclui(cd_id);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		return retorno;
	}
	//--------------------------------------------
	//FIM FUNCOES DE COMODO
	//--------------------------------------------

	
	
	

	//------------------------------------------
	//FUNCOES DA TABELA DE LAMPADA
	//------------------------------------------
	
	//BUSCA LAMPADA
	public String buscaLampada(HttpServletRequest request, HttpServletResponse response){
		//pega o comando enviado pela pagina
		String busca = request.getParameter("busca");
		
        //PEGA O LampadaTO
		LampadaTO lampadaTO = null;
		try{
			lampadaTO = Uteis.connection_lampada().busca(busca); 
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
        
        //CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(lampadaTO);
    	
		return retorno;
	}
	
	//GRAVA NOVA LAMPADA
	public String insereLampada(HttpServletRequest request, HttpServletResponse response){
		String lp_nome = request.getParameter("lp_nome");
		int lp_tensao = Integer.parseInt(request.getParameter("lp_tensao"));
		double lp_consumo = Double.parseDouble(request.getParameter("lp_consumo"));
		double lp_constotal = Double.parseDouble(request.getParameter("lp_constotal"));
		int cd_id = Integer.parseInt(request.getParameter("cd_id"));
		
		//PEGA O LampadaTO
		LampadaTO lampadaTO = null;
		try{
			lampadaTO = Uteis.connection_lampada().insere(lp_nome, lp_tensao, lp_consumo, lp_constotal, cd_id);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		//CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(lampadaTO);
    	
		return retorno;
	}
	
	//ALTERA DADOS - LAMPADA
	public String alteraLampada(HttpServletRequest request, HttpServletResponse response){
		int lp_id= Integer.parseInt(request.getParameter("lp_id"));
		String lp_nome = request.getParameter("lp_nome");
		int lp_tensao = Integer.parseInt(request.getParameter("lp_tensao"));
		double lp_consumo = Double.parseDouble(request.getParameter("lp_consumo"));
		double lp_constotal = Double.parseDouble(request.getParameter("lp_constotal"));
		int cd_id = Integer.parseInt(request.getParameter("cd_id"));
		
		//PEGA O ComodoTO
		LampadaTO lampadaTO = null;
		try{
			lampadaTO = Uteis.connection_lampada().altera(lp_id, lp_nome, lp_tensao, lp_consumo, lp_constotal, cd_id);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		//CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(lampadaTO);
    	
		return retorno;
	}
	
	//EXCLUI LAMPADA
	public String excluiLampada(HttpServletRequest request, HttpServletResponse response){
		String lp_id = request.getParameter("lp_id");
	
		String retorno = "";
		try{
			retorno = Uteis.connection_comodo().exclui(lp_id);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		return retorno;
	}
	//--------------------------------------------
	//			FIM FUNCOES DE LAMPADA
	//--------------------------------------------

	
	
	

	//------------------------------------------
	//FUNCOES DA TABELA DE TEMPERATURA
	//------------------------------------------
	
	//BUSCA TEMPERATURA
	public String buscaTemperatura(HttpServletRequest request, HttpServletResponse response){
		//pega o comando enviado pela pagina
		String busca = request.getParameter("busca");
		
        //PEGA O TemperaturaTO
		TemperaturaTO temperaturaTO = null;
		try{
			temperaturaTO = Uteis.connection_temperatura().busca(busca); 
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
        
        //CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(temperaturaTO);
    	
		return retorno;
	}
	
	//GRAVA NOVA LAMPADA
	public String insereTemperatura(HttpServletRequest request, HttpServletResponse response){
		String tp_nome = request.getParameter("tp_nome");
		double tp_tempmax = Double.parseDouble(request.getParameter("tp_tempmax"));
		double tp_tempmin = Double.parseDouble(request.getParameter("tp_tempmin"));
		char tp_status = request.getParameter("tp_status").charAt(0);
		int cd_id = Integer.parseInt(request.getParameter("cd_id"));
		
		//PEGA O TemperaturaTO
		TemperaturaTO temperaturaTO = null;
		try{
			temperaturaTO = Uteis.connection_temperatura().insere(tp_nome, tp_tempmax, tp_tempmin, tp_status, cd_id);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		//CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(temperaturaTO);
    	
		return retorno;
	}
	
	//ALTERA DADOS - TEMPERATURA
	public String alteraTemperatura(HttpServletRequest request, HttpServletResponse response){
		int tp_id= Integer.parseInt(request.getParameter("tp_id"));
		String tp_nome = request.getParameter("tp_nome");
		double tp_tempmax = Double.parseDouble(request.getParameter("tp_tempmax"));
		double tp_tempmin = Double.parseDouble(request.getParameter("tp_tempmin"));
		char tp_status = request.getParameter("tp_status").charAt(0);
		int cd_id = Integer.parseInt(request.getParameter("cd_id"));
		
		
		//PEGA O TemperaturaTO
		TemperaturaTO temperaturaTO = null;
		try{
			temperaturaTO = Uteis.connection_temperatura().altera(tp_id, tp_nome, tp_tempmax, tp_tempmin, tp_status, cd_id);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		//CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(temperaturaTO);
    	
		return retorno;
	}
	
	//EXCLUI TEMPERATURA
	public String excluiTemperatura(HttpServletRequest request, HttpServletResponse response){
		String tp_id = request.getParameter("tp_id");
	
		String retorno = "";
		try{
			retorno = Uteis.connection_temperatura().exclui(tp_id);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		return retorno;
	}
	//--------------------------------------------
	//			FIM FUNCOES DE TEMPERATURA
	//--------------------------------------------


	
	
	
	
	
	
	
	
	
	//------------------------------------------
	//FUNCOES DA TABELA DE CAMERA
	//------------------------------------------
	
	//BUSCA CAMERA
	public String buscaCamera(HttpServletRequest request, HttpServletResponse response){
		//pega o comando enviado pela pagina
		String busca = request.getParameter("busca");
		
        //PEGA O CameraTO
		CameraTO cameraTO = null;
		try{
			cameraTO = Uteis.connection_camera().busca(busca); 
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
        
        //CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(cameraTO);
    	
		return retorno;
	}
	
	//GRAVA NOVA CAMERA
	public String insereCamera(HttpServletRequest request, HttpServletResponse response){
		String cm_nome = request.getParameter("cm_nome");
		String cm_ip = request.getParameter("cm_ip");
		int cd_id = Integer.parseInt(request.getParameter("cd_id"));
		
		//PEGA O CameraTO
		CameraTO cameraTO = null;
		try{
			cameraTO = Uteis.connection_camera().insere(cm_nome, cm_ip, cd_id);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		//CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(cameraTO);
    	
		return retorno;
	}
	
	//ALTERA DADOS - CAMERA
	public String alteraCamera(HttpServletRequest request, HttpServletResponse response){
		int cm_id= Integer.parseInt(request.getParameter("cm_id"));
		String cm_nome = request.getParameter("cm_nome");
		String cm_ip = request.getParameter("cm_ip");
		int cd_id = Integer.parseInt(request.getParameter("cd_id"));
		
		
		//PEGA O CameraTO
		CameraTO cameraTO = null;
		try{
			cameraTO = Uteis.connection_camera().altera(cm_id, cm_nome, cm_ip, cd_id);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		//CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(cameraTO);
    	
		return retorno;
	}
	
	//EXCLUI CAMERA
	public String excluiCamera(HttpServletRequest request, HttpServletResponse response){
		String cm_id = request.getParameter("cm_id");
	
		String retorno = "";
		try{
			retorno = Uteis.connection_camera().exclui(cm_id);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		return retorno;
	}
	//--------------------------------------------
	//			FIM FUNCOES DE CAMERA
	//--------------------------------------------

	
	
	

	
	
	
	
	
	
	
	
	
	
	

	//------------------------------------------
	//FUNCOES DA TABELA DE PORTAO
	//------------------------------------------
	
	//BUSCA PORTAO
	public String buscaPortao(HttpServletRequest request, HttpServletResponse response){
		//pega o comando enviado pela pagina
		String busca = request.getParameter("busca");
		
        //PEGA O PortaoTO
		PortaoTO portaoTO = null;
		try{
			portaoTO = Uteis.connection_portao().busca(busca); 
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
        
        //CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(portaoTO);
    	
		return retorno;
	}
	
	//GRAVA NOVO PORTAO
	public String inserePortao(HttpServletRequest request, HttpServletResponse response){
		String pt_nome = request.getParameter("pt_nome");
		int cd_id = Integer.parseInt(request.getParameter("cd_id"));
		
		//PEGA O PortaoTO
		PortaoTO portaoTO = null;
		try{
			portaoTO = Uteis.connection_portao().insere(pt_nome, cd_id);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		//CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(portaoTO);
    	
		return retorno;
	}
	
	//ALTERA DADOS - PORTAO
	public String alteraPortao(HttpServletRequest request, HttpServletResponse response){
		int pt_id= Integer.parseInt(request.getParameter("pt_id"));
		String pt_nome = request.getParameter("pt_nome");
		int cd_id = Integer.parseInt(request.getParameter("cd_id"));
		
		
		//PEGA O PortaoTO
		PortaoTO portaoTO = null;
		try{
			portaoTO = Uteis.connection_portao().altera(pt_id, pt_nome, cd_id);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		//CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(portaoTO);
    	
		return retorno;
	}
	
	//EXCLUI PORTAO
	public String excluiPortao(HttpServletRequest request, HttpServletResponse response){
		String pt_id = request.getParameter("pt_id");
	
		String retorno = "";
		try{
			retorno = Uteis.connection_portao().exclui(pt_id);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		return retorno;
	}
	//--------------------------------------------
	//			FIM FUNCOES DE PORTAO
	//--------------------------------------------


		
	
}

