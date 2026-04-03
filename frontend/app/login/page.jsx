"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/login", form);
      localStorage.setItem("token", res.data.access_token);
      router.push("/dashboard");
    } catch (err) {
      setError(err.response?.data?.detail || "Invalid credentials");
    }
  };

  return (
    <>
      {/* Login,
      {error && {error}}
      
        
        
        Login
      
      No account? Register */}
        <div style={{ width: "40%", margin: "2rem auto", fontFamily: "sans-serif",border: "1px solid #eee", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
            <h1 style={{paddingBottom:"10px"}}>Login</h1>
            
            {error && <p style={{ color: 'red' }}>{error}</p>}
            
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />    
                <button type="submit" style={{ padding: "10px", cursor: "pointer", background: "#0070f3", color: "white", border: "none", borderRadius: "4px" }}>
                    login
                </button>
            </form>

            <p style={{ marginTop: "20px" }}>
            Make an account? <a style={{ padding: "10px", cursor: "pointer", background: "#0cd213d7", color: "white", border: "none", borderRadius: "4px" }}href="/register">Register</a>
            </p>
        </div>
    </>
  );
}