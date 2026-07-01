export default function handler(req, res) {

  const playlist = process.env.PLAYLIST;

  res.setHeader(
    "Content-Type",
    "application/x-mpegURL"
  );

  res.send(playlist);

}
