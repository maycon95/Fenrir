			<nav class="navbar navbar-inverse navbar-fixed-top">
				<div class="navbar-header">
					<a href="../home/home.jsp" target="_self" class="navbar-brand">Fenrir Automações</a>
					<button type="button" data-target=".navbar-collapse" data-toggle="collapse" class="navbar-toggle">Menu</button>
				</div>
				<div class="collapse navbar-collapse">
					<ul class="navbar-nav nav">
						<li class="dropdown">
							<a href="../admin/admin.jsp" target="_self" class="dropdown-toggle" data-toggle="dropdown">
								Administração
							</a>
						</li>
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">
								Quartos
								<span class="caret"></span>
							</a>
							<ul class="dropdown-menu multi-level">
							  <li class="dropdown-submenu">
								<a tabindex="-1" href="#">Casal</a>
								<ul class="dropdown-menu multi-level">
								  <li><a href="#">Iluminação</a></li>
								  <li><a href="#">Ar-Condicionado</a></li>
								  </ul>
							  </li>
							  <li class="dropdown-submenu">
								<a tabindex="-1" href="#">Filhos</a>
								<ul class="dropdown-menu multi-level">
								  <li><a href="#">Iluminação</a></li>
								  <li><a href="#">Ar-Condicionado</a></li>
								  </ul>
							  </li>
							  <li class="dropdown-submenu">
								<a tabindex="-1" href="#">Empregada</a>
								<ul class="dropdown-menu multi-level">
								  <li><a href="#">Iluminação</a></li>
								  <li><a href="#">Ar-Condicionado</a></li>
								  </ul>
							  </li>
							</ul>
						</li>
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">
								Salas
								<span class="caret"></span>
							</a>
							<ul class="dropdown-menu multi-level">
							  <li class="dropdown-submenu">
								<a tabindex="-1" href="#">Sala Casual</a>
								<ul class="dropdown-menu multi-level">
								  <li><a href="#">Iluminação</a></li>
								  <li><a href="#">Sensor de Presença</a></li>
								  </ul>
							  </li>
							  <li class="dropdown-submenu">
								<a tabindex="-1" href="#">Sala de Jantar</a>
								<ul class="dropdown-menu multi-level">
								  <li><a href="#">Iluminação</a></li>
								  <li><a href="#">Sensor de Presença</a></li>
								  </ul>
							  </li>
							</ul>
						</li>
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">
								Garagem
								<span class="caret"></span>
							</a>
							<ul class="dropdown-menu">
								<li><a href="#">Iluminação</a></li>
								<li><a href="#">Sensor de Presença</a></li>
							</ul>
						</li>
					</ul>


					<div class="navbar-form navbar-right">
						<div class="form-group">
							<label class="form-control" >${usuarioLogado}</label>
							 
						</div>
						<input type="button" value="Sair" class="btn btn-default" onclick='logout();'/>
					</div>
				</div>
			</nav>