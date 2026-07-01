export default function handler(req, res) {
  const { user, pass } = req.query;

  // CHECK LOGIN
  if (user !== "ahmer" || pass !== "8800") {
    res.setHeader("Content-Type", "text/plain");
    return res.status(401).send("#EXTM3U\n# Unauthorized");
  }

  res.setHeader("Content-Type", "text/plain");

  return res.send(`#EXTM3U
#EXTINF:-1,Test Channel
https://test-streams.mux.dev/test_001/stream.m3u8`);
}
