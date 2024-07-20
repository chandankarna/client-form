import React from "react";
import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/defaults/Layout";
import HomeScreen from "./components/pages/HomeScreen";
import View from "./components/pages/View";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeScreen />} />
            <Route path="view" element={<View />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
