import { Routes, Route } from 'react-router-dom';
import './App.css';
import Booklist from './components/Booklist';
import BookDetail from './components/BookDetail';
import Footer from './components/Footer';
import Favorite from './components/Favorite';
import Navbar from './components/Navbar';




const App = ()=> {
  return (
    <div className="bg-[#ffdc73]">
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Booklist />} />
        <Route path='/books/:id' element={<BookDetail />} />
        <Route path='/favorite' element={<Favorite />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
