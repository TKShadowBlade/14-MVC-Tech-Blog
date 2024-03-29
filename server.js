const express = require('express');
const sequelize = require('./config/connection');
const path = require('path');
const helpers = require ('./utils/helpers');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const hbs = exphbs.create({ helpers });
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3001;
const sequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: 'My own secret',
    cookie: { maxAge: 40000 },
    resave: false,
    saveUninitialized: true,
    store: new sequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(require('./controllers/'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(routes);
app.listen(PORT, () => {
    console.log(`Listening now on port ${PORT}!`);
    sequelize.sync({ force: false });
});