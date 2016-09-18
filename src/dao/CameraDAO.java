package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import model.Camera;
import Uteis.Uteis;
import to.CameraTO;

public class CameraDAO {
	//BUSCA CAMERA NO BANCO - TELA DE ADMIN
	public CameraTO busca(String cm_nome) throws Exception{ 
		Connection conn = null;
	    String sqlSelect = "SELECT cm_id, cm_nome, cm_ip, cd_id FROM tb_camera WHERE cm_nome like ? ";
	    PreparedStatement stm = null;
	    ResultSet rs = null;
	    CameraTO cameraTO = new CameraTO();

	    try{
	    	Class.forName(Uteis.DRIVER); 
			conn = DriverManager.getConnection(Uteis.DBURL);
			stm = conn.prepareStatement(sqlSelect);
			stm.setString(1, cm_nome+"%");
			rs = stm.executeQuery();
		
			while(rs.next()) {
				Camera camera = new Camera();
				camera.setCm_id(rs.getInt("cm_id"));
				camera.setCm_nome(rs.getString("cm_nome"));
				camera.setCm_ip(rs.getString("cm_ip"));
				camera.setCd_id(rs.getInt("cd_id"));
				cameraTO.add(camera);
			}
			return cameraTO;
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
	
	
	//INSERE NOVA CAMERA
	public CameraTO insere(String cm_nome, String cm_ip, int cd_id) throws Exception{
		Connection conn = null;
	    String sqlInsert = "INSERT INTO tb_camera(cm_nome, cm_ip, cd_id) VALUES(?, ?, ?) ";
	    PreparedStatement stm = null;

	    try{
	    	Class.forName(Uteis.DRIVER); 
			conn = DriverManager.getConnection(Uteis.DBURL);
			stm = conn.prepareStatement(sqlInsert);
			stm.setString(1, cm_nome);
			stm.setString(2, cm_ip);
			stm.setInt(3, cd_id);
			stm.executeUpdate();
	
			return busca(cm_nome);//CHAMA A BUSCA PARA RETORNAR OS DADOS INSERIDO
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

	//ALTERA DADOS DA CAMERA
	public CameraTO altera(int cm_id, String cm_nome, String cm_ip, int cd_id) throws Exception{
		Connection conn = null;
	    String sqlUpdate = "UPDATE tb_camera SET cm_nome = ?, cm_ip= ?, cd_id = ?  WHERE cm_id = ?";
	    PreparedStatement stm = null;

	    try{
	    	Class.forName(Uteis.DRIVER); 
			conn = DriverManager.getConnection(Uteis.DBURL);
			stm = conn.prepareStatement(sqlUpdate);
			stm.setString(1, cm_nome);
			stm.setString(2, cm_ip);
			stm.setInt(3, cd_id);
			stm.setInt(4, cm_id);
			stm.executeUpdate();
	
			return busca(cm_nome);//CHAMA A BUSCA PARA RETORNAR OS DADOS ALTERADO
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
	
	//EXCLUI CAMERA
	public String exclui(String cm_id) throws Exception{
		Connection conn = null;
	    String sqlDelete = "DELETE FROM tb_camera WHERE cm_id = ?";
	    PreparedStatement stm = null;

	    try{
	    	Class.forName(Uteis.DRIVER); 
			conn = DriverManager.getConnection(Uteis.DBURL);
			stm = conn.prepareStatement(sqlDelete);
			stm.setString(1, cm_id);
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
