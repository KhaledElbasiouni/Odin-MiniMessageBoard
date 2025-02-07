const express = require("express");
const path = require("node:path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const indexRouter = require("./routes/indexRouter.js");

app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use((error, req, res, next) => {
  console.error(error);

  res.status(500).send();
});
