package model;

public class Dimmer {
	private int dm_id;
	private int lp_id;
	private String lp_nome;
	private int dm_porta;
	private int dm_valor;

	
	public Dimmer(){
		this.setDm_id(0);
		this.setLp_id(0);
		this.setLp_nome(null);
		this.setDm_porta(0);
		this.setDm_valor(0);
	}
	
	public Dimmer(int dm_id, int lp_id){
		this.setDm_id(lp_id);
		this.setLp_id(lp_id);
	}

	
	//GETTERS
	public int getDm_id() {
		return dm_id;
	}

	public int getLp_id() {
		return lp_id;
	}

	public String getLp_nome() {
		return lp_nome;
	}

	public int getDm_porta() {
		return dm_porta;
	}

	public int getDm_valor() {
		return dm_valor;
	}

	public void setDm_id(int dm_id) {
		this.dm_id = dm_id;
	}

	
	//SETTERS
	public void setLp_id(int lp_id) {
		this.lp_id = lp_id;
	}

	public void setLp_nome(String lp_nome) {
		this.lp_nome = lp_nome;
	}

	public void setDm_porta(int dm_porta) {
		this.dm_porta = dm_porta;
	}

	public void setDm_valor(int dm_valor) {
		this.dm_valor = dm_valor;
	}
}
