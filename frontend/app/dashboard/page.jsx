"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
    try {
      const decoded = jwtDecode(token);
      // Check if token is expired
      if (decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
        router.push("/login");
        return;
      }
      setUser(decoded);
    } catch {
      router.push("/login");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  if (!user) return "Loading...";

  const styles = {
  container: { width: "65%", margin: "3rem auto", padding: "20px", fontFamily: "system-ui", border: "1px solid #eee", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" },
  header: { display: "flex", gap: "10rem",justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #eee", paddingBottom: "10px" },
  title: { fontSize: "1.5rem", color: "#f7f0f0" },
  logoutBtn: { padding: "8px 16px", background: "#d7c22088", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" },
  content: { marginTop: "30px" },
  profileSection: { textAlign: "center", marginBottom: "20px" },
  avatar: { width: "80px", height: "80px", background: "#0070f3", color: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", margin: "0 auto 10px" },
  detailsCard: { background: "#f9f9f9", padding: "20px", borderRadius: "10px", border: "1px solid #ddd" },
  detailRow: { display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #9a9696", color: "#333" },
  actions: { marginTop: "20px", display: "flex", gap: "10px" },
  editBtn: { flex: 1, padding: "10px", background: "#0070f3", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" },
  deleteBtn: { flex: 1, padding: "10px", background: "#ff4d4d", color: "white", border: "1px solid #ff4d4d", borderRadius: "5px", cursor: "pointer" }
};

  return (
    // <>
    // <section style={{ maxWidth: "400px", margin: "2rem auto", fontFamily: "sans-serif" }}> 
    //  <div>
    //     Welcome, 
    //     {user.username}!
    //     Email: {user.sub}
    //     Logout
    //  </div>
    //   <button onClick={logout} style={{ padding: "10px", cursor: "pointer", background: "#f44336", color: "white", border: "none", borderRadius: "4px" }}>Logout</button>
    // </section>
    // </>
    <div style={styles.container}>
      {/* 1. TOP BAR */}
      <header style={styles.header}>
        <h1 style={styles.title}>User Dashboard</h1>
        <button onClick={logout} style={styles.logoutBtn}>
          Logout
        </button>
      </header>

      <main style={styles.content}>
        {/* 2. PROFILE AREA */}
        <section style={styles.profileSection}>
          <div style={styles.avatar}>
            {user.username?.charAt(0).toUpperCase() || "U"}
          </div>
          <h2>Account Profile</h2>
        </section>

        {/* 3. DETAILS AREA */}
        <section style={styles.detailsCard}>
          <div style={styles.detailRow}>
            <strong>ID:</strong> <span>{user.id}</span>
          </div>
          <div style={styles.detailRow}>
            <strong>Username:</strong> <span>{user.username}</span>
          </div>
          <div style={styles.detailRow}>
            <strong>Email:</strong> <span>{user.sub}</span>
          </div>

          {/* ACTIONS */}
          <div style={styles.actions}>
            <button  style={styles.editBtn}>
              Edit Profile
            </button>
            <button  style={styles.deleteBtn}>
              Delete Account
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}