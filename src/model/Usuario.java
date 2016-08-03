package model;

public class Usuario {
	private String usuario, senha;
	
	public Usuario(){	
		this.setUsuario(null);
		this.setSenha(null);		
		
	}
	public Usuario(String usuario, String senha){
		this.setUsuario(usuario);
		this.setSenha(senha);		
	}
		
	
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}

}
