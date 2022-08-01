import "./App.css";
import LoginPage from "./Components/LoginPage";
import Navibar from "./Components/Navbar";
import SignUpForm from "./Components/SignUpForm";
// import "/Components/SignUpForm.js";
function App() {
  return (
    <div className="App">
      
      <Navibar />
      <SignUpForm />
      {/* <LoginPage /> */}
    </div>
  );
}

export default App;
