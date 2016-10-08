package controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Uteis.Uteis;
import dao.ComodoDAO;

@WebServlet("/Controller/Imagem")
public class ImagemController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public ImagemController() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");  
		response.setCharacterEncoding("UTF-8");  
        response.setContentType("text/html"); 
        
        //PEGA A FUNCAO A SER EXECUTADA
        int cd_id = Integer.parseInt(request.getParameter("cd_id"));
        
		response.getWriter().write(buscaImagem(cd_id)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}
	
	
	
	
	
	

	//FUNCAO PARA BUSCAR OS DISPOSITIVOS DO COMODO
	public String buscaImagem(int cd_id){
  		String imagem = null;
  		
  		try{
  			imagem = new ComodoDAO().buscaImagem(cd_id);  			
  		}catch(Exception e){
  			return Uteis.addSlashes(Uteis.trataErro(e));
  		}
  		return imagem;
	}


}
