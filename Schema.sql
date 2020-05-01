DROP DATABASE IF EXISTS tripAdvisorGallery;

CREATE DATABASE tripAdvisorGallery;

USE tripAdvisorGallery;

CREATE TABLE activity (
  id INT NOT NULL auto_increment,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT,
  user VARCHAR(50),
  user_contributions INT,
  date_created DATE,
  review_text TEXT,
  review_stars INT,
  helpful_score INT,
  PRIMARY KEY (id)
);

CREATE TABLE photos (
  id INT NOT NULL AUTO_INCREMENT,
  link TEXT,
  alt TEXT NOT NULL,
  PRIMARY KEY (id),

  activity_id INT NOT NULL,
  CONSTRAINT fk_activity_id FOREIGN KEY (activity_id) REFERENCES activity(id),

  review_id INT,
  CONSTRAINT fk_review_id FOREIGN KEY (review_id) REFERENCES reviews(id)
);



