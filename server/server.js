// import express from 'express';
// import path from 'path';
// import morgan from 'morgan';

const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

// static file-serving middleware
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

app.listen(process.env.PORT || 8000, () => {
    console.log('Server running on port 8000');
});