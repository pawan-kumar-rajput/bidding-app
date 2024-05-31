import Notification from "../models/notification.js";

export async function getNotifications(userId) {
  return await Notification.findAll({ where: { userId } });
}

export async function markRead(userId) {
  await Notification.update(
    { isRead: true },
    { where: { userId,isRead: false } }
  );
  return "Notifications marked as read";
}

export default { getNotifications, markRead };
