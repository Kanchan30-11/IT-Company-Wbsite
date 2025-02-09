// App.jsx
import React from "react";

import './index.css';
import Navbar from "./component/Navbar";
import { Outlet } from "react-router";
import Chatbot from "./Chatbot";

const App = () => {

  return (
    <div className="flex flex-col min-h-screen font-sansation">
      <Navbar /> 
      <div className="flex-grow font-sansation">
      <Chatbot/>
        <main className=""> 
          <Outlet />
        </main>
      </div>
     
    </div>
  );
};

export default App;
