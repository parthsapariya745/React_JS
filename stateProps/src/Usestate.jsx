import { useState } from "react";

function Usestate() {
  let style = {
    height: "60px",
    width: "60px",
    margin: "5px",
    fontSize: "22px",
    fontWeight: "600",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#2196F3",
    color: "white",
  };

  let plusStyle = {
    ...style,
    backgroundColor: "#4CAF50",
  };

  let minusStyle = {
    ...style,
    backgroundColor: "#F44336",
  };

  let [ count, setCount ] = useState(0)

  let handlePlus = () => {
    setCount(count + 1)
  }
  let handleMinus = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <button style={minusStyle} onClick={handleMinus}>-</button>
      <button style={style}>{count}</button>
      <button style={plusStyle} onClick={handlePlus}>+</button>
    </>
  );
}

export default Usestate;