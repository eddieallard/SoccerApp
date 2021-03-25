import React from "react";
import { Link } from "react-router-dom";
import Divider from '@material-ui/core/Divider';


function HomePage() {
    return (
        <>
    <div className="jumbotron">
        <h1 className="text-center">Man.United VS Chelsea</h1>
        <Divider variant="middle" />
        <h2 className="text-center">To Win</h2>
        <div className="container text-center">
        <Link to="Betslip" className="btn btn-primary btn-lg">
            Man.United
        </Link>
        <Link to="Betslip" className="btn btn-primary btn-lg">
            Chelsea
        </Link>
        </div>
    </div>
    </>
    );
};

export default HomePage;