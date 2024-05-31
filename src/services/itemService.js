import Item from "../models/item.js";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
export async function createItem(itemData) {
  return await Item.create(itemData);
}

export async function getItems(query) {
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 10;
  const offset = (page - 1) * limit;

  const { count, rows: items } = await Item.findAndCountAll({
    offset,
    limit,
    order: [["createdAt", "DESC"]],
  });

  return {
    totalItems: count,
    totalPages: Math.ceil(count / limit),
    currentPage: page,
    items,
  };
}

export async function getItemById(id) {
  return await Item.findByPk(id);
}

export async function updateItem(id, itemData) {
  const item = await Item.findByPk(id);
  if (!item) {
    return null;
  }

  // Delete the old image if it exists and a new image is provided
  if (itemData.imageUrl && item.imageUrl) {
    fs.unlinkSync(item.imageUrl);
  }

  await item.update(itemData);
  return item;
}

export async function deleteItem(id) {
  const item = await Item.findByPk(id);
  if (!item) {
    return null;
  }

  // Delete the image if it exists
  if (item.imageUrl) {
    fs.unlinkSync(item.imageUrl);
  }

  await item.destroy();
  return item;
}

export default { createItem, getItems, getItemById, updateItem, deleteItem };
