const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

// static file-serving middleware
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));
app.use('/public', express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

app.post('/', async (req, res, next) => {
    try {
        res.send(req.body)
    }
    catch(error) {
        next(error)
    }
})

app.listen(process.env.PORT || 8080, () => {
    console.log('Server running on port 8080');
});

module.exports = app;