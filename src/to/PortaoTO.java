package to;

import java.util.ArrayList;

import model.Portao;

public class PortaoTO {

	private ArrayList<Portao> lista;
	
	public PortaoTO(){
		lista = new ArrayList<Portao>();
	}
	
	public void add(Portao portao){
		lista.add(portao);
	}
	
	public boolean remove(Portao portao){
		return(lista.remove(portao));
	}
	
	public ArrayList<Portao> getLista(){
		return lista;
	}

}
