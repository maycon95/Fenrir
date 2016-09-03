package dao;

import to.LampadaTO;

public interface LampadaDAO {
	LampadaTO busca(String lp_nome) throws Exception;
	LampadaTO insere(String lp_nome, int lp_tensao, double lp_consumo, double lp_constotal, int cd_id) throws Exception;
	LampadaTO altera(int lp_id, String lp_nome, int lp_tensao, double lp_consumo, double lp_constotal, int cd_id) throws Exception;
	String exclui(String lp_id) throws Exception;
}
