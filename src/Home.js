import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2> Home </h2>
      <Link to="/login"> login </Link>
    </div>
  );
}
