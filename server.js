const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const controllers = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
	secret: "WhoTookACookieFromTheCookieJar",
	cookie: {},
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize,
	}),
};

app.use(session(sess));

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.json());
// FIXME: set to true or false?????
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(controllers);

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log(`Now Listening ${PORT}!`));
});
