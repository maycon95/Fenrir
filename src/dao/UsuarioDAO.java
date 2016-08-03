package dao;

import to.UsuarioTO;

public interface UsuarioDAO {
	UsuarioTO logar(String usuario, String senha);
}
