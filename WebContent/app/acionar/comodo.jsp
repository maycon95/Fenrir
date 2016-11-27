
		<jsp:include page="../../component/WebUteis/imports.jsp" /><!-- PEGA OS IMPORT PADRAO  -->

		<script src="comodo.js"></script> <!-- IMPORTA O JS DESSA TELA  -->

	</head>
		<body background="../../component/img/Fundo.jpg" onload="buscaComodos('${param.categoria}');">
		
		<jsp:include page="../../component/WebUteis/header.jsp" /><!-- PEGA O HEADER PADRAO  -->
		
		<main>	
			<div class='main'>


			<!-- DIV DOS DISPOSITIVOS -->
			<div id="div_dispositivos" class="float-left w50c">
			
			</div>



			<!-- DIV DAS CAMERAS -->
			<div id="div_camera" class="float-right w50c">
				<div name="camera_id_01" class="w100c float-left">
					<h3>Camera 1</h3>
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
			
			</div>






			</div>
			
			<div id="divfundo" class="fundoescuro" >
			
				<div class="box-include">
					<jsp:include page="../../app/admin/includeAdmin.jsp" /><!-- INCLUI AS TABELAS DE ADM  -->
				</div>
					
			</div>
			
			
		</main>
		
		<script src="../../component/bootstrap/js/jquery-2.2.0.min.js" type="text/javascript"></script>
		<script src="../../component/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
	</body>
</html>