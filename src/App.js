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

  // console.log(testData)

  const names = ["banana", "apple", "peach"];
  const turnedToUpperCase = names.map(name => {
    return name[0].toUpperCase() + name.slice(1);
  });
  console.log(names)
  console.log(turnedToUpperCase)


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
