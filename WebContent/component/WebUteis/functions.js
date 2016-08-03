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
    retorno =JSON.parse(retorno);
    retorno = retorno[0];
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
	if(campo == '' || campo == undefined || campo == null || campo == false){
		return true;
	}
	
	return false;
}



//***********************************************************************
//SAIR DO SISTEMA
//***********************************************************************
function logout() {
	var funcao = "funcao=logout";
		
	//CHAMADA DA FUNCAO AJAX
	AJAX("Login",funcao, function(retorno){
		retorno = JSon(retorno);
		console.log(retorno);	            
		
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


