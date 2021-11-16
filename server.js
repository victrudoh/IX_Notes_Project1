const path = require("path");

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStoreSession = require("connect-mongodb-session")(session);
const csrf = require('csurf');
const flash = require("connect-flash");

const port = process.env.PORT || 3030;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.set("view engine", "ejs"); // template engine
app.set("views", path.join(__dirname, "views")); // setting views directory
app.use(express.static(path.join(__dirname, "public"))); // static files directory

// const adminRouter = require("./routes/admin.routes");
const galleryRouter = require("./routes/gallery.routes");
// const authRouter = require("./routes/auth.routes");

app.use("/", galleryRouter);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});