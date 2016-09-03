package to;

import java.util.ArrayList;

import model.Lampada;

public class LampadaTO {

	private ArrayList<Lampada> lista;
	
	public LampadaTO(){
		lista = new ArrayList<Lampada>();
	}
	
	public void add(Lampada lampada){
		lista.add(lampada);
	}
	
	public boolean remove(Lampada lampada){
		return(lista.remove(lampada));
	}
	
	public ArrayList<Lampada> getLista(){
		return lista;
	}
}
