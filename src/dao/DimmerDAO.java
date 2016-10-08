package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import Uteis.Uteis;
import model.Dimmer;
import to.DimmerTO;

public class DimmerDAO {
	//BUSCA UM DIMMER NO BANCO - TELA DE ADMIN
	public DimmerTO busca(String dm_id) throws Exception{ 
		Connection conn = null;
	    String sqlSelect = "SELECT d.dm_id, l.lp_id, l.lp_nome, d.dm_porta FROM tb_dimmer d, tb_lampada l WHERE d.lp_id = l.lp_id and d.dm_id like ? ";
	    PreparedStatement stm = null;
	    ResultSet rs = null;
	    DimmerTO dimmerTO = new DimmerTO();
	
	    try{
	    	conn = Uteis.connection();
			stm = conn.prepareStatement(sqlSelect);
			stm.setString(1, dm_id+"%");
			rs = stm.executeQuery();
		
			while(rs.next()) {
				Dimmer dimmer = new Dimmer();
				dimmer.setDm_id(rs.getInt("dm_id"));
				dimmer.setLp_id(rs.getInt("lp_id"));
				dimmer.setLp_nome(rs.getString("lp_nome"));
				dimmer.setDm_porta(rs.getInt("dm_porta"));
				dimmerTO.add(dimmer);
			}
			return dimmerTO;
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
	
	
	//INSERE NOVO DIMMER
	public DimmerTO insere(int  lp_id, int dm_porta) throws Exception{
		Connection conn = null;
	    String sqlInsert = "INSERT INTO tb_dimmer(lp_id, dm_porta) VALUES(?, ?) ";
	    PreparedStatement stm = null;
	
	    try{
	    	conn = Uteis.connection();
	    	//Statement.RETURN_GENERATED_KEYS FAZ COM QUE RETORNO OS VALORES DE AUTOINCREMENTO DO BANCO
			stm = conn.prepareStatement(sqlInsert, Statement.RETURN_GENERATED_KEYS);
			stm.setInt(1, lp_id);
			stm.setInt(2, dm_porta);
			stm.executeUpdate();
			
			
			//PEGA O VALOR DE AUTO INCREMENTO DE ID
			ResultSet rs = stm.getGeneratedKeys();
			int dm_id = 0;
			if (rs.next()) {
				System.out.println(rs.toString());
			    dm_id = rs.getInt(1);
			}
	
			return busca(dm_id+"%");//CHAMA A BUSCA DE DIMMER PARA RETORNAR OS DADOS INSERIDO
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
	
	//ALTERA DADOS DO DIMMER
	public DimmerTO altera(int dm_id, int lp_id, int dm_porta) throws Exception{
		Connection conn = null;
	    String sqlUpdate = "UPDATE tb_dimmer SET lp_id = ?, dm_porta = ? WHERE dm_id= ?";
	    PreparedStatement stm = null;
	    
	    try{
	    	conn = Uteis.connection();
			stm = conn.prepareStatement(sqlUpdate);
			stm.setInt(1, lp_id);
			stm.setInt(2, dm_porta);
			stm.setInt(3, dm_id);
			stm.executeUpdate();
	
			return busca(dm_id+"%");//CHAMA A BUSCA DE DIMMER PARA RETORNAR OS DADOS ALTERADO
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
	
	//EXCLUI DIMMER
	public String exclui(int dm_id) throws Exception{
		Connection conn = null;
	    String sqlDelete = "DELETE FROM tb_dimmer WHERE dm_id = ?";
	    PreparedStatement stm = null;
	
	    try{
	    	conn = Uteis.connection();
			stm = conn.prepareStatement(sqlDelete);
			stm.setInt(1, dm_id);
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
