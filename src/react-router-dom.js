import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Factorial from "./Factorial";
import Events from "./Events"; // Ensure correct case
import Home from "./Home";

export default function Router1() {
    return (
        <Router>
            <div>
                <nav>
                    <ol>
                        <li><a href="/Home">Home</a></li>
                        <li><a href="/Events">Events</a></li> 
                        <li><a href="/Factorial">Factorial</a></li>
                    </ol>
                </nav>
                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Events" element={<Events />} />  
                    <Route path="/Factorial" element={<Factorial num="5" />} />
                </Routes>
            </div>
        </Router>
    );
}