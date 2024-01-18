import express from "express";
import cors from "cors";

import dotenv from 'dotenv';
import api from "./routes/api.mjs";
import * as http from "http";


// Load environment variables
dotenv.config();

// Connect to MongoDB
const PORT = process.env.PORT || 5050;

// Initialize Express app
const app = express();

// Middlewares
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse incoming JSON data

// Mount routes
app.use("/api", api);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start server
const server = http.createServer(app);
export const io = new Server(server);
server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
