//***********************************************************************
//						CONSTANTES  SEMPRE USADAS
//***********************************************************************
var SERVLET = "Comodo"; //SERVLET USADO NESTA PAGINA
var SERVLET_DISPOSITIVO = "ControlarLuz"; //SERVLET USADO PARA CONTROLE DE DISPOSITIVOS

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
		var lista =  "<div class='panel panel-primary' posicao_cd='"+i+"' name='"+aux.cd_id+"'>"+
					"	<div class='panel-heading'>"+
					"    	<h3 class='panel-title'>"+aux.cd_nome+"</h3>"+
					"	</div>"+
					"	<div class='panel-body'> </div>"+	
					"</div>";

		$(DIV_LISTA_COMODO).append(lista);

		var dispositivos = '';

		for(var j = 0; j < aux.listaLampada.length; j++){
			var auxLampada = aux.listaLampada[j];
			var auxDimmer= aux.listaDimmer[j];
			var comando = 'LAMPADA_' + auxLampada.lp_porta;
			dispositivos += "<div class='col-xs-12 col-md-4 text-center' id='lp_"+auxLampada.lp_id+"' posicao_lp='"+j+"'>"+
							"	<div class='btn-group'>"+
							"		<input type='button' name='dispositivo' class='btn btn-default button lampada' comando='"+comando+"'>"+				
							"	</div>"+
							"	<div>"+
							"		<h4>"+auxLampada.lp_nome+"</h4>"+
							"	</div>";
			
			
			if(auxDimmer.dm_id != 0){
				dispositivos +="<div>"+
							"		<input type='button' name='dimmer' value='-' style='float:left;'/>"+
							"		<input type='text' name='valorDimmer' value='"+auxDimmer.dm_valor+"' style='float: left; text-align: right;' class='w40' readonly/>"+
							"		<input type='button' name='dimmer' value='+' style='float:left;'/>"+
							"	</div>";
			}
			dispositivos += "</div>";
		}

		
		for(var j = 0; j < aux.listaPortao.length; j++){
			var auxPortao = aux.listaPortao[j];
			var comando = 'PORTAO_' + auxPortao.pt_porta;
			dispositivos += "<div class='col-xs-12 col-md-4 text-center' name=''>"+
							"	<div class='btn-group'>"+
							"		<input type='button'class='btn btn-default button garagem' comando='"+comando+"'>"+				
							"	</div>"+
							"	<div>"+
							"		<h4>"+auxPortao.pt_nome+"</h4>"+
							"	</div>"+
							"</div>";
		}
		
		for(var j = 0; j < aux.listaTemperatura.length; j++){
			var auxTemperatura = aux.listaTemperatura[j];
			dispositivos += "<div class='col-xs-12 col-md-4 text-center' id='tp_"+auxTemperatura.tp_id+"' posicao_tp='"+j+"'>"+
							"	<div class='btn-group'>"+
							"		<input type='button'class='btn btn-default button temperatura' onClick='attTemp(this);'>"+				
							"	</div>"+
							"	<div>"+
							"		<h4>"+auxTemperatura.tp_nome+"</h4>"+
							"	</div>"+
							"</div>";
		}

		
		
		$(DIV_LISTA_COMODO +" div[name="+aux.cd_id+"] .panel-body").append(dispositivos);
	}
	
	//BUSCA A IMAGEM DO COMODO
	buscaImagem();
}



