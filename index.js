const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const db = require('./middleware/connectDB.middleware');

app.use(db)

const routeHome = require('./routes/home.route');
const routeAdmin = require('./routes/admin.route');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')))  
app.use('/', routeHome);
app.use('/admin', routeAdmin);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});