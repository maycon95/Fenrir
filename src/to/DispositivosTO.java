package to;

import java.util.ArrayList;

import model.Comodo;
import model.Lampada;
import model.Portao;

public class DispositivosTO {
	private ArrayList<Comodo> listaComodo;
	private ArrayList<Lampada> listaLampada;
	private ArrayList<Portao> listaPortao;
	
	public DispositivosTO(){
		listaComodo = new ArrayList<Comodo>();
		listaLampada = new ArrayList<Lampada>();
		listaPortao = new ArrayList<Portao>();
	}
	
	
	//COMODO
	public void addComodo(Comodo comodo){
		listaComodo.add(comodo);
	}
	
	public boolean removeComodo(Comodo comodo){
		return(listaComodo.remove(comodo));
	}
	
	public ArrayList<Comodo> getListaComodo(){
		return listaComodo;
	}

	
	//LAMPADA
	public void addLampada(Lampada lampada){
		listaLampada.add(lampada);
	}
	
	public boolean removeLampada(Lampada lampada){
		return(listaLampada.remove(lampada));
	}
	
	public ArrayList<Lampada> getListaLampada(){
		return listaLampada;
	}


	
	//PORTAO
	public void addPortao(Portao portao){
		listaPortao.add(portao);
	}
	
	public boolean removePortao(Portao portao){
		return(listaPortao.remove(portao));
	}
	
	public ArrayList<Portao> getListaPortao(){
		return listaPortao;
	}

	
	
}
