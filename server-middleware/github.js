const bodyParser = require("body-parser");
const app = require("express")();
const axios = require("axios");

app.use(bodyParser.json());

const headers = {
  "Content-Type": "application/json;charset=UTF-8",
  Authorization: "token " + process.env.GITHUB_TOKEN,
};

app.get("/:username", (req, res) => {
  try {
    const { username } = req.params;

    axios
      .get(`https://api.github.com/users/${username}`, {
        headers,
      })
      .then((response) => {
        res.json(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        res.status(500).json({ message: error.response.data.message });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

app.get("/:username/repos", (req, res) => {
  try {
    const { username } = req.params;
    axios
      .get(`https://api.github.com/users/${username}/repos`, { headers })
      .then((response) => {
        res.json(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        res.status(500).json({ message: error.response.data.message });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = app;
