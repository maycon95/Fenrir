package to;

import java.util.ArrayList;

import model.Camera;

public class CameraTO {

	private ArrayList<Camera> lista;
	
	public CameraTO(){
		lista = new ArrayList<Camera>();
	}
	
	public void add(Camera camera){
		lista.add(camera);
	}
	
	public boolean remove(Camera camera){
		return(lista.remove(camera));
	}
	
	public ArrayList<Camera> getLista(){
		return lista;
	}
}
