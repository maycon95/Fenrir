package to;

import java.util.ArrayList;

import model.Temperatura;

public class TemperaturaTO {
	private ArrayList<Temperatura> lista;
	
	public TemperaturaTO(){
		lista = new ArrayList<Temperatura>();
	}
	
	public void add(Temperatura temperatura){
		lista.add(temperatura);
	}
	
	public boolean remove(Temperatura temperatura){
		return(lista.remove(temperatura));
	}
	
	public ArrayList<Temperatura> getLista(){
		return lista;
	}
	
}
