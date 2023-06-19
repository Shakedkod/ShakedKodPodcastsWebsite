import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { ErrorPage, Home } from "./containers";

import "./App.scss";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/*<Route path="/ATWAS" element={<ATWAS />} />
            <Route path="/ATWAS/:id" element={<ATWASEp />} />
            <Route path="/PWAS" element={<PWAS />} />
            <Route path="/PWAS/:id" element={<PWASEp />} />*/}
            {/* 404 Page */}
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
    );
};

export default App;