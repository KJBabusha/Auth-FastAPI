"use client"; // Required for handling form state and submission

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    // Example: Sending data to a FastAPI or Next.js route
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setStatus("Success! Your message was sent.");
        event.target.reset();
      } else {
        setStatus("Oops! Something went wrong.");
      }
    } catch (error) {
      setStatus("Error connecting to the server.");
    }
  }

  return (
    <section style={{ width: "65%", margin: "2rem auto", fontFamily: "sans-serif", border: "1px solid #eee", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"}}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%" }}>
        
        <div>
          <label htmlFor="name" style={{ display: "block" }}>Name</label>
          <input type="text" id="name" name="name" required style={{ width: "100%", padding: "8px" }} />
        </div>

        <div>
          <label htmlFor="email" style={{ display: "block" }}>Email</label>
          <input type="email" id="email" name="email" required style={{ width: "100%", padding: "8px" }} />
        </div>

        <div>
          <label htmlFor="message" style={{ display: "block" }}>Message</label>
          <textarea id="message" name="message" rows="4" required style={{ width: "100%", padding: "8px" }} />
        </div>

        <button type="submit" style={{ padding: "10px", cursor: "pointer", background: "#0070f3", color: "white", border: "none", borderRadius: "4px" }}>
          Send Message
        </button>

        {status && <p style={{ marginTop: "10px", fontWeight: "bold" }}>{status}</p>}
      </form>
      <p style={{ marginTop: "20px" }}>
        Already have an account? <a style={{ padding: "6px", cursor: "pointer", background: "#0070f3", color: "white", border: "none", borderRadius: "12px" }}href="/login">Login</a>
      </p>
      <p style={{ marginTop: "20px" }}>
        Make an account? <a style={{ padding: "6px", cursor: "pointer", background: "#0cd213d7", color: "white", border: "none", borderRadius: "12px" }}href="/register">Register</a>
      </p>
    </section>
  );
}