// const path = require('path');
// const express = require('express');
// // Import express-session
// const session = require('express-session');
// const exphbs = require('express-handlebars');

// const routes = require('./routes');
// const sequelize = require('./config/connection');
// //const helpers = require('./utils/helpers');

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Set up sessions
// const sess = {
//   secret: 'Super secret secret',
//   resave: false,
//   saveUninitialized: true,
// };

// app.use(session(sess));

// const hbs = exphbs.create({ helpers });

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });

const express = require('express');
const routes = require('./routes');
const session = require('express-session');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const path = require('path');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    resave: false,
    saveUninitialized: true,
}

app.use(session(sess));

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });