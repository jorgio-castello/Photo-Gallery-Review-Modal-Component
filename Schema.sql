DROP DATABASE IF EXISTS tripAdvisorGallery;

CREATE DATABASE tripAdvisorGallery;

USE tripAdvisorGallery;

CREATE TABLE activity (
  id INT NOT NULL auto_increment,
  NAME VARCHAR(255) NOT NULL,
  LOCATION VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT,
  user VARCHAR(50)
  user_contributions INT,
  date_created DATE,
  review_text TEXT,
  review_stars INT,
  helpful_score INT
);

CREATE TABLE photos (
  id INT NOT NULL AUTO_INCREMENT,
  alt TEXT NOT NULL,
  activity_id INT NOT NULL FOREIGN KEY REFERENCES activity(id),
  reviews_id INT FOREIGN KEY REFERENCES reviews(id)
);



