import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login/Login';
import Upload from './Pages/Upload/Upload';
import Products from './Pages/Products/Products';
import Register from './Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/upload' element={
          <PrivateRoute>
            <Upload></Upload>
          </PrivateRoute>}>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
