const server = require('./src/sever');
require('dotenv').config();
const port = process.env.PORT;
const express = require("express");
const app = express();

server.start(port)