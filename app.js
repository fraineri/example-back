require("dotenv").config();

const express = require("express");
const axios = require("axios");
const AWS = require("aws-sdk");
const cloudwatchlogs = new AWS.CloudWatchLogs();

const logGroupName = "my-log-group";
const logStreamName = "my-log-stream";

const app = express();
const port = 8080;

app.get("/", async (req, res) => {
  const response = await axios.get("https://api.publicapis.org/entries");
  console.log(response.data);
  res.send(
    JSON.stringify({
      status: "success",
      data: response.data,
    })
  );
});

app.listen(port, () => {
  console.log(process.env.KEY);
  console.log(`Example app listening on port ${port}`);
});
