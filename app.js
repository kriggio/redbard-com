const express = require('express');
const app = express();
const port = 8080;

const handlebars = require('express-handlebars');
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'planB',
    partialsDir: __dirname + '/views/partials/'
}));

app.use(express.static('public'))


app.get('/about', (req, res) => {
    console.log('about');
    res.render('about', {layout: 'index'});
});

app.get('/media', (req, res) => {
    console.log('media');

    res.render('media', {layout: 'index'});
});

app.get('/blog', (req, res) => {
    console.log('blog');

    res.render('blog', {layout: 'index'});
});

app.get('/projects', (req, res) => {
    console.log('projects');

    res.render('projects', {layout: 'index'});
});

app.get('/tos', (req, res) => {
    console.log('tos');

    res.render('tos', {layout: 'index'});
});

app.get('/privacypolicy', (req, res) => {
    res.render('privacypolicy', {layout: 'index'});
});

app.get('/', (req, res) => {
    res.render('main', {layout: 'index'});
});

app.get('/projects/gehenna', (req, res) => {
    res.render('gehenna', {layout: 'index'});
});

app.listen(port, () => console.log(`App listening to port ${port}`));

