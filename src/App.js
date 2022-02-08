import { useState } from 'react';
import './App.css';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  let [clicks, setClicks] = useState(0);

  function onAdd() {
    console.log("onAdd");
  }

  return (
    <div className='App'>
      
      <h1>Contador: {clicks}</h1>
      <ItemCount setClicks={setClicks}clicks={clicks} onAdd={onAdd} />

    </div>
  )
}

export default App;








// // import ItemListContainer from "./components/ItemListContainer";
// // import NavBar from "./components/NavBar";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// // Views 
// import Home from "./views/Home/Home";
// import About from "./views/About/About";
// import Contact from "./views/Contact/Contact";
// import Error from "./views/Error";

// // Components
// import Navigaton from "./components/Navigation/Navigation";


// const App = () => {
  
  //   // return (
    //   //   <>
    //   //     <NavBar />
    //   //     <Header greeting="Hola Kevin" /> 
    //   //   </>
    //   // );
    //   ///////////////////////////////////////////////////
    
    //   return (
      //     // <ItemListContainer />
      //     <Router>
      //       <div className='App'>
      //         <Navigaton />
      //       </div>
      //       <Routes>
      //         <Route path="/" element={<Home />} />
      //         <Route path="/about" element={<About />} />
      //         <Route path="/contact" element={<Contact />} />
      //         <Route path="*" element={<Error />} />
      //       </Routes>
      //     </Router>
      //   );
      // };
      
      // export default App;



//--PRESENTE--//

// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import NavBar from './components/NavBar/NavBar';

// const App = () => {
//   return (
//     <>
//     <NavBar />
//     <div className='App'>
//       <ItemListContainer />
//     </div>
//     </>
//   );
// };

// export default App;