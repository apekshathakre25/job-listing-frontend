import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { loginUser } from "../../api/auth";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const handleSubmit = async () => {
    if (!formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    try {
      const response = await loginUser(formData.email, formData.password);
      console.log("response", response);

      localStorage.setItem("token", response?.token);
      console.log("token", response.token)
      navigate("/");
    } catch (error) {
      setError("Invalid credentials. Please try again.");
      console.error("Login failed:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Already have an account ?</h1>
      <h2 className={styles.h2}>Your personal job finder is here</h2>
      <input
        className={styles.input}
        name="email"
        value={formData.email}
        onChange={handleFormChange}
        type={"email"}
        placeholder="Email"
      />
      <input
        className={styles.input}
        name="password"
        value={formData.password}
        onChange={handleFormChange}
        type={"password"}
        placeholder="Password"
      />
      <button onClick={handleSubmit} className={styles.button}>
        Sign in
      </button>
      {error && <p className={styles.error}>{error}</p>}
      <p className={styles.footer}>
        Don&apos;t have an account?
        <span
          className={styles.underline}
          onClick={() => navigate("/register")}>
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default Login;
