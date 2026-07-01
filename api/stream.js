export default async function handler(req, res) {
  const { id, user, pass } = req.query;

  const users = {
    ahmer: "8800",
    ali: "1234"
  };

  if (!users[user] || users[user] !== pass) {
    return res.status(401).send("Unauthorized");
  }

  const map = {
    "1": "http://rolextv.one:80/live/SyedSobanHaidar/03215838388/1.ts"
  };

  const url = map[id];

  if (!url) {
    return res.status(404).send("Not found");
  }

  // 🔥 IMPORTANT FIX
  return res.redirect(302, url);
}
