package to;

import java.util.ArrayList;

import model.Usuario;

public class UsuarioTO {
	
	private ArrayList<Usuario> lista;
	
	public UsuarioTO(){
		lista = new ArrayList<Usuario>();
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
	
}
