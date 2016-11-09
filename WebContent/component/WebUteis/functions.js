//***********************************************************************
//CONSTANTES 
var req;
var isIE;
var funcao; //FUNCAO DE RETORNO DO AJAX
var SERVLET_IMAGEM = "Imagem"; //SERVLET RESPONSAVEL PELA BUSCA DE IMAGEM
//***********************************************************************

//***********************************************************************
//TRANSFORMA O JSON QUE ESTA EM STRING EM ARRAY
//***********************************************************************
function JSon(retorno){
	try{
		retorno =JSON.parse(retorno);
	}
	catch(e){
		console.clear();
		console.log(retorno);
	}
	return retorno;
}
//***********************************************************************


//***********************************************************************
//VERIFICA O BROWSER
//***********************************************************************
function initRequest() {
	if (window.XMLHttpRequest) {
	    if (navigator.userAgent.indexOf('MSIE') != -1) {
	        isIE = true;
	    }
	    return new XMLHttpRequest();
	} else if (window.ActiveXObject) {
	    isIE = true;
	    return new ActiveXObject("Microsoft.XMLHTTP");
	}
 }

//***********************************************************************
//FUNCAO AJAX
//***********************************************************************
function AJAX(servlet,url, fRetorno){
	var url = "/Fenrir/Controller/"+servlet+"?"+url
	funcao = fRetorno;
	req = initRequest();
	req.open("POST", url, true);
	req.onreadystatechange = callback;
	req.send(null);
}
//***********************************************************************


//***********************************************************************
//FUNCAO AJAX - PARA CAMERA
//***********************************************************************
function AJAX_CAMERA(addr, port, url, fRetorno){
	var url = "http://"+addr+":"+port+"/"+url
	funcao = fRetorno;
	req = initRequest();
	req.open("POST", url, true);
	req.onreadystatechange = callback;
	req.send(null);
}



//***********************************************************************
//RETORNO DA REQUISISAO
//***********************************************************************
function callback() {
   if (req.readyState == 4) 
       if (req.status == 200) {
    	   var retorno = req.responseText;
    	   if(retorno == 'connection_lost'){
    		   alert('A conexão foi perdida!\nVoce sera redirecionado para tela de login');
    		   window.open('../login/login.jsp','_self');
    	   }
    	   
    	   funcao(retorno);
       }
}
//***********************************************************************



//***********************************************************************
//VERIFICA SE O CAMPO ESTA NULO
//***********************************************************************
function empty(campo){
	if(campo === '' || campo === undefined || campo === null || campo === false){
		return true;
	}
	
	return false;
}



//***********************************************************************
//RETIRA O SCROLL BAR E LIMPA A DIV SELECIONADA
//***********************************************************************
function LimpaTabela(div){
	// $(div).mCustomScrollbar("destroy");
	$(div).html("");
}


//***********************************************************************
//SELECIONA LINHA E INPUT DA DIV SELECIONADA
//***********************************************************************
function selecionaLinha(div,actpos,cell){
	setTimeout(
		function(){
			$(div + " tr[posicao="+actpos+"] input:eq("+cell+") ").focus().select();
		},10
	);
}


//***********************************************************************
//SET UM NOVO STATUS PARA A DIV SELECIONADA
//***********************************************************************
function setStatus(linha,status,div){
	$(div + " tr[posicao="+linha+"] td:eq(0) input").val(status);
	$(div + " tr[posicao="+linha+"]").addClass('editado');
}

//***********************************************************************
//PEGA O STATUS DA DIV SELECIONADA
//***********************************************************************
function getStatus(linha,div){
	return $(div + " tr[posicao="+linha+"] td:eq(0) input").val();
}


//***********************************************************************
//VERIFICA SE H� ALGUMA ALTERA��O NA DIV SELECIONADA
//***********************************************************************
function Verifica_Alteracao(div){
	var alteracao = true;
	if(!empty($(div + ' .editado').attr('posicao'))){
		alteracao = false;
	}
	return alteracao;
}

//***********************************************************************
//BLOQUEIA LINHAS DA DIV SELECIONADA
//***********************************************************************
function Bloqueia_Linhas(actpos,div){
	//BLOQUEIA AS LINHAS MENOS A LINHA QUE ESTOU EDITANDO
	$(div + ' input').attr('disabled',true);
	//DESBLOQUEIA OS INPUTS DA LINHA QUE EU ESTOU EDITANDO, POREM NAO DESABILITA OS QUE TEM A CLASSE INATIVO
	$(div + " tr[posicao="+actpos+"] td input").attr('disabled',false);
	$(div + " tr[posicao="+actpos+"] td.inativo input").attr('readonly',true);
}

