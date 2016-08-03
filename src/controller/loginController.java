package controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.json.JSONObject;

import Uteis.Uteis;
import model.Especialista;
import model.Usuario;
import to.UsuarioTO;

@WebServlet("/Controller/Login")
public class loginController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public loginController() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");  
		response.setCharacterEncoding("UTF-8");  
        response.setContentType("text/html"); 
        
        //PEGA A FUNCAO A SER EXECUTADA
        String funcao = request.getParameter("funcao");
		
		switch(funcao){
			case "logar":
				//pega o comando enviado pela pagina
				String us_nome = request.getParameter("us_nome");
				String us_senha = request.getParameter("us_senha");
								
				//CRIA O ARRAY DE JSON
		        JSONArray jsonArray = new JSONArray();  
		        //OBJ JSON 
		        JSONObject statusLogin = new JSONObject();
		        
		        Especialista esp = new Especialista();
		        //PEGA O UsuarioTO
		        UsuarioTO userTO = esp.verificaLogin(us_nome, us_senha);

	        	//VERIFICA SE OCORREU ALGUM ERRO AO BUSCAR USUARIO
		        if(userTO.getError() != null){
		        	Uteis.trataErro(statusLogin, userTO.getError());
		        	return;
		        }
	        	
		        //VERIFICA SE ENCONTROU O USUARIO NO BANCO OU NAO
		        Usuario usuario = userTO.getLista().get(0);
		        try{
			        if(usuario != null){
						statusLogin.put("login", "true");
					    HttpSession session = request.getSession();
					    session.setAttribute("usuarioLogado", usuario.getUsuario());
			        }
			        else{ // SE NAO ENCONTRAR O USUARIO NO BANCO
			    	   	statusLogin.put("login", "false");
			       	}
		        }catch(Exception e){
		        	System.out.println(e.getStackTrace());
		        }
		       				
		        jsonArray.put(statusLogin); //INSERE O OBJ JSON NO ARRAY
		        response.getWriter().write(jsonArray.toString()); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
			break;
			
			case "logout":

		        //OBJ JSON 
		        JSONObject statusLogout = new JSONObject();
				try{
					statusLogout.put("logout", "success");
					request.getSession().invalidate();
				}catch(Exception e){
		        	Uteis.trataErro(statusLogout, "Ocorreu um erro ao realizar Logoff");
					System.out.println(e.getStackTrace());
				}

				response.getWriter().write(new JSONArray().put(statusLogout).toString()); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
			break;
		}
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}	
}
