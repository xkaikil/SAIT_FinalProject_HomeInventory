import "./App.css";

import Navibar from "./Components/Navbar";
import RegisUser from "./Components/Registration.component";


function App() {
  return (
    <div className="App">
      
      <Navibar user="Guest" loggedIn='false'/>
      <RegisUser/>
    </div>
  );
}

export default App;
