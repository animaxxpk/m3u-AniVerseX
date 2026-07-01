import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default async function handler(req, res) {

  const { user, pass } = req.query;


  if(!user || !pass){
    return res.status(401).send("Login required");
  }


  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("username", user)
    .eq("password", pass)
    .single();


  if(error || !data){
    return res.status(401).send("Wrong username or password");
  }


  const today = new Date();
  const expiry = new Date(data.expiry);


  if(today > expiry){
    return res.status(403).send("Account expired");
  }


  const playlist = process.env.PLAYLIST;


  res.setHeader(
    "Content-Type",
    "application/x-mpegURL"
  );


  res.send(playlist);

}
