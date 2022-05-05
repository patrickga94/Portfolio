import React, {Fragment} from "react";
import {Route, Routes} from "react-router-dom"
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";

function App() {
  return (
    <Fragment>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
      </Routes>
      <Footer/>
    </Fragment>
  );
}

export default App;
