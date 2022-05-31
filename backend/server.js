const express = require("express");
const dotend = require("dotend").config();
const port = process.env.PORT || 5000;

const app = express();

app.listend(port);
