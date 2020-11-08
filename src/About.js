import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <diiv>
      <h2> About </h2>
      <Link to="/protected"> protected </Link>
    </diiv>
  );
}
