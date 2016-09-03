package mysqldao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import dao.LampadaDAO;
import model.Lampada;
import to.LampadaTO;

public class MysqlLampadaDAO implements LampadaDAO {
	//BUSCA UMA LAMPADA NO BANCO - TELA DE ADMIN
	public LampadaTO busca(String lp_nome) throws Exception{ 
		Connection conn = null;
	    String sqlSelect = "SELECT lp_id, lp_nome, lp_tensao, lp_consumo, lp_constotal, cd_id FROM tb_lampada WHERE lp_nome like ? ";
	    PreparedStatement stm = null;
	    ResultSet rs = null;
	    LampadaTO lampadaTO = new LampadaTO();

	    try{
	    	Class.forName(MysqlDAOFactory.DRIVER); 
			conn = DriverManager.getConnection(MysqlDAOFactory.DBURL);
			stm = conn.prepareStatement(sqlSelect);
			stm.setString(1, lp_nome+"%");
			rs = stm.executeQuery();
		
			while(rs.next()) {
				Lampada lampada = new Lampada();
				lampada.setLp_id(rs.getInt("lp_id"));
				lampada.setLp_nome(rs.getString("lp_nome"));
				lampada.setLp_tensao(rs.getInt("lp_tensao"));
				lampada.setLp_consumo(rs.getDouble("lp_consumo"));
				lampada.setLp_constotal(rs.getDouble("lp_constotal"));
				lampada.setCd_id(rs.getInt("cd_id"));
				lampadaTO.add(lampada);
			}
			return lampadaTO;
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
	
	
	//INSERE NOVA LAMPADA
	public LampadaTO insere(String lp_nome, int lp_tensao, double lp_consumo, double lp_constotal, int cd_id) throws Exception{
		Connection conn = null;
	    String sqlInsert = "INSERT INTO tb_lampada(lp_nome, lp_tensao, lp_consumo, lp_constotal, cd_id) VALUES(?, ?, ?, ?, ?) ";
	    PreparedStatement stm = null;

	    try{
	    	Class.forName(MysqlDAOFactory.DRIVER); 
			conn = DriverManager.getConnection(MysqlDAOFactory.DBURL);
			stm = conn.prepareStatement(sqlInsert);
			stm.setString(1, lp_nome);
			stm.setInt(2, lp_tensao);
			stm.setDouble(3, lp_consumo);
			stm.setDouble(4, lp_constotal);
			stm.setInt(5, cd_id);
			stm.executeUpdate();
	
			return busca(lp_nome);//CHAMA A BUSCA DE USUARIO PARA RETORNAR OS DADOS INSERIDO
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
	public LampadaTO altera(int lp_id, String lp_nome, int lp_tensao, double lp_consumo, double lp_constotal, int cd_id) throws Exception{
		Connection conn = null;
	    String sqlUpdate = "UPDATE tb_lampada SET lp_nome = ?, lp_tensao = ?, lp_consumo = ?, lp_constotal = ?, cd_id = ? WHERE lp_id= ?";
	    PreparedStatement stm = null;

	    try{
	    	Class.forName(MysqlDAOFactory.DRIVER); 
			conn = DriverManager.getConnection(MysqlDAOFactory.DBURL);
			stm = conn.prepareStatement(sqlUpdate);
			stm.setString(1, lp_nome);
			stm.setInt(2, lp_tensao);
			stm.setDouble(3, lp_consumo);
			stm.setDouble(4, lp_constotal);
			stm.setInt(5, cd_id);
			stm.setInt(6, lp_id);
			stm.executeUpdate();
	
			return busca(lp_nome);//CHAMA A BUSCA DE COMODO PARA RETORNAR OS DADOS ALTERADO
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
	public String exclui(String lp_id) throws Exception{
		Connection conn = null;
	    String sqlDelete = "DELETE FROM tb_lampada WHERE lp_id = ?";
	    PreparedStatement stm = null;

	    try{
	    	Class.forName(MysqlDAOFactory.DRIVER); 
			conn = DriverManager.getConnection(MysqlDAOFactory.DBURL);
			stm = conn.prepareStatement(sqlDelete);
			stm.setString(1, lp_id);
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
