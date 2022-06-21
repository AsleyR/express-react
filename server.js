const express = require("express");

// Init express
const app = express();

// Serve Customer Api
app.get("/api/customers", (req, res) => {
  const costumers = [
    { id: 1, firstName: "Michael", lastName: "Jackson" },
    { id: 2, firstName: "Arthur", lastName: "Doe" },
    { id: 3, firstName: "Jessica", lastName: "Wallace" },
  ];

  res.json(costumers);
});

// Set up port
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
