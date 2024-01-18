import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import styles from "./styles";

import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Educate from "./Educate/Educate";

function App() {
    return (
        <BrowserRouter>
            <div style={styles.appBackground}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Educate" element={<Educate />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App