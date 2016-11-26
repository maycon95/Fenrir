<!-- <!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Home - Fenrir Autmações</title>
		<link rel="stylesheet" href="css/bootstrap.min.css" />
		<meta name="viewport" content="width=device-width" /> -->


		<jsp:include page="../../component/WebUteis/imports.jsp" /><!-- PEGA OS IMPORT PADRAO  -->

		<script src="home.js"></script> <!-- IMPORTA O JS DESSA TELA  -->

	</head>
		<body background="../../component/img/Fundo.jpg">
		
		<jsp:include page="../../component/WebUteis/header.jsp" /><!-- PEGA O HEADER PADRAO  -->
		
		<main>	
			<div class='main'>
				<div>
					<h3 class="text-center"></h3>
				</div>
	
				<div class="col-xs-12 col-md-3 text-center">
					<div class="btn-group">
						<input type="image" class="botao" name="" src="../../component/img/sala.png" style="height:128px, width:128px;"
						 	title="Teste"; style="opacity: 50;" onclick="acionarComodos('sala');">
					</div>
					<div>
						<h4>Sala</h4>
					</div>
				</div>
				
				<div class="col-xs-12 col-md-3 text-center">
					<div class="btn-group">
						<input type="image" class="botao" name="" src="../../component/img/quarto.png" style="height:128px, width:128px; " onclick="acionarComodos('quarto');">
					</div>
					<div>
						<h4>Quarto</h4>
					</div>
				</div>
				
				<div class="col-xs-12 col-md-3 text-center">
					<div class="btn-group">	
						<input type="image" class="botao" name="" src="../../component/img/food1.png" style="height:128px, width:128px;" onclick="acionarComodos('cozinha');">
					</div>
					<div>
						<h4>Cozinha</h4>
					</div>
				</div>
			
			</div>
			
			<div class='main'>
				<div class="col-xs-12 col-md-3 text-center">
					<h5></h5>
						
					<div class="btn-group">
						<input type="image" class="botao" name="" src="../../component/img/wc.png" style="height:128px, width:128px; " onclick="acionarComodos('banheiro');">
					</div>
					<div>
						<h4>Banheiro</h4>
					</div>
				</div>
				
				<div class="col-xs-12 col-md-3 text-center">
					<h5></h5>					
					<div class="btn-group">
						<input type="image" class="botao" name="" src="../../component/img/areae.png" style="height:128px, width:128px; " 
						onclick="acionarComodos('area externa');">
					</div>
					<div>
						<h4>Área Externa</h4>
					</div>
				</div>
				
				<div class="col-xs-12 col-md-3 text-center">
					<h5></h5>
					<div class="btn-group">
						<input type="image" class="botao" name="" src="../../component/img/lavanderia.png" style="height:128px, width:128px;" title="teste" onclick="acionarComodos('lavanderia');">
					</div>
					<div>
						<h4>Lavanderia</h4>
					</div>
				</div>
	
				<div class="col-xs-12 col-md-3 text-center">
					<h5></h5>
					<div class="btn-group">
						<input type="image" class="botao" name="" src="../../component/img/garage.png" style="height:128px, width:128px; " onclick="acionarComodos('garagem');">
					</div>
					<div>
						<h4>Garagem</h4>
					</div>
				</div>
	
				<div class="col-xs-12 col-md-3 text-center">
					<h5></h5>
					<div class="btn-group">
						<input type="image" class="botao" name="" src="../../component/img/relatorio.png" style="height:128px, width:128px; ">
					</div>
					<div>
						<h4>Relatórios</h4>
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