package model;

import java.util.ArrayList;

public class Usuario {
	private String us_nome, us_senha;
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
	
}
