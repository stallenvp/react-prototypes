import React from "react";

const Table = props => {
  const tableRows = props.data.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.course}</td>
        <td>{item.grade}</td>
      </tr>
    );
  });
  return (
    <table className="table">
      <thead className="thead-inverse">
        <tr>
          <th>Name</th>
          <th>Course</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        {tableRows}
        {/* <tr>
          <td>Khaleel Younis</td>
          <td>Computer Science 101</td>
          <td>100</td>
        </tr>
        <tr>
          <td>Abdullah Younis</td>
          <td>Computer Science 101</td>
          <td>100</td>
        </tr>
        <tr>
          <td>Anthony Younis</td>
          <td>Computer Science 101</td>
          <td>100</td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default Table;
