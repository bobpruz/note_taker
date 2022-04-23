const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");

// Express middleware
const PORT = process.env.PORT || 3001;
const app = express();

// Use Routes
// app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.use(express.static("public"));

// parse json data
app.use(express.json());

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT , () => 
{
    console.log(`API server now on port 3001!`);
});
