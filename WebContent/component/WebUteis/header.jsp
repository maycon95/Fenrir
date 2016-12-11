<!--  		<header>
			<nav class="navbar navbar-inverse">
				<div class="navbar-header">
					<a href="../home/home.jsp" class="navbar-brand">Fenrir Automações</a>
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
		                <li><a onclick="admin('comodo');">Cômodo</a></li>
		                <li><a onclick="admin('lampada');">Lâmpada</a></li>
		                <li><a onclick="admin('temperatura');">Sensor de Temperatura</a></li>
		                <li><a onclick="admin('camera');">Câmera</a></li>
		                <li><a onclick="admin('portao');">Portão</a></li>
		                <li role="separator" class="divider"></li>
		                <li><a onclick="admin('usuario');">Usuário</a></li>
		                <li role="separator" class="divider"></li>
		                <li><a onclick="logout();">Sair</a></li>
		              </ul>
		            </li>
		          </ul>
		        </div> --> <!-- /.nav-collapse -->
<!--		      </div>
			</nav>
		</header>
-->	

<body class="home">
    <div class="container-fluid display-table">
        <div class="row display-table-row">
            <div class="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
                <div class="logo">
                    <a hef="home.html"><img src="http://jskrishna.com/work/merkury/images/logo.png" alt="merkery_logo" class="hidden-xs hidden-sm">
                        <img src="http://jskrishna.com/work/merkury/images/circle-logo.png" alt="merkery_logo" class="visible-xs visible-sm circle-logo">
                    </a>
                </div>
                <div class="navi">
                    <ul>
                        <li class="#"><a href="#"><i class="fa fa-home" aria-hidden="true"></i><span class="hidden-xs hidden-sm">Home</span></a></li>
                        <li><a href="#"><i class="fa fa-bar-chart" aria-hidden="true"></i><span class="hidden-xs hidden-sm">Relatï¿½rios</span></a></li>
                        <li><p class="text-muted small"><a href="#" class="" data-toggle="modal" data-target="#usuario"><i class="fa fa-calendar" aria-hidden="true"></i><span class="hidden-xs hidden-sm">Usuï¿½rio</span></a></li>
                    </ul>              
                </div>
            </div>
            <div class="col-md-10 col-sm-11 display-table-cell v-align">
                <div class="row">
                    <header>
                        <div class="col-md-7">
                            <nav class="navbar-default pull-left">
                                <div class="navbar-header">
                                    <button type="button" class="navbar-toggle collapsed" data-toggle="offcanvas" data-target="#side-menu" aria-expanded="false">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                </div>
                            </nav>
                                <input type="text" placeholder="Search" id="search">
                            </div>
                        <div class="col-md-5">
                            <div class="header-rightside">
                                <ul class="list-inline header-top pull-right" style="padding: 3% 5%">
                                <li class="dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="glyphicon glyphicon-cog" aria-hidden="true"></i>   
                                        <ul class="dropdown-menu">
                                            <li>
                                                <div class="navbar-content">
                                                    <p class="text-muted small"><a href="#" class="" data-toggle="modal" data-target="#comodo">Cï¿½modo</a></p>
                                                    <p class="text-muted small"><a href="#" class="" data-toggle="modal" data-target="#lampada">Lï¿½mpada</a></p>
                                                    <p class="text-muted small"><a href="#" class="" data-toggle="modal" data-target="#temperatura">Temperatura</a></p>
                                                    <p class="text-muted small"><a href="#" class="" data-toggle="modal" data-target="#camera">Cï¿½mera</a></p>
                                                    <p class="text-muted small"><a href="#" class="" data-toggle="modal" data-target="#portao">Portï¿½o</a></p>
                                                    <div class="divider">
                                                    </div>
                                                        <br>
                                                    <p class="text-muted small"><a href="#" class="add-project" data-toggle="modal" data-target="#add_project">
                                                    </a></p>   
                                                </div>
                                            </li>
                                        </ul>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </header>
                </div>


    <script src="bootstrap/js/jquery-2.2.0.min.js" type="text/javascript"></script>
    <script src="bootstrap/js/bootstrap.min.js" type="text/javascript"></script>

</body>	