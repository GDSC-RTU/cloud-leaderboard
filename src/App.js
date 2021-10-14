import './App.css';
import Leaderboard from './components/Leaderboard'

function App() {

  const data = require('./../src/participantData.json')
  console.log(data);

  return (
    <div className="App">
      <div className="heading"> 
        <h1>GDSC RTU Google Cloud Program Leaderboard</h1>
      </div>
      <Leaderboard participantData={data}/>
    </div>
  );

}

export default App;
