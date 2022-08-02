import "./App.css";

import Navibar from "./Components/Navbar";

// import "/Components/SignUpForm.js";
function App() {
  return (
    <div className="App">
      
      <Navibar user="Guest" loggedIn='false'/>
      
    </div>
  );
}

export default App;
