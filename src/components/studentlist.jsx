import React from "react";
import { Link } from "react-router-dom";

export default function Studentlist() {
  const students = ["Talha", "Ali", "Ahmed"];

  return (
    <div>
      {students.map((student, index) => {
        return (
          <div key={index}>
            <Link to={`/students/${student}`}>
              <h1>{student}</h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
