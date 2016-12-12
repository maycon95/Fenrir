package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import model.Acesso;
import model.Usuario;
import to.UsuarioTO;
import Uteis.Uteis;

public class UsuarioDAO {
	//VERIFICA SE O USUARIO E SENHA INFORMADO EXISTEM
	public UsuarioTO logar(String us_nome, String us_senha) throws Exception{
		Connection conn = null;
	    String sqlSelect = "SELECT us_nome, us_senha FROM TB_USUARIO WHERE us_nome = ? AND us_senha = ?";

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
//	    String sqlSelect = "SELECT us_nome FROM tb_usuario WHERE us_nome like ? ";
	    
		String sqlSelect = "SELECT u.us_nome, c.cd_id, c.cd_nome, ifnull((SELECT ac_libera FROM TB_ACESSO WHERE cd_id = c.cd_id AND us_nome = u.us_nome), 'B') AS ac_libera"+
									" FROM TB_USUARIO u, tb_comodo c WHERE us_nome like ? order by u.us_nome, c.cd_nome";
	    
	    PreparedStatement stm = null;
	    ResultSet rs = null;
	    UsuarioTO userTO = new UsuarioTO();

	    try{
	    	conn = Uteis.connection();
			stm = conn.prepareStatement(sqlSelect);
			stm.setString(1, us_nome+"%");
			rs = stm.executeQuery();
		
			String usuarioAtual = "";
			Usuario user = null;
			while(rs.next()) {	
				if(!rs.getString("us_nome").equals(usuarioAtual)){
					if(!rs.isFirst()) userTO.getLista().add(user);

					user = new Usuario();
					user.setUsuario(rs.getString("us_nome"));
					usuarioAtual = rs.getString("us_nome");
					
				}
				Acesso acesso = new Acesso();
				acesso.setCd_id(rs.getInt("cd_id"));
				acesso.setCd_nome(rs.getString("cd_nome"));
				acesso.setAc_libera(rs.getString("ac_libera").charAt(0));
				acesso.setUs_nome(rs.getString("us_nome"));
				user.getAcessos().add(acesso);
					
				if(rs.isLast()){
					userTO.getLista().add(user);
				}
			}
			return userTO;

	    	
	    	
	    	
//	    	conn = Uteis.connection();
//			stm = conn.prepareStatement(sqlSelect);
//			stm.setString(1, us_nome+"%");
//			rs = stm.executeQuery();
//		
//			while(rs.next()) {
//				Usuario user = new Usuario();
//				user.setUsuario(rs.getString("us_nome"));
//				userTO.add(user);
//			}
//			return userTO;
	    }
	    catch (Exception e){
	    	e.printStackTrace();
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
	    String sqlInsert = "INSERT INTO TB_USUARIO(us_nome, us_senha) VALUES(?, 'ed0532dd60bcd72660237db7af58eb98') ";//SENHA PADRAO fenrir
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
	    String sqlUpdate = "UPDATE TB_USUARIO SET us_nome = ? WHERE us_nome = ?";//SENHA PADRAO fenrir
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
	    String sqlDelete = "DELETE FROM TB_USUARIO WHERE us_nome = ?";
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
	
	
	
	
	
	
	
	
	
	
	
	//ACESSOS
	//BUSCA TODOS OS ACESSOS DE UM USUARIO NO BANCO - TELA DE ADMIN
	public UsuarioTO buscaAcesso(String us_nome) throws Exception{ 
		Connection conn = null;
	    String sqlSelect = "SELECT c.cd_id, c.cd_nome, "+
	    							"ifnull((SELECT ac_libera FROM TB_ACESSO WHERE cd_id = c.cd_id AND us_nome = ?), 'B') AS ac_libera "+
    								"FROM TB_COMODO c";

	    PreparedStatement stm = null;
	    ResultSet rs = null;
	    UsuarioTO usuarioTO = new UsuarioTO();
	    Usuario usuario = new Usuario();
	    
	    try{
	    	conn = Uteis.connection();
			stm = conn.prepareStatement(sqlSelect);
			stm.setString(1, us_nome);
			rs = stm.executeQuery();
		
			while(rs.next()) {
				Acesso acesso = new Acesso();
				acesso.setCd_id(rs.getInt("cd_id"));
				acesso.setCd_nome(rs.getString("cd_nome"));
				acesso.setAc_libera(rs.getString("ac_libera").charAt(0));
				acesso.setUs_nome(us_nome);
				usuario.getAcessos().add(acesso);
			}
			usuarioTO.add(usuario);
			return usuarioTO;
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
	public UsuarioTO buscaAcessoComodo(String us_nome, int cd_id) throws Exception{ 
		Connection conn = null;
	    String sqlSelect = "SELECT c.cd_id, c.cd_nome, "+
	    							"ifnull((SELECT ac_libera FROM TB_ACESSO WHERE cd_id = c.cd_id AND us_nome = ?), 'B') AS ac_libera "+
    								"FROM TB_COMODO c where cd_id = ?";
	    
	    PreparedStatement stm = null;
	    ResultSet rs = null;
	    UsuarioTO usuarioTO = new UsuarioTO();
	    Usuario usuario = new Usuario();
	    usuario.setUsuario(us_nome);
	    
	    try{
	    	conn = Uteis.connection();
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
				usuario.getAcessos().add(acesso);
			}
			usuarioTO.add(usuario);
			return usuarioTO;
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
	public UsuarioTO gravaAcesso(String us_nome, int cd_id, char ac_libera) throws Exception{
		Connection conn = null;
	    String sqlInsert = "INSERT INTO TB_ACESSO(us_nome,cd_id,ac_libera) values(?, ?, ?); ";
	    PreparedStatement stm = null;

	    try{
	    	conn = Uteis.connection();
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
	public UsuarioTO bloqueiaAcesso(String us_nome, int cd_id) throws Exception{
		Connection conn = null;
	    String sqlDelete = "DELETE FROM TB_ACESSO WHERE us_nome = ? and cd_id = ?";
	    PreparedStatement stm = null;

	    try{
	    	conn = Uteis.connection();
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
