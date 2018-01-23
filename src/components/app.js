import React from "react";
import Table from "./table";

const App = () => {
  return (
    <div className="container">
      <h1>Student Grade Table</h1>
      <Table data={students} />
    </div>
  );
};

const students = [
  {
    name: "Matthew Woodside",
    course: "Intro to WoW",
    grade: 96
  },
  {
    name: "Nick Coppersmith",
    course: "Intro to WoW",
    grade: 97
  },
  {
    name: "Chris Marti",
    course: "Intro to WoW",
    grade: 99
  }
];

export default App;
