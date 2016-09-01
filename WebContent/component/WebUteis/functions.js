//***********************************************************************
//CONSTANTES 
var req;
var isIE;
var funcao; //FUNCAO DE RETORNO DO AJAX
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
//RETORNO DA REQUISISAO
//***********************************************************************
function callback() {
   if (req.readyState == 4) 
       if (req.status == 200) {
    	   var retorno = req.responseText;
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


