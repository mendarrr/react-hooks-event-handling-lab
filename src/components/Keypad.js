// Code Keypad Component Here
import React from "react";

const Keypad = () => {
  const handleInput = (event) => {
    console.log("Entering password...");
  };

  return (
    <input 
      type="password"
      onChange={handleInput}
    />
  );
};

export default Keypad;