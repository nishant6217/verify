
import "./App.css";

import { BrowserRouter } from "react-router-dom";

// importing components
import WebBar from "./component/WebBar";
// import TodoList from "./component/TodoList";

function App() {
  
  return (
    <BrowserRouter>
      <WebBar />
    </BrowserRouter>
    
  );
}

export default App;
