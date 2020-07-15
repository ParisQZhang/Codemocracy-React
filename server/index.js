const express = require('express');
const app = express();
const port = 3053;
const router = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser());
app.use(express.json());
app.use(router);
app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port} 🚀🚀♥️💡🔥`);
});
