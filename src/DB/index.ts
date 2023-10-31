import mongoose from "mongoose";

import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USER, DB_URL } from "@/Config";
// Connection configuration

const url = DB_URL;
export const connectDb = async () => {
  await mongoose.connect(url, {});
  console.log("conneted with database");
};


