const mongoose = require('mongoose');
const port = 3000;
const app = require('./app');

//MongoDB Connection
mongoose.connect('mongodb://localhost:27017/BIT', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, res) => {

    if (err) {
        console.log('Connection Error', message);
    } else {
        console.log('Connection Stablished');

        app.listen(port, () => {
            console.log('Listening on port ', 3000);
        });
    }
});