import React from "react";

import { Navbar, ErrorHeader } from "../components";

const ErrorPage = () => {
    return (
        <div className="bg-black">
            <Navbar/>
            <ErrorHeader/>
        </div>
    );
};

export default ErrorPage;