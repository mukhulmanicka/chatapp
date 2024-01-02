// import express to run http server
const express = require("express");
const cors = require("cors");
const axios = require("axios");

// call this server from any other origin
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  // get or create user on ChatEngine
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "fe74037c-8012-44ee-b562-d782cc786535" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

// run app on port 3001
app.listen(3001);