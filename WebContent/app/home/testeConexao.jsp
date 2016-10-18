		<jsp:include page="../../component/WebUteis/imports.jsp" /><!-- PEGA OS IMPORT PADRAO  -->
		<script src="testeConexao.js"></script> <!-- IMPORTA O JS DESSA TELA  -->

		<title>Fenrir</title>
	</head>
	<body onLoad='testeConexao();'>
		<h4>Teste de Conxão com o Arduino</h4>
		<input type='button' onclick='testeConexao();' value='clique aqui'>
	</body>
</html>