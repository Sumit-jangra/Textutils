import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextFrom from "./Components/TextFrom";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enable", "success");
      //document.title = "Textutils - dark Mode";
      // setInterval(() => {
      //   document.title = 'Textutils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install Textutils Now ';
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enable", "success");
      //document.title = "Textutils - light Mode";
    }
  };
  return (
    <>
      {/*<Navbar title="Textutils" abouttext="AboutTextutils"/>*/}
      {/*<Navbar/>*/}
      <Router>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about"  element={<About mode={mode}/>}>
          
            </Route>
            <Route exact path="/" element={
              <TextFrom
                showAlert={showAlert}
                heading=" Try Textutils - Word Counter, Character Counter, Remove Extara Spaces"
                mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </Router>

       {/* <TextFrom showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
     */}
        {/* </div>  */}
    </>  
  );
}

export default App;
