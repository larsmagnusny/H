const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
    res.send({
      token: 'test1234'
    });
  });

  app.listen(81, () => console.log('API is running on http://localhost:81/login'));