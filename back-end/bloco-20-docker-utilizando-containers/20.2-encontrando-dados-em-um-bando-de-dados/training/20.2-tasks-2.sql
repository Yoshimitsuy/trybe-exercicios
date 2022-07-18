USE sakila;
SELECT first_name FROM actor;
SELECT last_name FROM actor;
SELECT CONCAT(first_name, ' ', last_name) FROM actor;
SELECT CONCAT(first_name, ' ', last_name) AS 'full_name' FROM actor;
