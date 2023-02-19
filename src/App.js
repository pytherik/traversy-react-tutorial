import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react";

//: defaultProps set in Header.js
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Klavier üben!',
      day: 'Montag',
      reminder: true
    },
  
    {
      id: 2,
      text: 'Kochen!',
      day: 'täglich',
      reminder: true
    },
  
    {
      id: 3,
      text: 'Gitarre spielen!',
      day: 'täglich',
      reminder: false
    },  
  ])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

//: setting props
// function App() {
//   return (
//     <div className="container">
//       <Header title="Hello prop"/>
//     </div>
//   );
// }

export default App;






//: using a class
// import React from 'react';

// class App extends React.Component {
//   render() {
//     return <h1>Hello from Class App</h1>
//   }

// }
