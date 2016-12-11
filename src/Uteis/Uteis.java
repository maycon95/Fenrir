package Uteis;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public abstract class Uteis{
//	private static String usuario = "fenrirtc_maycon";
//	private static String senha = "P@ssword2016";
//	private static String url = "192.175.112.170:3306";
//	private static String banco = "fenrirtc_fenrir";
	
	//DEBUG
	private static String usuario = "maycon";
	private static String senha = "1234";
	private static String url = "localhost";
	private static String banco = "fenrir";
	
	
	private static String DRIVER = "com.mysql.jdbc.Driver";
	private static String DBURL = "jdbc:mysql://"+url+"/"+banco+"?user="+usuario+"&password="+senha;

	
	// --------------------------------------------------------------------------------------------------------------
    //PEGA CONEXAO COM O BANCO
    // --------------------------------------------------------------------------------------------------------------
	public static Connection connection() throws ClassNotFoundException, SQLException{
    	Class.forName(DRIVER); 
		return DriverManager.getConnection(DBURL);
		
	}
	
	
	// --------------------------------------------------------------------------------------------------------------
    //TRATA ERRO 
    // --------------------------------------------------------------------------------------------------------------
	public static String trataErro(String mensagem){
		return addSlashes(mensagem);
//		return "{\"error\":\"true\",\"mensagem\":\""+mensagem+"\"}";
	}
	
	// --------------------------------------------------------------------------------------------------------------
    //TRATA ERRO - EXCPETION
    // --------------------------------------------------------------------------------------------------------------
	public static String trataErro(Exception e){
		String mensagem = e.toString().substring(e.toString().indexOf(":")+2, e.toString().length());
		return addSlashes(mensagem);
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