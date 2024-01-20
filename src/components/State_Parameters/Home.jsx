import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let data = [
    {
      id: 1,
      name: "Ahmed",
      age: 22,
    },
    {
      id: 2,
      name: "Ali",
      age: 23,
    },
    {
      id: 3,
      name: "Raheel",
      age: 24,
    },
  ];

  let data2 = [
    {
      name: "Ahmed",
      city: "Karachi",
    },
    {
      name: "Ali",
      city: "Lahore",
    },
    {
      name: "Raheel",
      city: "Islamabad",
    },
  ];

  const navigate = useNavigate();

  const handleClick = (data) => {
    if (data) {
      navigate(`/data/${data.id}`, { state: { key: data, key2: data2 } });
    }
  };
  return (
    <div>
      <h1>Data</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <h2>{item.age}</h2>
          <button onClick={() => handleClick(item)}>Click</button>
        </div>
      ))}
    </div>
  );
}
