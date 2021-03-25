import React from "react";
import { Link } from "react-router-dom";


function HomePage() {
    return (
        <>
    <div className="jumbotron">
        <h1>Man.United VS Chelsea</h1>
        <h2>To Win</h2>
        <Link to="Betslip" className="btn btn-primary btn-lg">
            Man.United
        </Link>
        <Link to="Betslip" className="btn btn-primary btn-lg">
            Chelsea
        </Link>
    </div>
    </>
    );
};

export default HomePage;