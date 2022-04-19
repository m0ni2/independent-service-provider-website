
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blogs from './Pages/Blogs/Blogs';
import Checkout from './Pages/Checkout/Checkout';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/blogs' element={<Blogs />}>Blogs</Route>
        <Route path='/about-me' element={<AboutMe />}>About Me</Route>
        <Route path='/checkout' element={<Checkout />}>Checkout</Route>
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
