import { users } from "../../../users";
import { channels } from "../../../channels";

export default function handler(req, res) {
  const { user, pass, id } = req.query;

  const account = users[user];

  if (!account || account.password !== pass) {
    return res.status(401).send("Invalid user");
  }

  if (new Date(account.expiry) < new Date()) {
    return res.status(403).send("Account expired");
  }

  const channel = channels.find(c => String(c.id) === String(id));

  if (!channel) {
    return res.status(404).send("Channel not found");
  }

  return res.redirect(302, channel.stream);
}
