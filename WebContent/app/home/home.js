//***********************************************************************
//CONSTANTES 
var SERVLET = "ControlarLuz"; //SERVLET USADO NESTA PAGINA
//***********************************************************************





//***********************************************************************
//ACIONAR LAMPADA
//***********************************************************************
 function acionarLampada() {
	var comando = $("#lampada").attr("comando");//PEGA O COMANDO DO DISPOSITIVO A SER ACIONADO

	var funcao = "funcao=lampada" +
				 "&comando="+comando;
		
	//CHAMADA DA FUNCAO AJAX
	AJAX(SERVLET,funcao, function(retorno){
		retorno = JSon(retorno);
		console.log(retorno);	            
		
		//CASO OCORRA ALGUM ERRO
		if (retorno.error != undefined) {
			alert("Ocorreu um erro interno ao servidor!");
		    return //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
		}
		
		
		if(retorno.status == 'LIGADO') {
			$("#lampada").removeClass("lampada").addClass("lampadaON");
			$("#lampada").attr("comando", "4_DESLIGA_LAMPADA");
		}
		if(retorno.status == 'DESLIGADO'){
			$("#lampada").removeClass("lampadaON").addClass("lampada");
			$("#lampada").attr("comando", "4_LIGA_LAMPADA");
		} 
	});
 }
//***********************************************************************




















//***********************************************************************
$(document).ready(function(){
	
	
});
//***********************************************************************


 
 