import playlist from "./playlist";

export default function handler(req, res) {
  const { username, password } = req.query;

  req.query.user = username;
  req.query.pass = password;

  return playlist(req, res);
}
