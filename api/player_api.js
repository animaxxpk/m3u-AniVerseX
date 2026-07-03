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
  
import { users } from "./users";
import { channels } from "./channels";
  // Live Categories
if (action === "get_live_categories") {
  const categories = [...new Set(channels.map(c => c.category))];

  return res.status(200).json(
    categories.map((cat, index) => ({
      category_id: String(index + 1),
      category_name: cat,
      parent_id: 0
    }))
  );
}

// Live Streams
if (action === "get_live_streams") {
  const categories = [...new Set(channels.map(c => c.category))];

  return res.status(200).json(
    channels.map((ch, index) => ({
      num: index + 1,
      name: ch.name,
      stream_type: "live",
      stream_id: Number(ch.id),
      stream_icon: ch.logo || "",
      category_id: String(categories.indexOf(ch.category) + 1),
      added: "",
      is_adult: "0"
    }))
  );
}
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
      https_port: "443",
      port: "80",
      server_protocol: "http",
      timezone: "Asia/Karachi",
      timestamp_now: Math.floor(Date.now() / 1000)
    }
  });
}
