		<jsp:include page="../../component/WebUteis/imports.jsp" /><!-- PEGA OS IMPORT PADRAO  -->
		<script src="admin.js"></script> <!-- IMPORTA O JS DESSA TELA  -->

		<title>Fenrir</title>
	</head>
	<body>
		<header class='header'>
			<jsp:include page="../../component/WebUteis/header.jsp" /> <!-- IMPORTA O HEADER PADRAO  -->
		</header>

		<div class='container pull-left w500'>
			<ul class="list-group">
			  <li class="list-group-item active">Usuário</li>
			  <li class="list-group-item">Cômodo</li>
			  <li class="list-group-item">Lãmpada</li>
			</ul>
		</div>


		<div class='container panel panel-default w550' style='padding-top: 15px'>
			<input class='bt' type="search" id="us_busca">
			<input class='bt' type="button" id="us_insere">
			<input class='bt' type="button" id="us_deleta">
			<input class='bt' type="button" id="us_grava">
			<input class='bt' type="button" id="us_cancela">
			
			<div class='container panel panel-default w500'>
				<table class='table table-hover'>
					<thead>
						<tr class='title'>
							<td class="w40">#</td>
							<td class="w200">nome</td>
							<td class="w200">sei la</td>
						</tr>
					</thead>
					<tbody class='h200'>
						<tr>
							<td class="w40" scope='row'>1</td>
							<td class="w200">1</td>
							<td class="w200">2</td>
						</tr>					
					</tbody>
				</table>
			</div>
		</div>

	</body>
</html>