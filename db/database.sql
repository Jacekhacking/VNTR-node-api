CREATE DATABASE advntr_db;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL
);

CREATE TABLE achievements (
    id SERIAL PRIMARY KEY,
    title VARCHAR(120) NOT NULL,
    description VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    timesEarned INTEGER NOT NULL default 0
);

CREATE TABLE trips (
    id SERIAL PRIMARY KEY,
    tripName VARCHAR(255) NOT NULL
);

CREATE TABLE userAchievements (
    id SERIAL PRIMARY KEY,
    userId SERIAL REFERENCES users(id),
    achievementId SERIAL REFERENCES achievements(id),
    tripEarned SERIAL REFERENCES trips(id)
);