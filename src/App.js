import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import AddProducts from './components/AddProducts';
import GetProducts from './components/GetProducts';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Mpesa from './components/Mpesa';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (

    <Router>
    <div className="App">
      <header className="App-header">
       <h1 className="text-primary">Welcome to Sokogarden-Buy and sell online</h1>
      
      </header>
    <nav>
      
      <Link to="/SignUp" className='btn btn-dark m-2 '>Sign up</Link>
      <Link to="/SignIn" className='btn btn-dark m-2'>Sign in</Link>
      <Link to="/"className='btn btn-dark m-2'>Get products</Link>
      <Link to="/AddProducts"className='btn btn-dark m-2'>Add products</Link>
      
      

      </nav>
      
    
      <Routes>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/AddProducts' element={<AddProducts/>}/>     
        <Route path='/' element={<GetProducts/>}/>
        <Route path='/Mpesa' element={<Mpesa/>}/>
         
        
      </Routes>

  
    </div>
      </Router>
  );
}

export default App;
