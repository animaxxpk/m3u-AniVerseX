import { users } from "./users";

export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const { username, password } = req.query;

  const user = users[username];

  if (!user || user.password !== password) {
    return res.status(200).json({
      user_info: {
        auth: 0,
        status: "Disabled"
      }
    });
  }

  const exp = Math.floor(
    new Date(user.expiry + "T23:59:59Z").getTime() / 1000
  ).toString();

  return res.status(200).json({
    user_info: {
      auth: 1,
      status: user.status,
      username,
      password,
      exp_date: exp,
      is_trial: "0",
      active_cons: "0",
      max_connections: String(user.max_connections),
      allowed_output_formats: ["ts", "m3u8"]
    },
    server_info: {
      url: "nex-tv.vercel.app",
      port: "80",
      https_port: "443",
      server_protocol: "http",
      timezone: "Asia/Karachi",
      timestamp_now: Math.floor(Date.now() / 1000)
    }
  });
}
