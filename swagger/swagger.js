// swagger/swagger.js
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Instagram-Style Auth API",
      version: "1.0.0",
      description: "Simple auth system with JWT, Express, and MongoDB Atlas",
    },
    servers: [
      {
        url: "http://localhost:5000/api",
      },
    ],

    // ✅ All security configuration must go inside 'definition'
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },

    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  // 👇 Swagger will read route-level docs from these files
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);

export { swaggerUi, swaggerSpec };
