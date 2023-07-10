// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.jsx";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>home</h1>
//     </>
//   );
// }

// export default App;

import react from "react";
import reactDom from "react-dom";
import Header from "./Header";
import Footer from "./footer";
import Note from "./Note";

reactDom.render(
  <div>
    <Header />
    <Note />
    <Footer />
  </div>,
  document.getElementById("root")
);

export default App;
