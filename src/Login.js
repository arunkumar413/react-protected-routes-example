import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fakeAuth } from "./FakeAuth";

export default function Login() {
  const Login = (evt) => {
    fakeAuth.authenticate();
  };

  return (
    <div>
      <h2> Login </h2>
      <button onClick={Login}>Login </button>
      <Link to="/protected"> protected </Link>
    </div>
  );
}
