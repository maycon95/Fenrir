		<jsp:include page="../../component/WebUteis/imports.jsp" /><!-- PEGA OS IMPORT PADRAO  -->


		<script src="login.js"></script> <!-- IMPORTA O JS DESSA TELA  -->

		<style>
			main {
				padding-top:50px;
				margin-top: 15px; 
				margin-right: 10px;
				margin-bottom: 25px;
				margin-left: 10px;
			}
			
			 #divCenter { 
               width: 400px; 
               height: 150px; 
               left: 50%; 
               margin: -130px 0 0 -210px; 
               padding:10px;
               position: absolute; 
               top: 50%; 
			}
			
			#img{
               left: 55%; 
               margin: -130px 0 0 -210px; 
               padding: 20 px;
               position: absolute; 
               top: 40%;
			}
		</style>
		
		<title>Fenrir</title>		
	</head>
	<body>
		<header>
			<nav class="navbar navbar-inverse navbar-fixed-top">
				<div class="navbar-header">
					<a href="#" class="navbar-brand">Fenrir Automações</a>
				</div>
			</nav>	
		</header>
		<div id="img">				
		<img src="../../component/img/logo.png">
		</div>
	</body>
	<div class='main'>
		<div id="divCenter">
			<div class="form-horizontal">
				<div class="control-group">
					<label class="control-label" for="inputEmail">Usuário</label>
					<div class="controls">
						<input id="user" type="text" placeholder="Digite seu usuário" autofocus/>
					</div>
				</div>
				<div class="control-group">
					<label class="control-label" for="inputPassword">Senha</label>
					<div class="controls">
						<input id="senha" type="password" placeholder="Digite sua senha" />
					</div>
				</div>
				
				<div class="control-group">
					<div class="controls">
						<button class="btn" onclick="logar()">Acessar</button>
					</div>
				</div>
			</div>
		</div>
	</div>	
</html>