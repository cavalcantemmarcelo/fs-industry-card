const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

const companies = require("../data.json");

app.get("/api/companies", (req, res) => {
  const uniqueCompanies = companies.items.filter(
    (company, index, self) =>
      index === self.findIndex((c) => c.uuid === company.uuid)
  );
  res.json(uniqueCompanies);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
