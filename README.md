## Node.js Express Practice – Layered CRUD API

This project is a **basic Express server** with a **layered architecture** (routes → controllers → services → repositories) and some common **middlewares**.

### Structure

- `src/app.js` – Express app, mounts middlewares and routes
- `src/server.js` – Starts the HTTP server
- `src/routes/itemRoutes.js` – REST routes for items
- `src/controllers/itemController.js` – HTTP-level logic
- `src/services/itemService.js` – Business logic
- `src/repositories/itemRepository.js` – In-memory data store
- `src/middleware/logger.js` – Request logging
- `src/middleware/validateItem.js` – Basic body validation for items
- `src/middleware/notFound.js` – 404 handler
- `src/middleware/errorHandler.js` – Central error handler

### Run the server

From the `nodejs-express-practice` folder:

```bash
npm install        # already done once, but safe to run
npm run dev        # start with nodemon
```

The server listens on `http://localhost:3000` by default.

### Endpoints (Items CRUD)

Base path: `http://localhost:3000/api/items`

- **GET `/api/items`** – Get all items
- **GET `/api/items/:id`** – Get a single item by id
- **POST `/api/items`** – Create an item
  - body: `{ "name": "Item name", "description": "Optional text" }`
- **PUT `/api/items/:id`** – Update an item
  - body: `{ "name": "New name", "description": "Optional text" }`
- **DELETE `/api/items/:id`** – Delete an item

Health check:

- **GET `/health`** – Returns `{ "status": "ok" }`

# nodejs-express-practice
