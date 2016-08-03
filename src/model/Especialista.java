package model;


import dao.DAOFactory;
import to.UsuarioTO;

public class Especialista {
	
	private static final int MYSQL = 1;
	
	//login
	public UsuarioTO verificaLogin(String usuario, String senha){
		return DAOFactory.getDAOFactory(MYSQL).getUsuarioDAO().logar(usuario, senha);
	}
	
	
	
}