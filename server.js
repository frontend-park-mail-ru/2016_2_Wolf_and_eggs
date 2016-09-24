let express = require('express');
let technologger = require('technologger');
let parser = require('body-parser');
let app = express();

app.use('/', express.static('public'));

app.use(parser.json());
app.use(technologger);

var emails = {};

app.post('/users', (req, res) => {

  let email = req.body.email;
  let name = req.body.user;

  if (email in emails) {
    emails[email].count++;
    res.send(emails[email]);
  }
  else {
    emails[email] = {name: name, count: 0, email: email};
    res.send(emails[email]);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`App started on port ${process.env.PORT || 3000}`);
});
