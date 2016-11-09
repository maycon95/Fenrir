package model;

public class Camera {
	private int cm_id;
	private String cm_nome;
	private String cm_addr;
	private int cm_port;
	private String cm_user;
	private String cm_pwd;
	private int cd_id;
	
	
	//GETTER
	public int getCm_id() {
		return cm_id;
	}
	public String getCm_nome() {
		return cm_nome;
	}
	public String getCm_addr() {
		return cm_addr;
	}
	public int getCd_id() {
		return cd_id;
	}
	public int getCm_port() {
		return cm_port;
	}
	public String getCm_user() {
		return cm_user;
	}
	public String getCm_pwd() {
		return cm_pwd;
	}
		
	
	//SETTER
	public void setCm_id(int cm_id) {
		this.cm_id = cm_id;
	}
	public void setCm_nome(String cm_nome) {
		this.cm_nome = cm_nome;
	}
	public void setCm_addr(String cm_addr) {
		this.cm_addr = cm_addr;
	}
	public void setCd_id(int cd_id) {
		this.cd_id = cd_id;
	}
	public void setCm_port(int cm_port) {
		this.cm_port = cm_port;
	}
	public void setCm_user(String cm_user) {
		this.cm_user = cm_user;
	}
	public void setCm_pwd(String cm_pwd) {
		this.cm_pwd = cm_pwd;
	}
	
}
