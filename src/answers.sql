SELECT email FROM customers ORDER BY email ASC;

SELECT id FROM orders WHERE customer_id = (SELECT id FROM customers WHERE fname = 'Elizabeth' AND lname = 'Crocker');

SELECT SUM(num_cupcakes) FROM orders WHERE processed = FALSE;

SELECT cupcakes.name, SUM(orders.num_cupcakes) FROM cupcakes LEFT JOIN orders ON cupcakes.id = orders.cupcake_id GROUP BY name;

SELECT customers.email, SUM(orders.num_cupcakes) AS total_cupcakes FROM customers LEFT JOIN orders ON customers.id = orders.customer_id GROUP BY customers.email ORDER BY total_cupcakes DESC;

SELECT DISTINCT customers.fname, customers.lname, customers.email FROM customers JOIN orders ON customers.id = orders.customer_id JOIN cupcakes ON orders.cupcake_id = cupcakes.id  WHERE orders.processed = TRUE AND cupcakes.name = 'funfetti';