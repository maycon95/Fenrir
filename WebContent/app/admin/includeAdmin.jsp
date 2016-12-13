		<script src="../../app/admin/admin.js"></script> <!-- IMPORTA O JS DESSA TELA  -->
			

	    <!-- Cômodo -->
	    <div id="comodo" class="modal fade" role="dialog">
	        <div class="modal-dialog">

	            <!-- Modal content-->
	            <div class="modal-content">
	                <div class="modal-header login-header">
	                    <button type="button" class="close" data-dismiss="modal">×</button>
	                    <h4 class="modal-title">Cômodo</h4>
	                </div>
	                <div class="modal-body">
                        <input  type="search uppercase" placeholder="Search" name="name" id="cd_busca" autofocus>
                        
                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='montaQuery_comodo();'>
                            <span class="glyphicon glyphicon-search" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
                        </button>
                        
                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='insere_comodo();'>
                            <span class="glyphicon glyphicon-plus" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
                        </button>
                        
                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='exclui_comodo();'>
                            <span class="glyphicon glyphicon-minus" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
                        </button>

                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='grava_comodo();'>
                            <span class="glyphicon glyphicon-ok" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
                        </button>

                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='cancela_comodo();'>
                            <span class="glyphicon glyphicon-remove" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
                        </button>


                        <div class="table-responsive">
                            <table class="table table-hover" style="width: 568px">
                                <thead>    
                                    <tr>
                       					<td style='text-align:center; width: 30px'>#</td>
                                        <td style='text-align:center; width: 70px'>ID</td>
                                        <td style='text-align:center; width: 200px'>Cômodo</td>
                                        <td style='text-align:center; width: 260px'>Tipo</td>
                                    </tr>
                                </thead>
                                <tbody id="dados_comodo">

                                </tbody>
                            </table>
                        </div>

                		<div class='hide'>
							<input width="40px" type='text' class='w40' id='position_comodo' value="null" readonly />
							<input width="40px" type="text" class='w40' id="record_comodo" value="0" readonly />				
						</div>


                    </div>
<!--	                    <div class="modal-footer">
	                        <button type="button" class="cancel" data-dismiss="modal" onclick="cancela_comodo();">Close</button>
	                        <button type="button" class="add-project" data-dismiss="modal" onclick="grava_comodo();">Save</button>
	                    </div>
-->	            </div> <!-- Término do Add Project -->
	        </div>
	    </div>

	        <!-- Lâmpada -->
	    <div id="lampada" class="modal fade" role="dialog">
	        <div class="modal-dialog">

	            <!-- Modal content-->
	            <div class="modal-content">
	                <div class="modal-header login-header">
	                    <button type="button" class="close" data-dismiss="modal">×</button>
	                    <h4 class="modal-title">Lâmpada</h4>
	                </div>
	                <div class="modal-body">
	                        <input  type="search uppercase" placeholder="Search" name="name" id="us_busca" autofocus>
	                        
	                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='montaQuery_lampada();'>
	                            <span class="glyphicon glyphicon-search" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
	                        </button>
	                        
	                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='insere_lampada();'>
	                            <span class="glyphicon glyphicon-plus" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
	                        </button>
	                        
	                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='exclui_lampada();'>
	                            <span class="glyphicon glyphicon-minus" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
	                        </button>

	                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;">
	                            <span class="glyphicon glyphicon-ok" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
	                        </button>

	                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;">
	                            <span class="glyphicon glyphicon-remove" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
	                        </button>


                        <div class="table-responsive">
            	            <table class="table table-hover">
                                <thead>    
                                    <tr>
                                        <td align="center">#</td>
                                        <td align="center">ID</td>
                                        <td align="center">Lâmpada</td>
                                        <td align="center">Tensão</td>
                                        <td align="center">Consumo</td>
                                        <td align="center">Comodo</td>
                                        <td align="center" style="border-right: 1px solid #ddd">Porta - Lâmpada</td>
                                        <td align="center">Dimmer</td>
                                        <td align="center">Porta - Dimmer</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td align="center">+</td>
                                        <td align="center">1</td>
                                        <td align="center">Teste</td>
                                        <td align="center">110v</td>
                                        <td align="center">60w</td>
                                        <td align="center">
                                            <select>
                                                <option>Sala</option>
                                            </select>
                                        </td>
                                        <td style="border-right: 1px solid #ddd">3</td>
                                        <td align="center" align="center"><input type="checkbox"></td>
                                        <td align="center">4</td>
                                    </tr>
                                </tbody>
                            </table>
    	                </div>
                    </div>
