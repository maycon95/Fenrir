package arduino;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Uteis.Uteis;
import dao.TemperaturaDAO;
import dao.UsuarioDAO;
import model.Usuario;
import to.UsuarioTO;


//  http://localhost:8080/Fenrir/Arduino/SendData?us_nome=maycon&us_senha=202cb962ac59075b964b07152d234b70&data={sensor:[(tp_id:1),(tp_temp:23.0)]}
@WebServlet("/Arduino/SendData")
public class ConexaoArduino extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public ConexaoArduino() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");  
		response.setCharacterEncoding("UTF-8");  
        response.setContentType("text/html"); 
        
        //VERIFICA O USUARIO E SENHA IFORMADO DO ARDUINO
        String us_nome = request.getParameter("us_nome");
        String us_senha = request.getParameter("us_senha");
        String data = request.getParameter("data");
		
        //PEGA O UsuarioTO
//		UsuarioTO userTO = null;
//		try{
//			userTO = new UsuarioDAO().logar(us_nome, us_senha);	
//		}catch(Exception e){
//			System.out.println(Uteis.trataErro(e));
//        	return;
//		}
//    	
//		System.out.println("buscou o usuario e...");
//        
//        //VERIFICA SE ENCONTROU O USUARIO NO BANCO OU NAO
//        Usuario usuario = userTO.getLista().get(0);
//        if(usuario != null){
//        	System.out.println("nao encontrou");
//            
//        	return; //SE N ENCONTRAR O USUARIO N FAZ NADA
//        }
        
        
        //METODOS PARA GRAVAR OS DADOS INFORMADOS
        //"{sensor:[(tp_id:1),(tp_temp:23.0)]}"
        
        int index = 0; //CONTADOR PARA SABER ONDE ESTOU E QUANDO TERMINEI DE LER OS DADOS
        String cod_error = null;
		System.out.println("começou a ler os dados");
                
        //LOOP PARA PERCORRER A STRING DE DADOS
        while(index != -1 && cod_error == null){
        	//PROCURO O PRIMEIRO DADO INFORMADO
        	int inicio = data.indexOf("{", index); //INICIO DO TIPO DE DADO (SENSOR TEMPERATURA, CORRENTE, CONSUMO, ETC)
        	int fim = data.indexOf(":[", inicio); //FIM DO TIPO DE DADO
        	
        	String tipoDado = data.substring(inicio+1, fim);//VERIFICA QUAL É O TIPO DE DADO
        	
        	System.out.println("verifica o tipo de dado: " + tipoDado+"+");
            
        	index = fim + 1; //COLOCO MEU INDICE NO PROXIMO VALOR
        	//SE O TIPO DE DADO FOR DE UM SENSOR DE TEMPERATURA 
        	//ENTAO VOU PEGAR OS PARAMETROS DE ID E O VALOR DA TEMPERATURA
        	if(tipoDado.equals("sensor")){
        		//PEGO O ID DO SENSOR
        		inicio = data.indexOf(":",index);
        		fim = data.indexOf("),",inicio);
        		index = fim;
        		int tp_id = Integer.parseInt(data.substring(inicio+1,fim));
        		
        		System.out.println("pegou o id:" + tp_id);
                
        		
        		//PEGO O VALOR LIDO PELO SENSOR
        		inicio = data.indexOf(":",index);
        		fim = data.indexOf(")",inicio);
        		index = fim;
        		
        		double tp_temp = Double.parseDouble(data.substring(inicio+1,fim));
        		
        		System.out.println("pegou a temperatura: " + tp_temp);
                
        		//GRAVO OS VALORES DO SENSOR NO BANCO
        		System.out.println("gravando o dado no banco e.....");
                
        		try{
        			new TemperaturaDAO().attTemperatura(tp_id, tp_temp);
        			System.out.println("dado gravado com sucesso!!!");
        	        
        		}catch(Exception e){
    				System.out.println("falha ao inserir dado no banco!");        		        
        			cod_error =  Uteis.addSlashes(Uteis.trataErro(e));
        			System.out.println(cod_error);
        	        
        		}
        	}
        	
        	//ARRUMA O INDICE PARA BUSCAR O PROXIMO DADO
        	index = data.indexOf("{",index);
        	
        }
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
}
