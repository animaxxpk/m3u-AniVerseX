import { users } from "../../../users";
import { channels } from "../../../channels";

export default function handler(req, res) {
 const { user, pass, id } = req.query;

const account = users[user];

if (!account || account.password !== pass) {
    return res.status(401).send("Invalid user");
}
  const user = users[username];

  if (!user || user.password !== password) {
    return res.status(401).send("Invalid user");
  }

  const channel = channels.find(c => String(c.id) === String(id));

  if (!channel) {
    return res.status(404).send("Channel not found");
  }

  res.writeHead(302, {
    Location: channel.stream
  });

  res.end();
}
