const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('csv/data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {    //to create synchronicity - i.e. after the data is recieved
    let rank = 0;

    //calculating the number of labs and appending it in the results
    results.forEach((result) => {
      let totalLabs = parseInt(result['# of Skill Badges Completed in Track 1']) + parseInt(result['# of Skill Badges Completed in Track 2'])
      result.totalLabs = totalLabs
    })
    
    //descending sort on the basis of total number of labs completed

    results.sort((a, b) => {
      if(b.totalLabs - a.totalLabs === 0)
         return a["Student Name"] > b["Student Name"] ? 1 : -1  //sorting in ascending order by name
      return (b.totalLabs - a.totalLabs)
    })

    //setting first person to have rank 1
    results[0].rank = ++rank

    //giving each person a rank according to the number of labs completed
    for(let i = 1; i < results.length; i++){

      
      if(results[i].totalLabs === results[i-1].totalLabs){
        results[i].rank = rank      //if the no of labs are same, give same rank
      }
      else{
        results[i].rank = ++rank    //increasing the rank only if it is not equal to the previous rank - leveraging the fact that the array is already reverse sorted
      }
    }

    //creating a file called participantData
    fs.writeFileSync(
      "src/participantData.json",
      JSON.stringify(results),
      (err) => {
        if (err) throw err;
        console.log("Data saved!");
      }
    );
  });





