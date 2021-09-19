const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const  methodOverride = require('method-override')
const db = require('./middleware/connectDB.middleware');
const cookieParser = require('cookie-parser');
if (typeof localStorage === "undefined" || localStorage === null) {
  let LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}
app.use(db)
app.use(methodOverride('_method'))
const routeHome = require('./routes/home.route');
const routeAdmin = require('./routes/admin.route');
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))  
app.use('/', routeHome);
app.use('/admin', routeAdmin);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});