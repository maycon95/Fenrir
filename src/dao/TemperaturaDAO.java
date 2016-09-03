package dao;

import to.TemperaturaTO;

public interface TemperaturaDAO {
	TemperaturaTO busca(String tp_nome) throws Exception;
	TemperaturaTO insere(String tp_nome, double tp_tempmax, double tp_tempmin, char tp_status, int cd_id) throws Exception;
	TemperaturaTO altera(int tp_id, String tp_nome, double tp_tempmax, double tp_tempmin, char tp_status, int cd_id) throws Exception;
	String exclui(String tp_id) throws Exception;
}
