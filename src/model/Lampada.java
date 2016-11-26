package model;

public class Lampada {
	private int lp_id;
	private String lp_nome;
	private int lp_tensao;
	private double lp_consumo;
	private double lp_constotal;
	private char lp_status;
	private int lp_porta;
	private int dm_porta;
	private int dm_valor;
	private int cd_id;

	
	public Lampada(){
		this.setLp_id(0);
		this.setLp_nome(null);
	}
	
	public Lampada(int lp_id, String lp_nome){
		this.setLp_id(lp_id);
		this.setLp_nome(lp_nome);
	}
	
	//GETTER'S
	public int getLp_id() {
		return lp_id;
	}

	public String getLp_nome() {
		return lp_nome;
	}
	
	public int getLp_tensao() {
		return lp_tensao;
	}

	public double getLp_consumo() {
		return lp_consumo;
	}

	public double getLp_constotal() {
		return lp_constotal;
	}

	public char getLp_status() {
		return lp_status;
	}

	public int getLp_porta() {
		return lp_porta;
	}

	public int getCd_id() {
		return cd_id;
	}

	public int getDm_porta() {
		return dm_porta;
	}

	public int getDm_valor() {
		return dm_valor;
	}


	//SETTER'S
	public void setLp_id(int lp_id) {
		this.lp_id = lp_id;
	}
	public void setLp_nome(String lp_nome) {
		this.lp_nome = lp_nome;
	}
	
	public void setLp_tensao(int lp_tensao) {
		this.lp_tensao = lp_tensao;
	}

	public void setLp_consumo(double lp_consumo) {
		this.lp_consumo = lp_consumo;
	}

	public void setLp_constotal(double lp_constotal) {
		this.lp_constotal = lp_constotal;
	}

	public void setLp_status(char lp_status) {
		this.lp_status = lp_status;
	}

	public void setLp_porta(int lp_porta) {
		this.lp_porta = lp_porta;
	}

	public void setCd_id(int cd_id) {
		this.cd_id = cd_id;
	}

	public void setDm_porta(int dm_porta) {
		this.dm_porta = dm_porta;
	}

	public void setDm_valor(int dm_valor) {
		this.dm_valor = dm_valor;
	}


}
