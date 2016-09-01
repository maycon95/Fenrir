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
function montaQuery_usuario(){
	var funcao = "funcao=usuario"+
				 "&comando=busca" +
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
		objTabelaUsuario.total = objTabelaUsuario.lista.length;
		montaTabela_usuario();
	 });
}


//*******************************************************
//MONTA TABELA - USUARIO
//*******************************************************
function montaTabela_usuario(fCustom){
	//LIMPA A TABELA DO USUARIO
	LimpaTabela(DIV_TABELA_USUARIO);

	//MONTA AS LINHAS DA TABELA
	var tabela = "";
	for(var i = 0; i < objTabelaUsuario.total; i++){
		tabela += "<tr posicao='"+i+"'>";
		tabela += montaLinha_usuario(i);
		tabela += "</tr>";  
	}

	//COLOCA AS LINHAS NA TABELA
	$(DIV_TABELA_USUARIO).append(tabela);

	if(objTabelaUsuario.total > 0 && empty(fCustom)){
		selecionaLinha(DIV_TABELA_USUARIO,0,1);
		$(DIV_TABELA_USUARIO).animate({ scrollTop: "=0" }, "fast"); //VOLTA O SCROLL PRA CIMA
	}
	$("#record_user").val(objTabelaUsuario.total);
	//FUNCAO CUSTOM
	if(!empty(fCustom)){
		fCustom();
	}
	
	if(objTabelaUsuario.total == 0){
		$("#us_busca").select();
	}
}


//*******************************************************
//				MONTA LINHA - USUARIO
//*******************************************************
function montaLinha_usuario(i){
	var aux = objTabelaUsuario.lista[i];
	var linha = "<td class='w40' ><input value='' readonly></td>"+
				"<td class='w290'><input class='uppercase' value='"+aux.us_nome+"' name='us_nome' us_nome='"+aux.us_nome+"'  maxlength='20'></td>";

	return linha;
}


//*******************************************************
//INSERE LINHA - USUARIO
//*******************************************************
function insere_usuario(){	
	if(!Verifica_Alteracao(DIV_TABELA_USUARIO)){
		selecionaLinha(DIV_TABELA_USUARIO,$('#position_user').val(),1);
		return;
	}

	if(empty(objTabelaUsuario.lista)){
		objTabelaUsuario = {};
		objTabelaUsuario.lista = [];
		objTabelaUsuario.total = 0;
	}

	var novaPosicao = {};
	novaPosicao.us_nome= "";
	
	
	objTabelaUsuario.lista.push(novaPosicao);
	objTabelaUsuario.total += 1;
	
	var actpos = objTabelaUsuario.total > 0 ? (objTabelaUsuario.total - 1) : 0;

	montaTabela_usuario(function(){
		setStatus(actpos,'+',DIV_TABELA_USUARIO);
		pintaLinha_usuario($(DIV_TABELA_USUARIO + " tr[posicao="+actpos+"]"));
		Bloqueia_Linhas(actpos,DIV_TABELA_USUARIO);
		$('#record_user').val(objTabelaUsuario.total);
		selecionaLinha(DIV_TABELA_USUARIO,actpos,1);
	});
}


//*******************************************************
//MUDA O STATUS DA LINHA EDITADA DA TABELA 
//*******************************************************
function edicao_usuario(elemento){
	var posicao = $(elemento.parent().parent()).attr('posicao');
	var campo = $(elemento).attr('name');
	var original = objTabelaUsuario.lista[posicao][campo];

	//NAO HOUVE ALTERACAO
	if($(elemento).val() == original || getStatus(posicao,DIV_TABELA_USUARIO) !== ''){
		return;
	}

	setStatus(posicao, 'a', DIV_TABELA_USUARIO);
	Bloqueia_Linhas(posicao, DIV_TABELA_USUARIO);
}


