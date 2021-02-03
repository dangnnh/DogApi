import './App.css';
import Alllist from './Components/Alllist'
import Breed from './Components/Breed'
import Browse from './Components/Browse'
import Sub from './Components/Sub'
import Random from './Components/Random'
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

const allList = () => <Alllist></Alllist>;
const ranDom = () => <Random></Random>;
const breed = () => <Breed></Breed>;
const browse = () => <Browse></Browse>;
const sub = () => <Sub></Sub>;
function App() {
  return (
    <div className="App">
      <p>Endpoints</p>
      <div>
        <Router>
          <div className="Endpoints-bar">
            <Link to='/' className="Endpoint">List all breeds</Link>
            <Link to='/random' className="Endpoint">Random image</Link>
            <Link to='/breed' className="Endpoint">By breed</Link>
            <Link to='/sub' className="Endpoint">By sub-breed</Link>
            <Link to='/browse' className="Endpoint">Browse breed list</Link>
          </div>
          <div>
            <Route exact path='/' component={allList} className="a"></Route>
            <Route path='/random/' component={ranDom}></Route>
            <Route path='/breed/' component={breed}></Route>
            <Route path='/sub/' component={sub}></Route>
            <Route path='/browse/' component={browse}></Route>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
