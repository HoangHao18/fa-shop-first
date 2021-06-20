import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import HeaderBar from './components/HeaderBar'
// import SimpleSlider from './components/simpleSlider'
// import HeaderSlider from './components/HeaderSlider'
// import ListProducts from './components/ListProducts'
// import MyButton from './components/MyButton'
// import MyTittle from './components/MyTitle'
// import SeparatorBar from './components/SeparatorBar'
// import FeaturedProduct from './components/FeaturedProduct'
// import FPSlider from './components/FPSlider'
// import ListBlogBox from './components/ListBlogBox'
import Footer from './components/Footer'
import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './page/Home';
import Login from './page/Login';
import About from './page/About';
import Contact from './page/Contact';
import Sale from './page/Sale';
import Cart from './page/Cart';
import Blog from './page/Blog';



import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actGetCurrentUserInforAsync } from './Store/currentuser/actions';
import { actSetHeaderGetInforUser } from './Store/user/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const ClientId = localStorage.getItem('client_id');
    const token = localStorage.getItem('access_token');
    const userID = localStorage.getItem('user_id');

    if(token){
      dispatch(actSetHeaderGetInforUser(userID,ClientId,token));
      dispatch(actGetCurrentUserInforAsync());
    } 
  },[])

  return (
    <Router>
      <div className="App">
        <HeaderBar/>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/sale" component={Sale}/>
          <Route path="/cart" component={Cart}/>  
          <Route path="/blog" component={Blog}/>  
        <Footer/>
      </div>

    </Router>
  );
}

export default App;
