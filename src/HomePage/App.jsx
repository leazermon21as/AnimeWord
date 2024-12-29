import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Main/Main';
import Populary from './Populary/Populary';
import Anime from '../HomePage/Populary/Anime';
import Lates from '../HomePage/Latest-Release/Lates';

// PAGE ======================
import About from '../AboutUs/About'; 
import Libary from '../Libary/Libary'
import List from '../list/List'
import './App.css';

function Home () {
  return (
    <>
      <Header />
      <Main />
      <Populary />
      <Anime />
      <Lates />
    </>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/libary' element={<Libary />} />
        <Route path='/list' element={<List />} />
      </Routes>
    </Router>
  );
}
