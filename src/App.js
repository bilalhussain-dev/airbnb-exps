// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import ListExperiences from './components/ListExperiences';
import Data from './components/Data';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ListExperiences />
      <Data />
    </div>
  );
}

export default App;
