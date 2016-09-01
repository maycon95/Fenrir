package to;

import java.util.ArrayList;

import model.Comodo;

public class ComodoTO {

	private ArrayList<Comodo> lista;
	
	public ComodoTO(){
		lista = new ArrayList<Comodo>();
	}
	
	public void add(Comodo comodo){
		lista.add(comodo);
	}
	
	public boolean remove(Comodo comodo){
		return(lista.remove(comodo));
	}
	
	public ArrayList<Comodo> getLista(){
		return lista;
	}
	
}
