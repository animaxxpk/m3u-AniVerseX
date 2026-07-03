export default async function handler(req, res) {
  const { username, password } = req.query;

  if (username !== "ahmer" || password !== "8888") {
    return res.status(401).send("Invalid username or password");
  }

  const playlist = `#EXTM3U

#EXTINF:-1 tvg-id="1" tvg-name="Saudi Quran" group-title="Islamic",Saudi Quran
https://nex-tv.vercel.app/api/stream?id=1&user=${username}&pass=${password}

#EXTINF:-1 tvg-id="2" tvg-name="PTV Sports" group-title="Sports",PTV Sports
https://nex-tv.vercel.app/api/stream?id=2&user=${username}&pass=${password}
`;

  res.setHeader("Content-Type", "application/x-mpegURL");
  res.send(playlist);
}
