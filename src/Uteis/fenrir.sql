create schema fenrir;
use fenrir;

CREATE TABLE IF NOT EXISTS `usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `usuario` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`, `usuario`, `senha`))
ENGINE = InnoDB;


INSERT INTO `fenrir`.`usuario` (`usuario`, `senha`) VALUES ('maycon', '123');
