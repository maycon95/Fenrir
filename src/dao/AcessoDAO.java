package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import model.Acesso;
import Uteis.Uteis;
import to.AcessoTO;

public class AcessoDAO {
	//BUSCA TODOS OS ACESSOS DE UM USUARIO NO BANCO - TELA DE ADMIN
	public AcessoTO buscaPorUser(String us_nome) throws Exception{ 
		Connection conn = null;
	    String sqlSelect = "SELECT c.cd_id, c.cd_nome, "+
	    							"ifnull((SELECT ac_libera FROM tb_acesso WHERE cd_id = c.cd_id AND us_nome = ?), 'B') AS ac_libera "+
    								"FROM tb_comodo c";

	    PreparedStatement stm = null;
	    ResultSet rs = null;
	    AcessoTO acessoTO = new AcessoTO();

	    try{
	    	Class.forName(Uteis.DRIVER); 
			conn = DriverManager.getConnection(Uteis.DBURL);
			stm = conn.prepareStatement(sqlSelect);
			stm.setString(1, us_nome);
			rs = stm.executeQuery();
		
			while(rs.next()) {
				Acesso acesso = new Acesso();
				acesso.setCd_id(rs.getInt("cd_id"));
				acesso.setCd_nome(rs.getString("cd_nome"));
				acesso.setAc_libera(rs.getString("ac_libera").charAt(0));
				acesso.setUs_nome(us_nome);
				acessoTO.add(acesso);
			}
			return acessoTO;
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
	
	//BUSCA ACESSO DE UM COMODO DE UM USUARIO NO BANCO - TELA DE ADMIN
	public AcessoTO buscaAcessoComodo(String us_nome, int cd_id) throws Exception{ 
		Connection conn = null;
	    String sqlSelect = "SELECT c.cd_id, c.cd_nome, "+
	    							"ifnull((SELECT ac_libera FROM tb_acesso WHERE cd_id = c.cd_id AND us_nome = ?), 'B') AS ac_libera "+
    								"FROM tb_comodo c where cd_id = ?";
	    
	    PreparedStatement stm = null;
	    ResultSet rs = null;
	    AcessoTO acessoTO = new AcessoTO();

	    try{
	    	Class.forName(Uteis.DRIVER); 
			conn = DriverManager.getConnection(Uteis.DBURL);
			stm = conn.prepareStatement(sqlSelect);
			stm.setString(1, us_nome);
			stm.setInt(2, cd_id);
			rs = stm.executeQuery();
		
			while(rs.next()) {
				Acesso acesso = new Acesso();
				acesso.setCd_id(rs.getInt("cd_id"));
				acesso.setCd_nome(rs.getString("cd_nome"));
				acesso.setAc_libera(rs.getString("ac_libera").charAt(0));
				acesso.setUs_nome(us_nome);
				acessoTO.add(acesso);
			}
			return acessoTO;
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
	
	//INSERE UM ACESSO A UM USUARIO
	public AcessoTO gravaAcesso(String us_nome, int cd_id, char ac_libera) throws Exception{
		Connection conn = null;
	    String sqlInsert = "INSERT INTO tb_acesso(us_nome,cd_id,ac_libera) values(?, ?, ?); ";
	    PreparedStatement stm = null;

	    try{
	    	Class.forName(Uteis.DRIVER); 
			conn = DriverManager.getConnection(Uteis.DBURL);
			stm = conn.prepareStatement(sqlInsert);
			stm.setString(1, us_nome);
			stm.setInt(2, cd_id);
			stm.setString(3, ac_libera+"");
			stm.executeUpdate();
	
			return buscaAcessoComodo(us_nome, cd_id);//CHAMA A BUSCA PARA RETORNAR OS DADOS INSERIDO
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

	//REMOVE UM ACESSO DO USUARIO
	public AcessoTO bloqueiaAcesso(String us_nome, int cd_id) throws Exception{
		Connection conn = null;
	    String sqlDelete = "DELETE FROM tb_acesso WHERE us_nome = ? and cd_id = ?";
	    PreparedStatement stm = null;

	    try{
	    	Class.forName(Uteis.DRIVER); 
			conn = DriverManager.getConnection(Uteis.DBURL);
			stm = conn.prepareStatement(sqlDelete);
			stm.setString(1, us_nome);
			stm.setInt(2, cd_id);
			stm.executeUpdate();
	
			return buscaAcessoComodo(us_nome,cd_id);//RETORNA UM ARRAY VAZIO APENAS SE EXCLUIR COM SUCESSO
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
