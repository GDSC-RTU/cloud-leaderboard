import './App.css';
import Leaderboard from './components/Leaderboard'

function App() {

  const data = require('./../src/participantData.json')
  console.log(data);

  return (
    <div className="App">
      <Leaderboard participantData={data}/>
    </div>
  );

}

export default App;
