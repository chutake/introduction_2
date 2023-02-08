import React from "react";
import Top from "./Top";
import Work from "./Work";
import Contact from "./Contact";
import Upbringing from "./Upbringing";
import NotFound from "./NotFound";
import "./App.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/Work" element={<Work />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Upbringing" element={<Upbringing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
