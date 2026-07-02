import { users } from "./users";
import { channels } from "./channels";

export default async function handler(req, res) {
  try {
    const { user, pass } = req.query;

    if (!users[user] || users[user] !== pass) {
      res.setHeader("Content-Type", "text/plain");
      return res.status(401).send("#EXTM3U\n# Unauthorized");
    }

    let m3u = "#EXTM3U\n";

    channels.forEach((ch) => {
      m3u += `#EXTINF:-1 tvg-id="${ch.name}" group-title="${ch.category}",${ch.name}\n`;
      m3u += `${req.headers["x-forwarded-proto"] || "https"}://${req.headers.host}/api/stream?id=${ch.id}&user=${user}&pass=${pass}\n`;
    });

    res.setHeader("Content-Type", "text/plain");
    return res.status(200).send(m3u);

  } catch (err) {
    console.error(err);
    return res.status(500).send("#EXTM3U\n# Server Error");
  }
}
