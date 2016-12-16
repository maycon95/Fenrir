
		<jsp:include page="../../component/WebUteis/imports.jsp" /><!-- PEGA OS IMPORT PADRAO  -->

		<script src="home.js"></script> <!-- IMPORTA O JS DESSA TELA  -->
		<link rel="stylesheet" type="text/css" href="home.css" />

	</head>
		<body class="home">
		
	    <jsp:include page="../../component/WebUteis/header.jsp" /><!-- PEGA O HEADER PADRAO  -->
	    
                <!-- coisas da tela aqui -->
                <div class="user-dashboard">
<!--                    <h1>Hello, JS</h1> -->
                    <br>
                    <br>
                    <br>
                    <div class="col-xs-12 col-md-3 text-center">
                        <div class="btn-group">
                            <input type="image" class="botao" name="" src="../../component/img/sala.png" style="height:64px, width:64px;" 
                            	onclick="acionarComodos('sala');">
                        </div>
                        <div>

    <!--                            <h4>Sala</h4> -->
                        </div>
                    </div>

                        <div class="col-xs-12 col-md-3 text-center">
                            <div class="btn-group">
                                <input type="image" class="botao" name="" src="../../component/img/quarto.png" style="height:64px, width:64px;" 
                                	onclick="acionarComodos('quarto');">
                            </div>
                            <div>
                            
    <!--                            <h4>Quarto</h4> -->
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-3 text-center">
                            <div class="btn-group">
                                <input type="image" class="botao" name="" src="../../component/img/wc.png" style="height:64px, width:64px;" 
                                	onclick="acionarComodos('cozinha');">
                            </div>
                            <div>
<!--                            <h4>Cozinha</h4> -->
                            </div>
                        </div>


                        <div class="col-xs-12 col-md-3 text-center">
                            <div class="btn-group">
                                <input type="image" class="botao" name="" src="../../component/img/cozinha.png" style="height:64px, width:64px;" 
                                	onclick="acionarComodos('banheiro');">
                            </div>
                            <div>
                                <br>
                                <br>                        
                                <br>
<!--                            <h4>WC</h4> -->
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-3 text-center">
                            <div class="btn-group">
                                <input type="image" class="botao" name="" src="../../component/img/areae.png" style="height:64px, width:64px;" 
                                	onclick="acionarComodos('lavanderia');">
                            </div>
                            <div>

<!--                            <h4>Lavanderia</h4> -->
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-3 text-center">
                            <div class="btn-group">
                                <input type="image" class="botao" name="" src="../../component/img/lavanderia.png" style="height:64px, width:64px;" 
                                	onclick="acionarComodos('sala');">
                            </div>
                            <div>
    <!--                            <h4>Área Externa</h4> -->
                            </div>
                        </div>


                        <div class="col-xs-12 col-md-3 text-center">
                            <div class="btn-group">
                                <input type="image" class="botao" name="" src="../../component/img/garagem.png" style="height:64px, width:64px;" 
                                	onclick="acionarComodos('garagem');">
                            </div>
                            <div>
    <!--                            <h4>Garagem</h4> -->
                                <br>
                                <br>
                                <br>
                            </div>
                        </div>
	                </div>
	            </div>
	        </div>
	    </div>





		<!-- TABELAS DE ADMIN -->
	    <jsp:include page="../../app/admin/includeAdmin.jsp" /><!-- PEGA O HEADER PADRAO  -->


  
	    <div class="footer text-right" style="padding-right: 2%; font-weight: bold;">
	        Copyrigth ©&nbsp&nbsp&nbsp2016 by Fenrir Automações
	    </div> 



		<script src="../../component/bootstrap/js/jquery-2.2.0.min.js" type="text/javascript"></script>
		<script src="../../component/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
	</body>
</html>