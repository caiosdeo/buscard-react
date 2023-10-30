import { HashRouter, Route, Routes } from 'react-router-dom';
import './style/App.css';
import Navbar from './components/Navbar';
import Cartao from './components/Cartao';
import Config from './components/Config';
import Recarga from './components/Recarga';
import Footer from './components/Footer';
import { ToastContainer, Slide } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer transition={Slide}></ToastContainer>
      <HashRouter>
        <div className='content'>
          <span className="brand centered">Bus Card</span>
            <Navbar />  
            <div className="App centered">
              <Routes>
                <Route path='/' element={<Cartao />}/>
                <Route path='/recarga' element={<Recarga />}/>
                <Route path='/config' element={<Config />}/>
              </Routes>
            </div>
          <Footer />
        </div>
      </HashRouter>
    </>
  );
}

export default App;
