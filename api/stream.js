import { channels } from "./channels";
import { users } from "./users"; // users.js

export default function handler(req, res) {
  const { id, user, pass } = req.query;

  // Login required
  if (!user || !pass) {
    return res.status(401).json({
      error: "Username and password required"
    });
  }

  // User verify
  const account = users.find(
    u => u.username === user && u.password === pass
  );

  if (!account) {
    return res.status(403).json({
      error: "Invalid username or password"
    });
  }

  // Expiry check
  if (new Date(account.expiry) < new Date()) {
    return res.status(403).json({
      error: "Account expired"
    });
  }

  // Channel
  const channel = channels.find(c => c.id === String(id));

  if (!channel) {
    return res.status(404).send("Channel not found");
  }

  return res.redirect(channel.stream);
}
