// import { Route, Router } from "react-router-dom";
import "./App.css";

import Navibar from "./Components/Navbar";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

// function App() {
//   return (
//     // <Router>
//     //   <div className="App">

//     //     <Navibar user="Guest" loggedIn='false' />
//     //     <Routes>
//     //       <Route exact path="/" element={<RegisUser />} />

//     //     </Routes>
//     //   </div>
//     // </Router>

//     <div className="App">

//       <Navibar user="Guest" loggedIn='false' />
//       <RegisUser />
//     </div>

//   );
// }

const App = () => {
  return (
    
    
    
      <div className="App">
        <div className="body">
        <Navibar/>
        </div>
      </div>
    
    
  );
};

export default App;
