import './App.css';
import Nav from './components/Nav'
import background from "./assets/bg.png";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, backgroundRepeat:"no-repeat", backgroundSize: "cover" }}>
        <Nav/>
    </div>
  );
}

export default App;
