const users = {
  ahmer: {
    password: "1234",
    expiry: "2026-12-31"
  }
};


export default function handler(req, res) {

  const {user, pass} = req.query;


  if(!users[user]){
    return res.status(401).send("User not found");
  }


  if(users[user].password !== pass){
    return res.status(401).send("Wrong password");
  }


  const today = new Date();
  const expiry = new Date(users[user].expiry);


  if(today > expiry){
    return res.status(403).send("Expired");
  }



  const playlist = `
#EXTM3U

#EXTINF:-1,My Channel
https://s3.ideationtec.live/Cartoon_Network/Cartoon_Network.m3u8

`;


  res.setHeader(
    "Content-Type",
    "application/x-mpegURL"
  );

  res.send(playlist);

}
