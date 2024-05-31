import Bid from "../models/bid.js";
import Item from "../models/item.js";
import Notification from "../models/notification.js";

export async function getBids(itemId) {
  return await Bid.findAll({ where: { itemId } });
}

export async function placeBid(itemId, userId, bidAmount) {
  const item = await Item.findByPk(itemId);
  if (!item) throw new Error("Item not found");
  if (bidAmount <= item.currentPrice)
    throw new Error("Bid amount must be higher than current price");

  const bid = new Bid({ itemId, userId, bidAmount });
  await bid.save();

  item.currentPrice = bidAmount;
  await item.save();

  // Create a notification
  const notification = new Notification({
    message: `New bid placed on item ${item.name}: $${bidAmount}`,
    userId
  });
  await notification.save();

  return "Bid placed successfully";
}

export default { getBids, placeBid };
