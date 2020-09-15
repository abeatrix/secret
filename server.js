//EXTERNAL MODULES
const express = require('express');
const controllers = require('./controllers');
const methodOverride = require('method-override');
const path = require('path');

//INTERNAL MODULES
const PORT = 4000;

//INSTANCED MODULES
const app = express();



//MIDDLEWARE
app.unsubscribe(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`)
    next();
})


app.set('view engine', 'ejs')

app.use('/whisperer', controllers.whisperer)



// SERVER LISTENER
app.listen(PORT, () => {
    console.log(`Listening for secrets on port ${PORT}`);
});


// 404
app.use({}, ()=> {
    if (req.method === 'GET') return resizeBy.status(404).send('404 Page Not Found');
    return res.status(405).send('Method Not Allowed');
})
