/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80030
 Source Host           : localhost:3306
 Source Schema         : practica

 Target Server Type    : MySQL
 Target Server Version : 80030
 File Encoding         : 65001

 Date: 12/09/2023 17:40:11
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for practica
-- ----------------------------
DROP TABLE IF EXISTS `practica`;
CREATE TABLE `practica`  (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Precio` int NOT NULL,
  `Cantidad` int NOT NULL,
  `Marca` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Almacen` varchar(75) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of practica
-- ----------------------------
INSERT INTO `practica` VALUES (1, 'Teclado', 150, 20, 'Lenovo', 'Principal');
INSERT INTO `practica` VALUES (2, 'Raton', 20, 20, 'Hp', 'Principal');
INSERT INTO `practica` VALUES (3, 'Parlante', 45, 50, 'Hp', 'Principal');
INSERT INTO `practica` VALUES (4, 'USB', 10, 100, 'Lenovo', 'Principal');
INSERT INTO `practica` VALUES (5, 'Monitor', 50, 20, 'Sin nombre', 'Principal');
INSERT INTO `practica` VALUES (6, 'Audifonos', 65, 10, 'Teraware', 'Principal');
INSERT INTO `practica` VALUES (7, 'Celular', 500, 2, 'Samsung', 'Principal');
INSERT INTO `practica` VALUES (8, 'Silla Gamer', 85, 3, 'Sin nombre', 'Principal');
INSERT INTO `practica` VALUES (9, 'Alfombrilla', 36, 2, 'Sin nombre', 'Principal');
INSERT INTO `practica` VALUES (10, 'Ticketera', 50, 2, 'EPSON', 'Principal');
INSERT INTO `practica` VALUES (11, 'Extintor', 63, 6, 'Sin nombre', 'Principal');
INSERT INTO `practica` VALUES (12, 'Impresora', 1250, 5, 'EPSON', 'Principal');
INSERT INTO `practica` VALUES (13, 'Tablet', 697, 3, 'Samsung', 'Principal');
INSERT INTO `practica` VALUES (14, 'Equipo 1', 1000, 5, 'Marca 1', 'Almacen 1');
INSERT INTO `practica` VALUES (15, 'Equipo 2', 1000, 5, 'Marca 2', 'Almacen 2');
INSERT INTO `practica` VALUES (16, 'Equipo 3', 1000, 5, 'Marca 3', 'Almacen 3');

SET FOREIGN_KEY_CHECKS = 1;
