
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Blogs from './components/Blogs/Blogs';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/blogs' element={<Blogs />}>Blogs</Route>
        <Route path='/about-me' element={<AboutMe />}>About Me</Route>
        {/* <Route path='/checkout' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        }>Checkout</Route> */}
        <Route path='/register' element={<Register />}>Register</Route>
        <Route path='/login' element={<Login />}>Login</Route>
      </Routes>
    </div>
  );
}

export default App;
