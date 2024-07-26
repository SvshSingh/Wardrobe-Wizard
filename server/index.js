const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT;
const clothesRoutes = require("./routes/clothes");
const outfitsRoutes = require("./routes/outfits");
const path = require("path");
// const staticPath = path.join(__dirname, "/pictures");

app.use(cors({
  origin: ["http://localhost:3000", 'https://wardrobe-wizard-dj4o8nodd-svshsinghs-projects.vercel.app/'],
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
}))
app.use(fileUpload()); //default filesize is 1mb
// max size for the request body is 1mb
app.use(express.json({ limit: "1mb" }));
// server static files in the public folder
app.use("/public", express.static(path.join(__dirname, "../client/public")));

app.use("/api/clothes", clothesRoutes);
app.use("/api/outfits", outfitsRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
