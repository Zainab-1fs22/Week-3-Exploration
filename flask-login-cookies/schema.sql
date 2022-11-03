CREATE TABLE user (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  profile_pic TEXT NOT NULL
);
-- db.py file will execute this SQL to create the table in your db



-- SQL that will create a user table in our database
-- see the fields you’ll be storing per user in this file

