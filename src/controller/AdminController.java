package controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;

import Uteis.Uteis;
import to.ComodoTO;
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
//					response.getWriter().write(buscaLampada(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
					return;
				}
			break;
		}    	
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
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
	//FUNCOES DA TABELA DE USUARIO
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
	
}
