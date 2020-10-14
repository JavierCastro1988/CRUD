create database almacen;

use almacen;

CREATE TABLE `datospaises`.`articulos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `precio` VARCHAR(9) NOT NULL,
  `topeMinimo` VARCHAR(9) NOT NULL,
  `topeMaximo` VARCHAR(9) NOT NULL,
  `cantidad` VARCHAR(9) NOT NULL,
  PRIMARY KEY (`id`));