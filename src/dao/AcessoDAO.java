package dao;

import to.AcessoTO;

public interface AcessoDAO {
	AcessoTO buscaPorUser(String us_nome) throws Exception;
	AcessoTO buscaAcessoComodo(String us_nome, int cd_id) throws Exception;
	AcessoTO gravaAcesso(String us_nome, int cd_id, char ac_libera) throws Exception;
	AcessoTO bloqueiaAcesso(String us_nome, int cd_id) throws Exception;
}
