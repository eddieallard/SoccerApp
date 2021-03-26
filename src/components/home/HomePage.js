import React,{ useState } from "react";
import Divider from '@material-ui/core/Divider';



function HomePage() {
    const [color, setColor] = useState('blue');
    return (
        <>
    <div className="jumbotron mt-5">
        <h1 className="text-center">Man.United VS Chelsea</h1>
        <Divider variant="middle" />
        <h2 className="text-left">To Win</h2>
        <div className="container text-center">
        <button style={{background:color}} className="btn btn-primary btn-lg mr-5" onClick={()=>{setColor("green");}}>Man.United - 1.2</button>
        <button style={{background:color}} className="btn btn-primary btn-lg mr-5" onClick={()=>{setColor("green");}}>Chelsea - 2.2</button>
        </div>
    </div>
    <div className="jumbotron mt-5">
        <h1 className="text-center">Arsenal VS Sporting CP</h1>
        <Divider variant="middle" />
        <h2 className="text-left">To Win</h2>
        <div className="container text-center">
        <button style={{background:color}} className="btn btn-primary btn-lg mr-5" onClick={()=>{setColor("green");}}>Arsenal - 1.2</button>
        <button style={{background:color}} className="btn btn-primary btn-lg mr-5" onClick={()=>{setColor("green");}}>Sporting CP - 3
        </button>
        </div>
        <br></br>
        <br></br>
     <Divider variant="middle" />
        <h2 className="text-left">To Score First</h2><br></br>
        <div className="container text-center">
        <button style={{background:color}} className="btn btn-primary btn-lg mr-5" onClick={()=>{setColor("green");}}>Alexis - 3.1</button>
        <button style={{background:color}} className="btn btn-primary btn-lg mr-5" onClick={()=>{setColor("green");}}>Giroud - 2.1</button>
        <button style={{background:color}} className="btn btn-primary btn-lg mr-5" onClick={()=>{setColor("green");}}>Lacazette - 1.5</button>
        </div>
    </div>
    </>
    );
};

export default HomePage;