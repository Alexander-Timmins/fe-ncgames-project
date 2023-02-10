import Header from './components/Header';
import Navbar from './components/Navbar';
import Review from './components/Review';
import Users from './components/User';
import Home from './components/Home';
import Categories from './components/Categories';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState('tickle122')

  return (
    <div className='App'>
      <Header/>
      <Navbar user={user}/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/reviews' element={<Categories />}></Route>
        <Route path='/reviews/:category' element={<Categories />}></Route>
        <Route path='/review/:review_Id' element={<Review user={user}/>}></Route>
        <Route path='/users' element={<Users setUser={setUser}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
