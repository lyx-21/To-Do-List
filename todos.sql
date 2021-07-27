/*
 Navicat Premium Data Transfer

 Source Server         : todos
 Source Server Type    : MySQL
 Source Server Version : 80019
 Source Host           : localhost:3306
 Source Schema         : todos

 Target Server Type    : MySQL
 Target Server Version : 80019
 File Encoding         : 65001

 Date: 27/07/2021 17:12:16
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admins
-- ----------------------------
DROP TABLE IF EXISTS `admins`;
CREATE TABLE `admins`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `loginId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `loginPwd` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admins
-- ----------------------------
INSERT INTO `admins` VALUES (1, 'zwx', 'cf67355a3333e6e143439161adc2d82e', NULL);

-- ----------------------------
-- Table structure for lovelitters
-- ----------------------------
DROP TABLE IF EXISTS `lovelitters`;
CREATE TABLE `lovelitters`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `contentup` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `mark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `contentdown` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'type1',
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of lovelitters
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
