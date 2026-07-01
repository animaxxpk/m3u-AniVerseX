export default async function handler(req, res) {
  try {
const users = {
  ahmer: "8800",
  ali: "1234"
};

if (!users[user] || users[user] !== pass) {
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
