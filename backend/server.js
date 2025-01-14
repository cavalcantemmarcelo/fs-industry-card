const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

const companies = require("../data.json");

app.get("/api/companies", (req, res) => {
  console.log("Request received at /api/companies");
  res.json(companies.items);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