//*******************************************************
//CANCELA AS MUDANCAS FEITAS NA TABELA - USUARIO
//*******************************************************
function cancela_usuario(cell){
	var actpos = $("#position_user").val();
	if(empty(actpos)){
		return;
	}

	if(empty(cell)){
		cell = 2;
	}

	if(getStatus(actpos,DIV_TABELA_USUARIO) === 'a'){
		var tr = montaLinha_usuario(actpos);

		$(DIV_TABELA_USUARIO + " tr[posicao="+actpos+"]").html(tr);

		Desbloqueia_Linhas(actpos,DIV_TABELA_USUARIO);

	}else if(getStatus(actpos,DIV_TABELA_USUARIO) === '+'){
		objTabelaUsuario.lista.splice(actpos,1);
		objTabelaUsuario.total -= 1;

		montaTabela_usuario(function(){
			$('#record_user').val(objTabelaUsuario.total);
			if(objTabelaUsuario.total > 0){
				if(actpos > 0){
					--actpos;
				}
			}
		});
	}
	selecionaLinha(DIV_TABELA_USUARIO,actpos,cell);
}


//*******************************************************
//GRAVA OS DADOS EDITADOS DA TABELA - USUARIO
//*******************************************************
function grava_usuario(cell, fcustom_grava){
	var actpos = $("#position_user").val();
	if(empty(actpos)){
		alert("Selecione uma linha");
    //	swal('Aten��o','� necess�rio selecionar uma linha','warning');
		return;
	}

	if(empty(cell)){
		cell = 1;
	}

	var status = getStatus(actpos, DIV_TABELA_USUARIO);

	if(empty(status)){
		selecionaLinha(DIV_TABELA_USUARIO, actpos, cell);
		return;
	}

	var linha = DIV_TABELA_USUARIO + " tr[posicao="+actpos+"] input";

	//VALIDACOES
	var mensagem = '';
	if(empty($(linha+"[name=us_nome]").val()))
		mensagem +='Nome do usuário é obrigatório';

	if(!empty(mensagem)){
		alert(mensagem);
		//swal("N�o foi Poss�vel Cadastrar o Usuario\n Verifique os Campos a baixo",mensagem,'error');
		return;
	}

	var funcao = "funcao=usuario&comando="+(status=='+' ? 'insert' : 'update') +
				"&us_nome=" + $(linha+"[name=us_nome]").val().toUpperCase()+
				"&us_nome_old=" + $(linha+"[name=us_nome]").attr("us_nome").toUpperCase();

	//swal.loading();
	AJAX(SERVLET, funcao, function(retorno){
		retorno = JSon(retorno);

      if(!retorno){
			var erro = "Houve um erro interno de servidor.\nEntre em contato com o suporte";

			LimpaTabela(DIV_TABELA_USUARIO);

			$(DIV_TABELA_USUARIO).html(erro);
			alert('Erro ao gravar alterações da tabela\n' + erro);
			return;
		}

		if(!empty(retorno.error)){
//			swal({
//				title: 'Erro ao gravar',
//				text: retorno.mensagem,
//				type: 'error'
//			}, function(){
//					selecionaLinha(DIV_TABELA_USUARIO, actpos, cell);
//				}
//			);
			
			alert('Erro ao gravar\n'+retorno.mensagem);

			return;
		}

		//JOGA O RETORNO DO USUARIO NO OBJETO
		objTabelaUsuario.lista[actpos] = retorno.lista[0];
		
		if(status === '+'){
          setStatus(actpos, 'a', DIV_TABELA_USUARIO);
		}
		cancela_usuario(cell);

		if(!empty(fcustom_grava)){
			fcustom_grava();
			return;
		}
		if(status == '+'){
			alert('Usuario cadastrado com sucesso\nSenha:fenrir');
		}
		//swal.close();
	});
}


