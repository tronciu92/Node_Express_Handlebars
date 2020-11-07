INSERT INTO burgers (burger_name)
VALUES ('Beef Burger'), ('Cowboy Burger'), ('Cheese Burger'),('Turkey Burger');

INSERT INTO burgers (burger_name, devoured)
VALUES ('Portobello Mushroom', true);

SELECT * FROM burgers;

UPDATE burgers
SET devoured = true
WHERE id = 1;