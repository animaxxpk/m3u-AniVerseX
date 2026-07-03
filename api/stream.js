import { channels } from "./channels";

export default function handler(req, res) {
  const { id } = req.query;

  const channel = channels.find(c => c.id === id);

  if (!channel) {
    return res.status(404).send("Channel not found");
  }

  res.redirect(channel.stream);
}

import { users } from "./users";
import { channels } from "./channels";

export default async function handler(req, res) {
  try {
    const { id, user, pass } = req.query;

    const account = users[user];

    // Username / Password check
    if (!account || account.password !== pass) {
      return res.status(401).send("Unauthorized");
    }

    // Expiry check
    if (account.expiry && new Date() > new Date(account.expiry)) {
      return res.status(403).send("Account Expired");
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
