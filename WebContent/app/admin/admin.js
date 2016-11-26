//***********************************************************************
//						CONSTANTES  SEMPRE USADAS
//***********************************************************************
var SERVLET = "Admin"; //SERVLET USADO NESTA PAGINA

//OBJETO DAS TABELAS
var objTabelaUsuario = {}; //OBJETO DA TABELA DE USUARIO 
var objTabelaComodo = {};  //OBJETO DA TABELA DE COMODO
var objTabelaLampada = {}; //OBJETO DA TABELA DE LAMPADA
var objTabelaTemperatura = {}; //OBJETO DA TABELA DE TEMPERATURA
var objTabelaCamera = {}; //OBJETO DA TABELA DE CAMERA
var objTabelaPortao = {}; //OBJETO DA TABELA DE PORTAO
var objTabelaAcesso = {}; //OBJETO DA TABELA DE ACESSO


//DIV'S DAS TABELAS
var DIV_TABELA_USUARIO = "#dados_usuario";
var DIV_TABELA_COMODO = "#dados_comodo";
var DIV_TABELA_LAMPADA = "#dados_lampada";
var DIV_TABELA_TEMPERATURA = "#dados_temperatura";
var DIV_TABELA_CAMERA = "#dados_camera";
var DIV_TABELA_PORTAO = "#dados_portao";
var DIV_TABELA_ACESSO = "#dados_acesso";


//COMBO DE COMODOS
var objComboComodo = {}; //OBJETO DO COMBO DE COMODOS
var objComboLampada = {}; //OBJETO DO COMBO DE LAMPADAS
var buscaComodo = true; //VARIAVEL PRA VERIFICA SE PRECISA BUSCAR OS COMBOS
//***********************************************************************


//***********************************************************************
//					FIM CONSTANTES SEMPMRE USADAS
//***********************************************************************







//***********************************************************************
//ABRE A TABELA SELECIONADA
//***********************************************************************
function admin(tabela){
	$("#divfundo").css("visibility","visible");
	$("#tabela_" + tabela).removeClass('hide');
	
	if(buscaComodo){
		monta_combo();
	}
	
}

function fecha_admin(tabela){
	$("#divfundo").css("visibility","hidden");
	$("#tabela_" + tabela).addClass('hide');
	
}





















//*******************************************************
//				BUSCA COMBOS DA TELA
//*******************************************************
function monta_combo(){
	var funcao = 'funcao=monta_combo';
	AJAX(SERVLET,funcao, function(retorno){
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

		//COMBO DE COMODOS
		//[0] - COMODOS
		//[1] - LAMPADAS
		objComboComodo = retorno[0].lista;
		objComboLampada = retorno[1].lista;
		
		buscaComodo = false;
	});	
}







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
	var linha = "<td class='w60 center' ><input value='' readonly></td>"+
				"<td class='w240'><input class='uppercase' value='"+aux.us_nome+"' name='us_nome' us_nome='"+aux.us_nome+"'  maxlength='20'></td>";

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

	//BUSCA OS ACESSOS DESSE USUARIO
	objTabelaAcesso.lista = objTabelaUsuario.lista[actpos].acessos;
	objTabelaAcesso.total = objTabelaAcesso.lista.length;
	montaTabela_acesso();
}




//******************************************************************************
//				TABELA DE ACESSOS 
//******************************************************************************

//
////*******************************************************
////					BUSCA ACESSOS
////*******************************************************
//function montaQuery_acesso(){
//	//PEGA A POSICAO DO USUARIO SELECIONADO
//	var actpos_usuario = $("#position_user").val();
//	if(empty(actpos_usuario)) return; //SE N SELECIONAR UM USUARIO NAO FAZ NADA
//	if(!Verifica_Alteracao(DIV_TABELA_USUARIO)) return; //SE ESTIVER INSERINDO OU ALTERANDO USUARIO N FAZ NADA
//
//	us_nome = objTabelaUsuario.lista[actpos_usuario].us_nome;
//
//	var funcao = "funcao=acesso"+
//				 "&comando=buscaAcessoUsuario" +
//				 "&busca="+us_nome;
//
//	 AJAX(SERVLET, funcao, function(retorno){
//		retorno = JSon(retorno);
//	
//		//CASO OCORRA ALGUM ERRO
//		if(!retorno){
//			alert("Ocorreu um erro interno ao servidor");
//		    return; //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
//		}
//		if (!empty(retorno.error)) {
//			alert("Ocorreu um erro ao buscar acessos\n"+
//				  "Erro: " + retorno.mensagem);
//		    return; //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
//		}
//
//		objTabelaAcesso = retorno;
//		objTabelaAcesso.total = objTabelaAcesso.lista.length;
//		montaTabela_acesso();
//	 });
//}


//*******************************************************
//MONTA TABELA - ACESSO
//*******************************************************
function montaTabela_acesso(fCustom){
	//LIMPA A TABELA DO ACESSO
	LimpaTabela(DIV_TABELA_ACESSO);

	//MONTA AS LINHAS DA TABELA
	var tabela = "";
	for(var i = 0; i < objTabelaAcesso.total; i++){
		tabela += "<tr posicao='"+i+"'>";
		tabela += montaLinha_acesso(i);
		tabela += "</tr>";  
	}

	//COLOCA AS LINHAS NA TABELA
	$(DIV_TABELA_ACESSO).append(tabela);

	if(objTabelaAcesso.total > 0 && empty(fCustom)){
		selecionaLinha(DIV_TABELA_ACESSO,0,1);
		$(DIV_TABELA_ACESSO).animate({ scrollTop: "=0" }, "fast"); //VOLTA O SCROLL PRA CIMA
	}
	$("#record_acesso").val(objTabelaAcesso.total);
	//FUNCAO CUSTOM
	if(!empty(fCustom)){
		fCustom();
	}
}


//*******************************************************
//				MONTA LINHA - ACESSO
//*******************************************************
function montaLinha_acesso(i){
	var aux = objTabelaAcesso.lista[i];
	var linha = "<td class='w60 center' ><input value='' readonly></td>"+
				"<td class='w180'><input class='uppercase' value='"+aux.cd_nome+"' name='cd_nome' cd_nome='"+aux.cd_nome+"' readonly></td>"+
				"<td class='w60 number'>"+
					"<input value='"+aux.ac_libera+"' name='ac_libera'/>"+
					"<select name='ac_libera'></select>"+
				"</td>";
	return linha;
}


//*******************************************************
//MUDA O STATUS DA LINHA EDITADA DA TABELA 
//*******************************************************
function edicao_acesso(elemento){
	var posicao = $(elemento.parent().parent()).attr('posicao');
	var campo = $(elemento).attr('name');
	var original = objTabelaAcesso.lista[posicao][campo];

	//NAO HOUVE ALTERACAO
	if($(elemento).val() == original || getStatus(posicao,DIV_TABELA_ACESSO) !== ''){
		return;
	}

	setStatus(posicao, 'a', DIV_TABELA_ACESSO);
	Bloqueia_Linhas(posicao, DIV_TABELA_ACESSO);
}


//*******************************************************
//CANCELA AS MUDANCAS FEITAS NA TABELA - ACESSO
//*******************************************************
function cancela_acesso(cell){
	var actpos = $("#position_acesso").val();
	if(empty(actpos)){
		return;
	}

	if(empty(cell)){
		cell = 2;
	}

	if(getStatus(actpos,DIV_TABELA_ACESSO) === 'a'){
		var tr = montaLinha_acesso(actpos);

		$(DIV_TABELA_ACESSO + " tr[posicao="+actpos+"]").html(tr);

		Desbloqueia_Linhas(actpos,DIV_TABELA_ACESSO);

	}else if(getStatus(actpos,DIV_TABELA_ACESSO) === '+'){
		objTabelaAcesso.lista.splice(actpos,1);
		objTabelaAcesso.total -= 1;

		montaTabela_acesso(function(){
			$('#record_acesso').val(objTabelaAcesso.total);
			if(objTabelaAcesso.total > 0){
				if(actpos > 0){
					--actpos;
				}
			}
		});
	}
	selecionaLinha(DIV_TABELA_ACESSO,actpos,cell);
}