//*******************************************************
//DELETA O REGISTRO SELECIONADO - USUARIO
//*******************************************************
function exclui_usuario(){
	var actpos = $('#position_user').val();
	if(empty(actpos)){
		alert('Selecione uma linha');
		//swal('Atencao','É necessário selecionar uma linha','warning');
		return;
	}

	if(!empty(getStatus(actpos,DIV_TABELA_USUARIO))){
		cancela_usuario(1);
		return;
	}

	var us_nome = objTabelaUsuario.lista[actpos].us_nome;


	var funcao = "funcao=usuario" +
				 "&comando=exclui"+
				 "&us_nome=" + us_nome;

	AJAX(SERVLET, funcao, function(retorno){
		retorno = JSon(retorno);
		if(!retorno){
			var erro = "Houve um erro interno de servidor.\nEntre em contato com o suporte";
			alert(erro);
//			swal('Erro de excluão',erro,'error');
			return;
		}
		if(!empty(retorno.error)){
			//ERRO
//			swal({
//					title:'Erro ao excluir Usuario',
//					text: retorno.mensagem,
//					type: 'error'
//				},
//				function(){
//					selecionaLinha(DIV_TABELA_USUARIO,actpos,1);
//				}
//			);
			alert('Erro ao excluir Usuario\n'+retorno.error);
			return;
		}

		objTabelaUsuario.lista.splice(actpos,1);
		objTabelaUsuario.total -= 1;
		
		montaTabela_usuario(function(){
			$('#record_user').val(objTabelaUsuario.total);
			if(objTabelaUsuario.total > 0){
				if(actpos > 0){
					--actpos;
				}
				selecionaLinha(DIV_TABELA_USUARIO,actpos,1);
			}
		});
	});

	// swal({
	// 		title: "Deseja excluir o Usuário selecionado?",
	// 		type: "warning",
	// 		showCancelButton: true,
	// 		confirmButtonText: "Sim",
	// 		cancelButtonText: "Não",
	// 		closeOnConfirm: false,
	// 		closeOnCancel: true,
	// 		showLoaderOnConfirm: true,
	// 		confirmButtonColor: "#DD6B55"
	// 	}, function(confirmouExclusao){
	// 		if(!confirmouExclusao){
	// 			return;
	// 		}

	// 		var funcao = "funcao=deleta&us_nome=" + us_nome;

	// 		AJAX(SERVLET, funcao, function(retorno){
	// 			retorno = json(retorno);
	// 			if(!retorno){
	// 				var erro = "Houve um erro interno de servidor.\nEntre em contato com o suporte";
	// 				swal('Erro de excluão',erro,'error');
	// 				return;
	// 			}
	// 			if(!empty(retorno.error)){
	// 				//ERRO
	// 				swal({
	// 						title:'Erro ao excluir Usuario',
	// 						text: retorno.mensagem,
	// 						type: 'error'
	// 					},
	// 					function(){
	// 						selecionaLinha(DIV_TABELA_USUARIO,actpos,1);
	// 					}
	// 				);
	// 				return;
	// 			}

	// 			objTabelaUsuario.registros.splice(actpos,1);
	// 			objTabelaUsuario.total -= 1;
	// 			swal.close();

	// 			montaTabela_usuario(function(){
	// 				$('#record_user').val(objTabelaUsuario.total);
	// 				if(objTabelaUsuario.total > 0){
	// 					if(actpos > 0){
	// 						--actpos;
	// 					}
	// 					selecionaLinha(DIV_TABELA_USUARIO,actpos,1);
	// 				}
	// 			});
	// 		});
	// 	}
	// );
}


//*******************************************************
//PINTA AS LINHAS - USUARIO
//*******************************************************
function pintaLinha_usuario(elemento){
	var actpos = $(elemento).attr('posicao');
	if(actpos == $('#position_user').val()) return; // SE FOR A LINHA ATUAL N FAZ NADA

	$('#position_user').val(actpos);
	$(DIV_TABELA_USUARIO + ' .active').removeClass('active');
	$(elemento).addClass('active');
}


//***********************************************************************
//					FIM FUNCOES DA TABELA DE USUARIO
//***********************************************************************






//**********************************************************************************
//					FUNCOES DA TABELA DE COMODO
//**********************************************************************************


//*******************************************************
//					BUSCA COMODO
//*******************************************************
function montaQuery_comodo(){
	var funcao = "funcao=comodo"+
				 "&comando=busca" +
				 "&busca="+$("#cd_busca").val();

	 AJAX(SERVLET, funcao, function(retorno){
		retorno = JSon(retorno);
	
		//CASO OCORRA ALGUM ERRO
		if(!retorno){
			alert("Ocorreu um erro interno ao servidor");
		    return; //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
		}
		if (!empty(retorno.error)) {
			alert("Ocorreu um erro ao buscar comodos\n"+
				  "Erro: " + retorno.mensagem);
		    return; //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
		}

		objTabelaComodo = retorno;
		objTabelaComodo.total = objTabelaComodo.lista.length;
		montaTabela_comodo();
	 });
}


