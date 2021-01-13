const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var sign = req.body.sign;
  var result;
  switch (sign) {
    case "-":
      result = num1 - num2;
      break;
    case "+":
      result = num1 + num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "*":
      result = num1 * num2;
      break;
  }

  res.send(`The result of the calculation is ${result}`);
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  var height = req.body.height / 100;
  var weight = parseFloat(req.body.weight);
  var bmiResult = weight / (height * height);
  res.send(`Your BMI is ${bmiResult.toFixed(2)}`);
});

app.listen(8181, function () {
  console.log("Server is running on port 8181!");
});
