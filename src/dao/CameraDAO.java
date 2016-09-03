package dao;

import to.CameraTO;

public interface CameraDAO {
	CameraTO busca(String cm_nome) throws Exception;
	CameraTO insere(String cm_nome, String cm_ip, int cd_id) throws Exception;
	CameraTO altera(int cm_id, String cm_nome, String cm_ip, int cd_id) throws Exception;
	String exclui(String cm_id) throws Exception;
}
