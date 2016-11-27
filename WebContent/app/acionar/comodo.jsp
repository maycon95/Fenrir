
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