const BASE_URL = "https://nex-tv.vercel.app";

export default async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  const { username, password, action } = req.query;

  if (!username || !password) {
    return res.status(400).json({
      user_info: {
        auth: 0,
        status: "Disabled"
      }
    });
  }

  // TODO: Verify user from your database
  const validUser = true;

  if (!validUser) {
    return res.json({
      user_info: {
        auth: 0,
        status: "Disabled"
      }
    });
  }

  // Account Info
  if (!action) {
    return res.json({
      user_info: {
        auth: 1,
        status: "Active",
        username,
        password,
        exp_date: "1893456000", // Example expiry timestamp
        is_trial: "0",
        active_cons: "0",
        max_connections: "1",
        allowed_output_formats: ["ts", "m3u8"]
      },
      server_info: {
        url: "nex-tv.vercel.app",
        port: "443",
        https_port: "443",
        server_protocol: "https",
        timezone: "Asia/Karachi"
      }
    });
  }

  // Live Categories
  if (action === "get_live_categories") {
    return res.json([
      { category_id: "1", category_name: "Pakistan" },
      { category_id: "2", category_name: "Sports" },
      { category_id: "3", category_name: "Movies" }
    ]);
  }

  // Live Streams
  if (action === "get_live_streams") {
    return res.json([
      {
        num: 1,
        name: "PTV Sports",
        stream_type: "live",
        stream_id: 1,
        stream_icon: "",
        category_id: "2"
      }
    ]);
  }

  res.json([]);
}
