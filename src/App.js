import './App.css';
import Leaderboard from './components/Leaderboard'

function App() {

  //importing the json data from produced file
  const data = require('./../src/participantData.json')

  return (
    <div className="App">
      <div className="heading"> 
        <h1>GDSC RTU Google Cloud Program Leaderboard</h1>
      </div>
      <Leaderboard participantData={data}/>

      <div className="team">
        Made with ❤️ by <a href="https://gdsc.community.dev/rajasthan-technical-university-kota/">Google DSC RTU</a>
      </div>
    </div>
  );

}

export default App;
