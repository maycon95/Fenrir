package controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Uteis.Uteis;
import dao.UsuarioDAO;
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
							
		        //PEGA O UsuarioTO
				UsuarioTO userTO = null;
				try{
					userTO = new UsuarioDAO().logar(us_nome, us_senha);	
				}catch(Exception e){
					response.getWriter().write(Uteis.trataErro(e));
		        	return;
				}
	        	
		        //VERIFICA SE ENCONTROU O USUARIO NO BANCO OU NAO
		        Usuario usuario = userTO.getLista().get(0);
		        String retorno_login = "\"fail\"";
		        if(usuario != null){
		        	retorno_login = "\"success\"";
				    request.getSession().setAttribute("usuarioLogado", usuario.getUsuario());
		        }
		        
		        //ENVIA DE VOLTA A RESPOSTA
		        response.getWriter().write(retorno_login);
			break;
			
			case "logout":				
				try{
					//REMOVE TODA A SESSAO DO USUARIO
					request.getSession().invalidate();
				}catch(Exception e){
					response.getWriter().write(Uteis.trataErro(e));
		        }

				response.getWriter().write("[]"); //ENVIA DE VOLTA A RESPOSTA(NESTE CASO COMO NAO PRECISA DE RETORNO
												  // ENTAO ENVIAMOS UM ARRAY VAZIO)
			break;
		}
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}	
}
