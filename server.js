const express = require('express');
const helmet = require('helmet');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.engine('html', require('ejs').renderFile);

app.use('/components/', express.static(path.join(__dirname, 'components')));
app.use('/proprietary/', express.static(path.join(__dirname, 'proprietary')));

app.use(function (req, res, next) {
  res.locals.nonce = uuidv4();
  next();
});

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: [
        "'self'",
        function (req, res) {
          return "'nonce-" + res.locals.nonce + "'";
        },
      ],
      styleSrc: [
        "'self'",
        function (req, res) {
          return "'nonce-" + res.locals.nonce + "'";
        },
      ],
    },
  }),
);

app.get('/', function (req, res) {
  res.render(__dirname + '/index.html', { nonce: res.locals.nonce });
});

app.listen(3000);
