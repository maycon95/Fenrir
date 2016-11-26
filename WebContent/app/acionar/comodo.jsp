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

		<div class="main w380 h300 float-left " id='div_camera' style='padding: 30px; float: left; margin-top: 35px;'>
			<div class="col-xs-12 col-md-4 text-center w320 h250">
			<!-- 	
				<img style="-webkit-user-select: none" src="http://192.168.1.126:81/videostream.cgi?user=admin&amp;pwd=&amp;resolution=8&amp;rate=0">	
			-->
			</div>
			
			<div>
				<input type="button" value="Esquerda" id="esquerda" onmousedown="mov_camera(4);" onmouseup="mov_camera(5);" />
				<input type="button" value="Cima" id="cima" onmousedown="mov_camera(0);" onmouseup="mov_camera(1);"/>
				<input type="button" value="Baixo" id="baixo" onmousedown="mov_camera(2);" onmouseup="mov_camera(3);" />
				<input type="button" value="Direita" id="direita" onmousedown="mov_camera(6);" onmouseup="mov_camera(7);" />
			</div>
			
		</div>



	</body>
</html>