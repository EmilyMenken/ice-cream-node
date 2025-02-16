import express from 'express';

const app = express();

app.use(express.urlencoded ({ extended: true}));

app.use(express.static('public'));

app.set('view engine', 'ejs')

const PORT = 3000;

app.get('/', (req, res) => {
    res.render('home');
});

const orders = [];

app.post('thankYou', (req, res) => {

const order =
{}

});


app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`);
});