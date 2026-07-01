export default function handler(req, res) {

  const playlist = `
#EXTM3U

#EXTINF:-1,Test Channel
https://example.com/test.m3u8
`;

  res.setHeader(
    "Content-Type",
    "application/x-mpegURL"
  );

  res.send(playlist);

}
