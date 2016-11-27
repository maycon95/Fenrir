package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;


import model.Comodo;
import model.Lampada;
import model.Portao;
import model.Temperatura;
import Uteis.Uteis;
import to.ComodoTO;

public class ComodoDAO {
	//BUSCA UM COMODO NO BANCO
	public ComodoTO busca(String cd_nome) throws Exception{
		Connection conn = null;
	    String sqlSelect = "SELECT cd_id, cd_nome, cd_tipo FROM tb_comodo WHERE cd_nome like ? ";
	    PreparedStatement stm = null;
	    ResultSet rs = null;
	    ComodoTO comodoTO = new ComodoTO();

	    try{
	    	conn = Uteis.connection();
			stm = conn.prepareStatement(sqlSelect);
			stm.setString(1, cd_nome+"%");
			rs = stm.executeQuery();
		
			while(rs.next()) {
				Comodo comodo = new Comodo();
				comodo.setCd_id(rs.getInt("cd_id"));
				comodo.setCd_nome(rs.getString("cd_nome"));
				comodo.setCd_tipo(rs.getString("cd_tipo"));
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
	public ComodoTO insere(String cd_nome, String cd_tipo) throws Exception{
		Connection conn = null;
	    String sqlInsert = "INSERT INTO tb_comodo(cd_nome, cd_tipo) VALUES(?, ?) ";
	    PreparedStatement stm = null;

	    try{
	    	conn = Uteis.connection();
			stm = conn.prepareStatement(sqlInsert);
			stm.setString(1, cd_nome);
			stm.setString(2, cd_tipo);
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
	public ComodoTO altera(String cd_id, String cd_nome, String cd_tipo) throws Exception{
		Connection conn = null;
	    String sqlUpdate = "UPDATE tb_comodo SET cd_nome = ?, cd_tipo = ? WHERE cd_id= ?";
	    PreparedStatement stm = null;

	    try{
	    	conn = Uteis.connection();
			stm = conn.prepareStatement(sqlUpdate);
			stm.setString(1, cd_nome);
			stm.setString(2, cd_tipo);
			stm.setString(3, cd_id);
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
	    String sqlDelete = "DELETE FROM tb_comodo WHERE cd_id = ?";
	    PreparedStatement stm = null;

	    try{
	    	conn = Uteis.connection();
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

	

	//BUSCA BUSCA OS DISPOSITIVOS DE UM COMODO
	public ComodoTO buscaDispositivos(String cd_tipo, String us_nome) throws Exception{
		Connection conn = null;
		//CONEXAO COM O BANCO
		try{
			conn = Uteis.connection();
		}catch(Exception e){
			throw e;
		}
		//VERIFICA QUAIS COMODOS SERAO BUSCADOS DE ACORDO COM O ACESSO
		String sqlSelectAcesso = "SELECT cd.cd_id, cd.cd_nome FROM tb_comodo cd , tb_acesso ac "+
											"WHERE cd.cd_id = ac.cd_id AND ac.us_nome = ? AND cd.cd_tipo = ?";
		
		//BUSCA AS LAMPADAS
		String sqlSelectLampada = " SELECT lp_id, lp_status, lp_nome, lp_porta, cd_id, dm_valor, dm_porta " +
											" FROM tb_lampada where cd_id = ? order by lp_nome";

		String sqlSelectPortao = "SELECT pt_id, pt_status, pt_nome, pt_porta, cd_id FROM tb_portao WHERE cd_id = ?";
		
		String sqlSelectTemp = "SELECT tp_id, tp_nome, tp_temp, cd_id FROM tb_temperatura WHERE cd_id = ?";
		
		
	    PreparedStatement stm = null;
	    ResultSet rs = null;
	    ComodoTO comodoTO = new ComodoTO();

	    try{
			
	    	//PRIMEIRO VERIFICO OS COMODO QUE O USUARIO TEM ACESSO
	    	stm = conn.prepareStatement(sqlSelectAcesso);
			stm.setString(1, us_nome);
			stm.setString(2, cd_tipo);
			rs = stm.executeQuery();

			while(rs.next()) {
				Comodo comodo = new Comodo();
				comodo.setCd_id(rs.getInt("cd_id"));
				comodo.setCd_nome(rs.getString("cd_nome"));
				comodoTO.add(comodo);
			}

			
			stm.close();
			
			for(int i = 0; i < comodoTO.getLista().size(); i++){
				//BUSCO AS LAMPADAS DOS COMODOS DISPONIVEIS
		    	stm = conn.prepareStatement(sqlSelectLampada);
		    	stm.setInt(1, comodoTO.getLista().get(i).getCd_id());	    	
		    	rs = stm.executeQuery();	
		    	
				while(rs.next()) {
					Lampada lampada = new Lampada();
					lampada.setCd_id(rs.getInt("cd_id"));
					lampada.setLp_id(rs.getInt("lp_id"));
					lampada.setLp_nome(rs.getString("lp_nome"));
					lampada.setLp_porta(rs.getInt("lp_porta"));
					lampada.setDm_porta(rs.getInt("dm_porta"));
					lampada.setDm_valor(rs.getInt("dm_valor"));
					comodoTO.getLista().get(i).addLampada(lampada); // INSERE A LAMPADA NA LISTA
					
				}
				stm.close();
				
				
		    	//BUSCA PORTAO DO COMODO
		    	stm = conn.prepareStatement(sqlSelectPortao);
		    	stm.setInt(1, comodoTO.getLista().get(i).getCd_id());	    	
		    	rs = stm.executeQuery();
			
				while(rs.next()) {
					Portao portao = new Portao();
					portao.setCd_id(rs.getInt("cd_id"));
					portao.setPt_id(rs.getInt("pt_id"));
					portao.setPt_nome(rs.getString("pt_nome"));
					portao.setPt_porta(rs.getInt("pt_porta"));
					comodoTO.getLista().get(i).addPortao(portao); // INSERE O PORTAO NA LISTA
				}
				
				

				//BUSCO O SENSOR DO COMODO
		    	stm = conn.prepareStatement(sqlSelectTemp);
		    	stm.setInt(1, comodoTO.getLista().get(i).getCd_id());	    	
		    	rs = stm.executeQuery();	
		    	
				if(rs.next()) {
					Temperatura temp= new Temperatura();
					temp.setCd_id(rs.getInt("cd_id"));
					temp.setTp_id(rs.getInt("tp_id"));
					temp.setTp_nome(rs.getString("tp_nome"));
					temp.setTp_temp(Double.parseDouble(rs.getString("tp_temp")));
					comodoTO.getLista().get(i).addTemperatura(temp); // INSERE A LAMPADA NA LISTA
				}
				stm.close();
				
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

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//	//BUSCA BUSCA OS DISPOSITIVOS DE UM COMODO
//	public DispositivosTO buscaDispositivos(String cd_tipo, String us_nome) throws Exception{
//		Connection conn = null;
//		//CONEXAO COM O BANCO
//		try{
//			Class.forName(Uteis.DRIVER); 
//			conn = DriverManager.getConnection(Uteis.DBURL);
//			
//		}catch(Exception e){
//			throw e;
//		}
//		//VERIFICA QUAIS COMODOS SERAO BUSCADOS DE ACORDO COM O ACESSO
//		String sqlSelectAcesso = "SELECT cd.cd_id, cd.cd_nome FROM tb_comodo cd , tb_acesso ac "+
//											"WHERE cd.cd_id = ac.cd_id AND ac.us_nome = ? AND cd.cd_tipo = ?";
//		
//		//BUSCA AS LAMPADAS
//		String sqlSelectLampada = "SELECT lp.lp_id, lp.lp_status, lp.lp_nome, lp.cd_id FROM tb_lampada lp, tb_comodo cd "+
//															" WHERE lp.cd_id = cd.cd_id AND cd.cd_tipo = ?";
//		
//		String sqlSelectPortao = "SELECT pt.pt_id, pt.pt_status, pt.pt_nome, pt.cd_id FROM tb_portao pt, tb_comodo cd "+
//															" WHERE pt.cd_id = cd.cd_id AND cd.cd_tipo = ?";
//		
//	    PreparedStatement stm = null;
//	    ResultSet rs = null;
//	    DispositivosTO dispositivosTO = new DispositivosTO();
//
//	    try{
//			
//	    	//PRIMEIRO VERIFICO OS COMODO QUE O USUARIO TEM ACESSO
//	    	stm = conn.prepareStatement(sqlSelectAcesso);
//			stm.setString(1, us_nome);
//			stm.setString(2, cd_tipo);
//			rs = stm.executeQuery();
//
//			String comodosLiberados = " AND cd.cd_id in (,";
//			
//			while(rs.next()) {
//				Comodo comodo = new Comodo();
//				comodo.setCd_id(rs.getInt("cd_id"));
//				comodo.setCd_nome(rs.getString("cd_nome"));
//				dispositivosTO.addComodo(comodo);
//				comodosLiberados += ",\'"+rs.getInt("cd_id")+"\'";
//			}
//
//			comodosLiberados = comodosLiberados.replace(",,", "") + ")";
//
//			sqlSelectLampada += comodosLiberados;
//			sqlSelectPortao += comodosLiberados;
//			
//			stm.close();
//					
//	    	//BUSCO AS LAMPADAS DOS COMODOS DISPONIVEIS  
//	    	stm = conn.prepareStatement(sqlSelectLampada);
//	    	stm.setString(1, cd_tipo);	    	
//	    	rs = stm.executeQuery();	
//	    	
//			while(rs.next()) {
//				Lampada lampada = new Lampada();
//				lampada.setCd_id(rs.getInt("cd_id"));
//				lampada.setLp_id(rs.getInt("lp_id"));
//				lampada.setLp_nome(rs.getString("lp_nome"));
//				dispositivosTO.addLampada(lampada);
//			}
//			stm.close();
//				
//	    	//BUSCA PORTAO DO COMODO
//	    	stm = conn.prepareStatement(sqlSelectPortao);
//			stm.setString(1, cd_tipo);
//			rs = stm.executeQuery();
//		
//			while(rs.next()) {
//				Portao portao = new Portao();
//				portao.setCd_id(rs.getInt("cd_id"));
//				portao.setPt_id(rs.getInt("pt_id"));
//				portao.setPt_nome(rs.getString("pt_nome"));
//				dispositivosTO.addPortao(portao);
//			}
//			return dispositivosTO;
//	    }
//	    catch (Exception e){
//	    	throw e;
//	    }
//	    finally{
//	       if (stm != null){
//	          try{
//	             stm.close();
//	          }
//	          catch (SQLException e1){
//	             System.out.print(e1.getStackTrace());
//	          }
//	       }
//	    }
//	}

	
	
	//UPLOAD DA IMAGEM DO COMODO
	public String uploadPlanta(int cd_id, String cd_planta) throws Exception{
		Connection conn = null;
		String sqlUpdate = "UPDATE tb_comodo SET cd_planta = ? WHERE cd_id= ?";
	    PreparedStatement stm = null;

	    try{
	    	conn = Uteis.connection();
			stm = conn.prepareStatement(sqlUpdate);
			stm.setString(1, cd_planta);
			stm.setInt(2, cd_id);
			stm.executeUpdate();
	
			return "[]";//CHAMA A BUSCA DE USUARIO PARA RETORNAR OS DADOS DO USUARIO INSERIDO
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
	
	
	//BUSCA UM COMODO NO BANCO
	public String buscaImagem(int cd_id) throws Exception{
		Connection conn = null;
	    String sqlSelect = "select cd_planta from tb_comodo where cd_id = ? ";
	    PreparedStatement stm = null;
	    ResultSet rs = null;
	    String imagem = "";

	    try{
	    	conn = Uteis.connection();
			stm = conn.prepareStatement(sqlSelect);
			stm.setInt(1, cd_id);
			rs = stm.executeQuery();
			if(rs.next() && rs.getString("cd_planta") != null) {
				imagem =  rs.getString("cd_planta");
			}
			return imagem;
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
