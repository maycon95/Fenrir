package to;

import java.util.ArrayList;

import model.Usuario;

public class UsuarioTO {
	
private ArrayList<Usuario> lista;
private String error;
	
	public UsuarioTO(){
		lista = new ArrayList<Usuario>();
		setError(null);
	}
	
	public void add(Usuario login){
		lista.add(login);
	}
	
	public boolean remove(Usuario login){
		return(lista.remove(login));
	}
	
	public ArrayList<Usuario> getLista(){
		return lista;
	}
	
	public String getError(){
		return error;
	}
	
	public void setError(String error){
		this.error = error;
	}
	
}
