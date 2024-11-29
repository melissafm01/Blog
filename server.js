
const express = require("express");
const app = express();
const dotenv = require('dotenv');
const blogRoutes = require("./router/blogRoutes");



dotenv.config();

app.use(express.json());

app.use('/api', blogRoutes);


const PORT = process.env.PORT


app.listen(PORT, () => {
  console.log(`Server corriendo ${PORT}`);
});