<!--	                    <div class="modal-footer">
	                        <button type="button" class="cancel" data-dismiss="modal" onclick="cancela_lampada();">Close</button>
	                        <button type="button" class="add-project" data-dismiss="modal" onclick="grava_lampada();">Save</button>
	                    </div>
	                </div>
-->	            </div> <!-- Término do Add Project -->
	        </div>
	    </div>

	        <!-- Temperatura -->
	    <div id="temperatura" class="modal fade" role="dialog">
	        <div class="modal-dialog">

	            <!-- Modal content-->
	            <div class="modal-content">
	                <div class="modal-header login-header">
	                    <button type="button" class="close" data-dismiss="modal">×</button>
	                    <h4 class="modal-title">Temperatura</h4>
	                </div>
	                <div class="modal-body">
                        <input  type="search uppercase" placeholder="Search" name="name" id="tp_busca" autofocus>
                        
                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='montaQuery_temperatura();'>
                            <span class="glyphicon glyphicon-search" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
                        </button>
                        
                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='insere_temperatura();'>
                            <span class="glyphicon glyphicon-plus" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
                        </button>
                        
                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='exclui_temperatura();'>
                            <span class="glyphicon glyphicon-minus" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
                        </button>

                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='grava_temperatura();'>
                            <span class="glyphicon glyphicon-ok" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
                        </button>

                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='cancela_temperatura();'>
                            <span class="glyphicon glyphicon-remove" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
                        </button>

						<div class="table-responsive">
                            <table class="table table-hover" style="width: 568px;">
                                <thead>    
                                    <tr>
                                        <td style='text-align:center; width: 30px'>#</td>
                                        <td style='text-align:center; width: 70px'>ID</td>
                                        <td style='text-align:center; width: 100px'>Sensor</td>
                                        <td style='text-align:center; width: 60px'>MAX</td>
                                        <td style='text-align:center; width: 60px'>MIN</td>
                                        <td style='text-align:center; width: 60px'>Porta</td>
                                        <td style='text-align:center; width: 120px'>Cômodo</td>
                                        <td style='text-align:center; width: 50px'>Status</td>
                                    </tr>
                                </thead>
                                <tbody id="dados_temperatura">
                                    
                                </tbody>
                            </table>
                        </div>
						<div class='hide'>
							<input width="40px" type='text' class='w40' id='position_temperatura' value="null" readonly />
							<input width="40px" type="text" class='w40' id="record_temperatura" value="0" readonly />				
						</div>


                    </div>
<!--	                    <div class="modal-footer">
	                        <button type="button" class="cancel" data-dismiss="modal" onclick="cancela_temperatura();">Close</button>
	                        <button type="button" class="add-project" data-dismiss="modal" onclick="grava_temperatura();">Save</button>
	                    </div>
	                </div>
-->	            </div> <!-- Término do Add Project -->
	        </div>
	    </div>

	        <!-- Câmera -->
	    <div id="camera" class="modal fade" role="dialog">
	        <div class="modal-dialog">

	            <!-- Modal content-->
	            <div class="modal-content">
	                <div class="modal-header login-header">
	                    <button type="button" class="close" data-dismiss="modal">×</button>
	                    <h4 class="modal-title">Câmera</h4>
	                </div>
	                <div class="modal-body">
                        <input  type="search uppercase" placeholder="Search" name="name" id="cm_busca" autofocus>
                        
                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='montaQuery_camera();'>
                            <span class="glyphicon glyphicon-search" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
                        </button>
                        
                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='insere_camera();'>
                            <span class="glyphicon glyphicon-plus" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
                        </button>
                        
                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='exclui_camera();'>
                            <span class="glyphicon glyphicon-minus" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
                        </button>

                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='grava_camera();'>
                            <span class="glyphicon glyphicon-ok" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
                        </button>

                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='cancela_camera();'>
                            <span class="glyphicon glyphicon-remove" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
                        </button>

						<div class="table-responsive">
                            <table class="table table-hover" style="width: 568px;">
                                <thead>    
                                    <tr>
                                        <td style='text-align:center; width: 30px'>#</td>
                                        <td style='text-align:center; width: 70px'>ID</td>
                                        <td style='text-align:center; width: 120px'>Câmera</td>
                                        <td style='text-align:center; width: 150px'>IP</td>
                                        <td style='text-align:center; width: 50px'>Porta</td>
                                        <td style='text-align:center; width: 120px'>Usuario</td>
                                        <td style='text-align:center; width: 120px'>Senha</td>
                                        <td style='text-align:center; width: 150px'>Cômodo</td>
                                    </tr>
                                </thead>
                                <tbody id="dados_camera">
                                    
                                </tbody>
                            </table>
                        </div>
						<div class='hide'>
							<input width="40px" type='text' class='w40' id='position_camera' value="null" readonly />
							<input width="40px" type="text" class='w40' id="record_camera" value="0" readonly />				
						</div>


                        </div>
                    </div>
