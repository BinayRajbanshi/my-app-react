
import NavBar from './custom components/NavBar';
import React , {useState} from 'react';
import Home from './custom components/Home';
import { Routes, Route } from "react-router-dom";



function App() {

  const [mode , setmode] = useState("light");

  let toggleMode = () => {
    if( mode === "dark" ){
      setmode('light');
      document.body.style.backgroundColor='white'
    }
    if (mode === "light"){
      setmode('dark')
      document.body.style.backgroundColor= "pink"
    }
  }

  return (
    
    <>
      <NavBar title='Text Analyzer' propMode={mode} propToggleMode={toggleMode}/>
      {/* <MyName xyz="Anne Hathway" disease="Parkinsons"/>
      <BadBeer animal="Tiger" action="lick" curse='Bastard</i>'/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<ShopUs />} />
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/cardetails/:carID" element={<CarDetail/>}/>
        <Route path="/dataFetch" element={<APIDataFetch/>}/> */}
      </Routes>

      

  
    </>
  );
}

export default App;
