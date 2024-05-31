import dotenv from "dotenv";
import express, { json, urlencoded } from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import router from "./routes/index.js";
import { placeBid } from "./controllers/bidController.js";
dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(json());

app.use("/", router);

// Socket.io setup
io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

  // Bid event
  socket.on("bid", async (bidData) => {
    try {
      await placeBid(
        { params: { itemId: bidData.itemId }, user: { id: bidData.userId }, body: { bidAmount: bidData.bidAmount } },
        null,
        socket
      );
    } catch (error) {
      socket.emit("error", error.message);
    }
  });

  // Notify event
  socket.on("notify", (notification) => {
    io.emit("notify", notification); // Send notification to all connected clients
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
