package model;

public class Camera {
	private int cm_id;
	private String cm_nome;
	private String cm_ip;
	private int cd_id;
	
	
	//GETTER
	public int getCm_id() {
		return cm_id;
	}
	public String getCm_nome() {
		return cm_nome;
	}
	public String getCm_ip() {
		return cm_ip;
	}
	public int getCd_id() {
		return cd_id;
	}
	
	
	//SETTER
	public void setCm_id(int cm_id) {
		this.cm_id = cm_id;
	}
	public void setCm_nome(String cm_nome) {
		this.cm_nome = cm_nome;
	}
	public void setCm_ip(String cm_ip) {
		this.cm_ip = cm_ip;
	}
	public void setCd_id(int cd_id) {
		this.cd_id = cd_id;
	}
	
}
