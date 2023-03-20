const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
//routes imports
const playerRoutes = require('./src/api/players/player.routes');

dotenv.config();
const app = express();
//DB IMPORT
const db = require('./src/utils/db/db');
const cloudinary = require('cloudinary').v2;

db.connectDb();
cloudinary.config({
  cloud_name:process.env.CLOUDINARY_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET
})
const PORT = process.env.PORT || 5444;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//HEADERS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE"); //pemitimos estas operaciones
  res.header("Access-Control-Allow-Credentials", true); //permitimos que haya credenciales en nuestras peticiones
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
//CORS
app.use(
  cors({
    origin: [process.env.origin],
    credentials: true,
  })
);

//ROUTES
app.use('/player', playerRoutes);

app.use("*", (req, res, next) => {
  return res.status(404).json('Route not found');
});

app.use((error,req, res) => {
  return res.status(error.status || 500).json(error.message || "Unexpected error");
})

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
