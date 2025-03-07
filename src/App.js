import { Browser, Routes, Route, BrowserRouter } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
