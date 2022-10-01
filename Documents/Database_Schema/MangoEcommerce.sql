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
-- Table structure for table `address_info`
--

DROP TABLE IF EXISTS `address_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address_info` (
  `address_id` int NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `flat_no` int DEFAULT NULL,
  `pincode` int DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `street_name` varchar(255) DEFAULT NULL,
  `customer_customer_id` int DEFAULT NULL,
  PRIMARY KEY (`address_id`),
  KEY `FK54506obtwfsj9ba123wy5q9fy` (`customer_customer_id`),
  CONSTRAINT `FK54506obtwfsj9ba123wy5q9fy` FOREIGN KEY (`customer_customer_id`) REFERENCES `customer_info` (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address_info`
--

LOCK TABLES `address_info` WRITE;
/*!40000 ALTER TABLE `address_info` DISABLE KEYS */;
INSERT INTO `address_info` VALUES (13,'pune','pune',25,411009,'maharashtra','shree apartment ,pune-satara road',12),(15,'kej','beed',10,431123,'maharashtra','beed-kej road',14),(17,'rahuri','ahmednagar',45,413705,'maharashtra','akshay apartment ,tanpure wadi road',16),(22,'hadapsar pune','pune',103,411028,'maharashtra','A  Green city ,satav nagar road',21);
/*!40000 ALTER TABLE `address_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int NOT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'admin@gmail.com','admin');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customerid` int NOT NULL,
  `date` date DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `farmerid` int NOT NULL,
  `mangoid` int NOT NULL,
  `mangoname` varchar(255) DEFAULT NULL,
  `priceperdozen` int NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (4,16,'2022-09-25','Gi tag banaras uttar Pradesh',1,5,'langda',900,1),(9,12,'2022-09-25','Gi tag Maharashtra',1,4,'Alphanso',1200,12),(10,14,'2022-09-25','Gi tag Maharashtra',1,4,'Alphanso',1200,1),(11,14,'2022-09-25','Gi tag banaras uttar Pradesh',1,5,'langda',900,2),(13,21,'2022-09-25','Gi tag Maharashtra',18,20,'lalbaug',800,3);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_info`
--

DROP TABLE IF EXISTS `customer_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_info` (
  `customer_id` int NOT NULL,
  `contact_no` varchar(255) DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_info`
--

LOCK TABLES `customer_info` WRITE;
/*!40000 ALTER TABLE `customer_info` DISABLE KEYS */;
INSERT INTO `customer_info` VALUES (12,'7030301165','shivani@gmail.com','shivani','naiknavre','shivani'),(14,'8766980188','abhijeet@gmail.com','ahijeet','kendre','abhijeet'),(16,'9139172009','pradnyil@gmail.com','pradnyil','pathare','pradnyil'),(21,'9822232952','anay@gmail.com','anay','raut','anay15');
/*!40000 ALTER TABLE `customer_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_order`
--

DROP TABLE IF EXISTS `customer_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customerid` int NOT NULL,
  `date` date DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `farmerid` int NOT NULL,
  `mangoname` varchar(255) DEFAULT NULL,
  `priceperdozen` int NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_order`
--

LOCK TABLES `customer_order` WRITE;
/*!40000 ALTER TABLE `customer_order` DISABLE KEYS */;
INSERT INTO `customer_order` VALUES (1,12,'2022-09-25','Gi tag Maharashtra',1,'Alphanso',1200,2),(2,16,'2022-09-25','Gi tag Maharashtra',1,'Alphanso',1200,1),(3,16,'2022-09-25','Gi tag west bengal',3,'laxman bhog',900,1),(4,14,'2022-09-25','Gi tag west bengal',1,'malda',800,2),(5,14,'2022-09-25','Gi tag Maharashtra',2,'Marathwada kesar',850,1),(6,12,'2022-09-25','Gi tag banaras uttar Pradesh',1,'langda',900,1),(7,14,'2022-09-25','Gi tag karnataka',3,'Totapuri',700,2),(8,21,'2022-09-25','Gi tag Bihar',18,'chausa',700,2);
/*!40000 ALTER TABLE `customer_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `farmer_info`
--

DROP TABLE IF EXISTS `farmer_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `farmer_info` (
  `farmer_id` int NOT NULL,
  `contact_no` varchar(255) DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`farmer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `farmer_info`
--

LOCK TABLES `farmer_info` WRITE;
/*!40000 ALTER TABLE `farmer_info` DISABLE KEYS */;
INSERT INTO `farmer_info` VALUES (1,'9604491524','sanketborate19@gmail.com','sanket','borate','sanket'),(2,'8805239711','amit@gmail.com','amit','kumbhar','amit123'),(3,'9503900639','rajratna15@gmail.com','rajratna','gavhane','rajratna'),(18,'8975677057','shubhada22@gmail.com','shubhada','borate','shubhada');
/*!40000 ALTER TABLE `farmer_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `farmer_products`
--

DROP TABLE IF EXISTS `farmer_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `farmer_products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `farmerid` int NOT NULL,
  `mangoname` varchar(255) DEFAULT NULL,
  `priceperdozen` int NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `farmer_products`
--

LOCK TABLES `farmer_products` WRITE;
/*!40000 ALTER TABLE `farmer_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `farmer_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (23);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

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

-- Dump completed on 2022-09-27 13:04:07
