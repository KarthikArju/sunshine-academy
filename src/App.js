import {React,useRef} from "react";
import "./App.css";
import Home from "./pages/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplyOnline from "./pages/apply_online/apply_online";
export default function App() {
    return (
      <>
      <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/home" index element={<Home />} />
            <Route path="/apply-online" element={<ApplyOnline/>} />
          </Route>
        </Routes> 
      </>
        
      
    );
}
  
  



