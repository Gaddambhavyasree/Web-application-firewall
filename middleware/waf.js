const AttackLog = require('../models/AttackLog');
const detectAnomaly = require('../ai/anomaly');

const suspiciousPatterns = [
    /<script>/i,
    /UNION SELECT/i,
    /DROP TABLE/i,
    /OR 1=1/i,
    /\.\.\//i,
    /javascript:/i,
    /SELECT \*/i,
    /INSERT INTO/i,
    /DELETE FROM/i
];

const waf = async (req, res, next) => {

    try {

        const url = req.url;
        const body = JSON.stringify(req.body || {});
        const fullPayload = url + body;

        for (let pattern of suspiciousPatterns) {

            if (pattern.test(fullPayload)) {

                await AttackLog.create({
                    ip: req.ip,
                    url: req.url,
                    payload: body,
                    attackType: 'Rule-Based Attack'
                });

                return res.status(403).json({
                    success: false,
                    message: 'Blocked by WAF'
                });
            }
        }

        const features = [
            url.length,
            body.length,
            (fullPayload.match(/[<>"'%;()&+]/g) || []).length,
            req.query ? Object.keys(req.query).length : 0
        ];

        const anomalyScore = await detectAnomaly(features);

        if (anomalyScore > 0.9) {

            await AttackLog.create({
                ip: req.ip,
                url: req.url,
                payload: body,
                attackType: 'AI Anomaly Detection'
            });

            return res.status(403).json({
                success: false,
                message: 'Blocked by AI WAF'
            });
        }

        next();

    } catch (error) {
        console.log(error);
        next();
    }
};

module.exports = waf;