-- Create Customer table
CREATE TABLE Customer (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL
);

-- Create Customer profile table
CREATE TABLE CustomerProfile (
  id SERIAL PRIMARY KEY,
  isLoggedIn BOOLEAN DEFAULT false,
  customer_id INTEGER REFERENCES Customer(id)
);

-- Insert customer data
INSERT INTO Customer (first_name, last_name) VALUES
  ('John', 'Doe'),
  ('Jerome', 'Lalu'),
  ('Lea', 'Rive');

-- Insert customer profiles using subqueries
INSERT INTO CustomerProfile (isLoggedIn, customer_id)
SELECT true, id FROM Customer WHERE first_name = 'John';

INSERT INTO CustomerProfile (isLoggedIn, customer_id)
SELECT false, id FROM Customer WHERE first_name = 'Jerome';


-- Display the first_name of LoggedIn customers
SELECT c.first_name
FROM Customer c
JOIN CustomerProfile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = true;

-- Display all customers' first_name and isLoggedIn columns, including those without a profile
SELECT c.first_name, cp.isLoggedIn
FROM Customer c
LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id;

-- Display the number of customers that are not LoggedIn
SELECT COUNT(*) AS num_customers_not_loggedin
FROM Customer c
LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = false;




---------------part2-------------------



-- Create Book table
CREATE TABLE Book (
  book_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL
);

-- Insert book data
INSERT INTO Book (title, author) VALUES
  ('Alice In Wonderland', 'Lewis Carroll'),
  ('Harry Potter', 'J.K Rowling'),
  ('To kill a mockingbird', 'Harper Lee');

-- Create Student table
CREATE TABLE Student (
  student_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  age INTEGER CHECK (age <= 15)
);

-- Insert student data
INSERT INTO Student (name, age) VALUES
  ('John', 12),
  ('Lera', 11),
  ('Patrick', 10),
  ('Bob', 14);

-- Create Library table (junction table)
CREATE TABLE Library (
  book_fk_id INTEGER REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
  student_fk_id INTEGER REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
  borrowed_date DATE,
  PRIMARY KEY (book_fk_id, student_fk_id)
);

-- Insert records into junction table using subqueries
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
SELECT b.book_id, s.student_id, '2022-02-15'
FROM Book b
JOIN Student s ON b.title = 'Alice In Wonderland' AND s.name = 'John';

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
SELECT b.book_id, s.student_id, '2021-03-03'
FROM Book b
JOIN Student s ON b.title = 'To kill a mockingbird' AND s.name = 'Bob';

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
SELECT b.book_id, s.student_id, '2021-05-23'
FROM Book b
JOIN Student s ON b.title = 'Alice In Wonderland' AND s.name = 'Lera';

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
SELECT b.book_id, s.student_id, '2021-08-12'
FROM Book b
JOIN Student s ON b.title = 'Harry Potter' AND s.name = 'Bob';



-- Select all columns from the junction table
SELECT *
FROM Library;

-- Select the name of the student and the title of the borrowed books
SELECT s.name, b.title
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;

-- Select the average age of children who borrowed the book "Alice in Wonderland"
SELECT AVG(s.age) AS average_age
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';
-- Delete a student from the Student table
DELETE FROM Student WHERE name = 'John';

-- Observe the impact on the junction table (Library)
-- The corresponding record(s) in the junction table (Library) will be automatically deleted due to the CASCADE DELETE constraint on the foreign key.
