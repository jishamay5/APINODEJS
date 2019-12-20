const express = require('express');
const router = express.Router();

router.get('/:name?', (req, res, next) => {
    const name = req.params.name;
    if (name == null) {
        res.status(200).json({
            message: 'Hello stranger',
            name: name

        });
    } else {
        res.status(200).json({
            message: 'Hello ' + name
        })
    }
});


module.exports = router;