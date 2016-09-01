package dao;

import mysqldao.MysqlDAOFactory;

public abstract class DAOFactory {

	// Uma opcaoo para cada banco de dados
	public static final int MYSQL = 1;

	// quais DAOs vão estar disponiveis
	public abstract UsuarioDAO getUsuarioDAO();
	public abstract ComodoDAO getComodoDAO();


	// recebe o id do banco quer quer utilizar
	// e retorna a respectiva DAOFactory
	public static DAOFactory getDAOFactory(int qualFactory) {
		switch (qualFactory) {
		case MYSQL:
			return new MysqlDAOFactory();
		default:
			return null;
		}
	}

}