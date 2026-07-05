import { channels } from "../../../api/channels";
import { users } from "../../../api/users";

export default function handler(req,res){

const {user,pass,id}=req.query;

const account=users[user];

if(!account || account.password!==pass){

return res.status(401).end();

}

const ch=channels.find(c=>c.id===id);

if(!ch){

return res.status(404).end();

}

res.redirect(ch.stream);

}
