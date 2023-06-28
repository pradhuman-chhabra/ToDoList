import React from "react";
import "./App.css";
import Todoinput from "./components/Todoinput";

export default function App() {
  return (
    <div className="main-container">
      <div className="center-container"></div>
      <Todoinput />
    </div>
  );
}

// Thing with ES7 plugin is rfc and rfce , e estands for export so ,
// RFC Generates this :

// import React from 'react'

// export default function App() {
//   return (
//     <div>App</div>
//   )
// }

// RFCE generates this :

// import React from 'react'

// function App() {
//   return (
//     <div>App</div>
//   )
// }

// export default App
