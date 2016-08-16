//***********************************************************************
//						CONSTANTES  SEMPRE USADAS
//***********************************************************************
var SERVLET = "Admin"; //SERVLET USADO NESTA PAGINA

//OBJETO DAS TABELAS
var objTabelaUsuario = {}; //OBJETO DA TABELA DE USUARIO 
var objTabelaComodo = {};  //OBJETO DA TABELA DE COMODO
var objTabelaLampada = {}; //OBJETO DA TABELA DE LAMPADA


//DIV'S DAS TABELAS
var DIV_TABELA_USUARIO = "#dados_usuario";
var DIV_TABELA_COMODO = "#dados_comodo";
var DIV_TABELA_LAMPADA = "#dados_lampada";

//***********************************************************************


//***********************************************************************
//					FIM CONSTANTES SEMPMRE USADAS
//***********************************************************************


















//*******************************************************************************************************
//									FUNCOES DA TELA DE ADMINISTRACAO
//*******************************************************************************************************

//**********************************************************************************
//					FUNCOES DA TABELA DE USUARIO
//**********************************************************************************


//*******************************************************
//					BUSCA USUARIOS
//*******************************************************
function monta_query_usuario(){
	var funcao = "funcao=usuario"+
				 "&busca="+$("#us_busca").val();

	 AJAX(SERVLET, funcao, function(retorno){
		retorno = JSon(retorno);
	
		//CASO OCORRA ALGUM ERRO
		if(!retorno){
			alert("Ocorreu um erro interno ao servidor");
		    return; //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
		}
		if (!empty(retorno.error)) {
			alert("Ocorreu um erro ao buscar usuarios\n"+
				  "Erro: " + retorno.mensagem);
		    return; //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
		}

		objTabelaUsuario = retorno;


		//LIMPA A TABELA DO USUARIO
		LimpaTabela(DIV_TABELA_USUARIO);

		//MONTA AS LINHAS DA TABELA
		var tabela = "";
		for(var i = 0; i < objTabelaUsuario.total; i++){
			tabela = "<tr>";
			tabela += monta_linha_usuario(i);
			tabela += "</tr>";  
		}

		//COLOCA AS LINHAS NA TABELA
		$(DIV_TABELA_USUARIO).append(tabela);
	 });
}

//*******************************************************
//				MONTA LINHA - USUARIO
//*******************************************************
function monta_linha_usuario(i){
	var aux = objTabelaUsuario.registros[i];
	var linha = "<td class='w40' ><input value='' readonly></td>"+
				"<td class='w200'><input class='uppercase' value='"+aux.us_nome+"' name='us_nome' us_nome='"+aux.us_nome+"'  maxlength='20'></td>"+
				"<td class='w150'><input value='nothing' ></td>";

	return linha;
}

//***********************************************************************
//					FIM FUNCOES DA TABELA DE USUARIO
//***********************************************************************














//***********************************************************************
//ACIONAR LAMPADA
//***********************************************************************
 function acionarLampada() {

	var funcao = "funcao=lampada" +
				 "&comando="+comando;
		
	//CHAMADA DA FUNCAO AJAX
	AJAX(SERVLET,funcao, function(retorno){
		retorno = JSon(retorno);
		
		//CASO OCORRA ALGUM ERRO
		if (!empty(retorno.error)) {
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
	$("#options").on('click', 'li',function(){
		//ATIVA A OPÇÃO QUE FOI SELECIONADA
		$("#options li").removeClass("active");
		$(this).addClass("active");

		//MOSTRA A TABELA DA OPÇÃOS SELECIONADA E ESCONDE AS OUTRAS
		$("div[name*=table_]").hide();
		$("div[name=tabelas] div[name=table_"+$(this).attr("name")+"]").show();

	})
	
});
//***********************************************************************


 
 