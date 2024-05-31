import bidService from "../services/bidService.js";

export async function getBids(req, res) {
  try {
    const bids = await bidService.getBids(req.params.itemId);
    res.send({ status: "success", message: "getting bids successful", data: bids });
  } catch (error) {
    res.status(400).send({ status: "error", message: error.message });
  }
}

export async function placeBid(req, res, socket) {
  try {
    const message = await bidService.placeBid(
      req.params.itemId,
      req.user.id,
      req.body.bidAmount
    );
    if (socket) {
      socket.broadcast.emit("update", message); // Notify all connected clients about the new bid
    }
    if (res) {
      res.send(message);
    }
  } catch (error) {
    if (res) {
      res.status(400).send(error.message);
    } else if (socket) {
      socket.emit("error", error.message); // Send error message back to the client
    }
  }
}
