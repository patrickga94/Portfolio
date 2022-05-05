import React, {Fragment} from "react";
import {Route, Routes} from "react-router-dom"
import Home from "./components/Home";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";

function App() {
  return (
    <Fragment>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </Fragment>
  );
}

export default App;
