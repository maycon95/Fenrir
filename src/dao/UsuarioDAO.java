package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import model.Usuario;
import to.UsuarioTO;
import Uteis.Uteis;

public class UsuarioDAO {
	//VERIFICA SE O USUARIO E SENHA INFORMADO EXISTEM
	public UsuarioTO logar(String us_nome, String us_senha) throws Exception{
		Connection conn = null;
	    String sqlSelect = "SELECT us_nome, us_senha FROM tb_usuario WHERE us_nome = ? AND us_senha = ?";
	    PreparedStatement stm = null;
	    ResultSet rs = null;
	    UsuarioTO userTO = new UsuarioTO();

	    try{
	       conn = Uteis.connection();
		   conn.setAutoCommit(false);
	       stm = conn.prepareStatement(sqlSelect);
	       stm.setString(1, us_nome);
	       stm.setString(2, us_senha);
	       rs = stm.executeQuery();
	       if (rs.next()) {
	    	   Usuario user = new Usuario(us_nome, us_senha);
	    	   userTO.add(user);	    	   
	       }
	       else{
	    	   Usuario user = null;
	    	   userTO.add(user);	    	   
	       }
	       return userTO;
	    }
	    catch (Exception e){
	    	throw e;
	    }
	    finally{
	       if (stm != null){
	          try{
	             stm.close();
	          }
	          catch (SQLException e1){
	             System.out.print(e1.getStackTrace());
	          }
	       }
	    }
	}
	
	//BUSCA UM USUARIO NO BANCO
	public UsuarioTO busca(String us_nome) throws Exception{
		Connection conn = null;
	    String sqlSelect = "SELECT us_nome FROM tb_usuario WHERE us_nome like ? ";
	    PreparedStatement stm = null;
	    ResultSet rs = null;
	    UsuarioTO userTO = new UsuarioTO();

	    try{
	    	conn = Uteis.connection();
			stm = conn.prepareStatement(sqlSelect);
			stm.setString(1, us_nome+"%");
			rs = stm.executeQuery();
		
			while(rs.next()) {
				Usuario user = new Usuario();
				user.setUsuario(rs.getString("us_nome"));
				userTO.add(user);
			}
			return userTO;
	    }
	    catch (Exception e){
	    	throw e;
	    }
	    finally{
	       if (stm != null){
	          try{
	             stm.close();
	          }
	          catch (SQLException e1){
	             System.out.print(e1.getStackTrace());
	          }
	       }
	    }
	}
	
	
	//INSERE NOVO USUARIO
	public UsuarioTO insere(String us_nome) throws Exception{
		Connection conn = null;
	    String sqlInsert = "INSERT INTO tb_usuario(us_nome, us_senha) VALUES(?, 'ed0532dd60bcd72660237db7af58eb98') ";//SENHA PADRAO fenrir
	    PreparedStatement stm = null;

	    try{
	    	conn = Uteis.connection();
			stm = conn.prepareStatement(sqlInsert);
			stm.setString(1, us_nome);
			stm.executeUpdate();
	
			return busca(us_nome);//CHAMA A BUSCA DE USUARIO PARA RETORNAR OS DADOS DO USUARIO INSERIDO
	    }
	    catch (Exception e){
	    	throw e;
	    }
	    finally{
	       if (stm != null){
	          try{
	             stm.close();
	          }
	          catch (SQLException e1){
	             System.out.print(e1.getStackTrace());
	          }
	       }
	    }
	}

	//ALTERA DADOS DO USUARIO
	public UsuarioTO altera(String us_nome, String us_nome_old) throws Exception{
		Connection conn = null;
	    String sqlUpdate = "UPDATE tb_usuario SET us_nome = ? WHERE us_nome = ?";//SENHA PADRAO fenrir
	    PreparedStatement stm = null;

	    try{
	    	conn = Uteis.connection();
			stm = conn.prepareStatement(sqlUpdate);
			stm.setString(1, us_nome);
			stm.setString(2, us_nome_old);
			stm.executeUpdate();
	
			return busca(us_nome);//CHAMA A BUSCA DE USUARIO PARA RETORNAR OS DADOS DO USUARIO INSERIDO
	    }
	    catch (Exception e){
	    	throw e;
	    }
	    finally{
	       if (stm != null){
	          try{
	             stm.close();
	          }
	          catch (SQLException e1){
	             System.out.print(e1.getStackTrace());
	          }
	       }
	    }
	}
	
	//EXCLUI USUARIO
	public String exclui(String us_nome) throws Exception{
		Connection conn = null;
	    String sqlDelete = "DELETE FROM tb_usuario WHERE us_nome = ?";
	    PreparedStatement stm = null;

	    try{
	    	conn = Uteis.connection();
			stm = conn.prepareStatement(sqlDelete);
			stm.setString(1, us_nome);
			stm.executeUpdate();
	
			return "[]";//RETORNA UM ARRAY VAZIO APENAS SE EXCLUIR COM SUCESSO
	    }
	    catch (Exception e){
	    	throw e;
	    }
	    finally{
	       if (stm != null){
	          try{
	             stm.close();
	          }
	          catch (SQLException e1){
	             System.out.print(e1.getStackTrace());
	          }
	       }
	    }
	}
	
}
