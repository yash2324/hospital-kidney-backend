const express = require("express");
const app = express();
app.listen(3000);
const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: true,
      },
    ],
  },
];
app.use(express.json());

app.get("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  const numberOfHealthyKidneys = johnKidneys.filter(
    (kidney) => kidney.healthy === true
  ).length;
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfUnhealthyKidneys,
    numberOfHealthyKidneys,
  });
});
app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "done",
  });
});
