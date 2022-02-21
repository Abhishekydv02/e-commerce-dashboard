import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'
import Login from './login'
import Register from './register'
import Header from './header'
import Addproduct from './addproduct'
import Updateproduct from './updateproduct'
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
     {/* <h1>E-com project</h1> */}

    <Routes>
      {/* <Route path='/' element={<h2>Home Page</h2>} /> */}
      <Route path='/login' element={<Login/>} />
      <Route path='/add' element={<Addproduct/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/update' element={<Updateproduct/>} />
    </Routes>
   

    </div> 
    
  );
}

export default App;
