const mongoose = require('mongoose');
const port = 3000;

//MongoDB Connection
mongoose.connect('mongodb://localhost:27017/BIT', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, res) => {
    var message = err ? 'Connection Error' : 'Connection Stablished'
    console.log(message);
});