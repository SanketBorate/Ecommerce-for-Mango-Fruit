-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: mango
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `mango_info`
--

DROP TABLE IF EXISTS `mango_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mango_info` (
  `mango_id` int NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price_per_dozen` int DEFAULT NULL,
  `variety` varchar(255) DEFAULT NULL,
  `farmer_id` int DEFAULT NULL,
  PRIMARY KEY (`mango_id`),
  KEY `FKmkqmhnryqih5x3jivnldaqu91` (`farmer_id`),
  CONSTRAINT `FKmkqmhnryqih5x3jivnldaqu91` FOREIGN KEY (`farmer_id`) REFERENCES `farmer_info` (`farmer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mango_info`
--

LOCK TABLES `mango_info` WRITE;
/*!40000 ALTER TABLE `mango_info` DISABLE KEYS */;
INSERT INTO `mango_info` VALUES (4,'Gi tag Maharashtra',1200,'Alphanso',1),(5,'Gi tag banaras uttar Pradesh',900,'langda',1),(6,'Gi tag west bengal',800,'malda',1),(7,'Gi tag Gujrat',900,'Gir kesar',2),(8,'Gi tag Maharashtra',850,'Marathwada kesar',2),(9,'Gi tag west bengal',900,'laxman bhog',3),(10,'Gi tag karnataka',700,'Totapuri',3),(11,'Gi tag karnataka',800,'Raspuri',3),(19,'Gi tag Bihar',700,'chausa',18),(20,'Gi tag Maharashtra',800,'lalbaug',18);
/*!40000 ALTER TABLE `mango_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-27 13:02:11
