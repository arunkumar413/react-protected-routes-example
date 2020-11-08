import React, { useState, useEffect } from "react";
import { fakeAuth } from "./FakeAuth";

export default function ProtectedPage() {
  const logout = (evt) => {
    fakeAuth.signout();
  };

  return (
    <div>
      <h2> Protected page </h2>
      <button onClick={logout}> Logout </button>
    </div>
  );
}
