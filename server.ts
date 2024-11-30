//setup a simple express servers
import express from 'express'

const app = express();
const __dirname = process.cwd();
const PORT = 1491;

app.use(express.static(__dirname + "/public"));


app.listen(PORT)
