const setup = require('./starter-kit/setup');
const fetchWorkout = require('./fetchWorkout');

exports.handler = async (event, context, callback) => {
    // For keeping the browser launch
    context.callbackWaitsForEmptyEventLoop = false;
    const browser = await setup.getBrowser();
    exports.run(browser).then(
        (result) => callback(null, result)
    ).catch(
        (err) => callback(err)
    );
};

exports.run = async (browser) => {
    const workout = await fetchWorkout();
    return workout;
};
