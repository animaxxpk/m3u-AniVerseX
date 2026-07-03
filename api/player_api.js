const BASE_URL = "https://nex-tv.vercel.app";

export default async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const { username, password } = req.query;

  // Demo Users
  const users = [
    {
      username: "ahmer",
      password: "8888",
      status: "Active",
      auth: 1,
      exp_date: "1783382400", // Change if needed
      is_trial: "0",
      active_cons: "0",
      max_connections: "1",
      allowed_output_formats: ["ts", "m3u8"]
    }
  ];

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(200).json({
      user_info: {
        auth: 0,
        status: "Disabled"
      }
    });
  }

  return res.status(200).json({
    user_info: {
      auth: user.auth,
      status: user.status,
      username: user.username,
      password: user.password,
      exp_date: user.exp_date,
      is_trial: user.is_trial,
      active_cons: user.active_cons,
      max_connections: user.max_connections,
      allowed_output_formats: user.allowed_output_formats
    },
    server_info: {
      url: "nex-tv.vercel.app",
      port: "443",
      https_port: "443",
      server_protocol: "https",
      timezone: "Asia/Karachi",
      timestamp_now: Math.floor(Date.now() / 1000)
    }
  });
}
