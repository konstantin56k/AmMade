import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <div>
                        <h1>Landing page</h1>
                    </div>
                }/>
                <Route path='test' element={
                    <div>
                        <h1>Location</h1>
                    </div>
                }/>
            </Routes> 
        </BrowserRouter>
    );
};

export default App;