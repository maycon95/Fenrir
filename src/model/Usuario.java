package model;

public class Usuario {
	private String us_nome, us_senha;
	
	public Usuario(){	
		this.setUsuario(null);
		this.setSenha(null);			
	}
	
	public Usuario(String usuario, String senha){
		this.setUsuario(usuario);
		this.setSenha(senha);		
	}
		
	//GETTER'S
	public String getUsuario() {
		return us_nome;
	}
	public String getSenha() {
		return us_senha;
	}
	
	//SETTER'S
	public void setUsuario(String usuario) {
		this.us_nome = usuario;
	}
	public void setSenha(String senha) {
		this.us_senha = senha;
	}
}
