package controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import Uteis.Uteis;
import dao.ComodoDAO;
import to.ComodoTO;

@WebServlet("/Controller/Comodo")
public class ComodoController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public ComodoController() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");  
		response.setCharacterEncoding("UTF-8");  
        response.setContentType("text/html"); 
        
        //PEGA A FUNCAO A SER EXECUTADA
        String cd_tipo = request.getParameter("cd_tipo");
        
        //PEGA O USUARIO DA SESSAO
		String us_nome = (String) request.getSession().getAttribute("usuarioLogado");
		
        response.getWriter().write(buscaComodos(cd_tipo, us_nome)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

	
	
	
	
	
	//FUNCAO PARA BUSCAR OS DISPOSITIVOS DO COMODO
	public String buscaComodos(String cd_tipo, String us_nome){
        //PEGA O DispositivosTO
  		ComodoTO comodoTO = null;
  		
  		try{
  			comodoTO = new ComodoDAO().buscaDispositivos(cd_tipo, us_nome);
  		}catch(Exception e){
  			return Uteis.addSlashes(Uteis.trataErro(e));
  		}
          
  		//CRIA O OBJETO GSON PARA TRASNFORMAR O OBJETO EM JSON
      	Gson gson = new Gson();
      	String retorno = gson.toJson(comodoTO);
      	
  		return retorno;
	}
	
}
