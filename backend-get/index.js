const express = require("express");
const app = express();
const axios = require('axios');
const cors = require("cors");
app.use(cors());



//fetch all

app.get("/tasks", async (req, res) => {

  try {
    const response = await axios ({
      url: 'https://jsonplaceholder.typicode.com/users/1/todos',
      method: "get",
    });
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({message:err});
  }
});

//fetch task by id

app.get("/tasks/:id", async (req, res) => {

  try {
    const response = await axios ({
      url: 'https://jsonplaceholder.typicode.com/users/1/todos',
      method: "get",
    });
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({message:err});
  }
});

const port = 5000;
app.listen(port, () => {
  console.log("Express listening at 5000");
});