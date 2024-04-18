const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressSession = require('express-session');

const port = process.env.PORT || 4000;

const newPostController = require('./controllers/newPost');
const homeController = require('./controllers/home');
const storePostController = require('./controllers/storePost');
const getPostController = require('./controllers/getPost');
const newUserController = require('./controllers/newUser');
const storeUserController = require('./controllers/storUser');
const loginController = require('./controllers/login');
const loginUserController = require('./controllers/loginUser');
const logoutController = require('./controllers/logout');
const myPostsController = require('./controllers/myPosts')

const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({ secret: 'keyboard cat' }));

const fileUpload = require('express-fileupload');

app.use(fileUpload());

const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware');
const authMiddleware = require('./middleware/authMiddleware');
const validateMiddleWare = require('./middleware/validateMiddleware');
app.use('/posts/store', validateMiddleWare);

global.loggedIn = null;
app.use("*", (req, res, next) => {
     loggedIn = req.session.userId;
     next();
});

mongoose.connect('mongodb+srv://paylakvagharshyan:fmf7asWRywJnDjGw@webapp.pz2torz.mongodb.net/my_database', {
     useNewUrlParser: true,
     serverSelectionTimeoutMS: 30000,
     socketTimeoutMS: 45000
}).then(() => {
     console.log('MongoDB connected');
}).catch(err => {
     console.error('MongoDB connection error:', err);
});

app.get('/', homeController);
app.get('/about', (req, res) => {
     res.render('about');
});
app.get('/contact', (req, res) => {
     res.render('contact');
});
app.get('/post/:id', getPostController);
app.get('/posts/new', authMiddleware, newPostController);
app.get('/auth/myPosts', authMiddleware, myPostsController);
app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController);
app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController);
app.get('/auth/logout', logoutController);

app.post('/posts/store', authMiddleware, storePostController);
app.post('/users/register', redirectIfAuthenticatedMiddleware, storeUserController);
app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController);

app.use((req, res) => res.render('notfound'));

app.listen(port, () => {
     console.log(`App listening on port ${port}`);
});
