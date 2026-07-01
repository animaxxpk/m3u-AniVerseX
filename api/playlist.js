export default async function handler(req, res) {
  try {
    const { user, pass } = req.query;

   if (
(user !== "ahmer" || pass !== "8800") &&
(user !== "ali" || pass !== "1234") &&
      res.setHeader("Content-Type", "text/plain");
      return res.status(401).send("#EXTM3U\n# Unauthorized");
    }

    const channels = [
      {
        id: "1",
        name: "Test Channel"
      }
    ];

    let m3u = "#EXTM3U\n";

    channels.forEach(ch => {
      m3u += `#EXTINF:-1,${ch.name}\n`;
      m3u += `https://m3u-system.vercel.app/api/stream?id=${ch.id}&user=${user}&pass=${pass}\n`;
    });

    res.setHeader("Content-Type", "text/plain");
    return res.send(m3u);

  } catch (e) {
    return res.status(500).send("#EXTM3U\n# Server Error");
  }
}
