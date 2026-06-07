const express = require('express');
const router = express.Router();
const AttackLog = require('../models/AttackLog');

router.get('/', async (req, res) => {

    try {

        const logs = await AttackLog.find()
            .sort({ timestamp: -1 });

        res.json(logs);

    } catch (error) {

        res.status(500).json({
            message: 'Server Error'
        });
    }
});

module.exports = router;