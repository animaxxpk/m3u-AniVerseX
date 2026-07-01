export default async function handler(req, res) {
  const { id, user, pass } = req.query;

  // 🔐 USERS CHECK
  const u = await fetch("https://raw.githubusercontent.com/animaxxpk/m3u-AniVerseX/main/users.json");
  const users = await u.json();

  const valid = users.find(
    x => x.user === user && x.pass === pass && x.active === true
  );

  if (!valid) {
    return res.status(401).send("Unauthorized");
  }

  // 📺 CHANNEL MAP (hidden real links)
  const map = {
    "1": "http://rolextv.one:80/live/SyedSobanHaidar/03215838388/1.ts "
  };

  const url = map[id];

  if (!url) {
    return res.status(404).send("Not found");
  }

  // 🔥 PROXY (HIDES ORIGINAL LINK)
  const response = await fetch(url);

  res.setHeader("Content-Type", "application/vnd.apple.mpegurl");

  response.body.pipe(res);
}
