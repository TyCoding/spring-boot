-- CREATE DATABASE springboot DEFAULT CHARACTER SET utf8;

DROP TABLE IF EXISTS tb_user;
DROP TABLE IF EXISTS tb_goods;

-- 用户表
CREATE TABLE tb_user(
  id BIGINT AUTO_INCREMENT COMMENT '编号',
  username VARCHAR(100) COMMENT '用户名',
  password VARCHAR(100) COMMENT '密码',
  CONSTRAINT pk_sys_user PRIMARY KEY(id)
) CHARSET=utf8 ENGINE=InnoDB;

INSERT INTO tb_user VALUES(1, 'tycoding', '123');
INSERT INTO tb_user VALUES(2, '涂陌', '123');

-- 商品表
CREATE TABLE tb_goods(
  id BIGINT AUTO_INCREMENT COMMENT '编号',
  title VARCHAR(1000) COMMENT '商品标题',
  price VARCHAR(100) COMMENT '商品价格',
  image VARCHAR(1000) COMMENT '商品图片',
  brand VARCHAR(100) COMMENT '商品品牌',
  CONSTRAINT pk_sys_user PRIMARY KEY(id)
) CHARSET=utf8 ENGINE=InnoDB;
