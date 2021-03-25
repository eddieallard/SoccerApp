import React from "react";
import { Link } from "react-router-dom";
import Divider from '@material-ui/core/Divider';


function HomePage() {
    return (
        <>
    <div className="jumbotron mt-5">
        <h1 className="text-center">Man.United VS Chelsea</h1>
        <Divider variant="middle" />
        <h2 className="text-left">To Win</h2>
        <div className="container text-center">
        <Link to="Betslip" className="btn btn-primary btn-lg mr-5">
            Man.United - 1.2
        </Link>
        <Link to="Betslip" className="btn btn-primary btn-lg">
            Chelsea - 2.2
        </Link>
        </div>
    </div>
    <div className="jumbotron mt-5">
        <h1 className="text-center">Arsenal VS Sporting CP</h1>
        <Divider variant="middle" />
        <h2 className="text-left">To Win</h2>
        <div className="container text-center">
        <Link to="Betslip" className="btn btn-primary btn-lg mr-5">
            Arsenal - 1.2
        </Link>
        <Link to="Betslip" className="btn btn-primary btn-lg">
            Sporting CP - 3
        </Link>
        </div>
        <br></br>
        <br></br>
     <Divider variant="middle" />
        <h2 className="text-left">To Score First</h2><br></br>
        <div className="container text-center">
        <Link to="Betslip" className="btn btn-primary btn-lg mr-5">
            Alexis - 3.1
        </Link>
        <Link to="Betslip" className="btn btn-primary btn-lg mr-5">
            Giroud - 2.1
        </Link>
        <Link to="Betslip" className="btn btn-primary btn-lg">
            Lacazette - 1.5
        </Link>
        </div>
    </div>
    </>
    );
};

export default HomePage;