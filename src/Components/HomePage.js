import {
    BrowserRouter as Router, Routes,
    Route, Link
  } from "react-router-dom";

const HomePage = () => {
    
    return (
        <div>
        <h2>Hello, welcome to HOME nVentory</h2>
        <p>How to use here....</p>
        <Link to="/signup">SignUp now for free</Link>
        </div>
    )
}

export default HomePage;