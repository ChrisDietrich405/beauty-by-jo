-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: beautybyjo
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schedule` (
  `id` int NOT NULL AUTO_INCREMENT,
  `specific_service_id` int NOT NULL,
  `date` datetime NOT NULL,
  `status` smallint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `schedule_specific_service_fk_idx` (`specific_service_id`),
  CONSTRAINT `schedule_specific_service_fk` FOREIGN KEY (`specific_service_id`) REFERENCES `specific_service` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule`
--

LOCK TABLES `schedule` WRITE;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
INSERT INTO `schedule` VALUES (1,1,'2021-12-18 09:00:00',1),(2,1,'2021-12-18 10:30:00',1);
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service`
--

DROP TABLE IF EXISTS `service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` smallint NOT NULL,
  `name` varchar(45) NOT NULL,
  `path` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
INSERT INTO `service` VALUES (1,1,'Make up','/make-up'),(2,1,'Facials','/facials'),(3,1,'Eyebrows','/eyebrow'),(4,1,'Lashes','/lashes'),(5,1,'Waxing','/waxing');
/*!40000 ALTER TABLE `service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `specific_service`
--

DROP TABLE IF EXISTS `specific_service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `specific_service` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `price` decimal(18,2) NOT NULL,
  `status` smallint NOT NULL,
  `service_id` int NOT NULL,
  `time` int NOT NULL DEFAULT '60',
  PRIMARY KEY (`id`),
  KEY `service_subservice_id_idx` (`service_id`),
  CONSTRAINT `service_subservice_id` FOREIGN KEY (`service_id`) REFERENCES `service` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specific_service`
--

LOCK TABLES `specific_service` WRITE;
/*!40000 ALTER TABLE `specific_service` DISABLE KEYS */;
INSERT INTO `specific_service` VALUES (1,'make up consultation',50.00,1,1,60),(2,'lash lift',55.00,1,4,60),(3,'lash lift and tint',70.00,1,4,60),(4,'brow lamination',50.00,1,3,60),(5,'brow lamination wax and tint',70.00,1,3,60),(6,'brow lamination wax or tint',60.00,1,3,60),(7,'full leg',55.00,1,2,45),(8,'half leg',35.00,1,2,55),(9,'full arm ',40.00,1,2,60),(10,'half arm',30.00,1,2,60),(11,'armpits',20.00,1,2,60),(12,'bikini',30.00,1,2,60),(13,'french bikini',45.00,1,2,60),(14,'brazilian',65.00,1,2,60),(15,'lip or chin',10.00,1,2,60),(16,'full face',40.00,1,2,60),(17,'eyebrow shaping',15.00,1,2,60),(18,'mini-makeover',60.00,1,5,45),(19,'signature jo-glo',80.00,1,5,60),(20,'the desired detox',100.00,1,5,75),(21,'the sensitive skin serenity',85.00,1,5,60),(22,'anti age radiate rejuvenate',85.00,1,5,60);
/*!40000 ALTER TABLE `specific_service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Rodrigo','IsReallyCool','rodrigoisreallycool@gmail.com','jdjdjdjdjd'),(3,'Rodrigo','IsReallyCool','chrisdietrich@gmail.com','jdjdjdjdjd'),(4,'Rodrigo','IsReallyCool','chrisdietrichdddd222@gmail.com','jdjdjdjdjd'),(5,'Rodrigo','IsReallyCool','chrisdietrichdddd222rerere@gmail.com','jdjdjdjdjd'),(6,'Rodrigo','IsReallyCool','chrisdieqwqwqw@gmail.com','jdjdjdjdjd'),(7,'Rodrigo','Luengo','rpl@outlook.com','123456'),(8,'Rodrigo','IsReallyCool','email@example.com','$2b$10$O6gQyouiiwDfJYooK38K9.UElJfcycIBZpWkKvd0Ha9.KbM3ZUIRG'),(9,'Rodrigo','IsReallyCool','email1@example.com','$2b$10$8DWOCLrgh5pX4nbmRz7q7.X9VINJGACE54zwcf30VBj60u5CWox0q'),(10,'Rodrigo','IsReallyCool','chris@example.com','$2b$10$bFRk0/WUb16KiQe6boMcF.lE.wEnQLnIsVlWAeLyAqDkMsGBbf3IK'),(11,'chris','det','dtir@gmail.com','$2b$10$1iBscA6lQqSMp.SWi1BMmex.rztuYiek.63kqQmzcyHBoSk6Z8ai2'),(12,'Chris','Detrick','chris@yahoo.com','$2b$10$6wyFDIQmFVE5x3jYqidn6.6OdpINF8vlOkIGmQ11mmQUF0YV3GUZG'),(13,'chris','dietrich','chris1@yahoo.com','$2b$10$T1/nKwbLDdwCsZo0nEeMV.8d2mpBbK1wKxYVFIX6Hpt6A96oVtwja'),(14,'Christopher','Dietrich','chrisdietrich3666@gmail.com','$2b$10$eEJ687rrhufKtSajkJSTL.4eI76gkJ0tkFMO5a6FnaFwSBv8dUb0i');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-21 20:35:31
