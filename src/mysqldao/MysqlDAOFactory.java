package mysqldao;

import dao.CameraDAO;
import dao.ComodoDAO;
import dao.DAOFactory;
import dao.LampadaDAO;
import dao.PortaoDAO;
import dao.TemperaturaDAO;
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

	// MysqlLampadaDAO implementa a interface LampadaDAO
	// portanto isso permite que eu retorne esse tipo.	
	public LampadaDAO getLampadaDAO(){
		return new MysqlLampadaDAO();
	}

	// MysqlTemperaturaDAO implementa a interface TemperaturaDAO
	// portanto isso permite que eu retorne esse tipo.	
	public TemperaturaDAO getTemperaturaDAO(){
		return new MysqlTemperaturaDAO();
	}

	// MysqlCameraDAO implementa a interface CameraDAO
	// portanto isso permite que eu retorne esse tipo.	
	public CameraDAO getCameraDAO(){
		return new MysqlCameraDAO();
	}
	
	// MysqlPortaoDAO implementa a interface PortaoDAO
	// portanto isso permite que eu retorne esse tipo.	
	public PortaoDAO getPortaoDAO(){
		return new MysqlPortaoDAO();
	}
}
