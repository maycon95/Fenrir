package Uteis;

import dao.AcessoDAO;
import dao.CameraDAO;
import dao.ComodoDAO;
import dao.LampadaDAO;
import dao.PortaoDAO;
import dao.TemperaturaDAO;
import dao.UsuarioDAO;

public abstract class Uteis{

	public static String DRIVER = "com.mysql.jdbc.Driver";
	public static String DBURL = "jdbc:mysql://localhost/fenrir?user=maycon&password=1234";

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
		return new UsuarioDAO();
	}

    // --------------------------------------------------------------------------------------------------------------
    //CONEXÃO COM O BANCO - COMODO
    // --------------------------------------------------------------------------------------------------------------
	public static ComodoDAO connection_comodo(){
		return new ComodoDAO();
	}
			
    // --------------------------------------------------------------------------------------------------------------
    //CONEXÃO COM O BANCO - LAMPADA
    // --------------------------------------------------------------------------------------------------------------
	public static LampadaDAO connection_lampada(){
		return new LampadaDAO();
	}
	
	// --------------------------------------------------------------------------------------------------------------
    //CONEXÃO COM O BANCO - SENSOR DE TEMPERATURA
    // --------------------------------------------------------------------------------------------------------------
	public static TemperaturaDAO connection_temperatura(){
		return new TemperaturaDAO();
	}
	
	// --------------------------------------------------------------------------------------------------------------
    //CONEXÃO COM O BANCO - SENSOR DE CAMERA
    // --------------------------------------------------------------------------------------------------------------
	public static CameraDAO connection_camera(){
		return new CameraDAO();
	}

	// --------------------------------------------------------------------------------------------------------------
    //CONEXÃO COM O BANCO - PORTAO
    // --------------------------------------------------------------------------------------------------------------
	public static PortaoDAO connection_portao(){
		return new PortaoDAO();
	}
	
	// --------------------------------------------------------------------------------------------------------------
    //CONEXÃO COM O BANCO - ACESSO
    // --------------------------------------------------------------------------------------------------------------
	public static AcessoDAO connection_acesso(){
		return new AcessoDAO();
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