//*******************************************************
//					MONTA TABELA - COMODO
//*******************************************************
function montaTabela_comodo(fCustom){
	//LIMPA A TABELA DO COMODO
	LimpaTabela(DIV_TABELA_COMODO);

	//MONTA AS LINHAS DA TABELA
	var tabela = "";
	for(var i = 0; i < objTabelaComodo.total; i++){
		tabela += "<tr posicao='"+i+"'>";
		tabela += montaLinha_comodo(i);
		tabela += "</tr>";  
	}

	//COLOCA AS LINHAS NA TABELA
	$(DIV_TABELA_COMODO).append(tabela);

	if(objTabelaComodo.total > 0 && empty(fCustom)){
		selecionaLinha(DIV_TABELA_COMODO,0,1);
		$(DIV_TABELA_COMODO).animate({ scrollTop: "=0" }, "fast"); //VOLTA O SCROLL PRA CIMA
	}
	$("#record_comodo").val(objTabelaComodo.total);
	//FUNCAO CUSTOM
	if(!empty(fCustom)){
		fCustom();
	}
	
	if(objTabelaComodo.total == 0){
		$("#cd_busca").select();
	}
}


//*******************************************************
//				MONTA LINHA - COMODO
//*******************************************************
function montaLinha_comodo(i){
	var aux = objTabelaComodo.lista[i];
	var linha = "<td class='w40' ><input value='' readonly></td>"+
				"<td class='w40'><input class='center' value='"+aux.cd_id+"' name='cd_id' readonly></td>"+
				"<td class='w230'><input class='uppercase' value='"+aux.cd_nome+"' name='cd_nome' cd_nome='"+aux.cd_nome+"' maxlength='20'></td>";

	return linha;
}


//*******************************************************
//				INSERE LINHA - COMODO
//*******************************************************
function insere_comodo(){	
	if(!Verifica_Alteracao(DIV_TABELA_COMODO)){
		selecionaLinha(DIV_TABELA_COMODO,$('#position_comodo').val(),2);
		return;
	}

	if(empty(objTabelaComodo.lista)){
		objTabelaComodo = {};
		objTabelaComodo.lista = [];
		objTabelaComodo.total = 0;
	}

	var novaPosicao = {};
	novaPosicao.cd_id = "";
	novaPosicao.cd_nome = "";
	
	
	objTabelaComodo.lista.push(novaPosicao);
	objTabelaComodo.total += 1;
	
	var actpos = objTabelaComodo.total > 0 ? (objTabelaComodo.total - 1) : 0;

	montaTabela_comodo(function(){
		setStatus(actpos,'+',DIV_TABELA_COMODO);
		pintaLinha_comodo($(DIV_TABELA_COMODO	 + " tr[posicao="+actpos+"]"));
		Bloqueia_Linhas(actpos,DIV_TABELA_COMODO);
		$('#record_comodo').val(objTabelaComodo.total);
		selecionaLinha(DIV_TABELA_COMODO,actpos,2);
	});	
}


//*******************************************************
//			MUDA O STATUS DA LINHA EDITADA DA TABELA 
//*******************************************************
function edicao_comodo(elemento){
	var posicao = $(elemento.parent().parent()).attr('posicao');
	var campo = $(elemento).attr('name');
	var original = objTabelaComodo.lista[posicao][campo];

	//NAO HOUVE ALTERACAO
	if($(elemento).val() == original || getStatus(posicao,DIV_TABELA_COMODO) !== ''){
		return;
	}

	setStatus(posicao, 'a', DIV_TABELA_COMODO);
	Bloqueia_Linhas(posicao, DIV_TABELA_COMODO);
}


//*******************************************************
//				CANCELA AS MUDANCAS FEITAS NA TABELA - COMODO
//*******************************************************
function cancela_comodo(cell){
	var actpos = $("#position_comodo").val();
	if(empty(actpos)){
		return;
	}

	if(empty(cell)){
		cell = 2;
	}

	if(getStatus(actpos,DIV_TABELA_COMODO) === 'a'){
		var tr = montaLinha_usuario(actpos);

		$(DIV_TABELA_COMODO + " tr[posicao="+actpos+"]").html(tr);

		Desbloqueia_Linhas(actpos,DIV_TABELA_COMODO);

	}else if(getStatus(actpos,DIV_TABELA_COMODO) === '+'){
		objTabelaComodo.lista.splice(actpos,1);
		objTabelaComodo.total -= 1;

		montaTabela_comodo(function(){
			$('#record_comodo').val(objTabelaComodo.total);
			if(objTabelaComodo.total > 0){
				if(actpos > 0){
					--actpos;
				}
			}
		});
	}
	selecionaLinha(DIV_TABELA_COMODO,actpos,cell);
}


