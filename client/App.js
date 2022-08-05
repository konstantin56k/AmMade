import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Location from "./Components/Location";
import Error from "./Components/Error";
import Gallery from "./Components/Gallery";
import Delivery from "./Components/Delivery";
import Contacts from "./Components/Contacts";
import HomePage from "./Components/HomePage";

function App() {
    return (
        <div className="app">
            <Navbar />
            <Routes>
                <Route exact path='/' element={<HomePage />}/>
                <Route path='/Location' element={<Location />}/>
                <Route path='/Gallery' element={<Gallery />}/>
                <Route path='/Delivery' element={<Delivery />}/>
                <Route path='/Contacts' element={<Contacts />}/>
                <Route path='*' element={<Error />} />
            </Routes> 
        </div>
    );
};

export default App;