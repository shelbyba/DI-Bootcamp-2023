SELECT DISTINCT language_name
FROM language;
-- Get all films, even if they don't have languages
SELECT f.title, f.description, l.name AS language_name
FROM film f
LEFT JOIN language l ON f.language_id = l.language_id;

-- Get all languages, even if there are no films in those languages
SELECT f.title, f.description, l.name AS language_name
FROM language l
LEFT JOIN film f ON f.language_id = l.language_id;
-- Create new_film table
CREATE TABLE new_film (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- Insert new films
INSERT INTO new_film (name) VALUES
  ('Film A'),
  ('Film B'),
  ('Film C');
-- Create customer_review table
CREATE TABLE customer_review (
  review_id SERIAL PRIMARY KEY,
  film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE,
  language_id INTEGER REFERENCES language(language_id),
  title VARCHAR(255),
  score INTEGER CHECK (score BETWEEN 1 AND 10),
  review_text TEXT,
  last_update TIMESTAMP
);
-- Insert movie reviews
INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES
  (1, 1, 'Review 1', 8, 'This is a great film!', NOW()),
  (2, 2, 'Review 2', 6, 'Average film, could be better.', NOW());
-- Delete a film that has a review
DELETE FROM new_film WHERE id = 1;



-----------------EX2-------------
-- Update the language of films
UPDATE film
SET language_id = (SELECT language_id FROM language WHERE name = 'English')
WHERE film_id IN (1, 2, 3); -- Update films with IDs 1, 2, and 3
-- Drop the customer_review table
DROP TABLE customer_review;
-- Count the number of outstanding rentals
SELECT COUNT(*) AS num_outstanding_rentals
FROM rental
WHERE return_date IS NULL;
-- Find the 30 most expensive outstanding movies
SELECT f.title, f.rental_rate
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;
-- The 1st film: The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE f.description ILIKE '%sumo wrestler%'
  AND a.first_name || ' ' || a.last_name = 'Penelope Monroe';

-- The 2nd film: A short documentary (less than 1 hour long), rated "R".
SELECT f.title
FROM film f
WHERE f.length < '01:00:00' AND f.rating = 'R';

-- The 3rd film: A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
SELECT f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name || ' ' || c.last_name = 'Matthew Mahan'
  AND r.rental_date BETWEEN '2005-07-28' AND '2005-08-01'
  AND r.rental_rate > 4.00;

-- The 4th film: His friend Matthew Mahan watched this film as well. It had the word "boat" in the title or description, and it looked like it was a very expensive DVD to replace.
SELECT f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name || ' ' || c.last_name = 'Matthew Mahan'
  AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
  AND f.replacement_cost > 30.00;
