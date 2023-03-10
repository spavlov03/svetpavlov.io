import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Navigation from './components/Navigation';
import Main from './components/Main';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <NavBar/> */}
      <Navigation/>
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
