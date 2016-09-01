package dao;

import to.UsuarioTO;

public interface UsuarioDAO {
	UsuarioTO logar(String us_nome, String us_senha) throws Exception;
	UsuarioTO busca(String us_nome) throws Exception;
	UsuarioTO insere(String us_nome) throws Exception;
	UsuarioTO altera(String us_nome, String us_nome_old) throws Exception;
	String exclui(String us_nome) throws Exception;
}
