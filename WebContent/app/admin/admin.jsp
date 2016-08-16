		<jsp:include page="../../component/WebUteis/imports.jsp" /><!-- PEGA OS IMPORT PADRAO  -->
		<script src="admin.js"></script> <!-- IMPORTA O JS DESSA TELA  -->

		<title>Fenrir</title>
	</head>
	<body>
		<header class='header'>
			<jsp:include page="../../component/WebUteis/header.jsp" /> <!-- IMPORTA O HEADER PADRAO  -->
		</header>

		<div class='container pull-left w500'>
			<ul class="list-group" id="options">
			  <li class="list-group-item active" name="usuario">Usuário</li>
			  <li class="list-group-item" name="comodo">Cômodo</li>
			  <li class="list-group-item" name="lampada">Lâmpada</li>
			</ul>
		</div>

		<div name='tabelas'>
			<!-- TABELA DE USUARIO -->
			<div class='container panel panel-default w450' name="table_usuario" style='padding-top: 15px'>
				<div class='h40'>
					<input class='search uppercase' type="search" id="us_busca">
					<input class='bt busca' type="button" id="us_buscar">
					<input class='bt insere' type="button" id="us_insere">
					<input class='bt deleta' type="button" id="us_deleta">
					<input class='bt grava' type="button" id="us_grava">
					<input class='bt cancela' type="button" id="us_cancela">
				</div>
				
				<div class='panel panel-default panel-table'>
					<table class='table table-hover'>
						<thead>
							<tr class='title'>
								<td class="w40">#</td>
								<td class="w200">Nome</td>
								<td class="w170">Sei Lá</td>
							</tr>
						</thead>
						<tbody id="dados_usuario" class='h200'>
							<tr>
								<td class="w40" ><input value="" readonly></td>
								<td class="w200"><input value="maycon" us_nome="maycon" class='uppercase' maxlength="20"></td>
								<td class="w150"><input value="nothing" ></td>
							</tr>						
						</tbody>
					</table>
				</div>
			</div>

			<div class='container panel panel-default w450 hide_custom' name="table_comodo" style='padding-top: 15px'>
				<div class='h40'>
					<input class='search uppercase' type="search" id="cm_busca">
					<input class='bt busca' type="button" id="cm_buscar">
					<input class='bt insere' type="button" id="cm_insere">
					<input class='bt deleta' type="button" id="cm_deleta">
					<input class='bt grava' type="button" id="cm_grava">
					<input class='bt cancela' type="button" id="cm_cancela">
				</div>
				
				<div class='panel panel-default panel-table'>
					<table class='table table-hover'>
						<thead>
							<tr class='title'>
								<td class="w40">#</td>
								<td class="w200">Nome</td>
								<td class="w170">Sei Lá</td>
							</tr>
						</thead>
						<tbody id="dados_comodo" class='h200'>
							<tr>
								<td class="w40" ><input value="" readonly></td>
								<td class="w200"><input value="maycon" us_nome="maycon" class='uppercase' maxlength="20"></td>
								<td class="w150"><input value="nothing" ></td>
							</tr>						
						</tbody>
					</table>
				</div>
			</div>


			<div class='container panel panel-default w450 hide_custom' name="table_lampada" style='padding-top: 15px'>
				<div class='h40'>
					<input class='search uppercase' type="search" id="lp_busca">
					<input class='bt busca' type="button" id="lp_buscar">
					<input class='bt insere' type="button" id="lp_insere">
					<input class='bt deleta' type="button" id="lp_deleta">
					<input class='bt grava' type="button" id="lp_grava">
					<input class='bt cancela' type="button" id="lp_cancela">
				</div>
				
				<div class='panel panel-default panel-table'>
					<table class='table table-hover'>
						<thead>
							<tr class='title'>
								<td class="w40">#</td>
								<td class="w200">Nome</td>
								<td class="w170">Sei Lá</td>
							</tr>
						</thead>
						<tbody id="dados_lampada" class='h200'>
							<tr>
								<td class="w40" ><input value="" readonly></td>
								<td class="w200"><input value="maycon" us_nome="maycon" class='uppercase' maxlength="20"></td>
								<td class="w150"><input value="nothing" ></td>
							</tr>						
						</tbody>
					</table>
				</div>
			</div>

		</div>
	</body>
</html>