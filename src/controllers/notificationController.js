import notificationService from "../services/notificationService.js";

export async function getNotifications(req, res) {
  try {
    const notifications = await notificationService.getNotifications(req.user.id);
    res.send(notifications);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function markRead(req, res) {
  try {
    const message = await notificationService.markRead(req.user.id);
    res.send(message);
  } catch (error) {
    res.status(400).send(error.message);
  }
}
