CREATE DATABASE figma_db;

USE figma_db;

CREATE TABLE figma_files (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  image TEXT,
  clipboard TEXT NOT NULL
);
