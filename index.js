const uri = "mongodb+srv://lamenace4115:Emmanuel4115@cluster0.byxxd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const express = require('express');
const morgan = require('morgan');
const app = express();
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.get('/', (req, res) => {
    console.log(req.url);
    res.render('index', { message: 'Hello From Node.js' });
    });
    app.get('/contact', (req, res) => {
    console.log(req.url);
    res.render('index', { message: 'The Contact Page' });
    });
    app.get('/about', (req, res) => {
        res.render('index', { message: 'The About Page' });
    });

    app.get('*', (req, res) => {
        res.status(404).render('index', { message: 'Not Found' });
    });

    const PORT = 3000;
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    });
