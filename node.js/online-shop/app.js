const express = require('express')
const path =require('path');

const session = require('express-session');
const SessionStore = require("connect-mongodb-session")(session)

const homeRouter = require('./routes/home.router')
const productRouter = require('./routes/product.route')
const authRouter =require('./routes/auth.route')

const app = express();



app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.static(path.join(__dirname, "images")))

const STORE = new SessionStore({
    uri: 'mongodb://localhost:27017/online-shop',
    collection: 'session'
})
app.use(session({
    secret: "this is my secret secret to hash express session....",
    resave: true,
    saveUninitialized: false,
    
    store: STORE
}));

app.set('view engine', 'ejs')
app.set('views','views');

app.use('/', authRouter);

app.use('/', homeRouter)
app.use('/product',productRouter)

app.get('/',(req, res, next)=>{
    res.render('index')
})



app.listen(8000, ()=>{

console.log("hello server 8000");
})



