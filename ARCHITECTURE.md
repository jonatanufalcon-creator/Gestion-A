# System Architecture Documentation for Gestion-A

## 1. Database Schema

### ER Diagram
![ER Diagram](link-to-diagram)

### Tables
- **Users**  
  - `id`: INT, Primary Key  
  - `username`: VARCHAR(50)  
  - `password_hash`: VARCHAR(255)  
  - `email`: VARCHAR(100)  
  - `created_at`: TIMESTAMP  

- **Products**  
  - `id`: INT, Primary Key  
  - `name`: VARCHAR(100)  
  - `description`: TEXT  
  - `price`: DECIMAL(10, 2)  
  - `created_at`: TIMESTAMP  

### Relationships
- Users can place multiple orders.
- Products belong to users.


## 2. API Structure

### User Endpoints
- **POST /api/users/register**  
  - Description: Register a new user.  
  - Payload: {"username": "string", "password": "string", "email": "string"}

- **POST /api/users/login**  
  - Description: User login.
  
### Product Endpoints
- **GET /api/products**  
  - Description: Get list of products.


## 3. Authentication Flow
1. User registers using the /api/users/register endpoint.  
2. A hashed password is stored in the database.  
3. User logs in via the /api/users/login endpoint.  
4. A JWT token is returned upon successful login.


## 4. Module Dependencies
- **Express**: For building the API.  
- **Sequelize**: For ORM and database interaction.  
- **jsonwebtoken**: For authentication via JWT.

*Documentation last updated on 2026-04-22 14:21:38 UTC.*