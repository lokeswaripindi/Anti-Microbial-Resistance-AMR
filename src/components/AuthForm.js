import { useState } from "react";
import "../styles/AuthForm.css";

function AuthForm({ onLogin }) {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy authentication logic (replace with real authentication API call)
    if (formData.username === "admin" && formData.password === "password") {
      onLogin();
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <p>or</p>
      <button className="google-signup">Sign Up with Google</button>
    </div>
  );
}

export default AuthForm;
