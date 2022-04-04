import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Blogs from './Component/Blogs/Blogs';
import Dashbord from './Component/Dashbord/Dashbord';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Reviews from './Component/Reviews/Reviews';


function App() {
 
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="Reviews" element={<Reviews/>} />
        <Route  path='Dashbord' element={<Dashbord/>} />
        <Route  path='Blogs' element={<Blogs/>} />
        <Route  path='About' element={<About/>} />
        <Route  path='*' element={<NotFound/>} />
      </Routes>
    </div>  
)
}
export default App;