//*******************************************************
//			GRAVA OS DADOS EDITADOS DA TABELA - COMODO
//*******************************************************
function grava_comodo(cell, fcustom_grava){
	var actpos = $("#position_comodo").val();
	if(empty(actpos)){
		alert("Selecione uma linha");
    //	swal('Aten��o','� necess�rio selecionar uma linha','warning');
		return;
	}

	if(empty(cell)){
		cell = 1;
	}

	var status = getStatus(actpos, DIV_TABELA_COMODO);

	if(empty(status)){
		selecionaLinha(DIV_TABELA_COMODO, actpos, cell);
		return;
	}

	var linha = DIV_TABELA_COMODO + " tr[posicao="+actpos+"] input";

	//VALIDACOES
	var mensagem = '';
	if(empty($(linha+"[name=cd_nome]").val()))
		mensagem +='Nome do comodo é obrigatório';

	if(!empty(mensagem)){
		alert(mensagem);
		//swal("N�o foi Poss�vel Cadastrar o Usuario\n Verifique os Campos a baixo",mensagem,'error');
		return;
	}

	var funcao = "funcao=comodoo&comando="+(status=='+' ? 'insert' : 'update') +
				"&cd_nome=" + $(linha+"[name=cd_nome]").val().toUpperCase()+
				"&cd_id=" + $(linha+"[name=cd_id]").val();

	//swal.loading();
	AJAX(SERVLET, funcao, function(retorno){
		retorno = JSon(retorno);

      if(!retorno){
			var erro = "Houve um erro interno de servidor.\nEntre em contato com o suporte";

			LimpaTabela(DIV_TABELA_COMODO);

			$(DIV_TABELA_COMODO).html(erro);
			alert('Erro ao gravar alterações da tabela\n' + erro);
			return;
		}

		if(!empty(retorno.error)){
//			swal({
//				title: 'Erro ao gravar',
//				text: retorno.mensagem,
//				type: 'error'
//			}, function(){
//					selecionaLinha(DIV_TABELA_COMODO, actpos, cell);
//				}
//			);
			
			alert('Erro ao gravar\n'+retorno.mensagem);

			return;
		}

		//JOGA O RETORNO DO USUARIO NO OBJETO
		objTabelaComodo.lista[actpos] = retorno.lista[0];
		
		if(status === '+'){
          setStatus(actpos, 'a', DIV_TABELA_COMODO);
		}
		cancela_comodo(cell);

		if(!empty(fcustom_grava)){
			fcustom_grava();
			return;
		}

		//swal.close();
	});
}


