package to;

import java.util.ArrayList;

import model.Dimmer;

public class DimmerTO {

	private ArrayList<Dimmer> lista;
	
	public DimmerTO(){
		lista = new ArrayList<Dimmer>();
	}
	
	public void add(Dimmer dimmer){
		lista.add(dimmer);
	}
	
	public boolean remove(Dimmer dimmer){
		return(lista.remove(dimmer));
	}
	
	public ArrayList<Dimmer> getLista(){
		return lista;
	}
}
