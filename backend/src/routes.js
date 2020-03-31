const express = require('express');

const routes = express.Router();

routes.get('/users', (req, res) => {
    return res.json({
        event: 'Semana Omnistack',
        user: 'Lemke',
        id: 1
    });
});

module.exports = routes;
