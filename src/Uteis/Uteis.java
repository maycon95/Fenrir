package Uteis;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import org.json.JSONException;
import org.json.JSONObject;

public abstract class Uteis{
	public static Connection conn = null;
   
   //construtor sem parametro


   // -------------------------------------------------------------------------------------------------------------------------------------------------
   //Obtem Conexão com o banco de dados
   // -------------------------------------------------------------------------------------------------------------------------------------------------
   public static void obtemConexao() throws SQLException
   {
      conn = DriverManager.getConnection
         (
         "jdbc:mysql://localhost/Projeto?user=alunos&password=alunos"
         );
   }
	


   // -------------------------------------------------------------------------------------------------------------------------------------------------
   //TRATA ERRO 
   // -------------------------------------------------------------------------------------------------------------------------------------------------
	public static void trataErro(JSONObject jsonObj, String mensagem){
		try{
			jsonObj.put("error", mensagem);
		}catch(JSONException e){
			e.printStackTrace();
		}
	}

}