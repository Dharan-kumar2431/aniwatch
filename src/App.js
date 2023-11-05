import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route index Component={Home}/>
      </Routes>
    </Router>
  );
}

export default App;
