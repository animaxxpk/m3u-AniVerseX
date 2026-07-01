export default async function handler(req, res) {
  const { id, user, pass } = req.query;

  // CHECK USER AGAIN
  const u = await fetch("https://raw.githubusercontent.com/animaxxpk/m3u-AniVerseX/main/users.json");
  const users = await u.json();

  const validUser = users.find(
    x => x.user === user && x.pass === pass && x.active === true
  );

  if (!validUser) {
    return res.status(401).send("Unauthorized");
  }

  // GET CHANNELS
  const c = await fetch("https://raw.githubusercontent.com/animaxxpk/m3u-AniVerseX/main/channels.json");
  const channels = await c.json();

  const channel = channels.find(ch => ch.id === id);

  if (!channel) {
    return res.status(404).send("Not found");
  }

  // HIDE REAL LINK
  res.redirect(channel.url);
}
