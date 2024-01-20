import React from "react";
import { useParams } from "react-router-dom";

export default function GreetStudent() {
  const name = useParams();
  return (
    <div>
      <h1>Hello </h1>
    </div>
  );
}
