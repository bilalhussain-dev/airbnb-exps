// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import ListExperiences from './components/ListExperiences';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ListExperiences />
    </div>
  );
}

export default App;
