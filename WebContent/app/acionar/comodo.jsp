
		<jsp:include page="../../component/WebUteis/imports.jsp" /><!-- PEGA OS IMPORT PADRAO  -->

		<script src="comodo.js"></script> <!-- IMPORTA O JS DESSA TELA  -->
		<link rel="stylesheet" type="text/css" href="../home/home.css" />

	</head>
		<body class="home" onload="buscaComodos('${param.categoria}');">
		
	    <jsp:include page="../../component/WebUteis/header.jsp" /><!-- PEGA O HEADER PADRAO  -->
	    
                <!-- coisas da tela aqui -->
                <div class="user-dashboard">
<!--                    <h1>Hello, JS</h1> -->
                    <br>
                    <br>
                    <br>


								<!-- DIV DOS DISPOSITIVOS -->
			<div id="div_dispositivos" style="float: left; width: 50%; min-width: 300px;">
			
			</div>



			<!-- DIV DAS CAMERAS -->
			<div id="div_camera" style="float: right; width: 50%; min-width: 300px;">			
			
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