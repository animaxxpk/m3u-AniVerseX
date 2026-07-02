export default async function handler(req, res) {
  const { id, user, pass } = req.query;

  if (user !== "ahmer" || pass !== "8888") {
    return res.status(401).send("Unauthorized");
  }

  const map = {
    "1": "https://test-streams.mux.dev/test_001/stream.m3u8"
  };

  const url = map[id];

  if (!url) {
    return res.status(404).send("Not found");
  }

  // 🔥 IMPORTANT FIX
  return res.redirect(302, url);
}
