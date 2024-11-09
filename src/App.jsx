import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Maps from './Components/Maps';

function App() {
  return (

  <BrowserRouter>
  <Routes>
  <Route path='/map/:lat/:lng' element={<><Maps></Maps></>} ></Route>
  <Route path='/' element={<><Main></Main> <Footer></Footer></>} ></Route>
    <Route path='/:id' element={<><Main></Main></>}></Route>
  </Routes>
  </BrowserRouter>



  );
}

export default App;
