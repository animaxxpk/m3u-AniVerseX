export default async function handler(req, res) {
  const { id, user, pass } = req.query;

  console.log("REQ:", req.query);

  const users = {
    ahmer: "8800",
    ali: "1234"
  };

  if (!(user in users)) {
    return res.status(401).send("Unauthorized user");
  }

  if (users[user] !== pass) {
    return res.status(401).send("Wrong password");
  }

  const map = {
    "1": "http://rolextv.one:80/live/SyedSobanHaidar/03215838388/1.ts"
  };

  const url = map[id];

  if (!url) {
    return res.status(404).send("Not found");
  }

  return res.redirect(302, url);
}