//FUNCAO PARA ACIONAR O DIMMER DO DISPOSITIVO
function dimmer(dimmer){
	//VEJO QUAL É O DIMER QUE FOI CLICADO PEGANDO A POSICAO DA LAMPADA
	var posicao_lp = $(dimmer).parent().parent().attr('posicao_lp');
	//VEJO QUAL É O COMODO DESSE DISPOSITIVO
	var posicao_cd = $(dimmer).parent().parent().parent().parent().attr('posicao_cd');
	
	//VEJO NO OBJETO DO DIMMER NA POSICAO ATUAL DELE QUAL É O VALOR ATUAL
	var valorAtual = objTabelaComodo.lista[posicao_cd].listaDimmer[posicao_lp].dm_valor;
	
	//VERIFICO SE O BOTAO CLICADO FOI DE '+' OU '-'
	var botao = $(dimmer).val();
	
	
	//AUMENTO OU DIMINUO O DIMMER DE ACORDO COM O BOTAO
	//MAXIMO = 99
	//MINIMO = 0
	var novoValor = 0;
	if(botao == '+'){
		if(valorAtual == 99) return; //SE O VALOR JA ESTIVER NO MAXIMO N FAZ NADA
		novoValor = (valorAtual == 90 ? 99 : valorAtual + 10);
	}
	else{
		if(valorAtual == 0) return; //SE O VALOR JA ESTIVER NO MINIMO N FAZ NADA
		if(valorAtual == 99)  novoValor = 90;
		else novoValor = valorAtual - 10;
	}
	
	
	//FAZER CONEXAO COM O ARDUINO PARA AJUSTAR O DIMMER
	//--------- CONEXAO ------
	
	//ATUALIZA O VALOR DO DIMMER NA TELA
	$(DIV_LISTA_COMODO + " div[posicao_cd="+posicao_cd+"] 	div[posicao_lp="+posicao_lp+"] input[name=valorDimmer]").val(novoValor);
	console.log($(DIV_LISTA_COMODO + " div[posicao_cd="+posicao_cd+"] 	div[posicao_lp="+posicao_lp+"] input[name=valorDimmer]"));
	
	//ATUALIZA O OBJETO COM O NOVO VALOR
	objTabelaComodo.lista[posicao_cd].listaDimmer[posicao_lp].dm_valor = novoValor;
}


//FUNCAO PARA ACIONAR UM DISPOSITIVO
function acionarDispositivo(dispositivo){
	//VEJO QUAL É O DIMER QUE FOI CLICADO PEGANDO A POSICAO DA LAMPADA
	var posicao_lp = $(dispositivo).parent().parent().attr('posicao_lp');
	//VEJO QUAL É O COMODO DESSE DISPOSITIVO
	var posicao_cd = $(dispositivo).parent().parent().parent().parent().attr('posicao_cd');
	
	var funcao = 'funcao=lampada'+
				 '&comando=' + $(dispositivo).attr('comando')+
				 '&lp_id=' + objTabelaComodo.lista[posicao_cd].listaLampada[posicao_lp].lp_id;
	
	
	AJAX(SERVLET_DISPOSITIVO,funcao, function(retorno){
		retorno = JSon(retorno);
		console.log(retorno);
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
	});	

}



//FUNCAO PARA ACIONAR UM DISPOSITIVO
function attTemp(temp){
	//VEJO QUAL É O DIMER QUE FOI CLICADO PEGANDO A POSICAO DA LAMPADA
	var posicao_tp = $(temp).parent().parent().attr('posicao_tp');
	//VEJO QUAL É O COMODO DESSE DISPOSITIVO
	var posicao_cd = $(temp).parent().parent().parent().parent().attr('posicao_cd');
	
	var funcao = 'funcao=temperatura'+
				 '&tp_id=' + objTabelaComodo.lista[posicao_cd].listaTemperatura[posicao_tp].tp_id;
	
	
	AJAX(SERVLET_DISPOSITIVO,funcao, function(retorno){
		retorno = JSon(retorno);
		console.log(retorno);
		//CASO OCORRA ALGUM ERRO
		if(!retorno){
			alert("Ocorreu um erro interno ao servidor");
		    return; //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
		}
		if (!empty(retorno.error)) {
			alert("Ocorreu um erro ao buscar informação da temperatura\n"+
				  "Erro: " + retorno.mensagem);
		    return; //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
		}
		
		
		$("#valor_temp").html(retorno.lista[0].tp_temp + " C");
		$("#div_temperatura").removeClass("hide");
		
	});	

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
		acionarDispositivo($(this));
	});


	//DIMER DAS LAMPADAS
	$(DIV_LISTA_COMODO).on('click', 'input[name=dimmer]', function(){
		dimmer($(this));
	});
	
});
//***********************************************************************