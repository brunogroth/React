import React from "react";
import Header from "./components/Header";

function App() {
const name = "Brad";
const x = 1+1;
  return (
    <div className="container">
      <Header title="Hello From React" />
    </div>
  );
}

//Older way to do it using class:
// class App extends React.Component{
//   render(){
//     return <h1>a</h1>
//   }
// }

export default App;
