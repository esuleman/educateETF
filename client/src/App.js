import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import styles from "./styles";

import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Explore from "./Explore/Explore";

function App() {
    return (
        <BrowserRouter>
            <div style={styles.appBackground}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Explore" element={<Explore />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App