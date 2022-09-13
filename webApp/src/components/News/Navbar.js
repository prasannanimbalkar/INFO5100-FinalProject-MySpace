import React from 'react'
import { Link} from 'react-router-dom'
// Style
import styled from "styled-components";

const Navbar = ()=>{
        return (
            <Navbarnews>
            <div className="blinking">Get Latest News</div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">News</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/top-headlines">Top HeadLines</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </Navbarnews>
        )
}

const Navbarnews = styled.div`
    .navbar {
        background-color: white;
        color: white;
        font-weight:bold;
        text-align: center;
        ${'' /* background-image: linear-gradient(to right, blue, back); */}
        background: rgb(117,200,235);
        background: linear-gradient(180deg, rgba(117,200,235,1) 0%, rgba(10,124,198,1) 100%);
    }

    
    .hed{
        background-color: white;
        color: black;
        padding: 10px;
        font-weight:bold;
        font-family: "Asap", sans-serif;

        
    }

    .nav-item{
        background-color: white;
        margin: 10px;
        border-radius: 10px;
        color: white;
    }

    .blinking {
        background: #59c7f2;
        // background: linear-gradient(180deg, rgba(162,223,250,1) 0%, rgba(117,196,230,1) 100%);
            color: black;
            padding: 10px;
            font-weight:bold;
            font-family: "Asap", sans-serif;
             animation: pulsecolor 4s infinite;
             text-align: center;
             font-size: 30px;
           }
           
           @keyframes pulsecolor {
             0% {
               color: back;
             }
             
               25% {
               color: gray;
             }
             50% {
               color: black;
             }
               75% {
               color: gray;
             }
             
               100% {
               color: black;
             }
           }
           
`;


export default Navbar
