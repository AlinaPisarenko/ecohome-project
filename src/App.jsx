import './styles/style.css';
import AllHouses from './components/AllHouses';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Review from './components/Review';
import Realtors from './components/Realtors';
import Features from './components/Features';
import { useState, useEffect } from 'react';

function App() {
  const [houses, setHouses] = useState([]);
  const [realtors, setRealtors] = useState([]);

  useEffect(() => {
    fetch(`https://portfolio-json-server.onrender.com/listings`)
      .then((r) => r.json())
      .then((data) => setHouses(data));
  }, []);

  useEffect(() => {
    fetch('https://portfolio-json-server.onrender.com/realtors')
      .then((r) => r.json())
      .then((data) => setRealtors(data));
  }, []);

  return (
    <div className='App'>
      <Header />
      <Realtors realtors={realtors} />
      <Navigation />
      <Features />
      <Review />
      <AllHouses houses={houses} />

      <Gallery />

      <Footer />
    </div>
  );
}

export default App;
