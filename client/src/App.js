import './App.css';
import Home from "../src/pages/Home/Home";
import { Route, Routes } from 'react-router-dom';
import UserRegister from './pages/UserRegister/UserRegister';
import UserLogin from './pages/UserLogin/UserLogin';
import UserHome from './pages/UserHome/UserHome';

function App() {
  return (
    <div className='app_main' >
   
    <Routes>
      <Route path='/'  element = {  <Home/>}  />
      <Route path='/user/home'  element = {<UserHome/>}  />
      <Route path='/user/register'  element = {<UserRegister/>}  />
      <Route path='/user'  element = {  <UserLogin/>}  />
    </Routes>
    </div>
  );
} 

export default App;
