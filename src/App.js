import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Home/About/About';
import Classroom from './components/Home/Classroom/Classroom';
import Home from './components/Home/Home/Home';
import Login from './components/Home/Login/Login';
import Header from './components/Shared/Header';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/classroom' element={<Classroom></Classroom>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

      </Routes>
    </div>
  );
}

export default App;
