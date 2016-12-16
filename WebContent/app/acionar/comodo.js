//***********************************************************************
//						CONSTANTES  SEMPRE USADAS
//***********************************************************************
var SERVLET = "Dispositivo"; //SERVLET USADO NESTA PAGINA

//OBJETO DAS TABELAS
var objTabelaComodo = {}; //OBJETO DA TABELA DE COMODO 


//DIV'S DAS TABELAS
DIV_LISTA_COMODO = "#listaComodos";
DIV_DISPOSITIVOS = "#div_dispositivos";
DIV_CAMERA = "#div_camera";
//***********************************************************************


//***********************************************************************
//					FIM CONSTANTES SEMPMRE USADAS
//***********************************************************************























//***********************************************************************
//FUNCAO QUE BUSCAS OS DISPOSITIVOS DO COMODO SELECIONADO
//***********************************************************************
function buscaComodos(categoria){
	var funcao = 'funcao=buscaDispositivo'+
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
				  "Erro: " + retorno.error);
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
		
		
		var lista = "<div name='comodo_id_"+aux.cd_id+"' style='float: left; width: 100%;' > "+
					"	<h3>"+aux.cd_nome+"</h3>"+
					"</div>";
		
		$(DIV_DISPOSITIVOS).append(lista);

		var dispositivos = '';

		
		//LOOP PARA PREENCHER AS LAMPADAS
		for(var j = 0; j < aux.listaLampada.length; j++){
			var auxLampada = aux.listaLampada[j];
			var comando = 'LAMPADA_' + auxLampada.lp_porta;

			dispositivos += "<div id='lp_"+auxLampada.lp_id+"' posicao_lp='"+j+"' posicao_cd='"+i+"' style='width: 200px; height: 200px; text-align: center;' class='col-sm-4 w200 h200 center'>"+
							"	<h4 class='center'>"+auxLampada.lp_nome+"</h4>"+
							"	<input type='image' class='botao btnLampada"+auxLampada.lp_status+"' name='lampada' comando='"+comando+"' style='height:128px; width:128px;'"+
							"	 	title='' >";
			
			if(auxLampada.dm_libera){
				dispositivos += "<input type='range' min='0' max='100' value='"+auxLampada.dm_valor+"' step='10' onchange='' style='margin: 0 auto; width: 130px' class='centerRange w130'/>";				
			}
			dispositivos += "</div>";
		}

		//LOOP PARA PREENCHER OS PORTOES
		for(var j = 0; j < aux.listaPortao.length; j++){
			var auxPortao = aux.listaPortao[j];
			var comando = 'PORTAO_' + auxPortao.pt_porta;
			
			dispositivos += "<div id='pt_"+auxPortao.pt_id+"' posicao_pt='"+j+"' posicao_cd='"+i+"' class='col-sm-4' style='width: 200px; height: 200px; text-align: center;'>"+
							"	<h4 style='text-align: center;'>"+auxPortao.pt_nome+"</h4>"+
							"	<input type='image' class='botao btnPortao' name='portao' comando='"+comando+"' style='height:128px; width:128px;'"+
							"	 	title='' >"+
							"</div>";
		}
		
		
		//LOOP PARA PREENCHER AS TEMPERATURAS
		for(var j = 0; j < aux.listaTemperatura.length; j++){
			var auxTemperatura = aux.listaTemperatura[j];
			
			dispositivos += "<div id='tp_"+auxTemperatura.tp_id+"' posicao_tp='"+j+"' class='col-sm-4' style='width: 200px; height: 200px; text-align: center;'>"+
			"	<h4 style='text-align: center;'>"+auxTemperatura.tp_nome+"</h4>"+
			"	<div class='valorTemp ' style='display: inline-flex; position: absolute; height:128px; width:128px'><label>"+auxTemperatura.tp_temp+" C</label></div>"+
			"	<di class=''>"+
			"		<input type='image' class='botao btnTemperatura' name='temperatura' comando='"+comando+"' style='height:128px; width:128px;position: relative;'"+
			"	 		title=''>"+
			" 	</div>"+
			"</div>";
		}
		
		

		$(DIV_DISPOSITIVOS + " div[name=comodo_id_"+aux.cd_id+"]").append(dispositivos);
		
		

		
		//CAMERAS
		var cameras = '';
		
		//LOOP PARA PREENCHER AS CAMERAS
		for(var j = 0; j < aux.listaCamera.length; j++){
			var auxCamera = aux.listaCamera[j];

			var cm_user = auxCamera.cm_user;
			var cm_pwd = auxCamera.cm_pwd;
			var cm_addr = auxCamera.cm_addr;
			var cm_port = auxCamera.cm_port;
			
			var src = "http://"+cm_addr+":"+cm_port+"/videostream.cgi?user="+cm_user+"&amp;pwd="+cm_pwd+"&amp;resolution=8&amp;rate=0";
			
			cameras +=  "<div name='camera_id_"+auxCamera.cm_id+"' posicao_cd='"+i+"' posicao_cm='"+j+"' style='width: 100%; ; float: left;' >"+
						"	<h3>"+auxCamera.cm_nome+"</h3>"+
						"	<div class='col-xs-12 col-md-4' style='width: 320px; height: 250px; text-align: center;'>"+
						"		<img style='-webkit-user-select: none' src='"+src+"'>	"+
						"	</div>"+
						"	<div>"+
/*						"		<input type='button' value='Esquerda' onmousedown='mov_camera(this,4);' onmouseup='mov_camera(this,5);' />"+
						"		<input type='button' value='Cima' onmousedown='mov_camera(this,0);' onmouseup='mov_camera(this,1);'/>"+
						"		<input type='button' value='Baixo' onmousedown='mov_camera(this,2);' onmouseup='mov_camera(this,3);' />"+
						"		<input type='button' value='Direita' onmousedown='mov_camera(this,6);' onmouseup='mov_camera(this,7);' />"+
*/
						"		<input type='image' value='Esquerda' onmousedown='mov_camera(this,4);' onmouseup='mov_camera(this,5);' src='../../component/img/esquerda.png' style='border-style: none; ' />"+
						"		<input type='image' value='Cima' onmousedown='mov_camera(this,0);' onmouseup='mov_camera(this,1);' src='../../component/img/cima.png' style='border-style: none; '/>"+
						"		<input type='image' value='Baixo' onmousedown='mov_camera(this,2);' onmouseup='mov_camera(this,3);' src='../../component/img/baixo.png' style='border-style: none; ' />"+
						"		<input type='image' value='Direita' onmousedown='mov_camera(this,6);' onmouseup='mov_camera(this,7);' src='../../component/img/direita.png' style='border-style: none;  ' />"+

						"	</div>	"+
						"</div>";
			}
		
		$(DIV_CAMERA).append(cameras);
	}
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
function acionarLampada(lampada){
	//VEJO QUAL É A LAMPADA QUE FOI CLICADO PEGANDO A POSICAO
	var posicao_lp = $(lampada).parent().attr('posicao_lp');
	//VEJO QUAL É O COMODO DESSE DISPOSITIVO
	var posicao_cd = $(lampada).parent().attr('posicao_cd');
	
	var funcao = 'funcao=lampada'+
				 '&comando=' + $(lampada).attr('comando')+
				 '&lp_id=' + objTabelaComodo.lista[posicao_cd].listaLampada[posicao_lp].lp_id;
	
	
	AJAX(SERVLET,funcao, function(retorno){
		retorno = JSon(retorno);
		console.log(retorno);
		//CASO OCORRA ALGUM ERRO
		if(!retorno){
			alert("Ocorreu um erro interno ao servidor");
		    return; //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
		}
		if (!empty(retorno.error)) {
			alert("Ocorreu um erro ao buscar dispositivos\n"+
				  "Erro: " + retorno.error);
		    return; //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
		}
		
		objTabelaComodo.lista[posicao_cd].listaLampada[posicao_lp].lp_status = retorno.status;
		
		$(lampada).removeClass("btnLampadaL").removeClass("btnLampadaD").addClass("btnLampada" + retorno.status);
	});	

}





