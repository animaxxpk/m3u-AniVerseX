export default async function handler(req, res) {
  const { user, pass } = req.query;

  if (user !== "ahmer" || pass !== "8800") {
    return res.status(401).send("#EXTM3U\n# Unauthorized");
  }

  const data = await fetch(
    "https://raw.githubusercontent.com/animaxxpk/m3u-AniVerseX/main/channels.json"
  );

  const channels = await data.json();

  let m3u = "#EXTM3U\n";

  channels.forEach(ch => {
    m3u += `#EXTINF:-1,${ch.name}\n`;
    m3u += `https://m3u-system.vercel.app/api/stream?id=${ch.id}&user=${user}&pass=${pass}\n`;
  });

  res.setHeader("Content-Type", "text/plain");
  res.send(m3u);
}
