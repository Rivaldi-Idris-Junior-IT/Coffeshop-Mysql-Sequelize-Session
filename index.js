import express from "express";
import FileUpload from "express-fileupload";
import db from "./config/Database.js";
import cors from "cors";
import session from "express-session";
import SequelizeStore from "connect-session-sequelize";
import dotenv from "dotenv";

import UserRoute from "./routes/UserRoute.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import AuthRoute from "./routes/AuthRouter.js";
dotenv.config();

const app = express();

// (async()=>{
//     await db.sync();
// })();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db:db
})


app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,    
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(UserRoute);
app.use(CategoryRoute);
app.use(ProductRoute);
app.use(AuthRoute);

app.listen(process.env.APP_PORT, ()=> {
    console.log('Server running at port 5000')
});