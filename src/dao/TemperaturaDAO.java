package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import model.Temperatura;
import Uteis.Uteis;
import to.TemperaturaTO;

public class TemperaturaDAO {
	//BUSCA UM SENSOR DE TEMPERATURA NO BANCO - TELA DE ADMIN
	public TemperaturaTO busca(String tp_nome) throws Exception{ 
		Connection conn = null;
	    String sqlSelect = "SELECT tp_id, tp_nome, tp_tempmax, tp_tempmin, tp_status, tp_porta, cd_id FROM tb_temperatura WHERE tp_nome like ? ";
	    PreparedStatement stm = null;
	    ResultSet rs = null;
	    TemperaturaTO temperaturaTO = new TemperaturaTO();

	    try{
	    	Class.forName(Uteis.DRIVER); 
			conn = DriverManager.getConnection(Uteis.DBURL);
			stm = conn.prepareStatement(sqlSelect);
			stm.setString(1, tp_nome+"%");
			rs = stm.executeQuery();
		
			while(rs.next()) {
				Temperatura temperatura = new Temperatura();
				temperatura.setTp_id(rs.getInt("tp_id"));
				temperatura.setTp_nome(rs.getString("tp_nome"));
				temperatura.setTp_tempmax(rs.getDouble("tp_tempmax"));
				temperatura.setTp_tempmin(rs.getDouble("tp_tempmin"));
				temperatura.setTp_status(rs.getString("tp_status").charAt(0));
				temperatura.setTp_porta(rs.getInt("tp_porta"));
				temperatura.setCd_id(rs.getInt("cd_id"));
				temperaturaTO.add(temperatura);
			}
			return temperaturaTO;
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
	
	
	//INSERE NOVO SENSOR
	public TemperaturaTO insere(String tp_nome, double tp_tempmax, double tp_tempmin, char tp_status, int tp_porta, int cd_id) throws Exception{
		Connection conn = null;
	    String sqlInsert = "INSERT INTO tb_temperatura(tp_nome, tp_tempmax, tp_tempmin, tp_status, tp_porta, cd_id) VALUES(?, ?, ?, ?, ?, ?) ";
	    PreparedStatement stm = null;

	    try{
	    	Class.forName(Uteis.DRIVER); 
			conn = DriverManager.getConnection(Uteis.DBURL);
			stm = conn.prepareStatement(sqlInsert);
			stm.setString(1, tp_nome);
			stm.setDouble(2, tp_tempmax);
			stm.setDouble(3, tp_tempmin);
			stm.setString(4, tp_status+"");
			stm.setInt(5, tp_porta);
			stm.setInt(6, cd_id);
			stm.executeUpdate();
	
			return busca(tp_nome);//CHAMA A BUSCA PARA RETORNAR OS DADOS INSERIDO
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

	//ALTERA DADOS DO COMODO
	public TemperaturaTO altera(int tp_id, String tp_nome, double tp_tempmax, double tp_tempmin, char tp_status, int tp_porta, int cd_id) throws Exception{
		Connection conn = null;
	    String sqlUpdate = "UPDATE tb_temperatura SET tp_nome = ?, tp_tempmax = ?, tp_tempmin = ?, tp_status = ?, tp_porta = ?, cd_id = ?  WHERE tp_id = ?";
	    PreparedStatement stm = null;

	    try{
	    	Class.forName(Uteis.DRIVER); 
			conn = DriverManager.getConnection(Uteis.DBURL);
			stm = conn.prepareStatement(sqlUpdate);
			stm.setString(1, tp_nome);
			stm.setDouble(2, tp_tempmax);
			stm.setDouble(3, tp_tempmin);
			stm.setString(4, tp_status+"");
			stm.setInt(5, tp_porta);
			stm.setInt(6, cd_id);
			stm.setInt(7, tp_id);
			stm.executeUpdate();
	
			return busca(tp_nome);//CHAMA A BUSCA PARA RETORNAR OS DADOS ALTERADO
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
	
	//EXCLUI COMODO
	public String exclui(String tp_id) throws Exception{
		Connection conn = null;
	    String sqlDelete = "DELETE FROM tb_temperatura WHERE tp_id = ?";
	    PreparedStatement stm = null;

	    try{
	    	Class.forName(Uteis.DRIVER); 
			conn = DriverManager.getConnection(Uteis.DBURL);
			stm = conn.prepareStatement(sqlDelete);
			stm.setString(1, tp_id);
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
