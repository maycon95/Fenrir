		<jsp:include page="../../component/WebUteis/imports.jsp" /><!-- PEGA OS IMPORT PADRAO  -->
		<script src="home.js"></script> <!-- IMPORTA O JS DESSA TELA  -->

		<title>Fenrir</title>
	</head>
	<body>
		<header>
			<jsp:include page="../../component/WebUteis/header.jsp" /> <!-- IMPORTA O HEADER PADRAO  -->
		</header>

		<div class='main'>
			<div>
				<h3 class="text-center">	</h3>
			</div>

			<div class="col-xs-12 col-md-4 text-center">
				<div class="btn-group">
					<input type='button' class='btn btn-default button sala' onclick="acionarComodos('sala');">
				</div>
				<div>
					<h4>Salas</h4>
				</div>
			</div>
			
			<div class="col-xs-12 col-md-4 text-center">
				<div class="btn-group">
					<input type='button' class='btn btn-default button quarto' onclick="acionarComodos('quarto');"'>	
				</div>
				<div>
					<h4>Quarto</h4>
				</div>
			</div>
			
			<div class="col-xs-12 col-md-4 text-center">
				<div class="btn-group">
					<input type='button' class='btn btn-default button cozinha' onclick="acionarComodos('cozinha');">	
				</div>
				<div>
					<h4>Cozinha</h4>
				</div>
			</div>
		
		</div>
		
		<div class='main'>
			<div class="col-xs-12 col-md-4 text-center">
				<div class="btn-group">
					<input type='button' class='btn btn-default button wc' onclick="acionarComodos('banheiro');">	
				</div>
				<div>
					<h4>Banheiro</h4>
				</div>
			</div>
			
			<div class="col-xs-12 col-md-4 text-center">
				<div class="btn-group">
					<input type='button' class='btn btn-default button garagem' onclick="acionarComodos('garagem');">	
				</div>
				<div>
					<h4>Garagem</h4>
				</div>
			</div>
			
			<div class="col-xs-12 col-md-4 text-center">
				<div class="btn-group">
					<input type='button' class='btn btn-default button relatorio' onclick="relatorio();">	
				</div>
				<div>
					<h4>Relatório</h4>
				</div>
			</div>
			
		</div>
	</body>
</html>