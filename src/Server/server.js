const express = require('express')
const app = express()
const cors = require("cors");
const usersRoutes = require("./routes/productsRoutes");

app.use(cors());

app.use(express.static(__dirname + '/static'))

app.use("/api", usersRoutes);


app.listen(8000)
