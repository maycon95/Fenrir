package mysqldao;


import dao.ComodoDAO;
import dao.DAOFactory;
import dao.UsuarioDAO;

public class MysqlDAOFactory  extends DAOFactory{

	public static final String DRIVER = "com.mysql.jdbc.Driver";
	public static final String DBURL = "jdbc:mysql://localhost/fenrir?user=maycon&password=1234";
	
	// MysqlUsuarioDAO implementa a interface UsuarioDAO
	// portanto isso permite que eu retorne esse tipo.	
	public UsuarioDAO getUsuarioDAO(){
		return new MysqlUsuarioDAO();
	}
	
	// MysqlComodoDAO implementa a interface ComodoDAO
	// portanto isso permite que eu retorne esse tipo.	
	public ComodoDAO getComodoDAO(){
		return new MysqlComodoDAO();
	}
	
}
