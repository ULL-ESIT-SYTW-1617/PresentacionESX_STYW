const express = require('express')
const revealRunInTerminal = require('reveal-run-in-terminal')

const app = express();

app.use(revealRunInTerminal({
  publicPath: 'code',
  commandRegex: /node|babel-node|gulp/,
  log: true
}));

app.set('view engine', 'pug')
app.set('views', './slides')

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Babel & ESX'
  })
})

app.use(express.static('node_modules/reveal.js'));

app.listen(8080);
