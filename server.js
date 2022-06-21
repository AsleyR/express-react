const express = require("express");

// Init express
const app = express();

// Serve Customer Api
app.get("/api/customers", (req, res) => {
  const costumers = [
    {
      id: 1,
      firstName: "Michael",
      lastName: "Jackson",
      dateBirth: "02-10-2005",
    },
    { id: 2, firstName: "Arthur", lastName: "Doe", dateBirth: "23-04-2006" },
    {
      id: 3,
      firstName: "Jessica",
      lastName: "Wallace",
      dateBirth: "14-02-2005",
    },
    { id: 4, firstName: "Maynor", lastName: "Escoba", dateBirth: "28-12-2005" },
  ];

  res.json(costumers);
});

// Set up port
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
