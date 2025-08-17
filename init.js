const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(()=>{
console.log("Connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

let allChats = [
 
 {
  from:"Neha",
  to:"Priya",
  msg:"Send me your exam sheets",
  created_at:new Date()
  },  
  {
  from:"Kumar",
  to:"Rohan",
  msg:"Send me some fruits",
  created_at:new Date()
  },
  

];

Chat.insertMany(allChats);