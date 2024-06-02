const express = require('express');
const db = require('better-sqlite3');

//Set up connections to DBs
const sqlNews = new db('news.db');
const sqlUni = new db('universities.db');

sqlUni.pragma('journal_mode = WAL');
sqlNews.pragma('journal_mode = WAL');

//Express initilazation
const app = express();
const PORT = 5000;
const approvedOrigins = ['http://localhost:4200', 'http://localhost:80'];
const CORSHandler = (req, res, next) => {
  let origin = req.headers.origin;
  if (approvedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');
  }
  next();
};

//Retrive all data from DBs
const uniData = sqlUni.prepare('select * from university').all();
const newsData = sqlNews.prepare('select * from news').all();

app.use(CORSHandler);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.get('/', (req, res) => {
  res.send('Root path. Nothing to look');
});

app.get('/api/universities', (req, res) => {
  const query = req.query.name;
  const filteredData = uniData.filter((uni) =>
    uni.name.toLowerCase().includes(query)
  );
  res.send(filteredData);
});

app.get('/api/news', (req, res) => {
  res.send(newsData);
});
