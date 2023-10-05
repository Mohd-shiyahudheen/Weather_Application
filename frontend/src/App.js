import './App.css';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom'
import Home from './Pages/Home';
import { Login } from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/login' element={ <Login/>} />
          </Routes>
        </main>
      </Router>
     
    </div>
  );
}

export default App;
