const newman = require('newman');
// require('dotenv').config(); //If required to env file need run command npm i dotenv
 
newman.run({
    collection:`https://api.postman.com/collections/25113210-ed19f0d4-024b-4c42-80e0-0da7abda6099?access_key=${process.env.secretKey}`,
    // collection:require('./collection/collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
