

INSERT INTO students( first_name, last_name, birth_date)VALUES
('mark','Benichou','1998-1-1'),
('Yoan', 'cohen','2010-1-1'),
('lea','Benichou','2010-1-1'),
('Amelia','dux','2010-1-1'),
('David', 'Grez','2010-1-1'),
('omer', 'simpson','2010-1-1')

INSERT INTO students(first_name, last_name,birth_date)
VALUES('shelby','Bader','1997-02-28')


SELECT first_name, last_name  FROM students
SELECT first_name, last_name  FROM students WHERE last_name='Benichou'
SELECT first_name, last_name  FROM students WHERE first_name LIKE '%a%'
SELECT first_name, last_name  FROM students WHERE first_name ILIKE '%a%'
SELECT first_name, last_name  FROM students WHERE (RIGHT(first_name,2) LIKE '%a%')


