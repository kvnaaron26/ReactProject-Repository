import React from 'react'
import './App.css';
import Item from './components/ItemListContainer/Item';

const Catalogo = () => {
    return (
        <div className='App'>
            <Item />
        </div>
    )
};

export default Catalogo;



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

