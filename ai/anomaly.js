const tf = require('@tensorflow/tfjs');

async function detectAnomaly(features) {

    const model = tf.sequential();

    model.add(tf.layers.dense({
        units: 8,
        inputShape: [4],
        activation: 'relu'
    }));

    model.add(tf.layers.dense({
        units: 1,
        activation: 'sigmoid'
    }));

    model.compile({
        optimizer: 'adam',
        loss: 'binaryCrossentropy'
    });

    const prediction = model.predict(tf.tensor([features]));

    return prediction.dataSync()[0];
}

module.exports = detectAnomaly;