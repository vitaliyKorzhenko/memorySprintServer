# Memory Sprint Server

This is the backend server for the Memory Sprint game application. It provides various endpoints for game levels, user management, and game progression tracking.

## Features

- User management and authentication
- Multiple game level types:
  - Number sequences
  - 3x3 number grids
  - Rebus puzzles
  - Shape selection challenges
- Round management
- Feedback system
- API documentation with Swagger
- Secure API key authentication

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (for database)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd memorySprintServer
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
API_KEY=your_api_key
```

4. Build the project:
```bash
npm run build
```

## Running the Server

### Development mode:
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

## API Documentation

The API documentation is available at `/api-docs` when the server is running. You can access it by navigating to:
```
http://localhost:4000/api-docs
```

## Project Structure

```
src/
├── index.ts          # Main application entry point
├── apiMiddleware.ts  # API key authentication middleware
├── swagger.ts       # Swagger configuration
├── db/
│   └── db.ts        # Database connection configuration
├── routes/
│   ├── levelsRoutes.ts
│   ├── userRoutes.ts
│   ├── feedbackRoutes.ts
│   ├── levelNumberSequenceRoute.ts
│   ├── numberGrid33Route.ts
│   ├── levelRebusRoute.ts
│   ├── levelShapeSelectionRoute.ts
│   └── roundRoutes.ts
```

## API Security

All API endpoints are protected with an API key that must be included in the request headers:
```
x-api-key: your_api_key
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.


