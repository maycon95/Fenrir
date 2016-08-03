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
					<input type='button' id='lampada' class='btn btn-default button lampada' comando='4_LIGA_LAMPADA' onclick="acionarLampada();">				
				</div>
				<div>
					<h4>Iluminação</h4>
				</div>
			</div>
			
			<div class="col-xs-12 col-md-4 text-center">
				<div class="btn-group">
					<input type='button' class='btn btn-default button arcondicionado' onclick=''>
				</div>
				<div>
					<h4>Ar-Condicionado</h4>
				</div>
			</div>
			
			<div class="col-xs-12 col-md-4 text-center">
				<div class="btn-group">
					<input type='button' class='btn btn-default button garagem' onclick=''>	
				</div>
				<div>
					<h4>Garagem</h4>
				</div>
			</div>
		
		</div>
		
		<div class='main'>
			<div class="col-xs-12 col-md-4 text-center">
				<h5></h5>
					
				<div class="btn-group">
					<input type='button' class='btn btn-default button camera' onclick=''>
				</div>
				<div>
					<h4>Câmera</h4>
				</div>
			</div>
			
			<div class="col-xs-12 col-md-4 text-center">
				<h5></h5>					
				<div class="btn-group">
					<input type='button' class='btn btn-default button sensores' onclick=''>
				</div>
				<div>
					<h4>Sensor</h4>
				</div>
			</div>
			
			<div class="col-xs-12 col-md-4 text-center">
				<h5></h5>
				<div class="btn-group">
					<input type='button' class='btn btn-default button relatorio' onclick=''>
				</div>
				<div>
					<h4>Relatórios</h4>
				</div>
			</div>
		</div>
	</body>
</html>