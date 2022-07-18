SELECT 'This is SQL Exercise, Practice and Solution' FROM Scientists;

SELECT 1, 2, 3;

SELECT 10 + 15;

SELECT (25 * 4) + 100;

SELECT * FROM Scientists;

SELECT name AS 'nome_do_projeto', hours AS 'tempo_de_trabalho' FROM Scientists.Projects;

SELECT name FROM Scientists.Scientists
ORDER BY name;

SELECT name FROM Scientists.Projects
ORDER BY name DESC;

SELECT CONCAT( 'O Projeto ', name, ' precisou de ', hours, ' horas para ser concluído' ) AS report FROM Scientists.Projects; 

SELECT name, hours FROM Scientists.Projects
ORDER BY hours DESC
LIMIT 3;

SELECT DISTINCT project FROM Scientists.AssignedTo;

SELECT name FROM Scientists.Projects
ORDER BY hours DESC
LIMIT 1;

SELECT name FROM Scientists.Projects
ORDER BY hours
LIMIT 1 OFFSET 1;

SELECT * FROM Scientists.Projects
ORDER BY hours
LIMIT 5;

USE Scientists;
SELECT CONCAT( 'Existem ', CONVERT(COUNT(name), CHAR), ' cientistas na tabela Scientists.' ) AS sci FROM Scientists;
SELECT CONCAT( 'Existem ', CAST(COUNT(name) AS CHAR), ' cientistas na tabela Scientists.' ) AS sci FROM Scientists;

