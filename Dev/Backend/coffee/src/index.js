// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import dbConnect from "./db/index.js";

dotenv.config({ path: "./.env" });
dbConnect()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at PORT : ${process.env.PORT}`);
        
    })
})
.catch((e)=>{
    console.log("Connection Failed.",e); 
})















































































// const app = express();

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

//         app.on("error", (e) => {
//             console.error("Error : ", e);
//             throw e;
//         });

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port : ${process.env.PORT}`);
//         });
//     } catch (e) {
//         console.error("Error : ", e);
//         throw e;
//     }
// })();
