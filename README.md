# Real-time Bidding Platform

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file with the following variables:

PORT=3000
JWT_SECRET=secret
ITEM_IMAGE_LOCATION=./uploads

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=bidding
DB_PORT=3306
DIALECT=mysql

4.Create database 'bidding'
5.Run migrations to create tables

6. Start the server: `npm start`.

## API Endpoints

### Users

- `POST /users/register` - Register a new user.
- `POST /users/login` - Authenticate a user and return a token.
- `GET /users/profile` - Get the profile of the logged-in user.

### Items

- `GET /items` - Retrieve all auction items (with pagination).
- `GET /items/:id` - Retrieve a single auction item by ID.
- `POST /items` - Create a new auction item (Authenticated users, image upload).
- `PUT /items/:id` - Update an auction item by ID (Authenticated users, only item owners or admins).
- `DELETE /items/:id` - Delete an auction item by ID (Authenticated users, only item owners or admins).

### Bids

- `GET /bids/:itemId` - Retrieve all bids for a specific item.
- `POST /bids/:itemId` - Place a new bid on a specific item (Authenticated users).

### Notifications

- `GET /notifications` - Retrieve notifications for the logged-in user.
- `POST /notifications/mark-read` - Mark notifications as read.

### WebSocket Events

- `connection` - Establish a new WebSocket connection.
- `bid` - Place a new bid on an item and notify all connected clients about the new bid.
- `update`-Notify all connected clients about a new bid on an item.
- `notify` - Send notifications to users in real-time.

