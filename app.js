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

app.post('/thankyou', (req, res) => {

const order = {
    name: req.body.name,
    email: req.body.eAddress,
    flavor: req.body.Flavor,
    cone: req.body.method,
    toppings: req.body.toppings,
    comments: req.body.comments
}
    console.log(order);

    res.render('thankYou', { order })
});


app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`);
});