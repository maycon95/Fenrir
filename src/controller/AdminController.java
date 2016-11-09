package controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;

import Uteis.Uteis;
import dao.AcessoDAO;
import dao.CameraDAO;
import dao.ComodoDAO;
import dao.DimmerDAO;
import dao.LampadaDAO;
import dao.PortaoDAO;
import dao.TemperaturaDAO;
import dao.UsuarioDAO;
import to.AcessoTO;
import to.CameraTO;
import to.ComodoTO;
import to.DimmerTO;
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
        String comando = request.getParameter("comando");
        
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

			case "acesso":
				if(comando.equals("buscaAcessoUsuario")){
					response.getWriter().write(buscaAcessoUsuario(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
				if(comando.equals("liberaAcesso")){
					response.getWriter().write(liberaAcesso(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
				if(comando.equals("bloqueiaAcesso")){
					response.getWriter().write(bloqueiaAcesso(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
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
				if(comando.equals("upload_planta")){
					response.getWriter().write(uploadPlanta(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
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

			case "dimmer":
				if(comando.equals("busca")){
					response.getWriter().write(buscaDimmer(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
				if(comando.equals("insert")){
					response.getWriter().write(insereDimmer(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
				if(comando.equals("update")){
					response.getWriter().write(alteraDimmer(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
				if(comando.equals("exclui")){
					response.getWriter().write(excluiDimmer(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
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
		LampadaTO lampadaTO = null;
		
		try{
			comodoTO = new ComodoDAO().busca("");
			lampadaTO = new LampadaDAO().busca("");
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
        
		Object[] combo = {comodoTO, lampadaTO};
		    
        //CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(combo);
		
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
			userTO = new UsuarioDAO().busca(busca);
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
			userTO = new UsuarioDAO().insere(us_nome);
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
			userTO = new UsuarioDAO().altera(us_nome, us_nome_old);
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
			retorno = new UsuarioDAO().exclui(us_nome);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		return retorno;
	}
	//--------------------------------------------
	//FIM FUNCOES DE USUARIO
	//--------------------------------------------


	

	//------------------------------------------
	//FUNCOES DA TABELA DE ACESSO
	//------------------------------------------
	
	//BUSCA ACESSOS DE UM USUARIO
	public String buscaAcessoUsuario(HttpServletRequest request, HttpServletResponse response){
		//pega o comando enviado pela pagina
		String busca = request.getParameter("busca");
		
        //PEGA O AcessoTO
		AcessoTO acessoTO = null;
		try{
			acessoTO = new AcessoDAO().buscaPorUser(busca);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
        
        //CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(acessoTO);
    	
		return retorno;
	}
	
	//GRAVA LIBERA ACESSO PARA UM COMODO
	public String liberaAcesso(HttpServletRequest request, HttpServletResponse response){
		String us_nome = request.getParameter("us_nome");
		int cd_id= Integer.parseInt(request.getParameter("cd_id"));
		char ac_libera = request.getParameter("ac_libera").charAt(0);
		
		//PEGA O AcessoTO
		AcessoTO acessoTO = null;
		try{
			acessoTO = new AcessoDAO().gravaAcesso(us_nome, cd_id, ac_libera);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		//CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(acessoTO);
    	
		return retorno;
	}
	
	//REMOVE UM ACESSO DE UM USUARIO
	public String bloqueiaAcesso(HttpServletRequest request, HttpServletResponse response){
		String us_nome = request.getParameter("us_nome");
		int cd_id = Integer.parseInt(request.getParameter("cd_id"));
		
		//PEGA O AcessoTO
		AcessoTO acessoTO = null;
		try{
			acessoTO = new AcessoDAO().bloqueiaAcesso(us_nome, cd_id);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		//CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(acessoTO);
    	
		return retorno;
	}
	
	//--------------------------------------------
	//FIM FUNCOES DE ACESSO
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
			comodoTO = new ComodoDAO().busca(busca);
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
		String cd_tipo = request.getParameter("cd_tipo");
		//PEGA O ComodoTO
		ComodoTO comodoTO = null;
		try{
			comodoTO = new ComodoDAO().insere(cd_nome, cd_tipo);
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
		String cd_tipo = request.getParameter("cd_tipo");
		//PEGA O ComodoTO
		ComodoTO comodoTO = null;
		try{
			comodoTO = new ComodoDAO().altera(cd_id, cd_nome, cd_tipo);
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
			retorno = new ComodoDAO().exclui(cd_id);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		return retorno;
	}

	
	//ALTERA DADOS DO COMODO
	public String uploadPlanta(HttpServletRequest request, HttpServletResponse response){
		int  cd_id = Integer.parseInt(request.getParameter("cd_id"));
		String cd_planta = request.getParameter("cd_planta");

		
		String retorno = "";
		try{
			retorno = new ComodoDAO().uploadPlanta(cd_id, cd_planta);
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
			lampadaTO = new LampadaDAO().busca(busca); 
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
		int lp_porta = Integer.parseInt(request.getParameter("lp_porta"));
		int cd_id = Integer.parseInt(request.getParameter("cd_id"));
		
		//PEGA O LampadaTO
		LampadaTO lampadaTO = null;
		try{
			lampadaTO = new LampadaDAO().insere(lp_nome, lp_tensao, lp_consumo, lp_porta, cd_id);
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
		int lp_porta = Integer.parseInt(request.getParameter("lp_porta"));
		int cd_id = Integer.parseInt(request.getParameter("cd_id"));
		
		//PEGA O ComodoTO
		LampadaTO lampadaTO = null;
		try{
			lampadaTO = new LampadaDAO().altera(lp_id, lp_nome, lp_tensao, lp_consumo, lp_porta, cd_id);
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
			retorno = new LampadaDAO().exclui(lp_id);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		return retorno;
	}
	//--------------------------------------------
	//			FIM FUNCOES DE LAMPADA
	//--------------------------------------------

	

	
	
	
	

	//------------------------------------------
	//FUNCOES DA TABELA DE DIMMER
	//------------------------------------------
	
	//BUSCA DIMMER
	public String buscaDimmer(HttpServletRequest request, HttpServletResponse response){
		//pega o comando enviado pela pagina
		String  busca = request.getParameter("busca");
		
        //PEGA O DimmerTO
		DimmerTO dimmerTO = null;
		try{
			dimmerTO = new DimmerDAO().busca(busca); 
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
        
        //CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(dimmerTO);
    	
		return retorno;
	}
	
	//GRAVA NOVA DIMMER
	public String insereDimmer(HttpServletRequest request, HttpServletResponse response){
		int lp_id = Integer.parseInt(request.getParameter("lp_id"));
		int dm_porta = Integer.parseInt(request.getParameter("dm_porta"));
		
		//PEGA O DimmerTO
		DimmerTO dimmerTO = null;
		try{
			dimmerTO = new DimmerDAO().insere(lp_id, dm_porta);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		//CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(dimmerTO);
    	
		return retorno;
	}
	
	//ALTERA DADOS - DIMMER
	public String alteraDimmer(HttpServletRequest request, HttpServletResponse response){
		int dm_id = Integer.parseInt(request.getParameter("dm_id"));
		int lp_id = Integer.parseInt(request.getParameter("lp_id"));
		int dm_porta = Integer.parseInt(request.getParameter("dm_porta"));
		
		//PEGA O DimmerTO
		DimmerTO dimmerTO = null;
		try{
			dimmerTO = new DimmerDAO().altera(dm_id, lp_id, dm_porta);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		//CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
    	Gson gson = new Gson();
    	String retorno = gson.toJson(dimmerTO);
    	
		return retorno;
	}
	
	//EXCLUI DIMMER
	public String excluiDimmer(HttpServletRequest request, HttpServletResponse response){
		int dm_id = Integer.parseInt(request.getParameter("dm_id"));
	
		String retorno = "";
		try{
			retorno = new DimmerDAO().exclui(dm_id);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		return retorno;
	}
	//--------------------------------------------
	//			FIM FUNCOES DE DIMMER
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
			temperaturaTO = new TemperaturaDAO().busca(busca); 
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
		int tp_porta = Integer.parseInt(request.getParameter("tp_porta"));
		int cd_id = Integer.parseInt(request.getParameter("cd_id"));
		
		//PEGA O TemperaturaTO
		TemperaturaTO temperaturaTO = null;
		try{
			temperaturaTO = new TemperaturaDAO().insere(tp_nome, tp_tempmax, tp_tempmin, tp_status, tp_porta, cd_id);
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
		int tp_porta = Integer.parseInt(request.getParameter("tp_porta"));
		int cd_id = Integer.parseInt(request.getParameter("cd_id"));
		
		
		//PEGA O TemperaturaTO
		TemperaturaTO temperaturaTO = null;
		try{
			temperaturaTO = new TemperaturaDAO().altera(tp_id, tp_nome, tp_tempmax, tp_tempmin, tp_status, tp_porta, cd_id);
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
			retorno = new TemperaturaDAO().exclui(tp_id);
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
			cameraTO = new CameraDAO().busca(busca); 
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
		String cm_addr = request.getParameter("cm_addr");
		int cm_port = Integer.parseInt(request.getParameter("cm_port"));
		String cm_user = request.getParameter("cm_user");
		String cm_pwd = request.getParameter("cm_pwd");
		int cd_id = Integer.parseInt(request.getParameter("cd_id"));
		
		//PEGA O CameraTO
		CameraTO cameraTO = null;
		try{
			cameraTO = new CameraDAO().insere(cm_nome, cm_addr, cm_port, cm_user, cm_pwd, cd_id);
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
		String cm_addr = request.getParameter("cm_addr");
		int cm_port = Integer.parseInt(request.getParameter("cm_port"));
		String cm_user = request.getParameter("cm_user");
		String cm_pwd = request.getParameter("cm_pwd");
		int cd_id = Integer.parseInt(request.getParameter("cd_id"));
		
		
		//PEGA O CameraTO
		CameraTO cameraTO = null;
		try{
			cameraTO = new CameraDAO().altera(cm_id, cm_nome, cm_addr, cm_port, cm_user, cm_pwd, cd_id);
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
			retorno = new CameraDAO().exclui(cm_id);
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
			portaoTO = new PortaoDAO().busca(busca); 
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
		int pt_porta = Integer.parseInt(request.getParameter("pt_porta"));
		int cd_id = Integer.parseInt(request.getParameter("cd_id"));
		
		//PEGA O PortaoTO
		PortaoTO portaoTO = null;
		try{
			portaoTO = new PortaoDAO().insere(pt_nome, pt_porta, cd_id);
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
		int pt_porta = Integer.parseInt(request.getParameter("pt_porta"));
		int cd_id = Integer.parseInt(request.getParameter("cd_id"));
		
		
		//PEGA O PortaoTO
		PortaoTO portaoTO = null;
		try{
			portaoTO = new PortaoDAO().altera(pt_id, pt_nome, pt_porta, cd_id);
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
			retorno = new PortaoDAO().exclui(pt_id);
		}catch(Exception e){
			return Uteis.addSlashes(Uteis.trataErro(e));
		}
		
		return retorno;
	}
	//--------------------------------------------
	//			FIM FUNCOES DE PORTAO
	//--------------------------------------------


		
	
}

