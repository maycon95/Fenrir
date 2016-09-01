package mysqldao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import dao.ComodoDAO;
import model.Comodo;
import to.ComodoTO;

public class MysqlComodoDAO implements ComodoDAO{
	//BUSCA UM COMODO NO BANCO
	public ComodoTO busca(String cd_nome) throws Exception{
		Connection conn = null;
	    String sqlSelect = "SELECT cd_id, cd_nome FROM tb_comodo WHERE cd_nome like ? ";
	    PreparedStatement stm = null;
	    ResultSet rs = null;
	    ComodoTO comodoTO = new ComodoTO();

	    try{
	    	Class.forName(MysqlDAOFactory.DRIVER); 
			conn = DriverManager.getConnection(MysqlDAOFactory.DBURL);
			stm = conn.prepareStatement(sqlSelect);
			stm.setString(1, cd_nome+"%");
			rs = stm.executeQuery();
		
			while(rs.next()) {
				Comodo comodo = new Comodo();
				comodo.setCd_id(rs.getInt("cd_id"));
				comodoTO.add(comodo);
			}
			return comodoTO;
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
	
	
	//INSERE NOVO COMODO
	public ComodoTO insere(String cd_nome) throws Exception{
		Connection conn = null;
	    String sqlInsert = "INSERT INTO tb_comodo(cd_nome) VALUES(?) ";
	    PreparedStatement stm = null;

	    try{
	    	Class.forName(MysqlDAOFactory.DRIVER); 
			conn = DriverManager.getConnection(MysqlDAOFactory.DBURL);
			stm = conn.prepareStatement(sqlInsert);
			stm.setString(1, cd_nome);
			stm.executeUpdate();
	
			return busca(cd_nome);//CHAMA A BUSCA DE USUARIO PARA RETORNAR OS DADOS DO USUARIO INSERIDO
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
	public ComodoTO altera(String cd_id, String cd_nome) throws Exception{
		Connection conn = null;
	    String sqlUpdate = "UPDATE tb_comodo SET cd_nome = ? WHERE cd_id= ?";
	    PreparedStatement stm = null;

	    try{
	    	Class.forName(MysqlDAOFactory.DRIVER); 
			conn = DriverManager.getConnection(MysqlDAOFactory.DBURL);
			stm = conn.prepareStatement(sqlUpdate);
			stm.setString(1, cd_nome);
			stm.setString(2, cd_id);
			stm.executeUpdate();
	
			return busca(cd_nome);//CHAMA A BUSCA DE COMODO PARA RETORNAR OS DADOS DO COMODO ALTERADO
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
	public String exclui(String cd_id) throws Exception{
		Connection conn = null;
	    String sqlDelete = "DELETE FROM tb_usuario WHERE us_nome = ?";
	    PreparedStatement stm = null;

	    try{
	    	Class.forName(MysqlDAOFactory.DRIVER); 
			conn = DriverManager.getConnection(MysqlDAOFactory.DBURL);
			stm = conn.prepareStatement(sqlDelete);
			stm.setString(1, cd_id);
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
