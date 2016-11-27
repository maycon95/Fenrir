package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import model.Portao;
import Uteis.Uteis;
import to.PortaoTO;

public class PortaoDAO {	
	//BUSCA PORTAO NO BANCO - TELA DE ADMIN
	public PortaoTO busca(String pt_nome) throws Exception{ 
		Connection conn = null;
	    String sqlSelect = "SELECT pt_id, pt_nome, pt_porta, cd_id FROM tb_portao WHERE pt_nome like ? ";
	    PreparedStatement stm = null;
	    ResultSet rs = null;
	    PortaoTO portaoTO = new PortaoTO();

	    try{
	    	conn = Uteis.connection();
			stm = conn.prepareStatement(sqlSelect);
			stm.setString(1, pt_nome+"%");
			rs = stm.executeQuery();
		
			while(rs.next()) {
				Portao portao = new Portao();
				portao.setPt_id(rs.getInt("pt_id"));
				portao.setPt_nome(rs.getString("pt_nome"));
				portao.setPt_porta(rs.getInt("pt_porta"));
				portao.setCd_id(rs.getInt("cd_id"));
				portaoTO.add(portao);
			}
			return portaoTO;
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
	
	
	//INSERE NOVA PORTAO
	public PortaoTO insere(String pt_nome, int pt_porta, int cd_id) throws Exception{
		Connection conn = null;
	    String sqlInsert = "INSERT INTO tb_portao(pt_nome, pt_porta, cd_id) VALUES(?, ?, ?) ";
	    PreparedStatement stm = null;

	    try{
	    	conn = Uteis.connection();
			stm = conn.prepareStatement(sqlInsert);
			stm.setString(1, pt_nome);
			stm.setInt(2, pt_porta);
			stm.setInt(3, cd_id);
			stm.executeUpdate();
	
			return busca(pt_nome);//CHAMA A BUSCA PARA RETORNAR OS DADOS INSERIDO
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

	//ALTERA DADOS DA PORTAO
	public PortaoTO altera(int pt_id, String pt_nome, int pt_porta, int cd_id) throws Exception{
		Connection conn = null;
	    String sqlUpdate = "UPDATE tb_portao SET pt_nome = ?, pt_porta = ?, cd_id = ?  WHERE pt_id = ?";
	    PreparedStatement stm = null;

	    try{
	    	conn = Uteis.connection();
			stm = conn.prepareStatement(sqlUpdate);
			stm.setString(1, pt_nome);
			stm.setInt(2, pt_porta);
			stm.setInt(3, cd_id);
			stm.setInt(4, pt_id);
			stm.executeUpdate();
	
			return busca(pt_nome);//CHAMA A BUSCA PARA RETORNAR OS DADOS ALTERADO
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
	
	//EXCLUI PORTAO
	public String exclui(String pt_id) throws Exception{
		Connection conn = null;
	    String sqlDelete = "DELETE FROM tb_portao WHERE pt_id = ?";
	    PreparedStatement stm = null;

	    try{
	    	conn = Uteis.connection();
			stm = conn.prepareStatement(sqlDelete);
			stm.setString(1, pt_id);
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



	//ATUALIZA O STATUS
	public void updateStatus(int pt_id, String pt_status) throws Exception{
		Connection conn = null;
	    String sqlUpdate = "UPDATE tb_portao SET pt_status = ? WHERE pt_id= ?";
	    PreparedStatement stm = null;
	    
	    try{
	    	conn = Uteis.connection();
			stm = conn.prepareStatement(sqlUpdate);
			stm.setString(1, pt_status);
			stm.setInt(2, pt_id);
			stm.executeUpdate();
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
