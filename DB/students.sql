DROP TABLE students;


CREATE TABLE students(
        id INT AUTO_INCREMENT NOT NULL, 
        regdno VARCHAR(10) ,
        name VARCHAR(30) , 
        email VARCHAR(30) ,
        phone VARCHAR(10) , 
        branch VARCHAR(20) , 
        PRIMARY KEY(id)
);
