export default function handler(req, res) {
  try {
    const { user, pass } = req.query;

    if (user !== "ahmer" || pass !== "1234") {
      return res.status(401).send("#EXTM3U\n# Unauthorized");
    }

    res.setHeader("Content-Type", "text/plain");

    return res.send(`#EXTM3U
#EXTINF:-1,Test Channel
https://test-streams.mux.dev/test_001/stream.m3u8`);

  } catch (e) {
    return res.status(500).send("#EXTM3U\n# Server Error");
  }
}
