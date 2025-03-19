import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [newAccountData, setNewAccountData] = useState({ newUsername: "", newPassword: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const existingUsers = [
    { username: "admin", password: "password123" },
    { username: "user1", password: "test123" }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNewAccountChange = (e) => {
    setNewAccountData({ ...newAccountData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = existingUsers.find(
      (user) => user.username === formData.username && user.password === formData.password
    );

    if (user) {
      navigate("/predict");
    } else {
      setError("Username or Password not matched!");
    }
  };

  const handleNewAccount = (e) => {
    e.preventDefault();
    if (newAccountData.newUsername && newAccountData.newPassword) {
      alert("Account Created Successfully! Redirecting...");
      navigate("/predict");
    } else {
      setError("Please fill in all fields to create a new account.");
    }
  };

  return (
    <div className="home-container">
      <h1 className="home-heading">Welcome to AMR Prediction App</h1>

      {/* Authentication Section */}
      <div className="auth-section">
        <h2>Sign In</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>

        <p>Don't have an account?</p>
        <form onSubmit={handleNewAccount} className="create-account-form">
          <input type="text" name="newUsername" placeholder="New Username" onChange={handleNewAccountChange} required />
          <input type="password" name="newPassword" placeholder="New Password" onChange={handleNewAccountChange} required />
          <button type="submit">Create New Account</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
