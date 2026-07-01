export default async function handler(req, res) {
  const { id, user, pass } = req.query;

  // AUTH
  if (user !== "ahmer" || pass !== "8800") {
    return res.status(401).send("Unauthorized");
  }

  // GET CHANNELS
  const data = await fetch(
    "https://raw.githubusercontent.com/animaxxpk/m3u-AniVerseX/main/channels.json"
  );

  const channels = await data.json();

  const channel = channels.find(c => c.id === id);

  if (!channel) {
    return res.status(404).send("Not found");
  }

  // 🔥 REAL PROXY (HIDES LINK)
  const response = await fetch(channel.url);

  res.setHeader("Content-Type", "application/vnd.apple.mpegurl");

  response.body.pipe(res);
}