//***********************************************************************
//DESBLOQUEIA LINHAS DA DIV SELECIONADA
//***********************************************************************
function Desbloqueia_Linhas(actpos,div){
	$(div + " td input").attr('disabled',false);
	$(div + " td.inativo input").attr('readonly',true);
	$(div + " tr[posicao="+actpos+"]").removeClass('editado');
}



//***********************************************************************
//VALIDA E TRANSFORMA STRING EM NUMBER
//***********************************************************************
function tonumber(valor, format){
	if (format === undefined){
		format = "double";
	}
	switch(format){
		case "integer":
			var validaNumero = /^(\-)?([0-9]+)$/;
			if (!validaNumero.test(valor)){
				return false;
			}
			valor = parseInt(valor);
		return valor;
		default:
			var validaNumero = /^(\-)?([0-9.,]+)$/;
			if (!validaNumero.test(valor)){
				return false;
			}
			var posVirgula = valor.lastIndexOf(',');
			var posPonto = valor.lastIndexOf('.');
			var pontoSeparacao = 0;
			var separador = "";
			var tamanhoNumero = valor.length;
			if (posVirgula == -1 && posPonto == -1){
				return valor + ",00";
			}
			if (posVirgula > posPonto){
				separador = ",";
				pontoSeparacao = posVirgula;
			}else{
				separador = ".";
				pontoSeparacao = posPonto;
			}
			var valorNaoDecimal = valor.substring(0, pontoSeparacao);
			var valorDecimal = valor.substring((pontoSeparacao+1));
			valorNaoDecimal = valorNaoDecimal.replace(/[.,]/g, "");
			valorDecimal = valorDecimal.replace(/[.,]/g, ".");
			if (valorDecimal === ""){
				valorDecimal = "0";
			}
			valor = valorNaoDecimal + "." + valorDecimal;
			valor = valor.replace(".", ",");
		return valor;
	}
}


//***********************************************************************
//NUMBER_FORMAT
//***********************************************************************
function number_format (number, decimals, decPoint, thousandsSep) {
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '')
  var n = !isFinite(+number) ? 0 : +number
  var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
  var sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep
  var dec = (typeof decPoint === 'undefined') ? '.' : decPoint
  var s = ''

  var toFixedFix = function (n, prec) {
    var k = Math.pow(10, prec)
    return '' + (Math.round(n * k) / k)
      .toFixed(prec)
  }

  // @todo: for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
  }
  if ((s[1] || '').length < prec) {
	  s[1] = s[1] || ''
	  s[1] += new Array(prec - s[1].length + 1).join('0')
  }

  return s.join(dec)
}




//***********************************************************************
//DEIXA QUE SÓ SEJA DIGITADO NUMEROS NOS INPUTS
//MODO DE USAR: onkeypress='return somenteNumero(event,true,true,this);'
//***********************************************************************
function somenteNumero(evt,ponto,calculo,ref) {
	if(!empty(ponto)){
	  ponto = true;
	}
	if(empty(calculo)){
	  calculo = false;
	}

	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode( key );
	
	if(key == ',' && ref.value.indexOf(',') != -1){
		theEvent.returnValue = false;
		if(theEvent.preventDefault) theEvent.preventDefault();
		return;
	}
	
	var regex = "[0-9]";
	if (ponto){
		regex += "|[.,]";
		if(key == ',' && ref.value.indexOf(',') != -1){
			theEvent.returnValue = false;
			if(theEvent.preventDefault) theEvent.preventDefault();
			return;
		}
	}
	if (calculo){
	  regex += "|[+-]";
	}

	regex = new RegExp(regex,"gi");

	if( !regex.test(key) ) {
	  theEvent.returnValue = false;
	  if(theEvent.preventDefault) theEvent.preventDefault();
	}
}























//***********************************************************************
//SAIR DO SISTEMA
//***********************************************************************
function logout() {
	var funcao = "funcao=logout";
		
	//CHAMADA DA FUNCAO AJAX
	AJAX("Login",funcao, function(retorno){
		retorno = JSon(retorno);            
		
		//CASO OCORRA ALGUM ERRO
		if (!empty(retorno.error)) {
			alert("Ocorreu um erro interno ao servidor!\n" + retorno.error);
		    return //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
		}
		
		//redireciona para a pagina principal
		window.location.replace("../login/login.jsp");
	
	});
}
//***********************************************************************