//*******************************************************
//			DELETA O REGISTRO SELECIONADO - COMODO
//*******************************************************
function exclui_comodo(){
	var actpos = $('#position_comodo').val();
	if(empty(actpos)){
		alert('Selecione uma linha');
		//swal('Atencao','É necessário selecionar uma linha','warning');
		return;
	}

	if(!empty(getStatus(actpos,DIV_TABELA_COMODO))){
		cancela_comodo(1);
		return;
	}

	var cd_id = objTabelaComodo.lista[actpos].cd_id;


	var funcao = "funcao=comodo" +
				 "&comando=exclui"+
				 "&cd_id=" + cd_id;

	AJAX(SERVLET, funcao, function(retorno){
		retorno = JSon(retorno);
		if(!retorno){
			var erro = "Houve um erro interno de servidor.\nEntre em contato com o suporte";
			alert(erro);
//			swal('Erro de excluão',erro,'error');
			return;
		}
		if(!empty(retorno.error)){
			//ERRO
//			swal({
//					title:'Erro ao excluir Usuario',
//					text: retorno.mensagem,
//					type: 'error'
//				},
//				function(){
//					selecionaLinha(DIV_TABELA_COMODO,actpos,1);
//				}
//			);
			alert('Erro ao excluir Comodo\n'+retorno.error);
			return;
		}

		objTabelaComodo.lista.splice(actpos,1);
		objTabelaComodo.total -= 1;
		
		montaTabela_usuario(function(){
			$('#record_comodo').val(objTabelaComodo.total);
			if(objTabelaComodo.total > 0){
				if(actpos > 0){
					--actpos;
				}
				selecionaLinha(DIV_TABELA_COMODO,actpos,2);
			}
		});
	});

	// swal({
	// 		title: "Deseja excluir o Usuário selecionado?",
	// 		type: "warning",
	// 		showCancelButton: true,
	// 		confirmButtonText: "Sim",
	// 		cancelButtonText: "Não",
	// 		closeOnConfirm: false,
	// 		closeOnCancel: true,
	// 		showLoaderOnConfirm: true,
	// 		confirmButtonColor: "#DD6B55"
	// 	}, function(confirmouExclusao){
	// 		if(!confirmouExclusao){
	// 			return;
	// 		}

	// 		var funcao = "funcao=deleta&us_nome=" + us_nome;

	// 		AJAX(SERVLET, funcao, function(retorno){
	// 			retorno = json(retorno);
	// 			if(!retorno){
	// 				var erro = "Houve um erro interno de servidor.\nEntre em contato com o suporte";
	// 				swal('Erro de excluão',erro,'error');
	// 				return;
	// 			}
	// 			if(!empty(retorno.error)){
	// 				//ERRO
	// 				swal({
	// 						title:'Erro ao excluir Usuario',
	// 						text: retorno.mensagem,
	// 						type: 'error'
	// 					},
	// 					function(){
	// 						selecionaLinha(DIV_TABELA_COMODO,actpos,1);
	// 					}
	// 				);
	// 				return;
	// 			}

	// 			objTabelaComodo.registros.splice(actpos,1);
	// 			objTabelaComodo.total -= 1;
	// 			swal.close();

	// 			montaTabela_usuario(function(){
	// 				$('#record_user').val(objTabelaComodo.total);
	// 				if(objTabelaComodo.total > 0){
	// 					if(actpos > 0){
	// 						--actpos;
	// 					}
	// 					selecionaLinha(DIV_TABELA_COMODO,actpos,1);
	// 				}
	// 			});
	// 		});
	// 	}
	// );
}


//*******************************************************
//				PINTA AS LINHAS - COMODO
//*******************************************************
function pintaLinha_comodo(elemento){
	var actpos = $(elemento).attr('posicao');
	if(actpos == $('#position_comodo').val()) return; // SE FOR A LINHA ATUAL N FAZ NADA

	$('#position_comodo').val(actpos);
	$(DIV_TABELA_COMODO + ' .active').removeClass('active');
	$(elemento).addClass('active');
}


//***********************************************************************
//					FIM FUNCOES DA TABELA DE COMODO
//***********************************************************************


















