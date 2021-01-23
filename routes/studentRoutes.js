const express = require('express');
const api = express.Router();

/**
 * POST
 */

/**
 * GET
 */
api.get('/', () => {
    console.log('juju');
})

module.exports = api;