<!--	                    <div class="modal-footer">
	                        <button type="button" class="cancel" data-dismiss="modal" onclick="cancela_camera();">Close</button>
	                        <button type="button" class="add-project" data-dismiss="modal" onclick="grava_camera();">Save</button>
	                    </div>
	                </div>
-->	            </div> <!-- Término do Add Project -->
	        </div>
	    </div>

	        <!-- Portão -->
	    <div id="portao" class="modal fade" role="dialog">
	        <div class="modal-dialog">

	            <!-- Modal content-->
	            <div class="modal-content">
	                <div class="modal-header login-header">
	                    <button type="button" class="close" data-dismiss="modal">×</button>
	                    <h4 class="modal-title">Portão</h4>
	                </div>
	                <div class="modal-body">

                        <input  type="search uppercase" placeholder="Search" name="name" id="pt_busca" autofocus>
                        
                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='montaQuery_portao();'>
                            <span class="glyphicon glyphicon-search" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
                        </button>
                        
                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='insere_portao();'>
                            <span class="glyphicon glyphicon-plus" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
                        </button>
                        
                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='exclui_portao();'>
                            <span class="glyphicon glyphicon-minus" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
                        </button>

                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='grava_portao();'>
                            <span class="glyphicon glyphicon-ok" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
                        </button>

                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='cancela_portao();'>
                            <span class="glyphicon glyphicon-remove" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
                        </button>

                        <div class="table-responsive">
                            <table class="table table-hover" style="width: 568px;">
                                <thead>    
                                    <tr>
                                        <td style='text-align:center; width: 30px'>#</td>
                                        <td style='text-align:center; width: 70px'>ID</td>
                                        <td style='text-align:center; width: 200px'>Portão</td>
                                        <td style='text-align:center; width: 190px'>Cômodo</td>
                                        <td style='text-align:center; width: 70px'>Porta</td>
                                    </tr>
                                </thead>
                                <tbody id="dados_portao">
                                    
                                </tbody>
                            </table>
                        </div>
						<div class='hide'>
							<input width="40px" type='text' class='w40' id='position_portao' value="null" readonly />
							<input width="40px" type="text" class='w40' id="record_portao" value="0" readonly />				
						</div>
                    </div>
<!--	                    <div class="modal-footer">
	                        <button type="button" class="cancel" data-dismiss="modal" onclick="cancela_portao();">Close</button>
	                        <button type="button" class="add-project" data-dismiss="modal" onclick="grava_portao();">Save</button>
	                    </div>
	                </div>
