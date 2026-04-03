"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/register", form);
      router.push("/login");
    } catch (err) {
      setError(err.response?.data?.detail || "Something went wrong");
    }
  };

    return (
    <>
        {/* Register,
        {error && {error}}
        
            
            
            
            Register,
        
        Already have an account? Login */}
        <div style={{ width: "40%", margin: "2rem auto", fontFamily: "sans-serif",border: "1px solid #eee", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", textAlign: "center"  }}>
            <h1 style={{paddingBottom:"10px"}}>Register</h1>
            
            {error && <p style={{ color: 'red' }}>{error}</p>}
            
            <form onSubmit={handleChange}  style={{ display: "flex", flexDirection: "column", gap: "1rem"  }}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <button type="submit" style={{ padding: "10px", cursor: "pointer", background: "#0cd213d7", color: "white", border: "none", borderRadius: "4px"}}>Register</button>
            </form>
            <p style={{ marginTop: "20px" }}>
            Already have an account? <a style={{ padding: "10px", cursor: "pointer", background: "#0070f3", color: "white", border: "none", borderRadius: "4px" }}href="/login">Login</a>
            </p>
        </div>
    </>
    );
}