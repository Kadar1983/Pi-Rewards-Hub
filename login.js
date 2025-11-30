import React, { useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";

export default function Login() {
  const [piID, setPiID] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (piID.trim() !== "") {
      router.push("/dashboard");
    } else {
      alert("Enter your Pi ID!");
    }
  };

  return (
    <div>
      <Header />
      <main style={{ padding: "20px" }}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter Pi ID"
            value={piID}
            onChange={(e) => setPiID(e.target.value)}
            style={{ padding: "10px", width: "250px" }}
          />
          <button type="submit" style={{ padding: "10px 20px", marginLeft: "10px" }}>Login</button>
        </form>
      </main>
    </div>
  );
}