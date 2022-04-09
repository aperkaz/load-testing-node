const express = require("express");
const app = express();
const port = 3000;

const calculation = async () => {
  let val = 0;
  for (let i = 0; i < 500000000; i++) {
    val = i - val;
  }

  return val;
};

app.get("/", async (req, res) => {
  console.time("calculation");
  await calculation();
  console.timeEnd("calculation");

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