//FUNCAO PARA ACIONAR UM DISPOSITIVO
function acionarPortao(portao){
	//VEJO QUAL É O PORTAO QUE FOI CLICADO PEGANDO A POSICAO
	var posicao_pt = $(portao).parent().attr('posicao_pt');
	//VEJO QUAL É O COMODO DESSE DISPOSITIVO
	var posicao_cd = $(portao).parent().attr('posicao_cd');
	
	var funcao = 'funcao=portao'+
				 '&comando=' + $(portao).attr('comando')+
				 '&pt_id=' + objTabelaComodo.lista[posicao_cd].listaPortao[posicao_pt].pt_id;
	
	AJAX(SERVLET,funcao, function(retorno){
		retorno = JSon(retorno);
		console.log(retorno);
		//CASO OCORRA ALGUM ERRO
		if(!retorno){
			alert("Ocorreu um erro interno ao servidor");
		    return; //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
		}
		if (!empty(retorno.error)) {
			alert("Ocorreu um erro ao buscar dispositivos\n"+
				  "Erro: " + retorno.error);
		    return; //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
		}
		
		objTabelaComodo.lista[posicao_cd].listaPortao[posicao_pt].pt_status = retorno.status;
	});	

}





////FUNCAO PARA ACIONAR UM DISPOSITIVO
//function attTemp(temp){
//	//VEJO QUAL É O DIMER QUE FOI CLICADO PEGANDO A POSICAO DA LAMPADA
//	var posicao_tp = $(temp).parent().parent().attr('posicao_tp');
//	//VEJO QUAL É O COMODO DESSE DISPOSITIVO
//	var posicao_cd = $(temp).parent().parent().parent().parent().attr('posicao_cd');
//	
//	var funcao = 'funcao=temperatura'+
//				 '&tp_id=' + objTabelaComodo.lista[posicao_cd].listaTemperatura[posicao_tp].tp_id;
//		
//	AJAX(SERVLET_DISPOSITIVO,funcao, function(retorno){
//		retorno = JSon(retorno);
//		console.log(retorno);
//		//CASO OCORRA ALGUM ERRO
//		if(!retorno){
//			alert("Ocorreu um erro interno ao servidor");
//		    return; //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
//		}
//		if (!empty(retorno.error)) {
//			alert("Ocorreu um erro ao buscar informação da temperatura\n"+
//				  "Erro: " + retorno.error);
//		    return; //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
//		}
//		
//		
//		$("#valor_temp").html(retorno.lista[0].tp_temp + " C");
//		$("#div_temperatura").removeClass("hide");
//		
//	});	
//
//}






