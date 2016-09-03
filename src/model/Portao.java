package model;

public class Portao {
	private int pt_id;
	private String pt_nome;
	private char pt_status;
	private int cd_id;
	
	
	//GETTER
	public int getPt_id() {
		return pt_id;
	}
	public String getPt_nome() {
		return pt_nome;
	}
	public char getPt_status() {
		return pt_status;
	}
	public int getCd_id() {
		return cd_id;
	}
	
	
	//SETTER
	public void setPt_id(int pt_id) {
		this.pt_id = pt_id;
	}
	public void setPt_nome(String pt_nome) {
		this.pt_nome = pt_nome;
	}
	public void setPt_status(char pt_status) {
		this.pt_status = pt_status;
	}
	public void setCd_id(int cd_id) {
		this.cd_id = cd_id;
	}
}
