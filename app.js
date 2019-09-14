const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('common'));

const playstore = require('./playstore-data');

app.get('/apps', (req, res) => {
    
    const {search = '', sort} = req.query;

    if(sort) {
        if(!['rating', 'app'].includes(sort)) {
            return res
                .status(400)
                .send('Sort must be one of rating or app');
        }
    }

    


    res
        .json(results);
});



app.listen(8000, () => {
    console.log('Server started on Port 8000');
});