//***********************************************************************
$(document).ready(function(){
	//***********************************************************************
	//MOSTRA A TABELA SELECIONADA 
	//***********************************************************************
	$("#options").on('click', 'li',function(){
		//ATIVA A OPÇÃO QUE FOI SELECIONADA
		$("#options li").removeClass("active");
		$(this).addClass("active");

		//MOSTRA A TABELA DA OPÇÃOS SELECIONADA E ESCONDE AS OUTRAS
		$("div[name*=table_]").hide();
		$("div[name=tabelas] div[name=table_"+$(this).attr("name")+"]").show();
		$(".footer input").val("0");//RESETA O FOOTER
		$(".table tbody").html("");//LIMPA AS TABELAS
		
		//LIMPA OS OBJETOS
		objTabelaUsuario = {}; //OBJETO DA TABELA DE USUARIO 
		objTabelaComodo = {};  //OBJETO DA TABELA DE COMODO
		objTabelaLampada = {}; //OBJETO DA TABELA DE LAMPADA
	});
	
	
	
	
	
	//***********************************************************************
	//				EVENTOS DA TABELA DE USUARIO
	//***********************************************************************
	

	//***********************************************************************
	//BUSCA USUARIO QUANDO APERTAR ENTER
	//***********************************************************************
	$("#us_busca").on("keyup", function(e){
		switch (e.which) {
			case 13://ENTER
				montaQuery_usuario();
			break;
		}
	});
	
	
	//*******************************************************
	//KEYUP DOS INPUTS DA DIV_TABELA
	//*******************************************************
	$(DIV_TABELA_USUARIO).on("keyup", 'input',function(e){
		var actpos = $("#position_user").val();
		var cell = $(this).parent().index();
		switch (e.which) {
			case 38: //PARA CIMA
				if(actpos > 0){
					selecionaLinha(DIV_TABELA_USUARIO,--actpos,cell);
				}
			break;

			case 40://PARA BAIXO
				if (Number(actpos)+1 < $("#record_user").val()){
					selecionaLinha(DIV_TABELA_USUARIO,++actpos,cell);
				} else if(Verifica_Alteracao(DIV_TABELA_USUARIO)){
						insere_usuario();
				}
			break;

			case 27://ESC
				$(this).blur();
				cancela_usuario(cell);
			break;

			case 45://INSER
				if(Verifica_Alteracao(DIV_TABELA_USUARIO)){
					insere_usuario();
				}
			break;

			case 13://ENTER
				$(this).blur();
				grava_usuario(cell);
			break;
		}
	});

	//***********************************************************************
	//PINTA  ALINHA SELECIONADA
	//***********************************************************************
	$(DIV_TABELA_USUARIO).on("focus","input",function(){
		pintaLinha_usuario($(this).parent().parent());
	});
	
	//***********************************************************************
	//SELECIONA O TEXTO INTEIRO NO CLICK TABELA OBSERVA��O
	//***********************************************************************
	$(DIV_TABELA_USUARIO).on("click", 'td:not(.inativo) input', function(){
		$(this).select();
	});

	//*******************************************************
	//EDICAO DOS DADOS - USUARIO
	//*******************************************************
	$(DIV_TABELA_USUARIO).on('change', 'input', function(){
		edicao_usuario($(this));
	});
	
	//***********************************************************************
	//				FIM EVENTOS DA TABELA DE USUARIO
	//***********************************************************************
	
	
	
	
	//***********************************************************************
	//				EVENTOS DA TABELA DE COMODO
	//***********************************************************************
	

	//***********************************************************************
	//BUSCA COMODO QUANDO APERTAR ENTER
	//***********************************************************************
	$("#cd_busca").on("keyup", function(e){
		switch (e.which) {
			case 13://ENTER
				montaQuery_comodo();
			break;
		}
	});
	
	
	//*******************************************************
	//KEYUP DOS INPUTS DA DIV_TABELA
	//*******************************************************
	$(DIV_TABELA_COMODO).on("keyup", 'input',function(e){
		var actpos = $("#position_comodo").val();
		var cell = $(this).parent().index();
		switch (e.which) {
			case 38: //PARA CIMA
				if(actpos > 0){
					selecionaLinha(DIV_TABELA_COMODO,--actpos,cell);
				}
			break;

			case 40://PARA BAIXO
				if (Number(actpos)+1 < $("#record_comodo").val()){
					selecionaLinha(DIV_TABELA_COMODO,++actpos,cell);
				} else if(Verifica_Alteracao(DIV_TABELA_COMODO)){
						insere_comodo();
				}
			break;

			case 27://ESC
				$(this).blur();
				cancela_comodo(cell);
			break;

			case 45://INSER
				if(Verifica_Alteracao(DIV_TABELA_COMODO)){
					insere_comodo();
				}
			break;

			case 13://ENTER
				$(this).blur();
				grava_comodo(cell);
			break;
		}
	});

	//***********************************************************************
	//PINTA  ALINHA SELECIONADA
	//***********************************************************************
	$(DIV_TABELA_COMODO).on("focus","input",function(){
		pintaLinha_comodo($(this).parent().parent());
	});
	
	//***********************************************************************
	//SELECIONA O TEXTO INTEIRO NO CLICK TABELA
	//***********************************************************************
	$(DIV_TABELA_COMODO).on("click", 'td:not(.inativo) input', function(){
		$(this).select();
	});

	//*******************************************************
	//EDICAO DOS DADOS - COMODO
	//*******************************************************
	$(DIV_TABELA_COMODO).on('change', 'input', function(){
		edicao_comodo($(this));
	});

});
//***********************************************************************


 
 