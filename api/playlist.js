export default async function handler(req, res) {
  const { user, pass } = req.query;

  // 🔐 USER CHECK
  const u = await fetch("https://raw.githubusercontent.com/animaxxpk/m3u-AniVerseX/main/users.json");
  const users = await u.json();

  const valid = users.find(
    x => x.user === user && x.pass === pass && x.active === true
  );

  if (!valid) {
    return res.status(401).send("#EXTM3U\n# Unauthorized");
  }

  // 📺 CHANNEL LIST
  const c = await fetch("https://raw.githubusercontent.com/animaxxpk/m3u-AniVerseX/main/channels.json");
  const channels = await c.json();

  let m3u = "#EXTM3U\n";

  channels.forEach(ch => {
    m3u += `#EXTINF:-1,${ch.name}\n`;
    m3u += `https://m3u-system.vercel.app/api/stream?id=${ch.id}&user=${user}&pass=${pass}\n`;
  });

  res.setHeader("Content-Type", "text/plain");
  res.send(m3u);
}
