package arduino;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import Uteis.Retorno;
import Uteis.Uteis;
import dao.LampadaDAO;
import dao.TemperaturaDAO;
import dao.UsuarioDAO;
import model.Usuario;
import to.LampadaTO;
import to.UsuarioTO;


//  http://localhost:8080/Fenrir/Arduino/SendData?us_nome=maycon&us_senha=202cb962ac59075b964b07152d234b70&data={sensor:[(tp_id:1),(tp_temp:23.0)]}
@WebServlet("/Arduino/GetData")
public class GetData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public GetData() {
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
			case "sensorlum":
				response.getWriter().write(buscaSensorLum(request,response)); //ENVIA DE VOLTA O ARRAY EM FORMATO DE STRING
			break;
		}    			
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
	
	
	
	
	
	
	
	
	

	//BUSCA LAMPADAS COM SENSORES
	public String buscaSensorLum(HttpServletRequest request, HttpServletResponse response){
		//pega o comando enviado pela pagina
		
		
		
        //PEGA O UsuarioTO
		LampadaTO lampadaTO = null;
		try{
			lampadaTO = new LampadaDAO().buscaLampadaComSensor();
		}catch(Exception e){
			return new Gson().toJson(new Retorno("",Uteis.addSlashes(Uteis.trataErro(e))));
		}
        
		String retorno = "";
		for(int i = 0; i < lampadaTO.getLista().size(); i++){
			
		}
		
		
		return retorno;
	}
	
	
	
	
}
