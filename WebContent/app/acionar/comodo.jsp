		<jsp:include page="../../component/WebUteis/imports.jsp" /><!-- PEGA OS IMPORT PADRAO  -->
		<script src="comodo.js"></script> <!-- IMPORTA O JS DESSA TELA  -->

		<title>Fenrir</title>
	</head>
	<body onload="buscaComodos('${param.categoria}');">
		<header>
			<jsp:include page="../../component/WebUteis/header.jsp" /> <!-- IMPORTA O HEADER PADRAO  -->
		</header>



		<div class='main w530 float-left' id='listaComodos' style='float: left;'>					

		</div>

		<!-- <div class="main w380 h300 float-left" id='div_imagem' style='padding: 30px; float: left;'>
			<div class='h180 float-left ' style="width: 362px; border:1px solid #ccc;">
				<img src="" id="imagem" class='w360 h180' name='cd_planta' title=''/>
			</div>
		</div>
		-->
		

		<div class="main w380 h300 float-left hide" id='div_temperatura' style='padding: 30px; float: left; margin-top: 35px;'>
			<div class="col-xs-12 col-md-4 text-center">
				<div class="btn-group">
					<input type='button' class='btn btn-default button temperatura' onclick="acionarDispositivos('iluminacao');">				
				</div>
				<div>
					<h4 id='valor_temp'></h4>
				</div>
			</div>
		</div>



	</body>
</html>