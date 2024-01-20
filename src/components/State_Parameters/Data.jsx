import React from "react";
import { useLocation } from "react-router-dom";

export default function Data() {
  const { state } = useLocation();

  return (
    <div>
      <h1>Total Data</h1>
      <div>
        <h2>{state.key.name}</h2>
        <h2>{state.key.age}</h2>
      </div>
      <div>
        {state.key2.map((item) => {
          if (item.name === state.key.name) {
            return <h2>{item.city}</h2>;
          }
          return null;
        })}
      </div>
    </div>
  );
}
