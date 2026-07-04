import { channels } from "./channels";
import { users } from "./users";

export default function handler(req, res) {
  const { id, user, pass } = req.query;

  if (!user || !pass) {
    return res.status(401).send("Username and password required");
  }

  const account = users[user];

  if (!account || account.password !== pass) {
    return res.status(401).send("Invalid username or password");
  }

  if (new Date(account.expiry) < new Date()) {
    return res.status(403).send("Account expired");
  }

  const channel = channels.find(c => c.id === String(id));

  if (!channel) {
    return res.status(404).send("Channel not found");
  }

  return res.redirect(channel.stream);
}
