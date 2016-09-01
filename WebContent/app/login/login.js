//***********************************************************************
//CONSTANTES 
var SERVLET = "Login"; //SERVLET USADO NESTA PAGINA
//***********************************************************************





//***********************************************************************
//EFETUAR LOGIN
//***********************************************************************
 function logar() {
	var us_nome = $("#user").val();
	var us_senha = $("#senha").val();

	if(empty(us_nome)){
		alert("informe um usuario");
		$("#user").focus();
		return;
	}
	if(empty(us_senha)){
		alert("informe uma senha");
		$("#senha").focus();
		return;
	} 
	
	//CRIPTOGRAFA A SENHA
	us_senha = md5(us_senha);
	
	var funcao = "funcao=logar" +
				 "&us_nome="+us_nome+
				 "&us_senha="+us_senha;
		
	//CHAMADA DA FUNCAO AJAX
	AJAX(SERVLET,funcao, function(retorno){
		retorno = JSon(retorno);
	
		//CASO OCORRA ALGUM ERRO
		if (empty(retorno)) {
			alert("Ocorreu um erro interno ao servidor!");
		    return //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
		}
		
		//CASO OCORRA ALGUM ERRO
		if (!empty(retorno.error)) {
			alert("Ocorreu um erro ao validar login!\n" + retorno.mensagem);
		    return //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
		}
		
		if(retorno != 'success') {//usuario invalido
			alert("usuario e/ou senha invalido");
			$("#user, #senha").val("");

			$("#user").focus();
			return;
		}
		//redireciona para a pagina principal
		window.location.replace("../home/home.jsp");	
	});
 }
//***********************************************************************




















//***********************************************************************
$(document).ready(function(){
	
	//***********************************************************************
	//SELECIONA O TEXTO AO GANHAR FOCO
	//***********************************************************************
	$("#user, #senha").on("focus", function() {
		$(this).select();
	});
	
	//***********************************************************************
	//FUCAO AO PRECIONAR UMA TECLA
	//***********************************************************************
	$("#user, #senha").on("keypress", function(e) {
		if(e.which == 13){//AO PRECIONAR ENTER
			logar();
		}
	});
	
});
//***********************************************************************


 
 