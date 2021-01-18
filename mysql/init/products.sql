CREATE TABLE `products` (
  `id` int(9) unsigned NOT NULL AUTO_INCREMENT,
  `sku` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

INSERT INTO `products` (`id`, `sku`, `name`, `description`) VALUES (1, '000000001', 'Test product 1', 'Test product 1 description');
INSERT INTO `products` (`id`, `sku`, `name`, `description`) VALUES (2, '000000002', 'Test product 2', 'Test product 2 description');
INSERT INTO `products` (`id`, `sku`, `name`, `description`) VALUES (3, '000000003', 'Test product 3', 'Test product 3 description');
