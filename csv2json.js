const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('csv/data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    fs.writeFileSync(
      "src/participantData.json",
      JSON.stringify(results),
      (err) => {
        if (err) throw err;
        console.log("Data file has been saved!");
      }
    );
  });

