import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import "dotenv/config";

const MONGO_PASS = process.env.MONGO_PASS;
const DB_NAME = process.env.DB_NAME;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: `mongodb+srv://vicRuiz:${MONGO_PASS}@cluster0.lcwk4.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
      ttl: 60 * 10,
    }),
  })
);

app.set("views", "src/views");
app.set("view engine", "ejs");


import homeRouter from "./src/routes/home.js";
import loginRouter from "./src/routes/login.js";
import logoutRouter from "./src/routes/logout.js";

app.use("/", homeRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(` 🚀 Server started at http://localhost:${PORT}`);
});

server.on("error", (err) => console.log(err));
