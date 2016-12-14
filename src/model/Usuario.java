package model;

import java.util.ArrayList;

public class Usuario {
	private String us_nome, us_senha, us_nivel;
	private ArrayList<Acesso> acessos;
	
	public Usuario(){	
		this.setUsuario(null);
		this.setSenha(null);			
		this.acessos = new ArrayList<Acesso>();
	}
	
	public Usuario(String us_nome, String us_senha){
		this.setUsuario(us_nome);
		this.setSenha(us_senha);		
		this.acessos = new ArrayList<Acesso>();
	}
		
	//GETTER'S
	public String getUsuario() {
		return us_nome;
	}
	public String getSenha() {
		return us_senha;
	}
	public ArrayList<Acesso> getAcessos(){
		return acessos;
	}
	public String getUs_nivel() {
		return us_nivel;
	}

	
	//SETTER'S
	public void setUsuario(String usuario) {
		this.us_nome = usuario;
	}
	public void setSenha(String senha) {
		this.us_senha = senha;
	}
	public void setAcessos(ArrayList<Acesso> acessos){
		this.acessos = acessos;
	}
	public void setUs_nivel(String us_nivel) {
		this.us_nivel = us_nivel;
	}
	
}
