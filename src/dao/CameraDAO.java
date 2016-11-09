package dao;

import java.sql.Connection;
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
	    String sqlSelect = "SELECT cm_id, cm_nome, cm_addr, cm_port, cm_user, cm_pwd, cd_id FROM tb_camera WHERE cm_nome like ? ";
	    PreparedStatement stm = null;
	    ResultSet rs = null;
	    CameraTO cameraTO = new CameraTO();

	    try{
	    	conn = Uteis.connection();
			stm = conn.prepareStatement(sqlSelect);
			stm.setString(1, cm_nome+"%");
			rs = stm.executeQuery();
		
			while(rs.next()) {
				Camera camera = new Camera();
				camera.setCm_id(rs.getInt("cm_id"));
				camera.setCm_nome(rs.getString("cm_nome"));
				camera.setCm_addr(rs.getString("cm_addr"));
				camera.setCm_port(Integer.parseInt(rs.getString("cm_port")));
				camera.setCm_user(rs.getString("cm_user"));
				camera.setCm_pwd(rs.getString("cm_pwd"));
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
	public CameraTO insere(String cm_nome, String cm_addr, int cm_port, String cm_user, String cm_pwd, int cd_id) throws Exception{
		Connection conn = null;
	    String sqlInsert = "INSERT INTO tb_camera(cm_nome, cm_addr, cm_port, cm_user, cm_pwd, cd_id) VALUES(?, ?, ?, ?, ?, ?) ";
	    PreparedStatement stm = null;

	    try{
	    	conn = Uteis.connection();
			stm = conn.prepareStatement(sqlInsert);
			stm.setString(1, cm_nome);
			stm.setString(2, cm_addr);
			stm.setInt(3, cm_port);
			stm.setString(4, cm_user);
			stm.setString(5, cm_pwd);
			stm.setInt(6, cd_id);
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
	public CameraTO altera(int cm_id, String cm_nome, String cm_addr, int cm_port, String cm_user, String cm_pwd, int cd_id) throws Exception{
		Connection conn = null;
	    String sqlUpdate = "UPDATE tb_camera SET cm_nome = ?, cm_addr = ?, cm_port = ?, cm_user = ?, cm_pwd = ?, cd_id = ?  WHERE cm_id = ?";
	    PreparedStatement stm = null;

	    try{
	    	conn = Uteis.connection();
			stm = conn.prepareStatement(sqlUpdate);
			stm.setString(1, cm_nome);
			stm.setString(2, cm_addr);
			stm.setInt(3, cm_port);
			stm.setString(4, cm_user);
			stm.setString(5, cm_pwd);
			stm.setInt(6, cd_id);
			stm.setInt(7, cm_id);
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
	    	conn = Uteis.connection();
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
