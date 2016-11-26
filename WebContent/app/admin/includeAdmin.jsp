			<link href="../../component/WebUteis/classCaio.css"  rel='stylesheet' />  
			<link href="../../component/WebUteis/class.css"  rel='stylesheet' />  
			<script src="../../app/admin/admin.js"></script> <!-- IMPORTA O JS DESSA TELA  -->
			



			<!-- TABELA COMODO -->
			<div id="tabela_comodo" class="col-sm-6 col-sm-offset-3 hide">
				<div class="panel panel-default">
					<div class="panel-heading h40">
						<h2 class="panel-title" style="float: left">Cômodos</h2>
						
						<button type="button" class="btn btn-default" style="float: right;" onclick="fecha_admin('comodo');"></button>
					</div>
					<div id="ab" class="panel-body">
						<div>
							<input type="search" name="" id="cd_busca">
							<button type="button" class="btn btn-default" onclick="montaQuery_comodo();"></button>
							<button type="button" class="btn btn-default" onclick="insere_comodo();"></button>
							<button type="button" class="btn btn-default" onclick="exclui_comodo();"></button>
							<button type="button" class="btn btn-default" onclick="grava_comodo();"></button>
							<button type="button" class="btn btn-default" onclick="cancela_comodo();"></button>
						</div>
						<br>
						<div class="panel panel-default panel-table">
							<table  id="" class="table table-hover" border="0">					
								<thead>
									<tr class="title">
										<td id="" class="w60">#</td>
										<td id="" class="w70">ID</td>
										<td id="" class="w200">Tipo</td>
										<td id="" class="w280">Cômodo</td>
									</tr>
								</thead>
								<tbody class="h110" id="dados_comodo" >
								
								</tbody>
							</table>
						</div>
						
						<div class='footer'>
							<div width="120px" class='registros w120'>
								<label>Posicao:</label> 
								<input width="40px" type='text' class='w40' id='position_comodo' value="null" readonly />
							</div>
							<div width="120px" class='registros w120'>
								<label>Registros:</label>
								<input width="40px" type="text" class='w40' id="record_comodo" value="0" readonly />				
							</div>
						</div>
						
					</div>
				</div>
			</div>




















			<!-- TABELA LAMPADA -->
			<div id="tabela_lampada" class="col-sm-6 col-sm-offset-3 hide">
				<div class="panel panel-default w810">
					<div class="panel-heading h40">
						<h2 class="panel-title" style="float: left">Lâmpada</h2>
						
						<button type="button" class="btn btn-default" style="float: right;" onclick="fecha_admin('lampada');"></button>
					</div>
					<div id="ab" class="panel-body">
						<div>
							<input type="search" name="" id="lp_busca">
							<button type="button" class="btn btn-default" onclick="montaQuery_lampada();"></button>
							<button type="button" class="btn btn-default" onclick="insere_lampada();"></button>
							<button type="button" class="btn btn-default" onclick="exclui_lampada();"></button>
							<button type="button" class="btn btn-default" onclick="grava_lampada();"></button>
							<button type="button" class="btn btn-default" onclick="cancela_lampada();"></button>
						</div>
						<br>
						<div class="panel panel-default panel-table">
							<table  id="" class="table table-hover" border="0">					
								<thead>
									<tr class="title">
										<td id="" class="w60">#</td>
										<td id="" class="w70">ID</td>
										<td id="" class="w190">Lâmpada</td>
										<td id="" class="w70">Tensão</td>
										<td id="" class="w80">Consumo</td>
										<td id="" class="w70">Porta</td>
										<td id="" class="w110">Porta Dimmer</td>
										<td id="" class="w120">Cômodo</td>
									</tr>
								</thead>
								<tbody class="h110" id="dados_lampada" >
								
								</tbody>
							</table>
						</div>
						
						<div class='footer'>
							<div width="120px" class='registros w120'>
								<label>Posicao:</label> 
								<input width="40px" type='text' class='w40' id='position_lampada' value="null" readonly />
							</div>
							<div width="120px" class='registros w120'>
								<label>Registros:</label>
								<input width="40px" type="text" class='w40' id="record_lampada" value="0" readonly />				
							</div>
						</div>
						
					</div>
				</div>
			</div>























			<!-- TABELA TEMPERATURA -->
			<div id="tabela_temperatura" class="col-sm-6 col-sm-offset-3 hide">
				<div class="panel panel-default w770">
					<div class="panel-heading h40">
						<h2 class="panel-title" style="float: left">Sensor de Temperatura</h2>
						
						<button type="button" class="btn btn-default" style="float: right;" onclick="fecha_admin('temperatura');"></button>
					</div>
					<div id="ab" class="panel-body">
						<div>
							<input type="search" name="" id="tp_busca">
							<button type="button" class="btn btn-default" onclick="montaQuery_temperatura();"></button>
							<button type="button" class="btn btn-default" onclick="insere_temperatura();"></button>
							<button type="button" class="btn btn-default" onclick="exclui_temperatura();"></button>
							<button type="button" class="btn btn-default" onclick="grava_temperatura();"></button>
							<button type="button" class="btn btn-default" onclick="cancela_temperatura();"></button>
						</div>
						<br>
						<div class="panel panel-default panel-table">
							<table  id="" class="table table-hover" border="0">					
								<thead>
									<tr class="title">
										<td id="" class="w60">#</td>
										<td id="" class="w70">ID</td>
										<td id="" class="w190">Sensor</td>
										<td id="" class="w70">MAX</td>
										<td id="" class="w80">MIN</td>
										<td id="" class="w70">Porta</td>
										<td id="" class="w120">Comodo</td>
										<td id="" class="w70">Status</td>
									</tr>
								</thead>
								<tbody class="h110" id="dados_temperatura" >
								
								</tbody>
							</table>
						</div>
						
						<div class='footer'>
							<div width="120px" class='registros w120'>
								<label>Posicao:</label> 
								<input width="40px" type='text' class='w40' id='position_temperatura' value="null" readonly />
							</div>
							<div width="120px" class='registros w120'>
								<label>Registros:</label>
								<input width="40px" type="text" class='w40' id="record_temperatura" value="0" readonly />				
							</div>
						</div>
						
					</div>
				</div>
			</div>

			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			<!-- TABELA CAMERA -->
			<div id="tabela_camera" class="col-sm-6 col-sm-offset-3 hide">
				<div class="panel panel-default w980">
					<div class="panel-heading h40">
						<h2 class="panel-title" style="float: left">Camera</h2>
						
						<button type="button" class="btn btn-default" style="float: right;" onclick="fecha_admin('camera');"></button>
					</div>
					<div id="ab" class="panel-body">
						<div>
							<input type="search" name="" id="cm_busca">
							<button type="button" class="btn btn-default" onclick="montaQuery_camera();"></button>
							<button type="button" class="btn btn-default" onclick="insere_camera();"></button>
							<button type="button" class="btn btn-default" onclick="exclui_camera();"></button>
							<button type="button" class="btn btn-default" onclick="grava_camera();"></button>
							<button type="button" class="btn btn-default" onclick="cancela_camera();"></button>
						</div>
						<br>
						<div class="panel panel-default panel-table">
							<table  id="" class="table table-hover" border="0">					
								<thead>
									<tr class="title">
										<td id="" class="w60">#</td>
										<td id="" class="w70">ID</td>
										<td id="" class="w190">Camera</td>
										<td id="" class="w180">Endereço IP</td>
										<td id="" class="w80">Porta</td>
										<td id="" class="w120">Usuario</td>
										<td id="" class="w120">Senha</td>
										<td id="" class="w120">Comodo</td>
									</tr>
								</thead>
								<tbody class="h110" id="dados_camera" >
								
								</tbody>
							</table>
						</div>
						
						<div class='footer'>
							<div width="120px" class='registros w120'>
								<label>Posicao:</label> 
								<input width="40px" type='text' class='w40' id='position_camera' value="null" readonly />
							</div>
							<div width="120px" class='registros w120'>
								<label>Registros:</label>
								<input width="40px" type="text" class='w40' id="record_camera" value="0" readonly />				
							</div>
						</div>
						
					</div>
				</div>
			</div>
			
			
			
			
			
			
			
			
			
			
			
			
			
			<!-- TABELA PORTAO -->
			<div id="tabela_portao" class="col-sm-6 col-sm-offset-3 hide">
				<div class="panel panel-default w560">
					<div class="panel-heading h40">
						<h2 class="panel-title" style="float: left">Portão</h2>
						
						<button type="button" class="btn btn-default" style="float: right;" onclick="fecha_admin('portao');"></button>
					</div>
					<div id="ab" class="panel-body">
						<div>
							<input type="search" name="" id="pt_busca">
							<button type="button" class="btn btn-default" onclick="montaQuery_portao();"></button>
							<button type="button" class="btn btn-default" onclick="insere_portao();"></button>
							<button type="button" class="btn btn-default" onclick="exclui_portao();"></button>
							<button type="button" class="btn btn-default" onclick="grava_portao();"></button>
							<button type="button" class="btn btn-default" onclick="cancela_portao();"></button>
						</div>
						<br>
						<div class="panel panel-default panel-table">
							<table  id="" class="table table-hover" border="0">					
								<thead>
									<tr class="title">
										<td id="" class="w60">#</td>
										<td id="" class="w70">ID</td>
										<td id="" class="w190">Portão</td>
										<td id="" class="w80">Porta</td>
										<td id="" class="w120">Comodo</td>
									</tr>
								</thead>
								<tbody class="h110" id="dados_portao" >
								
								</tbody>
							</table>
						</div>
						
						<div class='footer'>
							<div width="120px" class='registros w120'>
								<label>Posicao:</label> 
								<input width="40px" type='text' class='w40' id='position_portao' value="null" readonly />
							</div>
							<div width="120px" class='registros w120'>
								<label>Registros:</label>
								<input width="40px" type="text" class='w40' id="record_portao" value="0" readonly />				
							</div>
						</div>
						
					</div>
				</div>
			</div>
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			<!-- TABELA USUARIOS E ACESSO -->
			<div id="tabela_usuario" class="hide">	
				<div class="col-sm-6 col-sm-offset-3">
					<div class="panel panel-default w360">
						<div class="panel-heading h40">
							<h2 class="panel-title" style="float: left">Usuário</h2>
							
							<button type="button" class="btn btn-default" style="float: right;" onclick="fecha_admin('usuario');"></button>
						</div>
						<div id="ab" class="panel-body">
							<div>
								<input type="search" name="" id="us_busca">
								<button type="button" class="btn btn-default" onclick="montaQuery_usuario();"></button>
								<button type="button" class="btn btn-default" onclick="insere_usuario();"></button>
								<button type="button" class="btn btn-default" onclick="exclui_usuario();"></button>
								<button type="button" class="btn btn-default" onclick="grava_usuario();"></button>
								<button type="button" class="btn btn-default" onclick="cancela_usuario();"></button>
							</div>
							<br>
							<div class="panel panel-default panel-table">
								<table  id="" class="table table-hover" border="0">					
									<thead>
										<tr class="title">
											<td id="" class="w60">#</td>
											<td id="" class="w260">Usuário</td>
										</tr>
									</thead>
									<tbody class="h110" id="dados_usuario" >
									
									</tbody>
								</table>
							</div>
							
							<div class='footer'>
								<div width="120px" class='registros w120'>
									<label>Posicao:</label> 
									<input width="40px" type='text' class='w40' id='position_user' value="null" readonly />
								</div>
								<div width="120px" class='registros w120'>
									<label>Registros:</label>
									<input width="40px" type="text" class='w40' id="record_user" value="0" readonly />				
								</div>
							</div>
							
						</div>
					</div>
				</div>
				
				
				<!-- ACESSO -->
				<div class="col-sm-6 col-sm-offset-3">
					<div class="panel panel-default w360">
						<div class="panel-heading h40">
							<h2 class="panel-title" style="float: left">Acesso</h2>
						</div>
						<div id="ab" class="panel-body">
							<div>
								<input type="search" name="" id="us_busca">
								<button type="button" class="btn btn-default" onclick="montaQuery_acesso();"></button>
								<button type="button" class="btn btn-default" onclick="grava_acesso();"></button>
								<button type="button" class="btn btn-default" onclick="cancela_acesso();"></button>
							</div>
							<br>
							<div class="panel panel-default panel-table">
								<table  id="" class="table table-hover" border="0">					
									<thead>
										<tr class="title">
											<td id="" class="w60">#</td>
											<td id="" class="w180">Cômodo</td>
											<td id="" class="w80">Acesso</td>
										</tr>
									</thead>
									<tbody class="h110" id="dados_acesso" >
									
									</tbody>
								</table>
							</div>
							
							<div class='footer'>
								<div width="120px" class='registros w120'>
									<label>Posicao:</label> 
									<input width="40px" type='text' class='w40' id='position_acesso' value="null" readonly />
								</div>
								<div width="120px" class='registros w120'>
									<label>Registros:</label>
									<input width="40px" type="text" class='w40' id="record_acesso" value="0" readonly />				
								</div>
							</div>
							
						</div>
					</div>
				</div>
				
			</div>
			