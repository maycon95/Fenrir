package dao;

import to.ComodoTO;

public interface ComodoDAO {
	ComodoTO busca(String cd_nome) throws Exception;
	ComodoTO insere(String cd_nome) throws Exception;
	ComodoTO altera(String cd_id, String cd_nome) throws Exception;
	String exclui(String cd_id) throws Exception;
}
