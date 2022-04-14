import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import Reviews from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/Products' element={<Products></Products>}>Products</Route>
        <Route path='/orders' element={<Orders></Orders>}>Orders</Route>
        <Route path='/register' element={<Reviews></Reviews>}>Register</Route>
        <Route path='/login' element={<Login></Login>}>Login</Route>
      </Routes>
    </div >
  );
}

export default App;
