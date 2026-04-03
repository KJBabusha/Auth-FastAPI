// import Image from "next/image";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className={styles.intro}>
//           <h1>To get started, edit the page.tsx file.</h1>
//           <p>
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className={styles.ctas}>
//           <a
//             className={styles.primary}
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className={styles.logo}
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className={styles.secondary}
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

import React from 'react';



export default function Home() {

  const styles = {
    page: { fontFamily: 'Inter, sans-serif', color: '#333', lineHeight: '1.6' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 5%', borderBottom: '1px solid #eee' },
    logo: { fontSize: '1.5rem', fontWeight: 'bold', color: '#0cd213d7' }, // FastAPI Green
    navLinks: { listStyle: 'none', display: 'flex', gap: '20px', alignItems: 'center' },
    link: { hover: { color: '#0cd213d7' }, color: '#c9c5c5' },
    loginBtn: { padding: '8px 16px', backgroundColor: '#0cd213d7', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' },
    
    hero: { padding: '80px 5%', textAlign: 'center', backgroundColor: '#f9fafb' },
    heroTitle: { fontSize: '3rem', marginBottom: '1rem' },
    heroSubtitle: { fontSize: '1.2rem', color: '#707070', maxWidth: '600px', margin: '0 auto' },

    main: { padding: '60px 5%' },
    cardRow: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' },
    card: { padding: '20px', border: '1px solid #eee', borderRadius: '10px', transition: 'transform 0.2s', textAlign: 'left' },
    
    footer: { padding: '40px 5%', textAlign: 'center', borderTop: '1px solid #eee', fontSize: '0.9rem', color: '#888' },
    footerLink: { color: '#059669', textDecoration: 'none' }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div style={styles.page}>
      {/* --- NAVIGATION --- */}
      <nav style={styles.nav}>
        <div style={styles.logo}>FastAuth</div>
        <ul style={styles.navLinks}>
          <li><a href="/contact" style={styles.link}>Contact Us</a></li>
          <li><a href="/login" style={styles.link}>Login</a></li>
          <button  style={styles.loginBtn}>Register</button>
        </ul>
      </nav>

      {/* --- HERO SECTION --- */}
      <header style ={styles.hero}>
        <h1 style={styles.heroTitle}>Secure Your API in Seconds</h1>
        <p style={styles.heroSubtitle}>
          Production-ready OAuth2, JWT, and Password hashing logic built specifically for FastAPI.
        </p>
      </header>

      {/* --- MAIN SECTION (3 Cards) --- */}
      <main id="features" style={styles.main}>
        <div style={styles.cardRow}>
          <div style={styles.card}>
            <h3>JWT Tokens</h3>
            <p>Generate secure access and refresh tokens using python-jose for stateless authentication.</p>
          </div>
          <div style={styles.card}>
            <h3>OAuth2 Scopes</h3>
            <p>Implement granular permissions and role-based access control with built-in dependency injection.</p>
          </div>
          <div style={styles.card}>
            <h3>Password Hashing</h3>
            <p>Protect user credentials using Passlib and the modern Argon2 or Bcrypt algorithms.</p>
          </div>
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer style={styles.footer}>
        <p>Contact: <a href="mailto:support@fastauth.io" style={styles.footerLink}>support@fastauth.io</a></p>
        <p>&copy; {currentYear} FastAuth Tools. All rights reserved.</p>
      </footer>
    </div>
  );
}

