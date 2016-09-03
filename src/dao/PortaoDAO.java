package dao;

import to.PortaoTO;

public interface PortaoDAO {
	PortaoTO busca(String pt_nome) throws Exception;
	PortaoTO insere(String pt_nome, int cd_id) throws Exception;
	PortaoTO altera(int pt_id, String pt_nome, int cd_id) throws Exception;
	String exclui(String pt_id) throws Exception;
}
