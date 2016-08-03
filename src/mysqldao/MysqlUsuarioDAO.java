package mysqldao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import dao.UsuarioDAO;
import model.Usuario;
import to.UsuarioTO;

public class MysqlUsuarioDAO implements UsuarioDAO{

	public UsuarioTO verificaLogin() {
		return null;
	}
	
	public UsuarioTO logar(String usuario, String senha) {
		Connection conn = null;
	    String sqlSelect = "SELECT * FROM usuario WHERE us_nome = ? AND us_senha = ?";
	    PreparedStatement stm = null;
	    ResultSet rs = null;
	    UsuarioTO userTO = new UsuarioTO();

	    try
	    {
		   Class.forName(MysqlDAOFactory.DRIVER); 
		   conn = DriverManager.getConnection(MysqlDAOFactory.DBURL);
		   conn.setAutoCommit(false);
	       stm = conn.prepareStatement(sqlSelect);
	       stm.setString(1, usuario);
	       stm.setString(2, senha);
	       rs = stm.executeQuery();
	       if (rs.next()) {
	    	   Usuario l = new Usuario(usuario,senha);
	    	   userTO.add(l);	    	   
	       }
	       else{
	    	   Usuario l = null;
	    	   userTO.add(l);	    	   
	       }
	       return userTO;
	    }
	    catch (Exception e)
	    {
	    	userTO.setError("Falha ao realizar Login");
	    	e.printStackTrace();
	    	try
	    	{
	    		conn.rollback();
	    		
	    	}
	    	catch (SQLException e1)
	    	{
	    		System.out.print(e1.getStackTrace());
	    	}
	    }
	    finally
	    {
	       if (stm != null)
	       {
	          try
	          {
	             stm.close();
	          }
	          catch (SQLException e1)
	          {
	             System.out.print(e1.getStackTrace());
	          }
	       }
	    }
	    return userTO;
	}
}
