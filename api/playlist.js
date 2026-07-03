import { users } from "./users";
import { channels } from "./channels";

export default function handler(req, res) {
  const { user, pass } = req.query;

  const account = users[user];

  if (!account || account.password !== pass) {
    return res.status(401).send("Invalid username or password");
  }

  const lines = ["#EXTM3U"];

  channels.forEach(ch => {
    lines.push(
      `#EXTINF:-1 tvg-id="${ch.id}" tvg-name="${ch.name}" tvg-logo="${ch.logo || ""}" group-title="${ch.category}",${ch.name}`
    );

    lines.push(
      `https://nex-tv.vercel.app/api/stream?id=${ch.id}&user=${user}&pass=${pass}`
    );
  });

  res.setHeader("Content-Type", "application/x-mpegURL");
  res.send(lines.join("\n"));
}
