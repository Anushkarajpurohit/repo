const express = require("express");
const app = express();
const axios = require('axios');
const cors = require("cors");
app.use(cors());



//delete task

app.delete("/tasks/delete/:id", async (req, res) => {

    console.log ("Data deleted succeessfully");

  try {
    const response = await axios ({
      url: 'http://localhost:5000/tasks',
      method: "delete",
    });
   
    console.log ("Data fetched succeessfully");
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({message:err});
    console.log ("Data fetched succeessfully");
  }
});

const port = 7000;
app.listen(port, () => {
  console.log("Express listening at 7000");
});