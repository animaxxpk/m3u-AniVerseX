import { channels } from "./channels";

export default function handler(req, res) {
  const { id } = req.query;

  const channel = channels.find(c => c.id === String(id));

  if (!channel) {
    return res.status(404).send("Channel not found");
  }

  return res.redirect(channel.stream);
}
