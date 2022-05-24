import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login/Login';
import Products from './Pages/Products/Products';
import Register from './Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Blog from './Pages/Blog/Blog';
import NotFound from './Pages/Shared/NotFound/NotFound';
import AddProduct from './Pages/AddProduct/AddProduct';
import ManageProduct from './Pages/ManageProduct/ManageProduct';
import MostSell from './Pages/MostSell/MostSell';
import Services from './Pages/Services/Services';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/addproduct' element={
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>}>
        </Route>
        <Route path='/manage' element={
          <PrivateRoute>
            <ManageProduct></ManageProduct>
          </PrivateRoute>}>
        </Route>
        <Route path='/product/:productId' element={
          <PrivateRoute>
            <ManageProduct></ManageProduct>
          </PrivateRoute>}>
        </Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/mostsells' element={<MostSell></MostSell>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
