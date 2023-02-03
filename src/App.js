import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import About from './pages/About'
import ArticlePage from './pages/ArticlePage';
import ArticlesList from './pages/ArticlesList';
import NotFound from './pages/NotFound'; 
function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <div className='text-center text-3xl mt-4'>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/articles" element={<ArticlesList/>}/>
    <Route path="/articles/:articleid" element={<ArticlePage/>}/>
    <Route path="*" element={<NotFound/>}/>
    </Routes>
    
   </div>
   </BrowserRouter>
  );
}

export default App;
