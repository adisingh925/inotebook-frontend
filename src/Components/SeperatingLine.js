import React from "react";

function SeperatingLine(props) {
  return (
    <div className="mb-3" style={{ display: "flex", alignItems: "center" }}>
      <div style={{ flex: 1, backgroundColor: "#000000", height: "1px" }} />

      <p style={{ margin: "0 10px" }}>{props.text}</p>

      <div style={{ flex: 1, backgroundColor: "#000000", height: "1px" }} />
    </div>
  );
}

export default SeperatingLine;
