import mongoose from "mongoose";
import { DB_url } from "./conn";
mongoose.connect(DB_url)
.then(()=>{
    console.log("db conntected")
})
.then((err)=>{
    console.log("db not connected")
})
export default mongoose