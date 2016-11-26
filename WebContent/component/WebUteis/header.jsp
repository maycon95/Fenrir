		<header>
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
		        </div><!-- /.nav-collapse -->
		      </div>
			</nav>
		</header>