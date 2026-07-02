import { users } from "./users";
import { channels } from "./channels";

export default async function handler(req, res) {
  try {
    const { id, user, pass } = req.query;

    if (!users[user] || users[user] !== pass) {
      return res.status(401).send("Unauthorized");
    }

    const channel = channels.find((c) => c.id === id);

    if (!channel) {
      return res.status(404).send("Not Found");
    }

    return res.redirect(302, channel.url);

  } catch (err) {
    console.error(err);
    return res.status(500).send("Server Error");
  }
}
