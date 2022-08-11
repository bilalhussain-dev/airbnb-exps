// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import ListExperiences from './components/ListExperiences';
import Data from './components/Data';
import testData from './testData';
// import TestData from './testData';
function App() {

  // const dataFullFilled = testData.map(data => {
  //   // Return data in Sepreate component
  //   return <Dest
  // });

  console.log(testData)
  return (

    <div className="App">
      {/* {dataFullFilled} */}
      <Navbar />
      <Hero />
      <ListExperiences />
      <Data />
    </div>
  );
}

export default App;
