import React from "react";

export default props => {
  console.log("Field props:", props);
  return (
    <div className="form-group">
      <input {...props} className="form-control" />
    </div>
  );
};
