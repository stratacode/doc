CREATE TABLE user_session (
   id serial PRIMARY KEY,
   remote_ip VARCHAR(40),
   create_date TIMESTAMP Default Now(),
   headers TEXT
);

CREATE TABLE user_download (
   id serial PRIMARY KEY,
   session_id INTEGER REFERENCES user_session(id),  
   download_file VARCHAR (128),
   download_version VARCHAR (50),
   download_date TIMESTAMP Default Now(),
   license_version integer
);

CREATE TABLE user_contact_type (
   id SERIAL PRIMARY KEY,
   session_id INTEGER REFERENCES user_session(id),
   email VARCHAR (50) NOT NULL UNIQUE,
   contact_type INTEGER,
   create_date TIMESTAMP Default Now(),
   last_update TIMESTAMP Default Now()
);
