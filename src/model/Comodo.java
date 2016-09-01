package model;

public class Comodo {
	private int cd_id;
	private String cd_nome;
	//planta

	public Comodo(){
		this.setCd_id(0);
		this.setCd_nome(null);
	}
	
	public Comodo(int cd_id, String cd_nome){
		this.setCd_id(cd_id);
		this.setCd_nome(cd_nome);
	}
	
	//GETTER'S
	public int getCd_id() {
		return cd_id;
	}
	public String getCd_nome() {
		return cd_nome;
	}
	
	//SETTER'S
	public void setCd_id(int cd_id) {
		this.cd_id = cd_id;
	}
	public void setCd_nome(String cd_nome) {
		this.cd_nome = cd_nome;
	}
}
