SELECT * FROM sakila.film;

SELECT COUNT(customer_id), active FROM sakila.customer GROUP BY active;

-----
SELECT COUNT(*), store_id, active FROM sakila.customer GROUP BY store_id, active;

-----
SELECT AVG(rental_duration) AS MRD, rating FROM sakila.film GROUP BY rating ORDER BY MRD DESC;

-----
SELECT COUNT(address) AS address_count, district FROM sakila.address GROUP BY district ORDER BY address_count DESC;
SELECT COUNT(*), district FROM sakila.address GROUP BY district ORDER BY COUNT(*) DESC; -- resposta do gabatiro

-----
SELECT rating, AVG(length) AS medium_duration FROM sakila.film GROUP BY rating HAVING medium_duration BETWEEN 115.0 AND 121.5 ORDER BY medium_duration DESC;

-----
SELECT rating, SUM(replacement_cost) AS total FROM sakila.film GROUP BY rating HAVING total > 3950.50 ORDER BY total; 