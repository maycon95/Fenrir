package model;

public class Acesso {
	private String us_nome;
	private String cd_nome;
	private int cd_id;
	private char ac_libera;
	
	
	//GETTER
	public String getUs_nome() {
		return us_nome;
	}
	public String getCd_nome() {
		return cd_nome;
	}
	public int getCd_id() {
		return cd_id;
	}
	public char getAc_libera() {
		return ac_libera;
	}
	
	//SETTER
	public void setUs_nome(String us_nome) {
		this.us_nome = us_nome;
	}
	public void setCd_nome(String cd_nome) {
		this.cd_nome = cd_nome;
	}
	public void setCd_id(int cd_id) {
		this.cd_id = cd_id;
	}
	public void setAc_libera(char ac_libera) {
		this.ac_libera = ac_libera;
	}
}
