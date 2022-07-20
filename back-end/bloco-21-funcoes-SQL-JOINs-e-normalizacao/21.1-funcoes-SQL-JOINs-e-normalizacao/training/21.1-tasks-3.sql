SELECT IF( 15 MOD 2 = 1,
        'Ímpar',
        'Par') AS 'Par ou Ímpar';

SELECT 15 MOD 2;

-----------------

SELECT 200 DIV 12;

-----------------

SELECT IF ( 220 MOD 12 = 0, 'Não', CONCAT( 'Sim ! ', 220 MOD 12, ' lugares'));