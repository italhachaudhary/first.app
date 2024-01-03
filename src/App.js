import React from "react";
import "./App.css";
import MathTable from "./components/table";

function App() {
  return (
    <div className="App">
      <MathTable input="5" />
      <MathTable input="10" />
    </div>
  );
}
export default App;
