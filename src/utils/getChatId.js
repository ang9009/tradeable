export default function getChatId(userId, otherUserId, listingId) {
  const chatIdPrefix =
    userId > otherUserId ? userId + otherUserId : otherUserId + userId;
  return listingId + chatIdPrefix;
}
