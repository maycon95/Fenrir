package model;

import java.util.ArrayList;

public class Comodo {
	private int cd_id;
	private String cd_nome;
	private String cd_tipo;
	private ArrayList<Lampada> listaLampada;
	private ArrayList<Portao> listaPortao;
	private ArrayList<Temperatura> listaTemperatura;
	private ArrayList<Camera> listaCamera;
	//planta

	public Comodo(){
		this.setCd_id(0);
		this.setCd_nome(null);
		listaLampada = new ArrayList<Lampada>();
		listaPortao = new ArrayList<Portao>();
		listaTemperatura = new ArrayList<Temperatura>();
		listaCamera = new ArrayList<Camera>();
	}
	
	public Comodo(int cd_id, String cd_nome){
		this.setCd_id(cd_id);
		this.setCd_nome(cd_nome);
		listaLampada = new ArrayList<Lampada>();
		listaPortao = new ArrayList<Portao>();
		listaTemperatura = new ArrayList<Temperatura>();
		listaCamera = new ArrayList<Camera>();
	}
	
	//GETTER'S
	public int getCd_id() {
		return cd_id;
	}
	public String getCd_nome() {
		return cd_nome;
	}
	public String getCd_tipo() {
		return cd_tipo;
	}
	
	//SETTER'S
	public void setCd_id(int cd_id) {
		this.cd_id = cd_id;
	}
	public void setCd_nome(String cd_nome) {
		this.cd_nome = cd_nome;
	}
	public void setCd_tipo(String cd_tipo) {
		this.cd_tipo = cd_tipo;
	}
	
	
	
	

	
	
	//LISTAS
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

	
	//TEMPERATURA
	public void addTemperatura(Temperatura temp){
		listaTemperatura.add(temp);
	}
	
	public boolean removeTemperatura(Temperatura temp){
		return(listaTemperatura.remove(temp));
	}
	
	public ArrayList<Temperatura> getListaTemperatura(){
		return listaTemperatura;
	}

	
	
	//CAMERA
	public void addCamera(Camera camera){
		listaCamera.add(camera);
	}
	
	public boolean removeCamera(Camera camera){
		return(listaCamera.remove(camera));
	}
	
	public ArrayList<Camera> getListaCamera(){
		return listaCamera;
	}


}