//*******************************************************
//GRAVA OS DADOS EDITADOS DA TABELA - ACESSO
//*******************************************************
function grava_acesso(cell, fcustom_grava){
	if(!Verifica_Alteracao(DIV_TABELA_USUARIO)){
		alert("grave as alterações do usuario antes de proseguir");
		return;
	}
	var actpos = $("#position_acesso").val();
	var actpos_usuario = $("#position_user").val();
	if(empty(actpos)){
		alert("Selecione uma linha");
    //	swal('Aten��o','� necess�rio selecionar uma linha','warning');
		return;
	}

	if(empty(cell)){
		cell = 1;
	}

	var status = getStatus(actpos, DIV_TABELA_ACESSO);

	if(empty(status)){
		selecionaLinha(DIV_TABELA_ACESSO, actpos, cell);
		return;
	}

	var linha = DIV_TABELA_ACESSO + " tr[posicao="+actpos+"] input";
	var comando = ($(linha+"[name=ac_libera]").val() == 'A' ? 'liberaAcesso' : 'bloqueiaAcesso');

	var funcao = "funcao=acesso&comando="+comando+
				"&us_nome=" + objTabelaUsuario.lista[actpos_usuario].us_nome+
				"&cd_id="+ objTabelaAcesso.lista[actpos].cd_id +
				"&ac_libera="+ $(linha+"[name=ac_libera]").val().toUpperCase();

	//swal.loading();
	AJAX(SERVLET, funcao, function(retorno){
		retorno = JSon(retorno);

      if(!retorno){
			var erro = "Houve um erro interno de servidor.\nEntre em contato com o suporte";

			LimpaTabela(DIV_TABELA_ACESSO);

			$(DIV_TABELA_ACESSO).html(erro);
			alert('Erro ao gravar alterações da tabela\n' + erro);
			return;
		}

		if(!empty(retorno.error)){
//			swal({
//				title: 'Erro ao gravar',
//				text: retorno.mensagem,
//				type: 'error'
//			}, function(){
//					selecionaLinha(DIV_TABELA_ACESSO, actpos, cell);
//				}
//			);
			
			alert('Erro ao gravar\n'+retorno.mensagem);

			return;
		}

		//JOGA O RETORNO DO ACESSO NO OBJETO
		objTabelaAcesso.lista[actpos] = retorno.lista[0].acessos[0];
		
		if(status === '+'){
          setStatus(actpos, 'a', DIV_TABELA_ACESSO);
		}
		cancela_acesso(cell);

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
//PINTA AS LINHAS - ACESSO
//*******************************************************
function pintaLinha_acesso(elemento){
	var actpos = $(elemento).attr('posicao');
	if(actpos == $('#position_acesso').val()) return; // SE FOR A LINHA ATUAL N FAZ NADA

	$('#position_acesso').val(actpos);
	$(DIV_TABELA_ACESSO + ' .active').removeClass('active');
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
				  "Erro: " + retorno.error);
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

	//ATUALIZA O COMBO DE COMODOS
	objComboComodo = objTabelaComodo.lista;
}


//*******************************************************
//				MONTA LINHA - COMODO
//*******************************************************
function montaLinha_comodo(i){
	var aux = objTabelaComodo.lista[i];
	
	var linha = "<td class='w60 center' ><input value='' readonly></td>"+
				"<td class='w70'><input value='"+aux.cd_id+"' name='cd_id' readonly></td>"+
				"<td class='w200'><input class='uppercase' value='"+aux.cd_nome+"' name='cd_nome' cd_nome='"+aux.cd_nome+"' maxlength='20'></td>" +
				"<td class='w260'>"+
					"<input	value='"+aux.cd_tipo+"' name='cd_tipo'/>"+
					"<select name='cd_tipo'></select>"+
				"</td>";
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
	novaPosicao.cd_tipo = "";
	
	
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
		var tr = montaLinha_comodo(actpos);

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

	if(empty($(linha+"[name=cd_tipo]").val()))
		mensagem +='Tipo do comodo é obrigatório';

	if(!empty(mensagem)){
		alert(mensagem);
		//swal("N�o foi Poss�vel Cadastrar o Usuario\n Verifique os Campos a baixo",mensagem,'error');
		return;
	}

	var funcao = "funcao=comodo&comando="+(status=='+' ? 'insert' : 'update') +
				"&cd_nome=" + $(linha+"[name=cd_nome]").val().toUpperCase()+
				"&cd_tipo=" + $(linha+"[name=cd_tipo]").val()+
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
		
		montaTabela_comodo(function(){
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
//				ENVIAR IMAGEM DO COMODO
//*******************************************************
function upload_planta(){
    var file = document.querySelector('input[type=file]').files[0];
    var actpos = $("#position_comodo").val();

    var img = $("#cd_planta");
    var reader = new FileReader();


    reader.onloadend = function(){
        img.attr('src', reader.result);
        $.ajax({
            url: "/Fenrir/Controller/"+ SERVLET,
            type: 'POST',
            data: {'funcao' : 'comodo', 'comando': 'upload_planta', 'cd_id': objTabelaComodo.lista[actpos].cd_id, 'cd_planta': reader.result},
        })
        .done(function(retorno) {
			retorno = JSon(retorno);
			if(!retorno){
				var erro = "Houve um erro interno de servidor.\nEntre em contato com o suporte";
				alert('Houve um erro interno de servidor.\nEntre em contato com o suporte');
//				swal('Erro ao Alterar Imagem',erro,'error');
				img.attr('src', "");
				return;
			}
			if(!empty(retorno.error)){
				//ERRO
				alert('erro: ' + retorno.mensagem);
				selecionaLinha(DIV_TABELA_COMODO,actpos,1);

				// swal({
				// 		title:'Erro ao Alterar Imagem',
				// 		text: retorno.mensagem,
				// 		type: 'error'
				// 	},
				// 	function(){
				// 		selecionaLinha(DIV_TABELA_COMODO,actpos,1);
				// 	}
				// );
				img.attr('src', "");
				return;
			}
        });
    };

    if(file){
        reader.readAsDataURL(file);
    } else {
		img.attr('src', "");
    }
}


//***********************************************************************
//FUNCAO QUE BUSCA A IMAGEM
//***********************************************************************
function buscaImagem(){
//	actpos = $('#position_comodo').val()
//	cd_id = $(DIV_TABELA_COMODO + " tr[posicao="+actpos+"] input[name=cd_id]").val();
//	var funcao = 'cd_id='+ cd_id;
//	AJAX(SERVLET_IMAGEM, funcao, function(retorno){
//		
//		var baseString = retorno;
//		// data:image/png;base64
//		
//		if(empty(baseString)) {
//			$("#cd_planta").prop('src','');	
//			return;
//		}
//		
//		if(baseString.substring(0,4) != "data"){
//			baseString = "data:image/png;base64," + baseString;
//		}
//		
//		$("#cd_planta").prop('src',baseString);	
//	});
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
	
//	buscaImagem();
}


//***********************************************************************
//					FIM FUNCOES DA TABELA DE COMODO
//***********************************************************************

















































//**********************************************************************************
//					FUNCOES DA TABELA DE LAMPADA
//**********************************************************************************


//*******************************************************
//					BUSCA LAMPADA
//*******************************************************
function montaQuery_lampada(){
	var funcao = "funcao=lampada"+
				 "&comando=busca" +
				 "&busca="+$("#lp_busca").val();

	 AJAX(SERVLET, funcao, function(retorno){
		retorno = JSon(retorno);
	
		//CASO OCORRA ALGUM ERRO
		if(!retorno){
			alert("Ocorreu um erro interno ao servidor");
		    return; //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
		}
		if (!empty(retorno.error)) {
			alert("Ocorreu um erro ao buscar lâmpadas\n"+
				  "Erro: " + retorno.mensagem);
		    return; //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
		}

		objTabelaLampada = retorno;
		objTabelaLampada.total = objTabelaLampada.lista.length;
		montaTabela_lampada();
	 });
}


//*******************************************************
//					MONTA TABELA - LAMPADA
//*******************************************************
function montaTabela_lampada(fCustom){
	//LIMPA A TABELA
	LimpaTabela(DIV_TABELA_LAMPADA);

	//MONTA AS LINHAS DA TABELA
	var tabela = "";
	for(var i = 0; i < objTabelaLampada.total; i++){
		tabela += "<tr posicao='"+i+"'>";
		tabela += montaLinha_lampada(i);
		tabela += "</tr>";  
	}

	//COLOCA AS LINHAS NA TABELA
	$(DIV_TABELA_LAMPADA).append(tabela);

	if(objTabelaLampada.total > 0 && empty(fCustom)){
		selecionaLinha(DIV_TABELA_LAMPADA,0,1);
		$(DIV_TABELA_LAMPADA).animate({ scrollTop: "=0" }, "fast"); //VOLTA O SCROLL PRA CIMA
	}
	$("#record_lampada").val(objTabelaLampada.total);
	//FUNCAO CUSTOM
	if(!empty(fCustom)){
		fCustom();
	}
	
	if(objTabelaLampada.total == 0){
		$("#lp_busca").select();
	}
}


//*******************************************************
//				MONTA LINHA - LAMPADA
//*******************************************************
function montaLinha_lampada(i){
	var aux = objTabelaLampada.lista[i];
	var linha = "<td class='w60 center' ><input value='' readonly></td>"+
				"<td class='w70'><input value='"+aux.lp_id+"' name='lp_id' readonly></td>"+
				"<td class='w190'><input class='uppercase' value='"+aux.lp_nome+"' name='lp_nome' lp_nome='"+aux.lp_nome+"' maxlength='20'></td>"+
				"<td class='w70 number'><input value='"+aux.lp_tensao+"' name='lp_tensao'></td>"+
				"<td class='w80 number'><input value='"+number_format(aux.lp_consumo,3,',','.')+"' name='lp_consumo'></td>"+
				"<td class='w70 number'><input value='"+aux.lp_porta+"' name='lp_porta'></td>"+
				"<td class='w110 number'><input value='"+aux.dm_porta+"' name='dm_porta'></td>"+
				"<td class='w100 number'>"+
					"<input value='"+aux.cd_id+"' name='cd_id'/>"+
					"<select name='cd_id'></select>"+
				"</td>";
				
	return linha;
}


//*******************************************************
//				INSERE LINHA - LAMPADA
//*******************************************************
function insere_lampada(){	
	if(!Verifica_Alteracao(DIV_TABELA_LAMPADA)){
		selecionaLinha(DIV_TABELA_LAMPADA,$('#position_lampada').val(),2);
		return;
	}

	if(empty(objTabelaLampada.lista)){
		objTabelaLampada = {};
		objTabelaLampada.lista = [];
		objTabelaLampada.total = 0;
	}

	var novaPosicao = {};
	novaPosicao.lp_id = "";
	novaPosicao.lp_nome = "";
	novaPosicao.lp_tensao = 0;
	novaPosicao.lp_consumo = 0;
	novaPosicao.lp_porta = 0;
	novaPosicao.dm_porta = 0;
	novaPosicao.cd_id = "";
	
	
	objTabelaLampada.lista.push(novaPosicao);
	objTabelaLampada.total += 1;
	
	var actpos = objTabelaLampada.total > 0 ? (objTabelaLampada.total - 1) : 0;

	montaTabela_lampada(function(){
		setStatus(actpos,'+',DIV_TABELA_LAMPADA);
		pintaLinha_lampada($(DIV_TABELA_LAMPADA	 + " tr[posicao="+actpos+"]"));
		Bloqueia_Linhas(actpos,DIV_TABELA_LAMPADA);
		$('#record_lampada').val(objTabelaLampada.total);
		selecionaLinha(DIV_TABELA_LAMPADA,actpos,2);
	});	
}


//*******************************************************
//			MUDA O STATUS DA LINHA EDITADA DA TABELA 
//*******************************************************
function edicao_lampada(elemento){
	var posicao = $(elemento.parent().parent()).attr('posicao');
	var campo = $(elemento).attr('name');
	var original = objTabelaLampada.lista[posicao][campo];

	//NAO HOUVE ALTERACAO
	if($(elemento).val() == original || getStatus(posicao,DIV_TABELA_LAMPADA) !== ''){
		return;
	}

	setStatus(posicao, 'a', DIV_TABELA_LAMPADA);
	Bloqueia_Linhas(posicao, DIV_TABELA_LAMPADA);
}


//*******************************************************
//			CANCELA AS MUDANCAS FEITAS NA TABELA - LAMPADA
//*******************************************************
function cancela_lampada(cell){
	var actpos = $("#position_lampada").val();
	if(empty(actpos)){
		return;
	}

	if(empty(cell)){
		cell = 2;
	}

	if(getStatus(actpos,DIV_TABELA_LAMPADA) === 'a'){
		var tr = montaLinha_lampada(actpos);

		$(DIV_TABELA_LAMPADA + " tr[posicao="+actpos+"]").html(tr);

		Desbloqueia_Linhas(actpos,DIV_TABELA_LAMPADA);

	}else if(getStatus(actpos,DIV_TABELA_LAMPADA) === '+'){
		objTabelaLampada.lista.splice(actpos,1);
		objTabelaLampada.total -= 1;

		montaTabela_lampada(function(){
			$('#record_lampada').val(objTabelaLampada.total);
			if(objTabelaLampada.total > 0){
				if(actpos > 0){
					--actpos;
				}
			}
		});
	}
	selecionaLinha(DIV_TABELA_LAMPADA,actpos,cell);
}


//*******************************************************
//			GRAVA OS DADOS EDITADOS DA TABELA - LAMPADA
//*******************************************************
function grava_lampada(cell, fcustom_grava){
	var actpos = $("#position_lampada").val();
	if(empty(actpos)){
		alert("Selecione uma linha");
    //	swal('Aten��o','� necess�rio selecionar uma linha','warning');
		return;
	}

	if(empty(cell)){
		cell = 1;
	}

	var status = getStatus(actpos, DIV_TABELA_LAMPADA);

	if(empty(status)){
		selecionaLinha(DIV_TABELA_LAMPADA, actpos, cell);
		return;
	}

	var linha = DIV_TABELA_LAMPADA + " tr[posicao="+actpos+"] input";

	//VALIDACOES
	var mensagem = '';
	if(empty($(linha+"[name=lp_nome]").val()))
		mensagem +='Nome da lâmpada é obrigatório';

	if(empty($(linha+"[name=lp_tensao]").val()))
		mensagem +='Tensão da lâmpada é obrigatório';

	if(empty($(linha+"[name=lp_consumo]").val()))
		mensagem +='Consumo da lâmpada é obrigatório';

	if(empty($(linha+"[name=lp_porta]").val()))
		mensagem +='Porta da Lampada é obrigatório';

	if(empty($(linha+"[name=cd_id]").val()))
		mensagem +='Comodo é obrigatório';

	if(!empty(mensagem)){
		alert(mensagem);
		//swal("N�o foi Poss�vel Cadastrar o Usuario\n Verifique os Campos a baixo",mensagem,'error');
		return;
	}

	var funcao = "funcao=lampada&comando="+(status=='+' ? 'insert' : 'update') +
				"&lp_id=" + $(linha+"[name=lp_id]").val()+
				"&lp_nome=" + $(linha+"[name=lp_nome]").val().toUpperCase()+
				"&lp_tensao=" + $(linha+"[name=lp_tensao]").val()+
				"&lp_consumo=" + $(linha+"[name=lp_consumo]").val().replace(/\./g,'').replace(',','.')+
				"&lp_porta=" + $(linha+"[name=lp_porta]").val()	+
				"&dm_porta=" + $(linha+"[name=dm_porta]").val()	+
				"&cd_id=" + $(linha+"[name=cd_id]").val();
				
	//swal.loading();
	AJAX(SERVLET, funcao, function(retorno){
		retorno = JSon(retorno);

      if(!retorno){
			var erro = "Houve um erro interno de servidor.\nEntre em contato com o suporte";

			LimpaTabela(DIV_TABELA_LAMPADA);

			$(DIV_TABELA_LAMPADA).html(erro);
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

		//JOGA O RETORNO NO OBJETO
		objTabelaLampada.lista[actpos] = retorno.lista[0];
		
		if(status === '+'){
          setStatus(actpos, 'a', DIV_TABELA_LAMPADA);
		}
		cancela_lampada(cell);

		if(!empty(fcustom_grava)){
			fcustom_grava();
			return;
		}

		//swal.close();
	});
}


//*******************************************************
//			DELETA O REGISTRO SELECIONADO - LAMPADA
//*******************************************************
function exclui_lampada(){
	var actpos = $('#position_lampada').val();
	if(empty(actpos)){
		alert('Selecione uma linha');
		//swal('Atencao','É necessário selecionar uma linha','warning');
		return;
	}

	if(!empty(getStatus(actpos,DIV_TABELA_LAMPADA))){
		cancela_lampada(2);
		return;
	}

	var lp_id = objTabelaLampada.lista[actpos].lp_id;


	var funcao = "funcao=lampada" +
				 "&comando=exclui"+
				 "&lp_id=" + lp_id;

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
			alert('Erro ao excluir Lâmpada\n'+retorno.error);
			return;
		}

		objTabelaLampada.lista.splice(actpos,1);
		objTabelaLampada.total -= 1;
		
		montaTabela_lampada(function(){
			$('#record_lampada').val(objTabelaLampada.total);
			if(objTabelaLampada.total > 0){
				if(actpos > 0){
					--actpos;
				}
				selecionaLinha(DIV_TABELA_LAMPADA,actpos,2);
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
//				PINTA AS LINHAS - LAMPADA
//*******************************************************
function pintaLinha_lampada(elemento){
	var actpos = $(elemento).attr('posicao');
	if(actpos == $('#position_lampada').val()) return; // SE FOR A LINHA ATUAL N FAZ NADA

	$('#position_lampada').val(actpos);
	$(DIV_TABELA_LAMPADA + ' .active').removeClass('active');
	$(elemento).addClass('active');
}


//***********************************************************************
//					FIM FUNCOES DA TABELA DE LAMPADA
//***********************************************************************
















































//**********************************************************************************
//					FUNCOES DA TABELA DE TEMPERATURA
//**********************************************************************************


//*******************************************************
//					BUSCA TEMPERATURA
//*******************************************************
function montaQuery_temperatura(){
	var funcao = "funcao=temperatura"+
				 "&comando=busca" +
				 "&busca="+$("#tp_busca").val();

	 AJAX(SERVLET, funcao, function(retorno){
		retorno = JSon(retorno);
	
		//CASO OCORRA ALGUM ERRO
		if(!retorno){
			alert("Ocorreu um erro interno ao servidor");
		    return; //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
		}
		if (!empty(retorno.error)) {
			alert("Ocorreu um erro ao buscar sensores de temperatura\n"+
				  "Erro: " + retorno.mensagem);
		    return; //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
		}

		objTabelaTemperatura = retorno;
		objTabelaTemperatura.total = objTabelaTemperatura.lista.length;
		montaTabela_temperatura();
	 });
}


//*******************************************************
//					MONTA TABELA - TEMPERATURA
//*******************************************************
function montaTabela_temperatura(fCustom){
	//LIMPA A TABELA
	LimpaTabela(DIV_TABELA_TEMPERATURA);

	//MONTA AS LINHAS DA TABELA
	var tabela = "";
	for(var i = 0; i < objTabelaTemperatura.total; i++){
		tabela += "<tr posicao='"+i+"'>";
		tabela += montaLinha_temperatura(i);
		tabela += "</tr>";  
	}

	//COLOCA AS LINHAS NA TABELA
	$(DIV_TABELA_TEMPERATURA).append(tabela);

	if(objTabelaTemperatura.total > 0 && empty(fCustom)){
		selecionaLinha(DIV_TABELA_TEMPERATURA,0,1);
		$(DIV_TABELA_TEMPERATURA).animate({ scrollTop: "=0" }, "fast"); //VOLTA O SCROLL PRA CIMA
	}
	$("#record_temperatura").val(objTabelaTemperatura.total);
	//FUNCAO CUSTOM
	if(!empty(fCustom)){
		fCustom();
	}
	
	if(objTabelaTemperatura.total == 0){
		$("#tp_busca").select();
	}
}


//*******************************************************
//				MONTA LINHA - TEMPERATURA
//*******************************************************
function montaLinha_temperatura(i){
	var aux = objTabelaTemperatura.lista[i];
	var linha = "<td class='w60 center' ><input value='' readonly></td>"+
				"<td class='w70'><input value='"+aux.tp_id+"' name='tp_id' readonly></td>"+
				"<td class='w190'><input class='uppercase' value='"+aux.tp_nome+"' name='tp_nome' tp_nome='"+aux.tp_nome+"' maxlength='20'></td>"+
				"<td class='w70 number'><input value='"+number_format(aux.tp_tempmax,2,',','.')+"' name='tp_tempmax'></td>"+
				"<td class='w80 number'><input value='"+number_format(aux.tp_tempmin,3,',','.')+"' name='tp_tempmin'></td>"+
				"<td class='w70 number'><input value='"+aux.tp_porta+"' name='tp_porta'></td>"+
				"<td class='w120 number'>"+
					"<input value='"+aux.cd_id+"' name='cd_id'/>"+
					"<select name='cd_id'></select>"+
				"</td>"+
				"<td class='w50 center'>"+
					"<input value='"+aux.tp_status+"' name='tp_status'/>"+
					"<select name='tp_status'></select>"+
				"</td>";
				
	return linha;
}


//*******************************************************
//				INSERE LINHA - TEMPERATURA
//*******************************************************
function insere_temperatura(){	
	if(!Verifica_Alteracao(DIV_TABELA_TEMPERATURA)){
		selecionaLinha(DIV_TABELA_TEMPERATURA,$('#position_temperatura').val(),2);
		return;
	}

	if(empty(objTabelaTemperatura.lista)){
		objTabelaTemperatura = {};
		objTabelaTemperatura.lista = [];
		objTabelaTemperatura.total = 0;
	}

	var novaPosicao = {};
	novaPosicao.tp_id = "";
	novaPosicao.tp_nome = "";
	novaPosicao.tp_tempmax = 0;
	novaPosicao.tp_tempmin = 0;
	novaPosicao.tp_status = 'D';
	novaPosicao.tp_porta = 0;
	novaPosicao.cd_id = "";
	
	
	objTabelaTemperatura.lista.push(novaPosicao);
	objTabelaTemperatura.total += 1;
	
	var actpos = objTabelaTemperatura.total > 0 ? (objTabelaTemperatura.total - 1) : 0;

	montaTabela_temperatura(function(){
		setStatus(actpos,'+',DIV_TABELA_TEMPERATURA);
		pintaLinha_temperatura($(DIV_TABELA_TEMPERATURA	 + " tr[posicao="+actpos+"]"));
		Bloqueia_Linhas(actpos,DIV_TABELA_TEMPERATURA);
		$('#record_temperatura').val(objTabelaTemperatura.total);
		selecionaLinha(DIV_TABELA_TEMPERATURA,actpos,2);
	});	
}


//*******************************************************
//			MUDA O STATUS DA LINHA EDITADA DA TABELA 
//*******************************************************
function edicao_temperatura(elemento){
	var posicao = $(elemento.parent().parent()).attr('posicao');
	var campo = $(elemento).attr('name');
	var original = objTabelaTemperatura.lista[posicao][campo];

	//NAO HOUVE ALTERACAO
	if($(elemento).val() == original || getStatus(posicao,DIV_TABELA_TEMPERATURA) !== ''){
		return;
	}

	setStatus(posicao, 'a', DIV_TABELA_TEMPERATURA);
	Bloqueia_Linhas(posicao, DIV_TABELA_TEMPERATURA);
}


//*******************************************************
//			CANCELA AS MUDANCAS FEITAS NA TABELA - TEMPERATURA
//*******************************************************
function cancela_temperatura(cell){
	var actpos = $("#position_temperatura").val();
	if(empty(actpos)){
		return;
	}

	if(empty(cell)){
		cell = 2;
	}

	if(getStatus(actpos,DIV_TABELA_TEMPERATURA) === 'a'){
		var tr = montaLinha_temperatura(actpos);

		$(DIV_TABELA_TEMPERATURA + " tr[posicao="+actpos+"]").html(tr);

		Desbloqueia_Linhas(actpos,DIV_TABELA_TEMPERATURA);

	}else if(getStatus(actpos,DIV_TABELA_TEMPERATURA) === '+'){
		objTabelaTemperatura.lista.splice(actpos,1);
		objTabelaTemperatura.total -= 1;

		montaTabela_temperatura(function(){
			$('#record_temperatura').val(objTabelaTemperatura.total);
			if(objTabelaTemperatura.total > 0){
				if(actpos > 0){
					--actpos;
				}
			}
		});
	}
	selecionaLinha(DIV_TABELA_TEMPERATURA,actpos,cell);
}


//*******************************************************
//			GRAVA OS DADOS EDITADOS DA TABELA - TEMPERATURA
//*******************************************************
function grava_temperatura(cell, fcustom_grava){
	var actpos = $("#position_temperatura").val();
	if(empty(actpos)){
		alert("Selecione uma linha");
  //	swal('Aten��o','� necess�rio selecionar uma linha','warning');
		return;
	}

	if(empty(cell)){
		cell = 1;
	}

	var status = getStatus(actpos, DIV_TABELA_TEMPERATURA);

	if(empty(status)){
		selecionaLinha(DIV_TABELA_TEMPERATURA, actpos, cell);
		return;
	}

	var linha = DIV_TABELA_TEMPERATURA + " tr[posicao="+actpos+"] input";

	//VALIDACOES
	var mensagem = '';
	if(empty($(linha+"[name=tp_nome]").val()))
		mensagem +='Nome do sensor é obrigatório';

	if(empty($(linha+"[name=tp_porta]").val()))
		mensagem +='Porta é obrigatório';

	if(empty($(linha+"[name=cd_id]").val()))
		mensagem +='Comodo é obrigatório';

	if(!empty(mensagem)){
		alert(mensagem);
		//swal("N�o foi Poss�vel Cadastrar o Usuario\n Verifique os Campos a baixo",mensagem,'error');
		return;
	}

	var funcao = "funcao=temperatura&comando="+(status=='+' ? 'insert' : 'update') +
				"&tp_id=" + $(linha+"[name=tp_id]").val()+
				"&tp_nome=" + $(linha+"[name=tp_nome]").val().toUpperCase()+
				"&tp_tempmax=" + $(linha+"[name=tp_tempmax]").val().replace(/\./g,'').replace(',','.')+
				"&tp_tempmin=" + $(linha+"[name=tp_tempmin]").val().replace(/\./g,'').replace(',','.')+
				"&tp_status=" + $(linha+"[name=tp_status]").val().toUpperCase()+
				"&tp_porta=" + $(linha+"[name=tp_porta]").val()+
				"&cd_id=" + $(linha+"[name=cd_id]").val();
				
	//swal.loading();
	AJAX(SERVLET, funcao, function(retorno){
		retorno = JSon(retorno);

    if(!retorno){
			var erro = "Houve um erro interno de servidor.\nEntre em contato com o suporte";

			LimpaTabela(DIV_TABELA_TEMPERATURA);

			$(DIV_TABELA_TEMPERATURA).html(erro);
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

		//JOGA O RETORNO NO OBJETO
		objTabelaTemperatura.lista[actpos] = retorno.lista[0];
		
		if(status === '+'){
        setStatus(actpos, 'a', DIV_TABELA_TEMPERATURA);
		}
		cancela_temperatura(cell);

		if(!empty(fcustom_grava)){
			fcustom_grava();
			return;
		}

		//swal.close();
	});
}


//*******************************************************
//			DELETA O REGISTRO SELECIONADO - TEMPERATURA
//*******************************************************
function exclui_temperatura(){
	var actpos = $('#position_temperatura').val();
	if(empty(actpos)){
		alert('Selecione uma linha');
		//swal('Atencao','É necessário selecionar uma linha','warning');
		return;
	}

	if(!empty(getStatus(actpos,DIV_TABELA_TEMPERATURA))){
		cancela_Temperatura(2);
		return;
	}

	var tp_id = objTabelaTemperatura.lista[actpos].tp_id;


	var funcao = "funcao=temperatura" +
				 "&comando=exclui"+
				 "&tp_id=" + tp_id;

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
			alert('Erro ao excluir Lâmpada\n'+retorno.error);
			return;
		}

		objTabelaTemperatura.lista.splice(actpos,1);
		objTabelaTemperatura.total -= 1;
		
		montaTabela_temperatura(function(){
			$('#record_temperatura').val(objTabelaTemperatura.total);
			if(objTabelaTemperatura.total > 0){
				if(actpos > 0){
					--actpos;
				}
				selecionaLinha(DIV_TABELA_TEMPERATURA,actpos,2);
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
//				PINTA AS LINHAS - TEMPERATURA
//*******************************************************
function pintaLinha_temperatura(elemento){
	var actpos = $(elemento).attr('posicao');
	if(actpos == $('#position_temperatura').val()) return; // SE FOR A LINHA ATUAL N FAZ NADA

	$('#position_temperatura').val(actpos);
	$(DIV_TABELA_TEMPERATURA + ' .active').removeClass('active');
	$(elemento).addClass('active');
}


//***********************************************************************
//					FIM FUNCOES DA TABELA DE TEMPERATURA
//***********************************************************************







































//**********************************************************************************
//					FUNCOES DA TABELA DE CAMERA
//**********************************************************************************


//*******************************************************
//					BUSCA CAMERA
//*******************************************************
function montaQuery_camera(){
	var funcao = "funcao=camera"+
				 "&comando=busca" +
				 "&busca="+$("#cm_busca").val();

	 AJAX(SERVLET, funcao, function(retorno){
		retorno = JSon(retorno);
	
		//CASO OCORRA ALGUM ERRO
		if(!retorno){
			alert("Ocorreu um erro interno ao servidor");
		    return; //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
		}
		if (!empty(retorno.error)) {
			alert("Ocorreu um erro ao buscar cameras\n"+
				  "Erro: " + retorno.mensagem);
		    return; //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
		}

		objTabelaCamera = retorno;
		objTabelaCamera.total = objTabelaCamera.lista.length;
		montaTabela_camera();
	 });
}


//*******************************************************
//					MONTA TABELA - CAMERA
//*******************************************************
function montaTabela_camera(fCustom){
	//LIMPA A TABELA
	LimpaTabela(DIV_TABELA_CAMERA);

	//MONTA AS LINHAS DA TABELA
	var tabela = "";
	for(var i = 0; i < objTabelaCamera.total; i++){
		tabela += "<tr posicao='"+i+"'>";
		tabela += montaLinha_camera(i);
		tabela += "</tr>";  
	}

	//COLOCA AS LINHAS NA TABELA
	$(DIV_TABELA_CAMERA).append(tabela);

	if(objTabelaCamera.total > 0 && empty(fCustom)){
		selecionaLinha(DIV_TABELA_CAMERA,0,1);
		$(DIV_TABELA_CAMERA).animate({ scrollTop: "=0" }, "fast"); //VOLTA O SCROLL PRA CIMA
	}
	$("#record_camera").val(objTabelaCamera.total);
	//FUNCAO CUSTOM
	if(!empty(fCustom)){
		fCustom();
	}
	
	if(objTabelaCamera.total == 0){
		$("#cm_busca").select();
	}
}


//*******************************************************
//				MONTA LINHA - CAMERA
//*******************************************************
function montaLinha_camera(i){
	var aux = objTabelaCamera.lista[i];
	var linha = "<td class='w60 center' ><input value='' readonly></td>"+
				"<td class='w70'><input value='"+aux.cm_id+"' name='cm_id' readonly></td>"+
				"<td class='w190'><input class='uppercase' value='"+aux.cm_nome+"' name='cm_nome' cm_nome='"+aux.cm_nome+"' maxlength='20'></td>"+
				"<td class='w180'><input value='"+aux.cm_addr+"' name='cm_addr'></td>"+
				"<td class='w80 number'><input value='"+aux.cm_port+"' name='cm_port'></td>"+
				"<td class='w120'><input value='"+aux.cm_user+"' name='cm_user'></td>"+
				"<td class='w120'><input type='password' value='"+aux.cm_pwd+"' name='cm_pwd'></td>"+
				"<td class='w120 center'>"+
					"<input value='"+aux.cd_id+"' name='cd_id'/>"+
					"<select name='cd_id'></select>"+
				"</td>";
				
	return linha;
}


//*******************************************************
//				INSERE LINHA - CAMERA
//*******************************************************
function insere_camera(){	
	if(!Verifica_Alteracao(DIV_TABELA_CAMERA)){
		selecionaLinha(DIV_TABELA_CAMERA,$('#position_camera').val(),2);
		return;
	}

	if(empty(objTabelaCamera.lista)){
		objTabelaCamera = {};
		objTabelaCamera.lista = [];
		objTabelaCamera.total = 0;
	}

	var novaPosicao = {};
	novaPosicao.cm_id = "";
	novaPosicao.cm_nome = "";
	novaPosicao.cm_addr = "";
	novaPosicao.cm_port = "0";
	novaPosicao.cm_user = "";
	novaPosicao.cm_pwd = "";
	novaPosicao.cd_id = "";
	
	
	objTabelaCamera.lista.push(novaPosicao);
	objTabelaCamera.total += 1;
	
	var actpos = objTabelaCamera.total > 0 ? (objTabelaCamera.total - 1) : 0;

	montaTabela_camera(function(){
		setStatus(actpos,'+',DIV_TABELA_CAMERA);
		pintaLinha_camera($(DIV_TABELA_CAMERA	 + " tr[posicao="+actpos+"]"));
		Bloqueia_Linhas(actpos,DIV_TABELA_CAMERA);
		$('#record_camera').val(objTabelaCamera.total);
		selecionaLinha(DIV_TABELA_CAMERA,actpos,2);
	});	
}


//*******************************************************
//			MUDA O STATUS DA LINHA EDITADA DA TABELA 
//*******************************************************
function edicao_camera(elemento){
	var posicao = $(elemento.parent().parent()).attr('posicao');
	var campo = $(elemento).attr('name');
	var original = objTabelaCamera.lista[posicao][campo];

	//NAO HOUVE ALTERACAO
	if($(elemento).val() == original || getStatus(posicao,DIV_TABELA_CAMERA) !== ''){
		return;
	}

	setStatus(posicao, 'a', DIV_TABELA_CAMERA);
	Bloqueia_Linhas(posicao, DIV_TABELA_CAMERA);
}


//*******************************************************
//			CANCELA AS MUDANCAS FEITAS NA TABELA - CAMERA
//*******************************************************
function cancela_camera(cell){
	var actpos = $("#position_camera").val();
	if(empty(actpos)){
		return;
	}

	if(empty(cell)){
		cell = 2;
	}

	if(getStatus(actpos,DIV_TABELA_CAMERA) === 'a'){
		var tr = montaLinha_camera(actpos);

		$(DIV_TABELA_CAMERA + " tr[posicao="+actpos+"]").html(tr);

		Desbloqueia_Linhas(actpos,DIV_TABELA_CAMERA);

	}else if(getStatus(actpos,DIV_TABELA_CAMERA) === '+'){
		objTabelaCamera.lista.splice(actpos,1);
		objTabelaCamera.total -= 1;

		montaTabela_camera(function(){
			$('#record_camera').val(objTabelaCamera.total);
			if(objTabelaCamera.total > 0){
				if(actpos > 0){
					--actpos;
				}
			}
		});
	}
	selecionaLinha(DIV_TABELA_CAMERA,actpos,cell);
}


//*******************************************************
//			GRAVA OS DADOS EDITADOS DA TABELA - CAMERA
//*******************************************************
function grava_camera(cell, fcustom_grava){
	var actpos = $("#position_camera").val();
	if(empty(actpos)){
		alert("Selecione uma linha");
  //	swal('Aten��o','� necess�rio selecionar uma linha','warning');
		return;
	}

	if(empty(cell)){
		cell = 1;
	}

	var status = getStatus(actpos, DIV_TABELA_CAMERA);

	if(empty(status)){
		selecionaLinha(DIV_TABELA_CAMERA, actpos, cell);
		return;
	}

	var linha = DIV_TABELA_CAMERA + " tr[posicao="+actpos+"] input";

	//VALIDACOES
	var mensagem = '';
	if(empty($(linha+"[name=cm_nome]").val()))
		mensagem +='Nome do sensor é obrigatório';

	if(empty($(linha+"[name=cd_id]").val()))
		mensagem +='Comodo é obrigatório';

	if(!empty(mensagem)){
		alert(mensagem);
		//swal("N�o foi Poss�vel Cadastrar o Usuario\n Verifique os Campos a baixo",mensagem,'error');
		return;
	}

	var funcao = "funcao=camera&comando="+(status=='+' ? 'insert' : 'update') +
				"&cm_id=" + $(linha+"[name=cm_id]").val()+
				"&cm_nome=" + $(linha+"[name=cm_nome]").val().toUpperCase()+
				"&cm_addr=" + $(linha+"[name=cm_addr]").val()+
				"&cm_port=" + $(linha+"[name=cm_port]").val()+
				"&cm_user=" + $(linha+"[name=cm_user]").val()+
				"&cm_pwd=" + $(linha+"[name=cm_pwd]").val()+
				"&cd_id=" + $(linha+"[name=cd_id]").val();
				
	//swal.loading();
	AJAX(SERVLET, funcao, function(retorno){
		retorno = JSon(retorno);

    if(!retorno){
			var erro = "Houve um erro interno de servidor.\nEntre em contato com o suporte";

			LimpaTabela(DIV_TABELA_CAMERA);

			$(DIV_TABELA_CAMERA).html(erro);
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

		//JOGA O RETORNO NO OBJETO
		objTabelaCamera.lista[actpos] = retorno.lista[0];
		
		if(status === '+'){
        setStatus(actpos, 'a', DIV_TABELA_CAMERA);
		}
		cancela_camera(cell);

		if(!empty(fcustom_grava)){
			fcustom_grava();
			return;
		}

		//swal.close();
	});
}


//*******************************************************
//			DELETA O REGISTRO SELECIONADO - CAMERA
//*******************************************************
function exclui_camera(){
	var actpos = $('#position_camera').val();
	if(empty(actpos)){
		alert('Selecione uma linha');
		//swal('Atencao','É necessário selecionar uma linha','warning');
		return;
	}

	if(!empty(getStatus(actpos,DIV_TABELA_CAMERA))){
		cancela_Temperatura(2);
		return;
	}

	var cm_id = objTabelaCamera.lista[actpos].cm_id;


	var funcao = "funcao=camera" +
				 "&comando=exclui"+
				 "&cm_id=" + cm_id;

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
			alert('Erro ao excluir Lâmpada\n'+retorno.error);
			return;
		}

		objTabelaCamera.lista.splice(actpos,1);
		objTabelaCamera.total -= 1;
		
		montaTabela_camera(function(){
			$('#record_camera').val(objTabelaCamera.total);
			if(objTabelaCamera.total > 0){
				if(actpos > 0){
					--actpos;
				}
				selecionaLinha(DIV_TABELA_CAMERA,actpos,2);
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
//				PINTA AS LINHAS - CAMERA
//*******************************************************
function pintaLinha_camera(elemento){
	var actpos = $(elemento).attr('posicao');
	if(actpos == $('#position_camera').val()) return; // SE FOR A LINHA ATUAL N FAZ NADA

	$('#position_camera').val(actpos);
	$(DIV_TABELA_CAMERA + ' .active').removeClass('active');
	$(elemento).addClass('active');
}


//***********************************************************************
//					FIM FUNCOES DA TABELA DE CAMERA
//***********************************************************************

















































//**********************************************************************************
//					FUNCOES DA TABELA DE PORTAO
//**********************************************************************************


//*******************************************************
//					BUSCA PORTAO
//*******************************************************
function montaQuery_portao(){
	var funcao = "funcao=portao"+
				 "&comando=busca" +
				 "&busca="+$("#pt_busca").val();

	 AJAX(SERVLET, funcao, function(retorno){
		retorno = JSon(retorno);
	
		//CASO OCORRA ALGUM ERRO
		if(!retorno){
			alert("Ocorreu um erro interno ao servidor");
		    return; //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
		}
		if (!empty(retorno.error)) {
			alert("Ocorreu um erro ao buscar portao\n"+
				  "Erro: " + retorno.mensagem);
		    return; //IMPEDE QUE CONTINUE EXECUTANDO O CODIGO EM CASO DE ERRO
		}

		objTabelaPortao = retorno;
		objTabelaPortao.total = objTabelaPortao.lista.length;
		montaTabela_portao();
	 });
}


//*******************************************************
//					MONTA TABELA - PORTAO
//*******************************************************
function montaTabela_portao(fCustom){
	//LIMPA A TABELA
	LimpaTabela(DIV_TABELA_PORTAO);

	//MONTA AS LINHAS DA TABELA
	var tabela = "";
	for(var i = 0; i < objTabelaPortao.total; i++){
		tabela += "<tr posicao='"+i+"'>";
		tabela += montaLinha_portao(i);
		tabela += "</tr>";  
	}

	//COLOCA AS LINHAS NA TABELA
	$(DIV_TABELA_PORTAO).append(tabela);

	if(objTabelaPortao.total > 0 && empty(fCustom)){
		selecionaLinha(DIV_TABELA_PORTAO,0,1);
		$(DIV_TABELA_PORTAO).animate({ scrollTop: "=0" }, "fast"); //VOLTA O SCROLL PRA CIMA
	}
	$("#record_portao").val(objTabelaPortao.total);
	//FUNCAO CUSTOM
	if(!empty(fCustom)){
		fCustom();
	}
	
	if(objTabelaPortao.total == 0){
		$("#pt_busca").select();
	}
}


//*******************************************************
//				MONTA LINHA - PORTAO
//*******************************************************
function montaLinha_portao(i){
	var aux = objTabelaPortao.lista[i];
	var linha = "<td class='w60 center' ><input value='' readonly></td>"+
				"<td class='w70'><input value='"+aux.pt_id+"' name='pt_id' readonly></td>"+
				"<td class='w190'><input class='uppercase' value='"+aux.pt_nome+"' name='pt_nome' pt_nome='"+aux.pt_nome+"' maxlength='20'></td>"+
				"<td class='w80 number'><input value='"+aux.pt_porta+"' name='pt_porta' ></td>"+
				"<td class='w100 center'>"+
					"<input value='"+aux.cd_id+"' name='cd_id'/>"+
					"<select name='cd_id'></select>"+
				"</td>";
				
	return linha;
}


//*******************************************************
//				INSERE LINHA - PORTAO
//*******************************************************
function insere_portao(){	
	if(!Verifica_Alteracao(DIV_TABELA_PORTAO)){
		selecionaLinha(DIV_TABELA_PORTAO,$('#position_portao').val(),2);
		return;
	}

	if(empty(objTabelaPortao.lista)){
		objTabelaPortao = {};
		objTabelaPortao.lista = [];
		objTabelaPortao.total = 0;
	}

	var novaPosicao = {};
	novaPosicao.pt_id = "";
	novaPosicao.pt_nome = "";
	novaPosicao.pt_porta = 0;
	novaPosicao.cd_id = "";
	
	
	objTabelaPortao.lista.push(novaPosicao);
	objTabelaPortao.total += 1;
	
	var actpos = objTabelaPortao.total > 0 ? (objTabelaPortao.total - 1) : 0;

	montaTabela_portao(function(){
		setStatus(actpos,'+',DIV_TABELA_PORTAO);
		pintaLinha_portao($(DIV_TABELA_PORTAO	 + " tr[posicao="+actpos+"]"));
		Bloqueia_Linhas(actpos,DIV_TABELA_PORTAO);
		$('#record_portao').val(objTabelaPortao.total);
		selecionaLinha(DIV_TABELA_PORTAO,actpos,2);
	});	
}


//*******************************************************
//			MUDA O STATUS DA LINHA EDITADA DA TABELA 
//*******************************************************
function edicao_portao(elemento){
	var posicao = $(elemento.parent().parent()).attr('posicao');
	var campo = $(elemento).attr('name');
	var original = objTabelaPortao.lista[posicao][campo];

	//NAO HOUVE ALTERACAO
	if($(elemento).val() == original || getStatus(posicao,DIV_TABELA_PORTAO) !== ''){
		return;
	}

	setStatus(posicao, 'a', DIV_TABELA_PORTAO);
	Bloqueia_Linhas(posicao, DIV_TABELA_PORTAO);
}


//*******************************************************
//			CANCELA AS MUDANCAS FEITAS NA TABELA - PORTAO
//*******************************************************
function cancela_portao(cell){
	var actpos = $("#position_portao").val();
	if(empty(actpos)){
		return;
	}

	if(empty(cell)){
		cell = 2;
	}

	if(getStatus(actpos,DIV_TABELA_PORTAO) === 'a'){
		var tr = montaLinha_portao(actpos);

		$(DIV_TABELA_PORTAO + " tr[posicao="+actpos+"]").html(tr);

		Desbloqueia_Linhas(actpos,DIV_TABELA_PORTAO);

	}else if(getStatus(actpos,DIV_TABELA_PORTAO) === '+'){
		objTabelaPortao.lista.splice(actpos,1);
		objTabelaPortao.total -= 1;

		montaTabela_portao(function(){
			$('#record_portao').val(objTabelaPortao.total);
			if(objTabelaPortao.total > 0){
				if(actpos > 0){
					--actpos;
				}
			}
		});
	}
	selecionaLinha(DIV_TABELA_PORTAO,actpos,cell);
}


//*******************************************************
//			GRAVA OS DADOS EDITADOS DA TABELA - PORTAO
//*******************************************************
function grava_portao(cell, fcustom_grava){
	var actpos = $("#position_portao").val();
	if(empty(actpos)){
		alert("Selecione uma linha");
  //	swal('Aten��o','� necess�rio selecionar uma linha','warning');
		return;
	}

	if(empty(cell)){
		cell = 1;
	}

	var status = getStatus(actpos, DIV_TABELA_PORTAO);

	if(empty(status)){
		selecionaLinha(DIV_TABELA_PORTAO, actpos, cell);
		return;
	}

	var linha = DIV_TABELA_PORTAO + " tr[posicao="+actpos+"] input";

	//VALIDACOES
	var mensagem = '';
	if(empty($(linha+"[name=pt_nome]").val()))
		mensagem +='Nome do portao é obrigatório';

	if(empty($(linha+"[name=pt_porta]").val()))
		mensagem +='Porta é obrigatório';

	if(empty($(linha+"[name=cd_id]").val()))
		mensagem +='Comodo é obrigatório';

	if(!empty(mensagem)){
		alert(mensagem);
		//swal("N�o foi Poss�vel Cadastrar o Usuario\n Verifique os Campos a baixo",mensagem,'error');
		return;
	}

	var funcao = "funcao=portao&comando="+(status=='+' ? 'insert' : 'update') +
				"&pt_id=" + $(linha+"[name=pt_id]").val()+
				"&pt_nome=" + $(linha+"[name=pt_nome]").val().toUpperCase()+
				"&pt_porta=" + $(linha+"[name=pt_porta]").val()+
				"&cd_id=" + $(linha+"[name=cd_id]").val();
				
	//swal.loading();
	AJAX(SERVLET, funcao, function(retorno){
		retorno = JSon(retorno);

    if(!retorno){
			var erro = "Houve um erro interno de servidor.\nEntre em contato com o suporte";

			LimpaTabela(DIV_TABELA_PORTAO);

			$(DIV_TABELA_PORTAO).html(erro);
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

		//JOGA O RETORNO NO OBJETO
		objTabelaPortao.lista[actpos] = retorno.lista[0];
		
		if(status === '+'){
        setStatus(actpos, 'a', DIV_TABELA_PORTAO);
		}
		cancela_portao(cell);

		if(!empty(fcustom_grava)){
			fcustom_grava();
			return;
		}

		//swal.close();
	});
}


//*******************************************************
//			DELETA O REGISTRO SELECIONADO - PORTAO
//*******************************************************
function exclui_portao(){
	var actpos = $('#position_portao').val();
	if(empty(actpos)){
		alert('Selecione uma linha');
		//swal('Atencao','É necessário selecionar uma linha','warning');
		return;
	}

	if(!empty(getStatus(actpos,DIV_TABELA_PORTAO))){
		cancela_Temperatura(2);
		return;
	}

	var pt_id = objTabelaPortao.lista[actpos].pt_id;


	var funcao = "funcao=portao" +
				 "&comando=exclui"+
				 "&pt_id=" + pt_id;

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
			alert('Erro ao excluir Lâmpada\n'+retorno.error);
			return;
		}

		objTabelaPortao.lista.splice(actpos,1);
		objTabelaPortao.total -= 1;
		
		montaTabela_portao(function(){
			$('#record_portao').val(objTabelaPortao.total);
			if(objTabelaPortao.total > 0){
				if(actpos > 0){
					--actpos;
				}
				selecionaLinha(DIV_TABELA_PORTAO,actpos,2);
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
//				PINTA AS LINHAS - PORTAO
//*******************************************************
function pintaLinha_portao(elemento){
	var actpos = $(elemento).attr('posicao');
	if(actpos == $('#position_portao').val()) return; // SE FOR A LINHA ATUAL N FAZ NADA

	$('#position_portao').val(actpos);
	$(DIV_TABELA_PORTAO + ' .active').removeClass('active');
	$(elemento).addClass('active');
}


//***********************************************************************
//					FIM FUNCOES DA TABELA DE PORTAO
//***********************************************************************































//########################################################
//NAO PERMITE O CAMPO FICAR VAZIO E TRAS FORMATACAO DE NUMERO
//########################################################
function notnull(elemento) {
	//PEGA O NAME DO INPUT
	var campo = $(elemento).attr('name');
	var casa = 0;
	var muda_valor = '0';

	switch (campo) {
		case 'lp_consumo':
			casa = 3;
		break;
		case 'tp_tempmax':
		case 'tp_tempmin':
			casa = 2;
		break;
	}

	if ($(elemento).val() === '') {
		$(elemento).val(muda_valor);
	}
	if ($(elemento).val() !== '' && $(elemento).val() != $(elemento).attr("last_value")) {
		$(elemento).val(tonumber($(elemento).val()));
		$(elemento).val(function(index, value) {
			return value.replace(",", ".");
		});
		$(elemento).val(function(index, value) {
			return number_format($(elemento).val(), casa, ",", ".");
		});
		$(elemento).attr('last_value', $(elemento).val());
	}
}
//########################################################


//########################################################
//MUDA OS INPUTS DA TABELA PARA COMBO
//########################################################
function ComboLinha(campo, actpos, div){
	if(empty(actpos)){
		return;
	}

	if(!Verifica_Alteracao(div) && !$(div + " tr[posicao="+actpos+"]").hasClass('active')){
		return;
	}

	var Ovalor = $(campo).attr("name");
	var comboMor = div + " tr[posicao="+actpos+"] select[name='"+Ovalor+"']";
	var inputMor = div + " tr[posicao="+actpos+"] input[name='"+Ovalor+"']";

	var OptionsOriginais;

	if(empty($.trim($(comboMor).html()))){
		switch (Ovalor) {
			case "cd_id":
				$.each(objComboComodo, function (key, comodo){
					$(comboMor).append($('<option>', {value: comodo.cd_id, text : comodo.cd_nome }));
				});
			break;
			case "cd_tipo":
				$(comboMor).append('<option value="SALA">SALA</option>'+
								   '<option value="COZINHA">COZINHA</option>'+
								   '<option value="QUARTO">QUARTO</option>'+
								   '<option value="BANHEIRO">BANHEIRO</option>'+
								   '<option value="GARAGEM">GARAGEM</option>');	
			break;
			case "tp_status":
				$(comboMor).append('<option value="A">ATIVADO</option>'+
								   '<option value="D">DESATIVADO</option>');	
			break;
			case "ac_libera":
				$(comboMor).append('<option value="A">ATIVADO</option>'+
								   '<option value="B">BLOQUEADO</option>');	
			break;
			case "lp_nome":
				$.each(objComboLampada, function (key, lampada){
					$(comboMor).append($('<option>', {value: lampada.lp_id, text : lampada.lp_nome }));
				});
			break;
	
		}
	}

	$(comboMor + " option[value='"+$(inputMor).val()+"']").attr('selected', 'selected');
	if(Ovalor == 'lp_nome'){
		$(comboMor + " option[value='"+$(inputMor).attr('lp_id')+"']").attr('selected', 'selected');
	}			
		
	//ESCONDE INPUT
	$(inputMor).hide();

	//MOSTRA COMBO
	$(comboMor).show();

	//DEIXA COMBO FOCADO
	$(comboMor).focus();
}
//########################################################


//########################################################
//MUDA OS COMBOS DA TABELA PARA INPUTS
//########################################################
function TiraComboLinha(campo, actpos, div){
	if(empty(actpos)){
		return;
	}

	var Ovalor = $(campo).attr("name");

	
	//COMBO DESEJADO
	var comboMor = div + " tr[posicao="+actpos+"] select[name='"+Ovalor+"']";

	//INPUT SELECIONADO
	var inputMor = div + " tr[posicao="+actpos+"] input[name='"+Ovalor+"']";

	$(inputMor).val($(comboMor).val());
	if(Ovalor == 'lp_nome'){
		$(inputMor).val($(comboMor + " option:selected").html()).attr('lp_id', $(comboMor).val());
	}
	
	//MOSTRA INPUT
	$(inputMor).show();

	//ESCONDE COMBO
	$(comboMor).hide();
}
//########################################################




//***********************************************************************
$(document).ready(function(){
	
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
	//				EVENTOS DA TABELA DE ACESSO
	//***********************************************************************
	
	
	//*******************************************************
	//KEYUP DOS INPUTS DA DIV_TABELA
	//*******************************************************
	$(DIV_TABELA_ACESSO).on("keyup", 'input',function(e){
		var actpos = $("#position_acesso").val();
		var cell = $(this).parent().index();
		switch (e.which) {
			case 38: //PARA CIMA
				if(actpos > 0){
					selecionaLinha(DIV_TABELA_ACESSO,--actpos,cell);
				}
			break;

			case 40://PARA BAIXO
				if (Number(actpos)+1 < $("#record_acesso").val()){
					selecionaLinha(DIV_TABELA_ACESSO,++actpos,cell);
				}
			break;

			case 27://ESC
				$(this).blur();
				cancela_acesso(cell);
			break;;

			case 13://ENTER
				$(this).blur();
				grava_acesso(cell);
			break;
		}
	});

	//***********************************************************************
	//PINTA  ALINHA SELECIONADA
	//***********************************************************************
	$(DIV_TABELA_ACESSO).on("focus","input",function(){
		pintaLinha_acesso($(this).parent().parent());

		if(!$(this).parent().hasClass("inativo")){
			switch ($(this).attr("name")) {
				case "ac_libera": 
					ComboLinha($(this), $("#position_acesso").val(), DIV_TABELA_ACESSO);
				break;
			}
		}
	});



	//***********************************************************************
	//MUDA O COMBO PARA INPUT AO PERDER O FOCO DO COMBO
	//***********************************************************************
	$(DIV_TABELA_ACESSO).on('blur', 'select[name=ac_libera]', function(){
		TiraComboLinha($(this), $("#position_acesso").val(), DIV_TABELA_ACESSO);
		edicao_acesso($(this));
	});
	
	//***********************************************************************
	//SELECIONA O TEXTO INTEIRO NO CLICK TABELA
	//***********************************************************************
	$(DIV_TABELA_ACESSO).on("click", 'td:not(.inativo) input', function(){
		$(this).select();
	});

	//*******************************************************
	//EDICAO DOS DADOS - ACESSO
	//*******************************************************
	$(DIV_TABELA_ACESSO).on('change', 'input', function(){
		edicao_acesso($(this));
	});
	

	//***********************************************************************
	//				FIM EVENTOS DA TABELA DE ACESSO
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

		if(!$(this).parent().hasClass("inativo")){
			switch ($(this).attr("name")) {
				case "cd_tipo":
					ComboLinha($(this), $("#position_comodo").val(), DIV_TABELA_COMODO);
				break;
			}
		}
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


	//***********************************************************************
	//MUDA O COMBO PARA INPUT AO PERDER O FOCO DO COMBO
	//***********************************************************************
	$(DIV_TABELA_COMODO).on('blur', 'select[name=cd_tipo]', function(){
		TiraComboLinha($(this), $("#position_comodo").val(), DIV_TABELA_COMODO);
		edicao_comodo($(this));
	});
	
	
	//***********************************************************************
	//				FIM EVENTOS DA TABELA DE COMODO
	//***********************************************************************












	//***********************************************************************
	//				EVENTOS DA TABELA DE LAMPADA
	//***********************************************************************
	

	//***********************************************************************
	//BUSCA LAMPADA QUANDO APERTAR ENTER
	//***********************************************************************
	$("#lp_busca").on("keyup", function(e){
		switch (e.which) {
			case 13://ENTER
				montaQuery_lampada();
			break;
		}
	});
	
	
	//*******************************************************
	//KEYUP DOS INPUTS DA DIV_TABELA
	//*******************************************************
	$(DIV_TABELA_LAMPADA).on("keyup", 'input',function(e){
		var actpos = $("#position_lampada").val();
		var cell = $(this).parent().index();
		switch (e.which) {
			case 38: //PARA CIMA
				if(actpos > 0){
					selecionaLinha(DIV_TABELA_LAMPADA,--actpos,cell);
				}
			break;

			case 40://PARA BAIXO
				if (Number(actpos)+1 < $("#record_lampada").val()){
					selecionaLinha(DIV_TABELA_LAMPADA,++actpos,cell);
				} else if(Verifica_Alteracao(DIV_TABELA_LAMPADA)){
						insere_lampada();
				}
			break;

			case 27://ESC
				$(this).blur();
				cancela_lampada(cell);
			break;

			case 45://INSER
				if(Verifica_Alteracao(DIV_TABELA_LAMPADA)){
					insere_lampada();
				}
			break;

			case 13://ENTER
				$(this).blur();
				grava_lampada(cell);
			break;
		}
	});

	//***********************************************************************
	//PINTA  ALINHA SELECIONADA
	//***********************************************************************
	$(DIV_TABELA_LAMPADA).on("focus","input",function(){
		pintaLinha_lampada($(this).parent().parent());

		if(!$(this).parent().hasClass("inativo")){
			switch ($(this).attr("name")) {
				case "cd_id":
					ComboLinha($(this), $("#position_lampada").val(), DIV_TABELA_LAMPADA);
				break;
			}
		}
	});



	//***********************************************************************
	//MUDA O COMBO PARA INPUT AO PERDER O FOCO DO COMBO
	//***********************************************************************
	$(DIV_TABELA_LAMPADA).on('blur', 'select[name=cd_id]', function(){
		TiraComboLinha($(this), $("#position_lampada").val(), DIV_TABELA_LAMPADA);
		edicao_lampada($(this));
	});
	
	//***********************************************************************
	//SELECIONA O TEXTO INTEIRO NO CLICK TABELA
	//***********************************************************************
	$(DIV_TABELA_LAMPADA).on("click", 'td:not(.inativo) input', function(){
		$(this).select();
	});

	//*******************************************************
	//EDICAO DOS DADOS - LAMPADA
	//*******************************************************
	$(DIV_TABELA_LAMPADA).on('change', 'input', function(){
		if ($(this).parent().hasClass('number')) {
			notnull($(this));
		}
		edicao_lampada($(this));
	});
	
	//*******************************************************
	//KEYPRESS SO PERMITE NUMEROS
	//*******************************************************
	$(DIV_TABELA_LAMPADA).on("keypress", 'input[name=lp_tensao], input[name=lp_porta], input[name=dm_porta]',function(e){
		return somenteNumero(e,false,false,this);
	});


	//*******************************************************
	//KEYPRESS SO PERMITE NUMEROS
	//*******************************************************
	$(DIV_TABELA_LAMPADA).on("keypress", 'input[name=lp_consumo]',function(e){
		return somenteNumero(e,true,false,this);
	});
	//***********************************************************************
	//				FIM EVENTOS DA TABELA DE LAMPADA
	//***********************************************************************
	

















	
	
	
	




	
	
	
	
	
	

	//***********************************************************************
	//				EVENTOS DA TABELA DE TEMPERATURA
	//***********************************************************************
	

	//***********************************************************************
	//BUSCA LAMPADA QUANDO APERTAR ENTER
	//***********************************************************************
	$("#tp_busca").on("keyup", function(e){
		switch (e.which) {
			case 13://ENTER
				montaQuery_temperatura();
			break;
		}
	});
	
	
	//*******************************************************
	//KEYUP DOS INPUTS DA DIV_TABELA
	//*******************************************************
	$(DIV_TABELA_TEMPERATURA).on("keyup", 'input',function(e){
		var actpos = $("#position_temperatura").val();
		var cell = $(this).parent().index();
		switch (e.which) {
			case 38: //PARA CIMA
				if(actpos > 0){
					selecionaLinha(DIV_TABELA_TEMPERATURA,--actpos,cell);
				}
			break;

			case 40://PARA BAIXO
				if (Number(actpos)+1 < $("#record_temperatura").val()){
					selecionaLinha(DIV_TABELA_TEMPERATURA,++actpos,cell);
				} else if(Verifica_Alteracao(DIV_TABELA_TEMPERATURA)){
						insere_temperatura();
				}
			break;

			case 27://ESC
				$(this).blur();
				cancela_temperatura(cell);
			break;

			case 45://INSER
				if(Verifica_Alteracao(DIV_TABELA_TEMPERATURA)){
					insere_temperatura();
				}
			break;

			case 13://ENTER
				$(this).blur();
				grava_temperatura(cell);
			break;
		}
	});

	//***********************************************************************
	//PINTA  ALINHA SELECIONADA
	//***********************************************************************
	$(DIV_TABELA_TEMPERATURA).on("focus","input",function(){
		pintaLinha_temperatura($(this).parent().parent());

		if(!$(this).parent().hasClass("inativo")){
			switch ($(this).attr("name")) {
				case "cd_id": case "tp_status": 
					ComboLinha($(this), $("#position_temperatura").val(), DIV_TABELA_TEMPERATURA);
				break;
			}
		}
	});



	//***********************************************************************
	//MUDA O COMBO PARA INPUT AO PERDER O FOCO DO COMBO
	//***********************************************************************
	$(DIV_TABELA_TEMPERATURA).on('blur', 'select[name=cd_id], select[name=tp_status]', function(){
		TiraComboLinha($(this), $("#position_temperatura").val(), DIV_TABELA_TEMPERATURA);
		edicao_temperatura($(this));
	});
	
	//***********************************************************************
	//SELECIONA O TEXTO INTEIRO NO CLICK TABELA
	//***********************************************************************
	$(DIV_TABELA_TEMPERATURA).on("click", 'td:not(.inativo) input', function(){
		$(this).select();
	});

	//*******************************************************
	//EDICAO DOS DADOS - LAMPADA
	//*******************************************************
	$(DIV_TABELA_TEMPERATURA).on('change', 'input', function(){
		if ($(this).parent().hasClass('number')) {
			notnull($(this));
		}
		edicao_temperatura($(this));
	});
	
	//*******************************************************
	//KEYPRESS SO PERMITE NUMEROS
	//*******************************************************
	$(DIV_TABELA_TEMPERATURA).on("keypress", 'input[name=tp_tensao]',function(e){
		return somenteNumero(e,false,false,this);
	});


	//***********************************************************************
	//				FIM EVENTOS DA TABELA DE TEMPERATURA
	//***********************************************************************










	
	

	//***********************************************************************
	//				EVENTOS DA TABELA DE CAMERA
	//***********************************************************************
	

	//***********************************************************************
	//BUSCA LAMPADA QUANDO APERTAR ENTER
	//***********************************************************************
	$("#cm_busca").on("keyup", function(e){
		switch (e.which) {
			case 13://ENTER
				montaQuery_camera();
			break;
		}
	});
	
	
	//*******************************************************
	//KEYUP DOS INPUTS DA DIV_TABELA
	//*******************************************************
	$(DIV_TABELA_CAMERA).on("keyup", 'input',function(e){
		var actpos = $("#position_camera").val();
		var cell = $(this).parent().index();
		switch (e.which) {
			case 38: //PARA CIMA
				if(actpos > 0){
					selecionaLinha(DIV_TABELA_CAMERA,--actpos,cell);
				}
			break;

			case 40://PARA BAIXO
				if (Number(actpos)+1 < $("#record_camera").val()){
					selecionaLinha(DIV_TABELA_CAMERA,++actpos,cell);
				} else if(Verifica_Alteracao(DIV_TABELA_CAMERA)){
						insere_camera();
				}
			break;

			case 27://ESC
				$(this).blur();
				cancela_camera(cell);
			break;

			case 45://INSER
				if(Verifica_Alteracao(DIV_TABELA_CAMERA)){
					insere_camera();
				}
			break;

			case 13://ENTER
				$(this).blur();
				grava_camera(cell);
			break;
		}
	});

	//***********************************************************************
	//PINTA  ALINHA SELECIONADA
	//***********************************************************************
	$(DIV_TABELA_CAMERA).on("focus","input",function(){
		pintaLinha_camera($(this).parent().parent());

		if(!$(this).parent().hasClass("inativo")){
			switch ($(this).attr("name")) {
				case "cd_id": 
					ComboLinha($(this), $("#position_camera").val(), DIV_TABELA_CAMERA);
				break;
			}
		}
	});



	//***********************************************************************
	//MUDA O COMBO PARA INPUT AO PERDER O FOCO DO COMBO
	//***********************************************************************
	$(DIV_TABELA_CAMERA).on('blur', 'select[name=cd_id]', function(){
		TiraComboLinha($(this), $("#position_camera").val(), DIV_TABELA_CAMERA);
		edicao_camera($(this));
	});
	
	//***********************************************************************
	//SELECIONA O TEXTO INTEIRO NO CLICK TABELA
	//***********************************************************************
	$(DIV_TABELA_CAMERA).on("click", 'td:not(.inativo) input', function(){
		$(this).select();
	});

	//*******************************************************
	//EDICAO DOS DADOS - CAMERA
	//*******************************************************
	$(DIV_TABELA_CAMERA).on('change', 'input', function(){
		if ($(this).parent().hasClass('number')) {
			notnull($(this));
		}
		edicao_camera($(this));
	});
	
	//*******************************************************
	//KEYPRESS SO PERMITE NUMEROS
	//*******************************************************
	$(DIV_TABELA_CAMERA).on("keypress", 'input[name=cm_port]',function(e){
		return somenteNumero(e,false,false,this);
	});


	//***********************************************************************
	//				FIM EVENTOS DA TABELA DE CAMERA
	//***********************************************************************














	
	

	//***********************************************************************
	//				EVENTOS DA TABELA DE PORTAO
	//***********************************************************************
	

	//***********************************************************************
	//BUSCA PORTAO QUANDO APERTAR ENTER
	//***********************************************************************
	$("#pt_busca").on("keyup", function(e){
		switch (e.which) {
			case 13://ENTER
				montaQuery_portao();
			break;
		}
	});
	
	
	//*******************************************************
	//KEYUP DOS INPUTS DA DIV_TABELA
	//*******************************************************
	$(DIV_TABELA_PORTAO).on("keyup", 'input',function(e){
		var actpos = $("#position_portao").val();
		var cell = $(this).parent().index();
		switch (e.which) {
			case 38: //PARA CIMA
				if(actpos > 0){
					selecionaLinha(DIV_TABELA_PORTAO,--actpos,cell);
				}
			break;

			case 40://PARA BAIXO
				if (Number(actpos)+1 < $("#record_portao").val()){
					selecionaLinha(DIV_TABELA_PORTAO,++actpos,cell);
				} else if(Verifica_Alteracao(DIV_TABELA_PORTAO)){
						insere_portao();
				}
			break;

			case 27://ESC
				$(this).blur();
				cancela_portao(cell);
			break;

			case 45://INSER
				if(Verifica_Alteracao(DIV_TABELA_PORTAO)){
					insere_portao();
				}
			break;

			case 13://ENTER
				$(this).blur();
				grava_portao(cell);
			break;
		}
	});

	//***********************************************************************
	//PINTA  ALINHA SELECIONADA
	//***********************************************************************
	$(DIV_TABELA_PORTAO).on("focus","input",function(){
		pintaLinha_portao($(this).parent().parent());

		if(!$(this).parent().hasClass("inativo")){
			switch ($(this).attr("name")) {
				case "cd_id": 
					ComboLinha($(this), $("#position_portao").val(), DIV_TABELA_PORTAO);
				break;
			}
		}
	});



	//***********************************************************************
	//MUDA O COMBO PARA INPUT AO PERDER O FOCO DO COMBO
	//***********************************************************************
	$(DIV_TABELA_PORTAO).on('blur', 'select[name=cd_id]', function(){
		TiraComboLinha($(this), $("#position_portao").val(), DIV_TABELA_PORTAO);
		edicao_portao($(this));
	});
	
	//***********************************************************************
	//SELECIONA O TEXTO INTEIRO NO CLICK TABELA
	//***********************************************************************
	$(DIV_TABELA_PORTAO).on("click", 'td:not(.inativo) input', function(){
		$(this).select();
	});

	//*******************************************************
	//EDICAO DOS DADOS - PORTAO
	//*******************************************************
	$(DIV_TABELA_PORTAO).on('change', 'input', function(){
		edicao_portao($(this));
	});
	
	//*******************************************************
	//KEYPRESS SO PERMITE NUMEROS
	//*******************************************************
	$(DIV_TABELA_PORTAO).on("keypress", 'input[name=pt_tensao]',function(e){
		return somenteNumero(e,false,false,this);
	});


	//***********************************************************************
	//				FIM EVENTOS DA TABELA DE PORTAO
	//***********************************************************************

	
	
	
	
});
//***********************************************************************
