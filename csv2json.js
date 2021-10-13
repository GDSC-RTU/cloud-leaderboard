const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('csv/data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {    //to create synchronicity - i.e. after the data is recieved
    
    //calculating the number of labs and appending it in the results
    results.forEach((result) => {
      let totalLabs = parseInt(result['# of Skill Badges Completed in Track 1']) + parseInt(result['# of Skill Badges Completed in Track 2'])
      result.totalLabs = totalLabs
    })
    
    //descending sort on the basis of total number of labs completed
    //if labs are same, sort on the basis of ascending Student Name 
    results.sort((a, b) => {
      if(b.totalLabs - a.totalLabs === 0){
         return a["Student Name"] > b["Student Name"] ? 1 : -1  //sorting in ascending order by name
      }
      return (b.totalLabs - a.totalLabs)
    })

    //creating a file called participantData
    fs.writeFileSync(
      "src/participantData.json",
      JSON.stringify(results),
      (err) => {
        if (err) throw err;
        console.log("Data file has been saved!");
      }
    );
  });

