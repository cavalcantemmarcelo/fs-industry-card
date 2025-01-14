const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

const companies = require("../data.json");

app.get("/api/companies", (req, res) => {
  res.json(companies);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
