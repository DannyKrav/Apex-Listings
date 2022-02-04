CREATE TABLE apex_users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(200) NOT NULL
);

CREATE TABLE apex_products(
id SERIAL PRIMARY KEY,
product_name VARCHAR(50) NOT NULL,
product_price DECIMAL,
product_image TEXT,
product_quantity INT
);

CREATE TABLE apex_cart(
id SERIAL PRIMARY KEY,
product_id INT REFERENCES apex_products(id),
product_name VARCHAR(50) NOT NULL,
product_price DECIMAL,
product_quantity INT,
product_image TEXT,
date_added TIMESTAMP
);

INSERT INTO apex_products
(product_name, product_price, product_image, product_quantity)
VALUES
('Wyze Cam Spotlight', 49.96 , 'https://images-na.ssl-images-amazon.com/images/I/61E8RWSXtoS._AC_UL450_SR450,320_.jpg', 0);


INSERT INTO apex_products
(product_name, product_price, product_image, product_quantity)
VALUES
('Occer Binoculars', 35.99, 'https://images-na.ssl-images-amazon.com/images/I/71aIoTvKaLL._AC_UL450_SR450,320_.jpg', 0);


INSERT INTO apex_products
(product_name, product_price, product_image, product_quantity)
VALUES
('Leather Desk Pad', 10.99 , 'https://images-na.ssl-images-amazon.com/images/I/71GW5oNYpqS._AC_UL450_SR450,320_.jpg', 0);


INSERT INTO apex_products
(product_name, product_price, product_image, product_quantity)
VALUES
('Breville Espresso ', 799.95, 'https://images-na.ssl-images-amazon.com/images/I/71orFaFS0pL._AC_UL160_SR160,160_.jpg', 0);


INSERT INTO apex_products
(product_name, product_price, product_image, product_quantity)
VALUES
('Womens Laguna Boot',169.95, 'https://images-na.ssl-images-amazon.com/images/I/81RzgrwN8XL._AC_UL160_SR160,160_.jpg', 0);


INSERT INTO apex_products
(product_name, product_price, product_image, product_quantity)
VALUES
('Carhartt Cuffed Beanie', 16.99, 'https://images-na.ssl-images-amazon.com/images/I/91VeMvrRQML._AC_UL450_SR450,320_.jpg', 0);


INSERT INTO apex_products
(product_name, product_price, product_image, product_quantity)
VALUES
('Fire TV Stick', 49.99, 'https://images-na.ssl-images-amazon.com/images/I/411y5UdVmvL._AC_UL450_SR450,320_.jpg', 0);


INSERT INTO apex_products
(product_name, product_price, product_image, product_quantity)
VALUES
('Kindle (8GB)', 139.99, 'https://images-na.ssl-images-amazon.com/images/I/51QCk82iGcL._AC_UL450_SR450,320_.jpg', 0);


INSERT INTO apex_product
(product_name, product_price, product_image, product_quantity)
VALUES
('Series 7 Apple Watch', 399.00, 'https://images-na.ssl-images-amazon.com/images/I/71gg8mPlAuL._AC_UL450_SR450,320_.jpg', 0);


INSERT INTO apex_products
(product_name, product_price, product_image, product_quantity)
VALUES
('Amazone Fire TV', 419.95, 'https://images-na.ssl-images-amazon.com/images/I/51EPd38RHQL._AC_UL450_SR450,320_.jpg', 0);
