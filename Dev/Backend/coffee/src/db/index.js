import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";

const dbConnect = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n Mongodb Connected !! DB Host : ${connectionInstance.connection.host}`);
    } catch(error){ 
        console.log("MongoDb Connection Failed.",`Check the below stack trace to resolve..\n`,error);
        process.exit(1);
    }
}
export default dbConnect;