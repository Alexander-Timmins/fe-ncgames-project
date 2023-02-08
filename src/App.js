import Header from './components/Header';
import Navbar from './components/Navbar';
import Review from './components/Review';
import Users from './components/User';
import Home from './components/Home';
import AllReviews from './components/AllReviews';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/review' element={<AllReviews />}></Route>
        <Route path='/review/:review_Id' element={<Review />}></Route>
        <Route path='/users' element={<Users />}></Route>
      </Routes>
    </div>
  );
}

export default App;
