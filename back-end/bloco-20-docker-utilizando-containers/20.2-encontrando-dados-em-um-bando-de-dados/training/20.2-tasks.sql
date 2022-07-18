SELECT 'Olá, bem-vindo ao SQL"';
SELECT 10;
SELECT now();
SELECT 20 * 2;
SELECT 50 / 2;
SELECT 18 AS idade;
SELECT 2019 AS ano;
SELECT 'Rafael', 'Martins', 25, 'Desenvolvedor Web';
SELECT 'Rafael' AS nome, 'Yoshimitsuy' AS sobrenome, 25 AS idade, 'Desenvolvedor Web' AS 'area_de_atuacao';

---------------------
SELECT 'Rafael';
SELECT 'Rafael', 'Yoshimitsuy', 'Rio de Janeiro', '25';
SELECT 'Rafael' AS 'first_name', 'Yoshimitsuy' AS 'last_name', 'Rio de Janeiro' AS city, 25 AS age;
SELECT 13 * 8;
SELECT now() AS 'data_atual';
----------------------

SELECT * FROM sakila.city;
SELECT first_name, last_name FROM sakila.customer;
SELECT * FROM sakila.rental;
SELECT title, description, release_year FROM sakila.film;
SELECT * FROM sakila.payment;

