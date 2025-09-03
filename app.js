// app.js
import express from "express";
import bodyParser from "body-parser";

// import routers
import assignmentsRouter from "./routes/assignments.js";
import accountsRouter from "./routes/accounts.js";

const app = express();
const port = 4000;

app.use(bodyParser.json());

// base route
app.get("/", (req, res) => {
  return res.send("Hello Teacher!!");
});

// Group routes
app.use("/assignments", assignmentsRouter); // CRUD + comments
app.use("/accounts", accountsRouter);       // CRUD accounts

// start server
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
