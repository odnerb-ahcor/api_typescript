CREATE DATABASE IF NOT EXISTS `task_app` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `task_app`;

CREATE TABLE IF NOT EXISTS user (
  idUser int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID usuario',
  username varchar(100) NOT NULL COMMENT 'Nome de usuario',
  password varchar(60) NOT NULL COMMENT 'Senha do usuario',
  PRIMARY KEY (idUser)
);

CREATE TABLE IF NOT EXISTS task (
  idTask int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID Task',
  title varchar(100) NOT NULL COMMENT 'Titulo da task',
  text longtext NOT NULL COMMENT 'Texto da task',
  status int(1) DEFAULT 0 COMMENT '0 = Aberto, 1 = Cancelado, 2 = Concluido',
  dataInicio datetime NOT NULL COMMENT 'Data de criacao da task',
  dataFim datetime COMMENT 'Data de finalizacao da task',
  idUser int(11) COMMENT 'Id usuario que criou a task',
  PRIMARY KEY (idTask),
  FOREIGN KEY (idUser) REFERENCES user(idUser)
);