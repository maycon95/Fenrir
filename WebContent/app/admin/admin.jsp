		<jsp:include page="../../component/WebUteis/imports.jsp" /><!-- PEGA OS IMPORT PADRAO  -->
		<script src="admin.js"></script> <!-- IMPORTA O JS DESSA TELA  -->

		<title>Fenrir</title>
	</head>
	<body onload='monta_combo();'>
		<header class='header'>
			<jsp:include page="../../component/WebUteis/header.jsp" /> <!-- IMPORTA O HEADER PADRAO  -->
		</header>

		<div class='container pull-left w300'>
			<ul class="list-group" id="options">
			  <li class="list-group-item active" name="usuario">Usuário</li>
			  <li class="list-group-item" name="comodo">Cômodo</li>
			  <li class="list-group-item" name="lampada">Lâmpada</li>
			  <li class="list-group-item" name="temperatura">Sensor de Temperatura</li>
			  <li class="list-group-item" name="camera">Cameras</li>
			  <li class="list-group-item" name="portao">Portão</li>
			</ul>
		</div>

		<div name='tabelas'>
			<!-- TABELA DE USUARIO -->
			<div class='container panel panel-default w390' name="table_usuario" style='padding-top: 15px'>
				<div class='h40'>
					<input class='search uppercase' type="search" id="us_busca" autofocus>
					<input class='bt busca' type="button" id="us_buscar" onclick='montaQuery_usuario();'>
					<input class='bt insere' type="button" id="us_insere" onclick='insere_usuario();'>
					<input class='bt deleta' type="button" id="us_deleta" onclick='exclui_usuario();'>
					<input class='bt grava' type="button" id="us_grava" onclick='grava_usuario();'>
					<input class='bt cancela' type="button" id="us_cancela" onclick='cancela_usuario();'>
				</div>
				
				<div class='panel panel-default panel-table'>
					<table class='table table-hover'>
						<thead>
							<tr class='title'>
								<td class="w40">#</td>
								<td class="w300">Nome do Usuario</td>
							</tr>
						</thead>
						<tbody id="dados_usuario" class='h200'>
							
						</tbody>
					</table>
				</div>
				
				<div class='footer'>
					<div class='registros w120'>
						<label>Posicao:</label> 
						<input type='text' class='w40' id='position_user' value="0" readonly />
					</div>
					<div class='registros w120'>
						<label>Registros:</label>
						<input type="text" class='w40' id="record_user" value="0" readonly />				
					</div>
				</div>
			</div>
			
			<!-- TABELA DE ACESSOS -->
			<div class='container panel panel-default w460' name="table_acesso" style='padding-top: 15px'>
				<div class='h40'>
					<input class='bt grava' type="button" id="ac_grava" onclick='grava_acesso();'>
					<input class='bt cancela' type="button" id="ac_cancela" onclick='cancela_acesso();'>
				</div>
				
				<div class='panel panel-default panel-table'>
					<table class='table table-hover'>
						<thead>
							<tr class='title'>
								<td class="w40">#</td>
								<td class="w300">Comodo</td>
								<td class="w70">Acesso</td>
							</tr>
						</thead>
						<tbody id="dados_acesso" class='h200'>
							
						</tbody>
					</table>
				</div>
				
				<div class='footer'>
					<div class='registros w120'>
						<label>Posicao:</label> 
						<input type='text' class='w40' id='position_acesso' value="0" readonly />
					</div>
					<div class='registros w120'>
						<label>Registros:</label>
						<input type="text" class='w40' id="record_acesso" value="0" readonly />				
					</div>
				</div>
			</div>
			

			<!-- TABELA DE COMODO-->
			<div class='container panel panel-default w390 hide_custom' name="table_comodo" style='padding-top: 15px'>
				<div class='h40'>
					<input class='search uppercase' type="search" id="cd_busca">
					<input class='bt busca' type="button" id="cd_buscar" onclick='montaQuery_comodo();'>
					<input class='bt insere' type="button" id="cd_insere" onclick='insere_comodo();'>
					<input class='bt deleta' type="button" id="cd_deleta" onclick='exclui_comodo();'>
					<input class='bt grava' type="button" id="cd_grava" onclick='grava_comodo();'>
					<input class='bt cancela' type="button" id="cd_cancela" onclick='cancela_comodo();'>
				</div>
				
				<div class='panel panel-default panel-table'>
					<table class='table table-hover'>
						<thead>
							<tr class='title'>
								<td class="w40">#</td>
								<td class="w40">ID</td>
								<td class="w260">Nome do Comodo</td>
							</tr>
						</thead>
						<tbody id="dados_comodo" class='h200'>

						</tbody>
					</table>
				</div>

				<div class='footer'>
					<div class='registros w120'>
						<label>Posicao:</label> 
						<input type='text' class='w40' id='position_comodo' value="0" readonly />
					</div>
					<div class='registros w120'>
						<label>Registros:</label>
						<input type="text" class='w40' id="record_comodo" value="0" readonly />				
					</div>
				</div>
			</div>

			
			<!-- TABELA DE LAMPADA -->
			<div class='container panel panel-default w590 hide_custom' name="table_lampada" style='padding-top: 15px'>
				<div class='h40'>
					<input class='search uppercase' type="search" id="lp_busca">
					<input class='bt busca' type="button" id="lp_buscar" onclick='montaQuery_lampada();'>
					<input class='bt insere' type="button" id="lp_insere" onclick='insere_lampada();'>
					<input class='bt deleta' type="button" id="lp_deleta" onclick='exclui_lampada();'>
					<input class='bt grava' type="button" id="lp_grava" onclick='grava_lampada();'>
					<input class='bt cancela' type="button" id="lp_cancela" onclick='cancela_lampada();'>
				</div>
				
				<div class='panel panel-default panel-table'>
					<table class='table table-hover'>
						<thead>
							<tr class='title'>
								<td class="w40">#</td>
								<td class="w40">ID</td>
								<td class="w170">Lâmpada</td>
								<td class="w70">Tensão</td>
								<td class="w70">Consumo</td>
								<td class="w70">C.Total</td>
								<td class="w90">Comodo</td>
							</tr>
						</thead>
						<tbody id="dados_lampada" class='h200'>

						</tbody>
					</table>
				</div>

				<div class='footer'>
					<div class='registros w120'>
						<label>Posicao:</label> 
						<input type='text' class='w40' id='position_lampada' value="0" readonly />
					</div>
					<div class='registros w120'>
						<label>Registros:</label>
						<input type="text" class='w40' id="record_lampada" value="0" readonly />				
					</div>
				</div>
			</div>
			
			
			
			<!-- TABELA DE TEMPERATURA -->
			<div class='container panel panel-default w590 hide_custom' name="table_temperatura" style='padding-top: 15px'>
				<div class='h40'>
					<input class='search uppercase' type="search" id="tp_busca">
					<input class='bt busca' type="button" id="tp_buscar" onclick='montaQuery_temperatura();'>
					<input class='bt insere' type="button" id="tp_insere" onclick='insere_temperatura();'>
					<input class='bt deleta' type="button" id="tp_deleta" onclick='exclui_temperatura();'>
					<input class='bt grava' type="button" id="tp_grava" onclick='grava_temperatura();'>
					<input class='bt cancela' type="button" id="tp_cancela" onclick='cancela_temperatura();'>
				</div>
				
				<div class='panel panel-default panel-table'>
					<table class='table table-hover'>
						<thead>
							<tr class='title'>
								<td class="w40">#</td>
								<td class="w40">ID</td>
								<td class="w170">Nome Sensor</td>
								<td class="w70">MAX</td>
								<td class="w70">MIN</td>
								<td class="w70">Comodo</td>
								<td class="w90">Status</td>
							</tr>
						</thead>
						<tbody id="dados_temperatura" class='h200'>

						</tbody>
					</table>
				</div>

				<div class='footer'>
					<div class='registros w120'>
						<label>Posicao:</label> 
						<input type='text' class='w40' id='position_temperatura' value="0" readonly />
					</div>
					<div class='registros w120'>
						<label>Registros:</label>
						<input type="text" class='w40' id="record_temperatura" value="0" readonly />				
					</div>
				</div>
			</div>
			
			
			
			
			
			
			
			<!-- TABELA DE CAMERA -->
			<div class='container panel panel-default w490 hide_custom' name="table_camera" style='padding-top: 15px'>
				<div class='h40'>
					<input class='search uppercase' type="search" id="cm_busca">
					<input class='bt busca' type="button" id="cm_buscar" onclick='montaQuery_camera();'>
					<input class='bt insere' type="button" id="cm_insere" onclick='insere_camera();'>
					<input class='bt deleta' type="button" id="cm_deleta" onclick='exclui_camera();'>
					<input class='bt grava' type="button" id="cm_grava" onclick='grava_camera();'>
					<input class='bt cancela' type="button" id="cm_cancela" onclick='cancela_camera();'>
				</div>
				
				<div class='panel panel-default panel-table'>
					<table class='table table-hover'>
						<thead>
							<tr class='title'>
								<td class="w40">#</td>
								<td class="w40">ID</td>
								<td class="w170">Nome Camera</td>
								<td class="w100">Endereço IP</td>
								<td class="w90">Comodo</td>
							</tr>
						</thead>
						<tbody id="dados_camera" class='h200'>

						</tbody>
					</table>
				</div>

				<div class='footer'>
					<div class='registros w120'>
						<label>Posicao:</label> 
						<input type='text' class='w40' id='position_camera' value="0" readonly />
					</div>
					<div class='registros w120'>
						<label>Registros:</label>
						<input type="text" class='w40' id="record_camera" value="0" readonly />				
					</div>
				</div>
			</div>
	
	
	
	
	
	
	
	
	
	
			<!-- TABELA DE PORTAO -->
			<div class='container panel panel-default w420 hide_custom' name="table_portao" style='padding-top: 15px'>
				<div class='h40'>
					<input class='search uppercase' type="search" id="pt_busca">
					<input class='bt busca' type="button" id="pt_buscar" onclick='montaQuery_portao();'>
					<input class='bt insere' type="button" id="pt_insere" onclick='insere_portao();'>
					<input class='bt deleta' type="button" id="pt_deleta" onclick='exclui_portao();'>
					<input class='bt grava' type="button" id="pt_grava" onclick='grava_portao();'>
					<input class='bt cancela' type="button" id="pt_cancela" onclick='cancela_portao();'>
				</div>
				
				<div class='panel panel-default panel-table'>
					<table class='table table-hover'>
						<thead>
							<tr class='title'>
								<td class="w40">#</td>
								<td class="w40">ID</td>
								<td class="w200">Nome Portão</td>
								<td class="w90">Comodo</td>
							</tr>
						</thead>
						<tbody id="dados_portao" class='h200'>

						</tbody>
					</table>
				</div>

				<div class='footer'>
					<div class='registros w120'>
						<label>Posicao:</label> 
						<input type='text' class='w40' id='position_portao' value="0" readonly />
					</div>
					<div class='registros w120'>
						<label>Registros:</label>
						<input type="text" class='w40' id="record_portao" value="0" readonly />				
					</div>
				</div>
			</div>
			
		</div>	
	</body>
</html>