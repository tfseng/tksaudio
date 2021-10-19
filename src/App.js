import './App.css';
import Nav from './components/Nav'
import background from "./assets/bg_test_5.png";
import { faBorderNone } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, backgroundRepeat:"no-repeat", backgroundSize: "cover" }}>
        <Nav/>
    </div>
  );
}

export default App;
