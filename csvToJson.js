// Simple CSV to JSON converter using Node.js
const fs = require('fs');
const csv = require('csvtojson');

const inputFile = 'incidents.csv';
const outputFile = 'public/incidents.json';

csv()
  .fromFile(inputFile)
  .then(json => {
    fs.writeFileSync(outputFile, JSON.stringify(json, null, 2));
    console.log('Conversion complete.');
  });
