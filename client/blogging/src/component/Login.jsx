import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../style/login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 401) {
        alert("Incorrect email or password");
        navigate("/");
      } else {
        const data = await response.json();
        console.log(data)
        localStorage.setItem("jwt", data.token);
        navigate("/home");
      }
    } catch (err) {
      console.log("error ---->", err);
      navigate("/");
    }
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="login">
      <form onSubmit={submitForm}>
        <label htmlFor="username">
          Email:
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Log In</button>
        <button type="button" onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}

export default Login;
