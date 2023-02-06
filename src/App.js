import Header from './components/Header';
import Navbar from './components/Navbar';
import Reviews from './components/Review';
import Comments from './components/Comments';
import Users from './components/User';
import Home from './components/Home';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/review' element={<Reviews />}></Route>
        <Route path='/review' element={<Comments />}></Route>
        <Route path='/user' element={<Users />}></Route>
      </Routes>
    </div>
  );
}

export default App;
