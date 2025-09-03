// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import dbConnect from "./db/index.js";

dotenv.config({ path: "./.env" });

dbConnect();






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
