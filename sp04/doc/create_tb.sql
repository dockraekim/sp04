
DROP TABLE IF EXISTS `Environment`;

CREATE TABLE `Environment` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'PK',
  `pm1` varchar(20) DEFAULT NULL COMMENT '극초미세먼지',
  `pm2_5` varchar(20) DEFAULT NULL COMMENT '초미세먼지',
  `pm10` varchar(20) DEFAULT NULL COMMENT '미세먼지',
  `o3` varchar(20) DEFAULT NULL COMMENT '오존',
  `no2` varchar(20) DEFAULT NULL COMMENT '이산화질소',
  `co` varchar(20) DEFAULT NULL COMMENT '일산화탄소',
  `co2` varchar(20) DEFAULT NULL COMMENT '이산화탄소',
  `so2` varchar(45) DEFAULT NULL COMMENT '아황산가스',
  `hcho` varchar(20) DEFAULT NULL COMMENT '폼알데히드',
  `tvoc` varchar(20) DEFAULT NULL COMMENT '휘발성유기화합물',
  `tc` varchar(20) DEFAULT NULL COMMENT '온도',
  `h` varchar(20) DEFAULT NULL COMMENT '습도',
  `env_type` varchar(45) DEFAULT NULL COMMENT '측정센서타입 : AIRKOREA, SKP',
  `use_flag` int(11) DEFAULT '0' COMMENT '사용여부 0:사용, 1:사용안함',
  `sId` int(11) DEFAULT NULL COMMENT 'sId',
  `data_time` datetime DEFAULT NULL COMMENT '발표일자',
  `time` varchar(45) DEFAULT NULL COMMENT '발표일자 초단위',
  `reg_date` datetime DEFAULT NULL COMMENT '등록일자',
  PRIMARY KEY (`id`),
  KEY `Environment_Index_1` (`data_time`),
  KEY `Environment_Index_2` (`reg_date`),
  KEY `Environment_Index_3` (`sId`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='센서 데이터';