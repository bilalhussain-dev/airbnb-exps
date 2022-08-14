// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import ListExperiences from './components/ListExperiences';
import Data from './components/Data';

import Fake from './components/Fake';
import data from './api-data/data';
// import testData from './testData';
// import TestData from './testData';
function App() {

  // const dataFullFilled = testData.map(data => {
  //   // Return data in Sepreate component
  //   return <Dest
  // });

  // console.log(testData)

  // const names = ["banana", "apple", "peach"];
  // const turnedToUpperCase = names.map(name => {
  //   return name[0].toUpperCase() + name.slice(1);
  // });
  // console.log(names)
  // console.log(turnedToUpperCase)

  const fakeData = data.map(item => {
    return <Fake key={item.id} item={item}> </Fake>
  });

  console.log(fakeData);


  return (


    <div className="App">
      {/* {dataFullFilled} */}
      <Navbar />
      <Hero />
      <ListExperiences />
      <Data />
      <div className='posts'>{fakeData}</div>
    </div>
  );
}

export default App;
