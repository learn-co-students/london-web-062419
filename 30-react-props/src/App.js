import React from "react";
import "./App.css";

import HighFiveContainer from "./components/HighFiveContainer";

function App() {
  const hi5s = [
    {
      image:
        "https://www.incimages.com/uploaded_files/image/970x450/getty_542291608_205616.jpg",
      title: "group high five"
    },
    {
      image:
        "https://previews.123rf.com/images/flynt/flynt1401/flynt140100160/24930958-high-five-concept-for-success-teamwork-congratulating-and-celebration.jpg",
      title: "YES BUSINESS"
    }
  ];
  return (
    <div className="App">
      <h1>high five list!</h1>
      <HighFiveContainer highFivesData={hi5s} />
    </div>
  );
}

export default App;
