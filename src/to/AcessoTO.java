package to;

import java.util.ArrayList;

import model.Acesso;

public class AcessoTO {
	private ArrayList<Acesso> lista;
		
		public AcessoTO(){
			lista = new ArrayList<Acesso>();
		}
		
		public void add(Acesso acesso){
			lista.add(acesso);
		}
		
		public boolean remove(Acesso acesso){
			return(lista.remove(acesso));
		}
		
		public ArrayList<Acesso> getLista(){
			return lista;
		}
}
