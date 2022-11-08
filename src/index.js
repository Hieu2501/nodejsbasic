
import express from 'express'
import viewEngine from './config/viewEngine';
import routes from './routes';
import connectDB from './config/connectDB';

const methodOverride = require('method-override')
const app = express()

require('dotenv').config()

const port = process.env.PORT

app.use(
  express.urlencoded({
      extended: true,
  }),
);
app.use(express.json());

app.use(methodOverride('_method'));

viewEngine(app);
routes(app)

connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})