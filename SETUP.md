# Local Development Setup for Gestion-A

## Prerequisites
Before you begin, ensure you have the following software installed on your machine:
- **Node.js** (version 14 or higher)
- **PostgreSQL** (version 12 or higher)
- **Docker** (version 20 or higher)

## Step 1: Setting Up Node.js
1. Download and install Node.js from the [official website](https://nodejs.org/).
2. Verify the installation by running:
   ```bash
   node -v
   npm -v
   ```

## Step 2: Setting Up PostgreSQL
1. Download and install PostgreSQL from the [official website](https://www.postgresql.org/download/).
2. Create a new database using the following commands:
   ```sql
   CREATE DATABASE gestion_a;
   ```
3. Configure your connection settings in `config/database.js` file.

## Step 3: Setting Up Docker
1. Download and install Docker from the [official website](https://www.docker.com/).
2. Ensure Docker is running, and then configure your Docker environment by creating a `docker-compose.yml` file in your project root:
   ```yaml
   version: '3.8'
   services:
     db:
       image: postgres:latest
       restart: always
       environment:
         POSTGRES_USER: your_user
         POSTGRES_PASSWORD: your_password
         POSTGRES_DB: gestion_a
       ports:
         - "5432:5432"
   ```
3. Start your Docker containers by running:
   ```bash
   docker-compose up -d
   ```

## Step 4: Running the Frontend
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the frontend application:
   ```bash
   npm start
   ```

## Step 5: Running the Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Run database migrations:
   ```bash
   npm run migrate
   ```
4. Start the backend application:
   ```bash
   npm start
   ```

## Conclusion
Now you have the local development environment set up for Gestion-A. You can access the frontend at `http://localhost:3000` and the backend at `http://localhost:5000`.