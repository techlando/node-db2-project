// DO YOUR MAGIC
const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    res.json('foo')
})

router.get('/', async (req, res, next) => {
    res.json('cr')
})

router.post('/', async  (req, res, next) => {
    res.json('meow')
})



module.exports = router;