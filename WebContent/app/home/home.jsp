<!-- <!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Home - Fenrir Autmações</title>
		<link rel="stylesheet" href="css/bootstrap.min.css" />
		<meta name="viewport" content="width=device-width" /> -->


		<jsp:include page="../../component/WebUteis/imports.jsp" /><!-- PEGA OS IMPORT PADRAO  -->

		<script src="home.js"></script> <!-- IMPORTA O JS DESSA TELA  -->


	<style>
		body{
			background-repeat: no-repeat;
			background-size: auto;/*
			background-color: #123456*/
		}

		.botao{
			width: 175px;
			height: 175px;
		}

		h4{
			color: #fff;
			font-family: "Imprint MT Shadow";
			font-size: x-large;
			font-weight: 
		}

		.glyphicon {
				font-size: 20px;
				font-weight: bold;
			}

#nav li:hover ul{
    left:0;
}

#nav li:hover ul{
    left:auto;
    right:0;
    margin-right:-10px;
}
		
	</style>
	</head>
		<body background="../../component/img/Fundo.jpg">
		<header>
			<nav class="navbar navbar-inverse">
				<div class="navbar-header">
					<a href="../home/home.jsp" class="navbar-brand">Fenrir Automações</a>
					<a href="../admin/admin.jsp" class="navbar-brand">Administrção</a>
					<button type="button" data-target=".navbar-collapse" data-toggle="collapse" class="navbar-toggle">Menu</button>
				</div>
	<div class="container-fluid">
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li id="fat-menu" class="dropdown">
              <a id="drop3" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
                <span class="glyphicon glyphicon-cog glyphicon-lg"></span>
              </a>
              <ul class="dropdown-menu">
                <li><a href="#">Cômodo</a></li>
                <li><a href="#">Lâmpada</a></li>
                <li><a href="#">Dimmer</a></li>
                <li><a href="#">Sensor de Temperatura</a></li>
                <li><a href="#">Câmera</a></li>
                <li><a href="#">Portão</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="../admin/admin.jsp">Usuário</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.nav-collapse -->
      </div>
	</nav>
			</header>
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
				<!--<div class="btn-group">
					<input type='button' id='sala' class='btn btn-default'>				
				</div>
				<div>
					<h4>Sala</h4> -->
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
<!--					<input type='button' id='garagem' class='btn btn-default' onclick=''> -->
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
		</main>
	</body>
</html>