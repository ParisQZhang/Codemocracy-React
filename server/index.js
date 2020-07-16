const express = require('express');
const app = express();
const port = 3053;
const router = require('./routes');
const cors = require('cors');

app.use(cors());
app.use(express.json()); //won't have access to req.body if no json() -> bodyparser -> during post requests
app.use(router);
app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port} 🚀🚀♥️💡🔥`);
});
