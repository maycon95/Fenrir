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

		<div class="main w380 h300 float-left" id='div_imagem' style='padding: 30px; float: left;'>
			<input type="file" name="file_upload" id='file_up' onchange="upload_planta()" class='hide'>
			<label class="" for='file_up' title="clique para poder fazer o upload"></label>

			<div class='h180 float-left ' style="width: 362px; border:1px solid #ccc;">
				<img src="" id="imagem" class='w360 h180' name='cd_planta' title=''/>
			</div>
		</div>


		<!-- <div class="panel panel-primary w500">
				<div class="panel-heading">
			    	<h3 class="panel-title">Sala 1</h3>
				</div>
				<div class="panel-body">
					
					<!-- LP1 
					<div class="col-xs-12 col-md-4 text-center">
						<div class="btn-group">
							<input type='button' class='btn btn-default button lampada'>				
						</div>
						<div>
							<h4>Iluminação</h4>
						</div>
					</div>




					<!-- LP2 
					<div class="col-xs-12 col-md-4 text-center">
						<div class="btn-group">
							<input type='button' class='btn btn-default button lampada'>				
						</div>
						<div>
							<h4>Iluminação</h4>
						</div>
					</div>

				</div>	

			</div>







			<div class="panel panel-primary w500">
				<div class="panel-heading">
			    	<h3 class="panel-title">Sala 1</h3>
				</div>
				<div class="panel-body">

				</div>	
			</div>
 -->





	</body>
</html>