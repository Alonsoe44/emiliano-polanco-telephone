import React from "react";

export default function Key({ className }) {
  return (
    <li key={className}>
      <button className="key">{className}</button>
    </li>
  );
}
