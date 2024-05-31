import itemService from "../services/itemService.js";

export async function createItem(req, res) {
  try {
    const itemData = req.body;
    if (req.file) {
      itemData.imageUrl = req.file.path;
    }
    const newItem = await itemService.createItem(itemData);
    res
      .status(201)
      .json({
        status: "success",
        message: "item added successfully",
        data: newItem,
      });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
}

export async function getItems(req, res) {
  try {
    const items = await itemService.getItems(req.query);
    res
      .status(200)
      .json({
        status: "success",
        message: "get items successfull",
        data: items,
      });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
}

export async function getItemById(req, res) {
  try {
    const item = await itemService.getItemById(req.params.id);
    if (!item) {
      return res
        .status(404)
        .json({ status: "error", message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
}

export async function updateItem(req, res) {
  try {
    const itemData = req.body;
    if (req.file) {
      itemData.imageUrl = req.file.path;
    }
    const updatedItem = await itemService.updateItem(req.params.id, itemData);
    if (!updatedItem) {
      return res
        .status(404)
        .json({ status: "error", message: "Item not found" });
    }
    res
      .status(200)
      .json({
        status: "success",
        message: "item updated successfully",
        data: updatedItem,
      });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
}

export async function deleteItem(req, res) {
  try {
    const deletedItem = await itemService.deleteItem(req.params.id);
    if (!deletedItem) {
      return res
        .status(404)
        .json({ status: "error", message: "Item not found" });
    }
    res
      .status(200)
      .json({
        status: "success",
        message: "item deleted successfully",
        data: deletedItem,
      });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
}
