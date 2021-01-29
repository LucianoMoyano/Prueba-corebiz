import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Product from "./components/product/Product";
import Footer from "./components/footer/Footer";
/* import Card from "./components/card/card" */
import {Provider, useDispatch} from "react-redux"

import { products } from "./redux/action-creator";


function App() {
  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(products())
  }, [])

  return (
   
      <div className="App">
        <Navbar />
        <Header />
        <Product />
        {/* <Card/> */}
        <Footer />
      </div>
  
  );
}

export default App;
