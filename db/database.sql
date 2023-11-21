CREATE DATABASE advntr_db;

CREATE TABLE achievements (
    id SERIAL PRIMARY KEY,
    title VARCHAR(120) NOT NULL,
    description VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    timesEarned INTEGER NOT NULL default 0
);

CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20)
);