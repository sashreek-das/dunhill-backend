const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

// Import the router
const rootRouter = require("./routes/index");

// Use the router with the correct path
app.use("/api/v1/", rootRouter); // Added a forward slash at the beginning

const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
