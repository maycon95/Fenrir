		<jsp:include page="../../component/WebUteis/imports.jsp" /><!-- PEGA OS IMPORT PADRAO  -->

		<script src="login.js"></script> <!-- IMPORTA O JS DESSA TELA  -->

		<!-- ja esta sendo importado -->
		<!-- <meta charset="UTF-8" />
		<title>Fenrir Autmações</title>
		<link rel="stylesheet" href="css/bootstrap.min.css" />
		<meta name="viewport" content="width=device-width" /> -->
		<style>
			body{
				background-image: url('logo.png')/*, url('img/Fundo.jpg')*/;
				background-color: #0e1a35;
				background-repeat: no-repeat;
				background-position: center center;

				
			}
			
			div.flex-align {
			  display: -webkit-flexbox;
			  display: -ms-flexbox;
			  display: -webkit-flex;
			  display: flex;
			  -webkit-flex-align: center center;
			  -ms-flex-align: center center;
			  -webkit-align-items: center center;
			  align-items: center;
			  width: 100%;
			  padding-top: 10%;
			  font-weight: bold;
			  color: black;
			 }
			
			h3, h4{
				text-align: center;
				color: #FFF;	
			}
			
			h3{
				padding-top: 5%;		
			}
			
			.form-control{
				border-style: solid;
				border-width: 2px;
				border-radius: 5px;
				border-color: 
			}

			.btn{
				font-weight: bold;
				font-align: center center;
				border-style: solid;
				border-width: 2px;
				border-radius: 5px;
				border-color: 
				
			}
			
			i.glyphicon {
				font-size: 15px;
				color: #123456;
				font-weight: bold
			}
			
			.footer {
				position:absolute;
				bottom:0;
				width:100%;
				color: #FFF;
				padding: 0px 20px 10px 0px;
				
				text-align: right
				
			}

	
		</style>
	</head>
	<body background="../../component/img/logo.png">
	<div class="Fenrir" >	
		<h3>Seja bem-vindo!</h3>
		<h4>Para prosseguir informe o seu nome de usuário e senha.</h4>
	</div>
	<div class="flex-align">
		<form class="container span7 text-left col-lg-3 col-md-offset-4" style="margin: 0 auto">
			<div class="row">
				<div class="form-group form-group has-feedback has-feedback-left">
				<!--	<label for="exampleInputName2">Usuário</label> -->
					<input type=text class="form-control input-lg" id="user" placeholder="USER" autofocus>
					<i class="glyphicon glyphicon-user form-control-feedback"></i>
				<!-- http://stackoverflow.com/questions/18838964/add-bootstrap-glyphicon-to-input-box -->
				</div>
					  
				<div class="form-group has-feedback has-feedback-left">
				<!--	<label for="exampleInputEmail2">Email</label> -->
					<input type=password class="form-control input-lg" id="senha" placeholder="PASSWORD">
					<i class="glyphicon glyphicon-lock form-control-feedback"></i>
				</div>
				
				
				<button type="button" class="btn btn-md"  onclick="logar();">
					<i class="glyphicon glyphicon-off glyphicon-lg" aria-hidden="true"></i>&nbsp&nbsp&nbspENTER
				</button>
				<!-- glyphicon glyphicon-send -->
			</div>
		</form>
    </div>
	<div class="footer">
		Copyrigth ©&nbsp&nbsp&nbsp2016 by Fenrir Autmações
	</div>
	</body>
</html>