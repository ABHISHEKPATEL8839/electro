import { Collection } from "mongoose";
import mongoose from "../config/db.js";
let CitySchema=mongoose.Schema({
    name:String,
    id:String,
    state:String

},{Collection:"city"})
let CityModel=mongoose.model("city",CitySchema)