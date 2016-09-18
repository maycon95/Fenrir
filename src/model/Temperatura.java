package model;

public class Temperatura {
	private int tp_id;
	private String tp_nome;
	private char tp_status;
	private double tp_temp;
	private double tp_tempmax;
	private double tp_tempmin;
	private int tp_porta;
	private int cd_id;
	
	
	//GETTER
	public int getTp_id() {
		return tp_id;
	}
	public String getTp_nome() {
		return tp_nome;
	}
	public char getTp_status() {
		return tp_status;
	}
	public double getTp_temp() {
		return tp_temp;
	}
	public double getTp_tempmax() {
		return tp_tempmax;
	}
	public double getTp_tempmin() {
		return tp_tempmin;
	}
	public int getTp_porta() {
		return tp_porta;
	}
	public int getCd_id() {
		return cd_id;
	}
	
	
	//SETTER
	public void setTp_id(int tp_id) {
		this.tp_id = tp_id;
	}
	public void setTp_nome(String tp_nome) {
		this.tp_nome = tp_nome;
	}
	public void setTp_status(char tp_status) {
		this.tp_status = tp_status;
	}
	public void setTp_temp(double tp_temp) {
		this.tp_temp = tp_temp;
	}
	public void setTp_tempmax(double tp_tempmax) {
		this.tp_tempmax = tp_tempmax;
	}
	public void setTp_tempmin(double tp_tempmin) {
		this.tp_tempmin = tp_tempmin;
	}
	public void setTp_porta(int tp_porta) {
		this.tp_porta = tp_porta;
	}
	public void setCd_id(int cd_id) {
		this.cd_id = cd_id;
	}
}
