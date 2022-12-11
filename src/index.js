import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css';
import {MainNavbar} from "./components/navbar/Navbar";
import {HomePage} from "./components/homepage/HomePage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <MainNavbar/>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
        {/*<HomePage/>*/}
    </>
);