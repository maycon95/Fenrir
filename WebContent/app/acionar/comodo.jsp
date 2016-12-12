
		<jsp:include page="../../component/WebUteis/imports.jsp" /><!-- PEGA OS IMPORT PADRAO  -->

		<script src="comodo.js"></script> <!-- IMPORTA O JS DESSA TELA  -->
		<link rel="stylesheet" type="text/css" href="../home/home.css" />

	</head>
		<body class="home">
		
	    <jsp:include page="../../component/WebUteis/header.jsp" /><!-- PEGA O HEADER PADRAO  -->
	    
                <!-- coisas da tela aqui -->
                <div class="user-dashboard">
<!--                    <h1>Hello, JS</h1> -->
                    <br>
                    <br>
                    <br>


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

	                </div>
	            </div>
	        </div>
	    </div>





		<!-- TABELAS DE ADMIN -->
	    <jsp:include page="../../app/admin/includeAdmin.jsp" /><!-- PEGA O HEADER PADRAO  -->


  
	    <div class="footer text-right" style="padding-right: 2%; font-weight: bold;">
	        Copyrigth ©&nbsp&nbsp&nbsp2016 by Fenrir Autmações
	    </div> 



		<script src="../../component/bootstrap/js/jquery-2.2.0.min.js" type="text/javascript"></script>
		<script src="../../component/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
	</body>
</html>