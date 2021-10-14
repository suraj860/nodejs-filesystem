const express = require("express");

const app = express();

const fs = require("fs");

const port = 3001

//get the file
app.get("/files", (req, res) => {

  fs.readdir("./files/", (err, dir) => {
    if (err) {

      throw err;

    }
//if any file is present
    if (dir.length) {

      res.status(200).send("file is created");

    } else {

      res.status(404).send("This folder is empty ,please create a file");

    }
  });
});

//create a file 
app.post("/files", (req, res) => {

  const currDate = new Date();

  const fileName = `${currDate.getDate()} - ${currDate.getMonth()} -${currDate.getFullYear()}.txt`;

  fs.writeFile(`./files/${fileName}`, `${currDate}`, (err) => {

    if (err) throw err;

    console.log("The file has been saved!");

    res.status(200).send("Your file is successfully created");

  });

});

app.listen(port, () => {
  console.log("suraj your server started");
});
