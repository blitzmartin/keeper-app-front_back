import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home';

function App() {

  return (
    <div className="App">
      <Router>
        <Header key="header"/>
        <Routes>
          <Route path="/" element={<Home key="home" />} />
        </Routes>
        <Footer key="footer" />
      </Router>
    </div>
  );
}

export default App;
