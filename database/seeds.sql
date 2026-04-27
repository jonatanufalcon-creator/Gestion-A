-- Initial Seed Data for System

-- Roles
INSERT INTO roles (name) VALUES ('Admin'), ('User'), ('Viewer');

-- Companies
INSERT INTO companies (name, address) VALUES 
('Company A', '1234 Elm St'),
('Company B', '5678 Oak St'),
('Company C', '9101 Pine St');

-- Customers
INSERT INTO customers (name, email, phone) VALUES 
('John Doe', 'johndoe@example.com', '555-0100'),
('Jane Smith', 'janesmith@example.com', '555-0101');

-- Suppliers
INSERT INTO suppliers (name, contact_person, phone) VALUES 
('Supplier X', 'Alice Johnson', '555-0200'),
('Supplier Y', 'Bob Brown', '555-0201');

-- Products
INSERT INTO products (name, description, price) VALUES 
('Product 1', 'Description of Product 1', 19.99),
('Product 2', 'Description of Product 2', 29.99);

-- Cash Accounts
INSERT INTO cash_accounts (account_name, balance) VALUES 
('Main Account', 1000.00),
('Savings Account', 5000.00);