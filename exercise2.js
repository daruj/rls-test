import express        from 'express';
import bodyParser     from 'body-parser';
import urlParse       from 'url-parse';

const app = express();

// parse body and cookies
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

/**
 * Exercise 2: Create an utility that given the following URLs extracts the different parts of it
 */
app.get('/extract-url', (req, res) => {
  res.send(req.query.url ? urlParse(req.query.url) : 'you have to provide an encoded url');
});

const port = 2016

app.listen(port, () => console.log(`Listening to ${port}`))
