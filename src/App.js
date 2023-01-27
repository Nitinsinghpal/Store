import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import { Counter } from './Components/Counter';
import {  
  BrowserRouter ,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom';
import Test from './Components/Test';
import UsersAPI from './Components/API/UsersAPI';
import Users from './Components/Users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/test' element={<Test/>} />
        <Route path='/counter' element={<Counter/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/usersApi' element={<UsersAPI/>} />
        <Route path='/users' element={<Users/>} />
        

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
