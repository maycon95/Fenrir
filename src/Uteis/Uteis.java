package Uteis;

import dao.ComodoDAO;
import dao.DAOFactory;
import dao.UsuarioDAO;

public abstract class Uteis{

   public static final int MYSQL = 1;



	// --------------------------------------------------------------------------------------------------------------
    //TRATA ERRO 
    // --------------------------------------------------------------------------------------------------------------
	public static String trataErro(String mensagem){
		return "{\"error\":\"true\",\"mensagem\":\""+mensagem+"\"}";
	}
	
	// --------------------------------------------------------------------------------------------------------------
    //TRATA ERRO - EXCPETION
    // --------------------------------------------------------------------------------------------------------------
	public static String trataErro(Exception e){
		String mensagem = e.toString().substring(e.toString().indexOf(":")+2, e.toString().length());
		return "{\"error\":\"true\",\"mensagem\":\""+addSlashes(mensagem)+"\"}";
	}

   // --------------------------------------------------------------------------------------------------------------
   //CONEXÃO COM O BANCO - USUARIO
   // --------------------------------------------------------------------------------------------------------------
	public static UsuarioDAO connection_user(){
		return DAOFactory.getDAOFactory(MYSQL).getUsuarioDAO();
	}

   // --------------------------------------------------------------------------------------------------------------
   //CONEXÃO COM O BANCO - COMODO
   // --------------------------------------------------------------------------------------------------------------
	public static ComodoDAO connection_comodo(){
		return DAOFactory.getDAOFactory(MYSQL).getComodoDAO();
	}
			
	
	public static String addSlashes(String s) {
	    s = s.replaceAll("\\n", "\\\\n");
//	    s = s.replaceAll("\\\\", "\\\\\\\\");
//	    s = s.replaceAll("\\r", "\\\\r");
//	    s = s.replaceAll("\\00", "\\\\0");
//	    s = s.replaceAll("'", "\\\\'");
	    return s;
	}
}