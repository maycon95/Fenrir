//***********************************************************************
//CONSTANTES 
var SERVLET = "ControlarLuz"; //SERVLET USADO NESTA PAGINA
//***********************************************************************








//***********************************************************************
//CHAMADA DA TELA DE DISPOSITIVOS
//***********************************************************************
function acionarDispositivos(categoria){
	var url = '../acionar/dispositivo.jsp?categoria='+categoria;
	window.open(url,'_self');
}

//***********************************************************************
//CHAMADA DA TELA DE COMODOS
//***********************************************************************
function acionarComodos(categoria){
	var url = '../acionar/comodo.jsp?categoria='+categoria;
	window.open(url,'_self');
}


function conexaoArduino(){
	var url = '../home/testeConexao.jsp';
	window.open(url,'_self');
}



// //***********************************************************************
// //ACIONAR LAMPADA
// //***********************************************************************
//  function acionarLampada() {
// 	var comando = $("#lampada").attr("comando");//PEGA O COMANDO DO DISPOSITIVO A SER ACIONADO

// 	var funcao = "funcao=lampada" +
// 				 "&comando="+comando;
		
// 	//CHAMADA DA FUNCAO AJAX
// 	AJAX(SERVLET,funcao, function(retorno){
// 		retorno = JSon(retorno);
// 		console.log(retorno);	            
		
// 		//CASO OCORRA ALGUM ERRO
// 		if (retorno.error != undefined) {
// 			alert("Ocorreu um erro interno ao servidor!");
// 		    return //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
// 		}
		
		
// 		if(retorno.status == 'LIGADO') {
// 			$("#lampada").removeClass("lampada").addClass("lampadaON");
// 			$("#lampada").attr("comando", "4_DESLIGA_LAMPADA");
// 		}
// 		if(retorno.status == 'DESLIGADO'){
// 			$("#lampada").removeClass("lampadaON").addClass("lampada");
// 			$("#lampada").attr("comando", "4_LIGA_LAMPADA");
// 		} 
// 	});
//  }
// //***********************************************************************




















//***********************************************************************
$(document).ready(function(){
	
	
});
//***********************************************************************


 
 