-->	            </div> <!-- Término do Add Project -->
	        </div>
	    </div>

	        <!-- Usuário -->
	    <div id="usuario" class="modal fade" role="dialog">
	        <div id="usuario" class="col-md-6 col-sm-offset-0">
	            <div class="modal-dialog">

	                <!-- Modal content-->
	                <div class="modal-content"> 
	                
	                    <div class="modal-header login-header">
	                        <button type="button" class="close" data-dismiss="modal">×</button>
	                            <h4 class="modal-title">Usuário</h4>
	                    </div>
	                    <div class="modal-body">
	                        <input  type="search uppercase" placeholder="Search" name="name" id="us_busca" autofocus>
	                        
	                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='montaQuery_usuario();'>
	                            <span class="glyphicon glyphicon-search" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
	                        </button>
	                        
	                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='insere_usuario();'>
	                            <span class="glyphicon glyphicon-plus" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
	                        </button>
	                        
	                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='exclui_usuario();'>
	                            <span class="glyphicon glyphicon-minus" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
	                        </button>

	                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='grava_usuario();'>
	                            <span class="glyphicon glyphicon-ok" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
	                        </button>

	                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='cancela_usuario();'>
	                            <span class="glyphicon glyphicon-remove" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
	                        </button>


	                        <div class="table-responsive">
	                            <table class="table table-hover" style="width: 568px;">
	                                <thead>    
	                                    <tr>
	                                        <td style='text-align:center; width: 30px'>#</td>
	                                        <td style='text-align:center; width: 220px'>Usuário</td>
	                                        <td style='text-align:center; width: 220px'>Senha</td>
	                                        <td style='text-align:center; width: 90px'>Nível</td>
	                                    </tr>
	                                </thead>
	                                <tbody id="dados_usuario">
	                                    
	                                </tbody>
	                            </table>
	                        </div>
    						<div class='hide'>
								<input width="40px" type='text' class='w40' id='position_user' value="null" readonly />
								<input width="40px" type="text" class='w40' id="record_user" value="0" readonly />				
							</div>


	                    </div>
<!--	                    <div class="modal-footer">
	                        <button type="button" class="cancel" data-dismiss="modal" onclick="cancela_usuario();">Close</button>
	                        <button type="button" class="add-project" data-dismiss="modal" onclick="grava_usuario();">Save</button>
	                    </div>
-->	                </div>
	            </div>
	        </div>

	        <div id="usuario" class="col-md-6 col-sm-offset-0">
	            <div class="modal-dialog" style="width: 300px;">

	     


	                <!-- Modal content-->
	                <div class="modal-content"> 
	                
	                    <div class="modal-header login-header">
	                        <button type="button" class="close" data-dismiss="modal">×</button>
	                            <h4 class="modal-title">Acesso</h4>
	                    </div>
	                    <div class="modal-body input">
	                        <!-- <input  type="search uppercase" placeholder="Search" name="name" id="us_busca" autofocus> -->
<!--	                        
	                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='montaQuery_usuario();'>
	                            <span class="glyphicon glyphicon-search" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
	                        </button>
	                        
	                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='insere_usuario();'>
	                            <span class="glyphicon glyphicon-plus" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
	                        </button>
	                        
	                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;" onclick='exclui_usuario();'>
	                            <span class="glyphicon glyphicon-minus" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
	                        </button>

	                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;">
	                            <span class="glyphicon glyphicon-ok" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
	                        </button>

	                        <button type="button" class="btn btn-default" data-dismiss="" style="border: none;">
	                            <span class="glyphicon glyphicon-remove" aria-hidden="true" style="font-size: 20px; color: #0e1a35"></span>
	                        </button>
-->

	                        <div class="table-responsive">
	                            <table class="table table-hover">
	                                <thead>    
	                                    <tr>
	                                        <td style='text-align:center; width: 190px'>Cômodo</td>
	                                        <td style='text-align:center; width: 70px'>Acesso</td>
	                                    </tr>
	                                </thead>
	                                <tbody id="dados_acesso">

	                                </tbody>
	                            </table>
	                        </div>
    						<div class='hide'>
								<input width="40px" type='text' class='w40' id='position_acesso' value="null" readonly />
								<input width="40px" type="text" class='w40' id="record_acesso" value="0" readonly />				
							</div>
	                    </div>
<!--	                    <div class="modal-footer">
	                        <button type="button" class="cancel" data-dismiss="modal" onclick="cancela_usuario();">Close</button>
	                        <button type="button" class="add-project" data-dismiss="modal" onclick="grava_usuario();">Save</button>
	                    </div>
-->	                </div>
	            </div>
	        </div>

	    </div>


<!--  	    <div class="footer text-right" style="padding-right: 2%; font-weight: bold;">
	        Copyrigth ©&nbsp&nbsp&nbsp2016 by Fenrir Autmações
	    </div>
-->
			