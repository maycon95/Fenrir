drop database fenrir;

create schema fenrir;
use fenrir;

-- USUARIO
CREATE TABLE IF NOT EXISTS `TB_USUARIO` (
  `US_NOME` VARCHAR(20) NOT NULL,
  `US_SENHA` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`US_NOME`))
ENGINE = InnoDB;

-- COMODO
CREATE TABLE IF NOT EXISTS `TB_COMODO` (
  `CD_ID` INT NOT NULL AUTO_INCREMENT,
  `CD_NOME` VARCHAR(20) UNIQUE NOT NULL,
  `CD_PLANTA` BLOB NULL,
  PRIMARY KEY (`CD_ID`))
ENGINE = InnoDB;

-- ACESSO
CREATE TABLE IF NOT EXISTS `TB_ACESSO` (
  `US_NOME` VARCHAR(20) NOT NULL,
  `CD_ID` INT NOT NULL,
  `AC_LIBERA` CHAR NOT NULL DEFAULT 'B',
  PRIMARY KEY (`US_NOME`, `CD_ID`),
  INDEX `fk_USUARIO_has_TB_COMODO_TB_COMODO1_idx` (`CD_ID` ASC),
  INDEX `fk_USUARIO_has_TB_COMODO_USUARIO_idx` (`US_NOME` ASC),
  CONSTRAINT `fk_USUARIO_has_TB_COMODO_USUARIO`
    FOREIGN KEY (`US_NOME`)
    REFERENCES `TB_USUARIO` (`US_NOME`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_USUARIO_has_TB_COMODO_TB_COMODO1`
    FOREIGN KEY (`CD_ID`)
    REFERENCES `TB_COMODO` (`CD_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- PORTAO
CREATE TABLE IF NOT EXISTS `TB_PORTAO` (
  `PT_ID` INT NOT NULL AUTO_INCREMENT,
  `PT_NOME` VARCHAR(20) UNIQUE NOT NULL,
  `PT_STATUS` CHAR NOT NULL DEFAULT 'D',
  `CD_ID` INT NOT NULL,
  PRIMARY KEY (`PT_ID`, `CD_ID`),
  INDEX `fk_TB_PORTAO_TB_COMODO1_idx` (`CD_ID` ASC),
  CONSTRAINT `fk_TB_PORTAO_TB_COMODO1`
    FOREIGN KEY (`CD_ID`)
    REFERENCES `TB_COMODO` (`CD_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- CAMERA
CREATE TABLE IF NOT EXISTS `TB_CAMERA` (
  `CM_ID` INT NOT NULL AUTO_INCREMENT,
  `CM_NOME` VARCHAR(20) UNIQUE NOT NULL,
  `CM_IP` VARCHAR(15) NULL,
  `CD_ID` INT NOT NULL,
  PRIMARY KEY (`CM_ID`, `CD_ID`),
  INDEX `fk_TB_CAMERA_TB_COMODO1_idx` (`CD_ID` ASC),
  CONSTRAINT `fk_TB_CAMERA_TB_COMODO1`
    FOREIGN KEY (`CD_ID`)
    REFERENCES `TB_COMODO` (`CD_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- SENSOR TEMPERATURA
CREATE TABLE IF NOT EXISTS `TB_TEMPERATURA` (
  `TP_ID` INT NOT NULL AUTO_INCREMENT,
  `TP_NOME` VARCHAR(20) UNIQUE NOT NULL,
  `TP_STATUS` CHAR NOT NULL DEFAULT 'D',
  `TP_TEMP` DOUBLE NULL,
  `TP_TEMPMAX` DOUBLE NULL,
  `TP_TEMPMIN` DOUBLE NULL,
  `CD_ID` INT NOT NULL,
  PRIMARY KEY (`TP_ID`, `CD_ID`),
  INDEX `fk_TB_TEMPERATURA_TB_COMODO1_idx` (`CD_ID` ASC),
  CONSTRAINT `fk_TB_TEMPERATURA_TB_COMODO1`
    FOREIGN KEY (`CD_ID`)
    REFERENCES `TB_COMODO` (`CD_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- LAMPADA
CREATE TABLE IF NOT EXISTS `TB_LAMPADA` (
  `LP_ID` INT NOT NULL AUTO_INCREMENT,
  `LP_NOME` VARCHAR(20) UNIQUE NOT NULL,
  `LP_STATUS` CHAR NOT NULL DEFAULT 'D',
  `LP_TENSAO` INT NOT NULL,
  `LP_CONSUMO` DOUBLE NOT NULL,
  `LP_CONSTOTAL` DOUBLE NULL,
  `LP_DIMMER` INT NULL,
  `CD_ID` INT NOT NULL,
  PRIMARY KEY (`LP_ID`, `CD_ID`),
  INDEX `fk_TB_LAMPADA_TB_COMODO1_idx` (`CD_ID` ASC),
  CONSTRAINT `fk_TB_LAMPADA_TB_COMODO1`
    FOREIGN KEY (`CD_ID`)
    REFERENCES `TB_COMODO` (`CD_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;














-- INSERT'S 
-- USUARIO
INSERT INTO `fenrir`.`tb_usuario` (`us_nome`, `us_senha`) VALUES ('maycon', '202cb962ac59075b964b07152d234b70'); -- senha 123
INSERT INTO `fenrir`.`tb_usuario` (`us_nome`, `us_senha`) VALUES ('caio', '202cb962ac59075b964b07152d234b70'); -- senha 123


-- COMODO
INSERT INTO tb_comodo(cd_nome) VALUES('teste');


-- LAMPADA
INSERT INTO tb_lampada(lp_nome,lp_tensao, lp_consumo, lp_constotal, lp_dimmer, cd_id) 
				VALUES('teste_lp2', 120, 30, 0, 0, 1);


-- TEMPERATURA
INSERT INTO tb_temperatura(tp_nome, tp_status, tp_temp, tp_tempmax, tp_tempmin, cd_id) 
					VALUES('TP1', 'D', 0.0, 20.0, 5.0, 1);



-- CAMERA
INSERT INTO tb_camera(cm_nome, cm_ip, cd_id) values('teste cm', '192.168.0.1', 1);



-- PORTAO
INSERT INTO tb_portao(pt_nome, cd_id) values('teste pt', 1);



-- ACESSO
INSERT INTO tb_acesso(us_nome,cd_id,ac_libera) values('CAIO',2,'A');







-- SELECT'S
select * from tb_usuario;
select * from tb_comodo;
select * from tb_lampada;
select * from tb_temperaturax;
select * from tb_camera;
select * from tb_portao;
select * from tb_acesso;

-- BUSCA TODOS OS ACESSOS DE UM USUARIO
SELECT c.cd_id, c.cd_nome,
	ifnull((SELECT ac_libera FROM tb_acesso WHERE cd_id = c.cd_id AND us_nome = 'CAIO'), 'B') AS ac_libera
	FROM tb_comodo c;


-- BUSCA O ACESSO DE UM COMODO DE UM USUARIO
SELECT c.cd_id, c.cd_nome,
	ifnull((SELECT ac_libera FROM tb_acesso WHERE cd_id = c.cd_id AND us_nome = 'MAYCON'), 'B') AS ac_libera
	FROM tb_comodo c where cd_id = 1;







-- DROP'S 
drop table tb_lampada;


drop table tb_comodo;