const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const upload = multer();

require('dotenv').config();

var app = express();

app.use(cors());
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/api/fileanalyse', upload.any(), (req, res, next) => {
  res.json({
    name: req.files[0].originalname,
    type: req.files[0].mimetype,
    size: req.files[0].size,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
