/**
 * Swagger/OpenAPI Configuration
 * Defines the API documentation structure and settings
 */

import swaggerJsdoc from 'swagger-jsdoc';

/**
 * Swagger configuration options
 * Includes API information, server details, and security schemes
 */
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Memory Sprint API',
      version: '1.0.0',
      description: 'API documentation for Memory Sprint game server',
      contact: {
        name: 'API Support',
        email: 'support@memorysprint.com'
      }
    },
    servers: [
      {
        url: process.env.API_URL || 'http://localhost:4000',
        description: 'Development server'
      }
    ],
    components: {
      securitySchemes: {
        apiKey: {
          type: 'apiKey',
          name: 'x-api-key',
          in: 'header',
          description: 'API key for authentication'
        }
      }
    },
    security: [
      {
        apiKey: []
      }
    ]
  },
  apis: ['./src/routes/*.ts'] // Path to API route definitions
};

// Generate Swagger specification
const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec; 