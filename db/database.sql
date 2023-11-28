CREATE DATABASE advntr_db;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
    id uuid DEFAULT uuid_generate_v4 (),
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE achievements (
    id uuid DEFAULT uuid_generate_v4 (),
    title VARCHAR(120) NOT NULL,
    description VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    times_earned INTEGER NOT NULL default 0,
    PRIMARY KEY (id)
);

CREATE TABLE trips (
    id uuid DEFAULT uuid_generate_v4 (),
    trip_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE userAchievements (
    id uuid DEFAULT uuid_generate_v4 (),
    user_id uuid REFERENCES users(id),
    achievement_id uuid REFERENCES achievements(id),
    trip_id uuid REFERENCES trips(id),
    PRIMARY KEY (id)
);

CREATE TABLE tripAchievements (
    id uuid DEFAULT uuid_generate_v4 (),
    trip_id uuid REFERENCES trips(id),
    achievement_id uuid REFERENCES achievements(id),
    PRIMARY KEY (id)
);