//MOVIMENTOS DA CAMERA
function mov_camera(botao, command){
	var posicao_cd = $(botao).parent().parent().attr("posicao_cd");
	var posicao_cm = $(botao).parent().parent().attr("posicao_cm");
	var auxCamera = objTabelaComodo.lista[posicao_cd].listaCamera[posicao_cm];

	var addr = auxCamera.cm_addr;
	var port = auxCamera.cm_port;
	var user = auxCamera.cm_user;
	var pwd = auxCamera.cm_pwd;

	var url = "decoder_control.cgi?user="+user+"&pwd="+pwd+"&command="+ command;
	
	AJAX_CAMERA(addr, port, url, function(retorno){
		
		var retorno = retorno;
		console.log(retorno);
	});

}












//***********************************************************************
$(document).ready(function(){
	//ACIONAR O DISPOSITIVO SELECIONADO
	$(DIV_DISPOSITIVOS).on('click', 'input[name=lampada]', function(){
		acionarLampada($(this));
	});

	//ACIONAR O DISPOSITIVO SELECIONADO
	$(DIV_DISPOSITIVOS).on('click', 'input[name=portao]', function(){
		acionarPortao($(this));
	});
	
	//DIMER DAS LAMPADAS
	$(DIV_DISPOSITIVOS).on('change', 'input[type=range]', function(){
		alert($(this).val());
	
	});
	
	
	
	
	
});
//***********************************************************************