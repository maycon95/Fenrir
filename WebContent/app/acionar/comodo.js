//***********************************************************************
//						CONSTANTES  SEMPRE USADAS
//***********************************************************************
var SERVLET = "Comodo"; //SERVLET USADO NESTA PAGINA

//OBJETO DAS TABELAS
var objTabelaComodo = {}; //OBJETO DA TABELA DE COMODO 


//DIV'S DAS TABELAS
DIV_LISTA_COMODO = "#listaComodos";
//***********************************************************************


//***********************************************************************
//					FIM CONSTANTES SEMPMRE USADAS
//***********************************************************************























//***********************************************************************
//FUNCAO QUE BUSCAS OS DISPOSITIVOS DO COMODO SELECIONADO
//***********************************************************************
function buscaComodos(categoria){
	var funcao = 'funcao=buscaComodos'+
				 '&cd_tipo=' + categoria;
	
	AJAX(SERVLET,funcao, function(retorno){
		retorno = JSon(retorno);
	
		//CASO OCORRA ALGUM ERRO
		if(!retorno){
			alert("Ocorreu um erro interno ao servidor");
		    return; //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
		}
		if (!empty(retorno.error)) {
			alert("Ocorreu um erro ao buscar dispositivos\n"+
				  "Erro: " + retorno.mensagem);
		    return; //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
		}


		//COMBO DE COMODOS
		objTabelaComodo = retorno;
		objTabelaComodo.total = objTabelaComodo.lista.length;

		montaComodo();

	});	
	
}



//***********************************************************************
//MONTA A LISTA DE COMODOS E SEUS DISPOSITIVOS
//***********************************************************************
function montaComodo(){
	for(var i = 0; i < objTabelaComodo.total; i++){
		var aux = objTabelaComodo.lista[i];
		var lista =  "<div class='panel panel-primary ' name='"+aux.cd_id+"'>"+
					"	<div class='panel-heading'>"+
					"    	<h3 class='panel-title'>"+aux.cd_nome+"</h3>"+
					"	</div>"+
					"	<div class='panel-body'> </div>"+	
					"</div>";

		$(DIV_LISTA_COMODO).append(lista);

		var dispositivos = '';

		for(var j = 0; j < aux.listaLampada.length; j++){
			var auxLampada = aux.listaLampada[j];
			var comando = auxLampada.lp_porta + '_LAMPADA' ;
			dispositivos += "<div class='col-xs-12 col-md-4 text-center' id='lp_"+auxLampada.lp_id+"'>"+
							"	<div class='btn-group'>"+
							"		<input type='button' name='dispositivo' class='btn btn-default button lampada' comando='"+comando+"'>"+				
							"	</div>"+
							"	<div>"+
							"		<h4>"+auxLampada.lp_nome+"</h4>"+
							"	</div>"+
							"	<div>"+
							"		<input type='button' name='dimer' value='-' style='float:left;'/>"+
							"		<input type='text' name='valorDimer' value='0' style='float: left; text-align: right;' class='w40' readonly/>"+
							"		<input type='button' name='dimer' value='+' style='float:left;'/>"+
							"	</div>"+
							
							
							"</div>";
		}

		
		for(var j = 0; j < aux.listaPortao.length; j++){
			var auxPortao = aux.listaPortao[j];
			var comando = auxPortao.pt_porta + '_PORTAO' ;
			dispositivos += "<div class='col-xs-12 col-md-4 text-center' name=''>"+
							"	<div class='btn-group'>"+
							"		<input type='button'class='btn btn-default button garagem' comando='"+comando+"'>"+				
							"	</div>"+
							"	<div>"+
							"		<h4>"+auxPortao.pt_nome+"</h4>"+
							"	</div>"+
							"</div>";
		}
		
		$(DIV_LISTA_COMODO +" div[name="+aux.cd_id+"] .panel-body").append(dispositivos);
	}
	
	//BUSCA A IMAGEM DO COMODO
	buscaImagem();
}



//FUNCAO PARA ACIONAR O DIMER DO DISPOSITIVO
function dimer(dimer){
	var valorAtual = $(dimer).parent

}




//***********************************************************************
//FUNCAO QUE BUSCA A IMAGEM
//***********************************************************************
function buscaImagem(){
	var funcao = 'cd_id=1'; //LEMBRAR DE ARRUMAR
	AJAX(SERVLET_IMAGEM, funcao, function(retorno){
		
		var baseString = retorno;
		// data:image/png;base64
		
		if(empty(baseString)){
			$("#imagem").prop('src',"");
			return;
		}
		
		if(baseString.substring(0,4) != "data"){
			baseString = "data:image/png;base64," + baseString;
		}
		
		$("#imagem").prop('src',baseString);	
	});
}





















//***********************************************************************
$(document).ready(function(){
	//ACIONAR O DISPOSITIVO SELECIONADO
	$(DIV_LISTA_COMODO).on('click', 'input[type=button][name=dispositivo]', function(){
		alert($(this).attr('comando'));
	});


	//DIMER DAS LAMPADAS
	$(DIV_LISTA_COMODO).on('click', 'input[name=dimer]', function(){
		dimer($(this));
	});





	
});
//***********************************************************************