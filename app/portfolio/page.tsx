// export default function Portfolio() {
//   return (
//     <main className="bg-black text-white min-h-screen px-6 md:px-16 py-20">

//       {/* HERO */}
//       <section className="mb-20">
//         <h1 className="text-4xl md:text-6xl font-bold">
//           Yashwanth S
//         </h1>

//         <p className="mt-4 text-gray-400 max-w-xl">
//           Final-year CSE student building real-world applications with Python,
//           Java, React, and REST APIs. Strong foundation in OOP, DSA, and scalable
//           software architecture.
//         </p>

//         <div className="mt-6 flex gap-4">
//           <a
//             href="/Yashwanth_S_Resume.pdf"
//             className="bg-yellow-500 text-black px-6 py-3 rounded"
//           >
//             Download Resume
//           </a>

//           <a
//             href="https://yashwanths.in"
//             target="_blank"
//             className="border px-6 py-3 rounded"
//           >
//             View Blog
//           </a>
//         </div>
//       </section>

//       {/* SKILLS */}
//       <section className="mb-20">
//         <h2 className="text-2xl font-semibold mb-6">Skills</h2>

//         <div className="grid md:grid-cols-3 gap-6">
//           <div>
//             <h3 className="text-yellow-500 mb-2">Languages</h3>
//             <p className="text-gray-400">
//               Python, Java, SQL, JavaScript, HTML, CSS
//             </p>
//           </div>

//           <div>
//             <h3 className="text-yellow-500 mb-2">Frameworks</h3>
//             <p className="text-gray-400">
//               React, Flask, Streamlit, REST APIs, Git
//             </p>
//           </div>

//           <div>
//             <h3 className="text-yellow-500 mb-2">Tools</h3>
//             <p className="text-gray-400">
//               GitHub, Vercel, AWS Basics
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* PROJECTS */}
//       <section className="mb-20">
//         <h2 className="text-2xl font-semibold mb-6">Projects</h2>

//         <div className="space-y-6">

//           {/* Grocery App */}
//           <div className="border p-6 rounded">
//             <h3 className="text-xl font-semibold">
//               Grocery List App
//             </h3>

//             <p className="text-gray-400 mt-2">
//               React-based grocery list app with CRUD operations and clean UI.
//             </p>

//             <a
//               href="https://grocery-list-react-nu.vercel.app/"
//               target="_blank"
//               className="text-yellow-500 mt-3 inline-block"
//             >
//               Live Project →
//             </a>
//           </div>

//           {/* Portfolio + Blog */}
//           <div className="border p-6 rounded">
//             <h3 className="text-xl font-semibold">
//               Portfolio & Blog Website
//             </h3>

//             <p className="text-gray-400 mt-2">
//               Built a personal portfolio and blog platform to showcase projects,
//               publish articles, and demonstrate frontend development skills.
//             </p>

//             <a
//               href="https://yashwanths.in"
//               target="_blank"
//               className="text-yellow-500 mt-3 inline-block"
//             >
//               Visit Website →
//             </a>
//           </div>

//         </div>
//       </section>

//       {/* CERTIFICATIONS */}
//       <section className="mb-20">
//         <h2 className="text-2xl font-semibold mb-6">Certifications</h2>

//         <ul className="text-gray-400 space-y-2">
//           <li>Python Foundation Certification</li>
//           <li>Applied Generative AI Certification</li>
//           <li>And more...</li>
//         </ul>
//       </section>

//       {/* CONTACT */}
//       <section>
//         <h2 className="text-2xl font-semibold mb-6">Contact</h2>

//         <div className="space-y-2 text-gray-400">
//           <p>Email: yashwanths4209@gmail.com</p>
//           <p>Phone: +91 7899245265</p>

//           <a
//             href="https://github.com/Yashwanth1810"
//             target="_blank"
//             className="block text-yellow-500"
//           >
//             GitHub →
//           </a>

//           <a
//             href="https://linkedin.com/in/yashwanths1810"
//             target="_blank"
//             className="block text-yellow-500"
//           >
//             LinkedIn →
//           </a>
//         </div>
//       </section>

//     </main>
//   );
// } 

"use client";

import { useEffect, useRef, useState } from "react";

interface Project { title: string; stack: string[]; bullets: string[]; live?: string; liveLabel?: string; }
interface SkillGroup { label: string; items: string[]; }

const SKILLS: SkillGroup[] = [
  { label: "Languages",  items: ["Python", "Java", "SQL"] },
  { label: "Web",        items: ["HTML", "CSS", "JavaScript", "React"] },
  { label: "Backend",    items: ["REST APIs", "Application Logic", "CSV Handling"] },
  { label: "Tools",      items: ["Git", "GitHub", "Streamlit", "AWS (basics)", "VS Code"] },
  { label: "Concepts",   items: ["OOP", "DSA", "SDLC", "Debugging", "Problem Solving"] },
];

const PROJECTS: Project[] = [
  {
    title: "Personal Expense Tracker",
    stack: ["Python", "Streamlit", "OOP", "CSV", "ReportLab"],
    bullets: [
      "Built a full-featured web app with modular OOP architecture — structured classes for expense categories, budget logic, and data processing.",
      "Implemented CSV-based persistent storage, dynamic budget calculations, and automated PDF report generation using ReportLab.",
    ],
    live: "https://personalexpensetrackergit-j5zzfm8rsthjty5atrbfgw.streamlit.app",
    liveLabel: "Open App",
  },
  {
    title: "Portfolio & Blog Website",
    stack: ["HTML", "CSS", "JavaScript"],
    bullets: [
      "Designed and developed a fully responsive personal website showcasing projects, skills, and technical blog content.",
      "Implemented smooth navigation, mobile-first layout, and structured content for optimal recruiter readability.",
    ],
    live: "https://yashwanths.in",
    liveLabel: "Visit Site",
  },
  {
    title: "Grocery Management System",
    stack: ["React", "JavaScript", "Vercel"],
    bullets: [
      "Built a React-based CRUD web application with structured data flow, input validation, and an intuitive grocery management interface.",
      "Deployed on Vercel — demonstrating end-to-end ownership from development through production.",
    ],
    live: "https://grocery-list-react-nu.vercel.app",
    liveLabel: "Live Demo",
  },
  {
    title: "Customer Churn Prediction",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    bullets: [
      "Developed a supervised ML model to predict customer churn from structured business datasets using classification algorithms.",
      "Performed data preprocessing, feature selection, and model evaluation — practical end-to-end ML workflow understanding.",
    ],
  },
];

const CERTS = [
  "Python Foundation Certification – Infosys Springboard",
  "Applied Generative AI Certification – Infosys Springboard",
];

const NAV_LINKS = ["About", "Skills", "Projects", "Education", "Contact"];

// ── HIRE ME mailto link (pre-filled) ─────────────────────────────────────────
const HIRE_ME_HREF =
  "mailto:yashwanths4209@gmail.com" +
  "?subject=Hiring%20Opportunity%20for%20Yashwanth%20S" +
  "&body=Hi%20Yashwanth%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you.%0A%0ARole%3A%20%0ACompany%3A%20%0ADetails%3A%20%0A%0ALooking%20forward%20to%20connecting!";

// ── FadeIn ────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms`, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
      {children}
    </div>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3b82f6", marginBottom: 8, fontFamily: "monospace" }}>{eyebrow}</p>
      <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, color: "#0f172a", letterSpacing: -0.5 }}>{title}</h2>
    </div>
  );
}

// ── NAVBAR ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.6)",
      backdropFilter: "blur(14px)",
      borderBottom: "1px solid #e9edf5",
      transition: "all 0.3s ease",
    }}>
      {/* ── Desktop bar ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ fontFamily: "monospace", fontSize: 16, fontWeight: 800, color: "#1d4ed8", cursor: "pointer", letterSpacing: 3 }}>
          YS
        </span>

        {/* Desktop links — hidden on mobile via CSS */}
        <div id="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "nowrap" }}>
          {NAV_LINKS.map((l) => (
            <button key={l} onClick={() => scrollTo(l)}
              style={{ fontSize: 14, color: "#374151", background: "none", border: "none", cursor: "pointer", fontWeight: 500, whiteSpace: "nowrap", fontFamily: "sans-serif" }}>
              {l}
            </button>
          ))}

          {/* ✅ FIX 1: Website highlighted as green badge */}
          <a href="https://yashwanths.in" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 12, padding: "6px 13px", background: "#f0fdf4", color: "#16a34a", border: "2px solid #86efac", borderRadius: 8, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap", fontFamily: "monospace" }}>
            🌐 yashwanths.in
          </a>

          <a href="/Yashwanth_S_Resume.pdf" download
            style={{ fontSize: 13, padding: "8px 16px", background: "#1d4ed8", color: "#fff", borderRadius: 8, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}>
            Resume ↓
          </a>

          {/* ✅ FIX 2: HIRE ME button top-right — opens mailto */}
          <a href={HIRE_ME_HREF}
            style={{ fontSize: 13, padding: "8px 18px", background: "#0f172a", color: "#fff", borderRadius: 8, fontWeight: 800, textDecoration: "none", whiteSpace: "nowrap", border: "2px solid #0f172a", letterSpacing: 0.5 }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#1d4ed8"; e.currentTarget.style.borderColor = "#1d4ed8"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#0f172a"; e.currentTarget.style.borderColor = "#0f172a"; }}>
            ✉ Hire Me
          </a>
        </div>

        {/* Hamburger — visible only on mobile */}
        <button id="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", display: "none", flexDirection: "column", gap: 5, padding: 4 }}>
          <span style={{ width: 23, height: 2, background: "#374151", display: "block", transition: "all 0.22s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <span style={{ width: 23, height: 2, background: "#374151", display: "block", transition: "opacity 0.2s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ width: 23, height: 2, background: "#374151", display: "block", transition: "all 0.22s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div style={{ background: "#fff", borderTop: "1px solid #e9edf5", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
          {NAV_LINKS.map((l) => (
            <button key={l} onClick={() => scrollTo(l)}
              style={{ textAlign: "left", background: "none", border: "none", cursor: "pointer", fontSize: 15, color: "#374151", fontWeight: 500, fontFamily: "sans-serif", padding: "4px 0" }}>
              {l}
            </button>
          ))}

          {/* Website highlighted in mobile menu too */}
          <a href="https://yashwanths.in" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 14, color: "#16a34a", fontWeight: 700, textDecoration: "none", fontFamily: "monospace", padding: "4px 0" }}>
            🌐 yashwanths.in
          </a>

          <a href="/Yashwanth_S_Resume.pdf" download
            style={{ fontSize: 14, color: "#1d4ed8", fontWeight: 700, textDecoration: "none", padding: "4px 0" }}>
            ↓ Download Resume
          </a>

          {/* HIRE ME in mobile menu */}
          <a href={HIRE_ME_HREF}
            style={{ fontSize: 15, color: "#fff", fontWeight: 800, textDecoration: "none", background: "#0f172a", padding: "13px 20px", borderRadius: 10, textAlign: "center", marginTop: 4 }}>
            ✉ Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 24px 80px", background: "linear-gradient(150deg, #f0f7ff 0%, #eef2ff 45%, #f0fdf4 100%)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "5%", right: "5%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(219,234,254,0.75) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "5%", left: "3%", width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(220,252,231,0.65) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 700, textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ animation: "fadeUp 0.5s ease both" }}>
          <span style={{ display: "inline-block", padding: "6px 18px", background: "#dbeafe", color: "#1d4ed8", borderRadius: 99, fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 28, fontFamily: "monospace" }}>
            Open to Opportunities
          </span>
        </div>

        <h1 style={{ fontSize: "clamp(44px, 8vw, 74px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.05, marginBottom: 16, letterSpacing: -2, animation: "fadeUp 0.55s ease 0.08s both", whiteSpace: "nowrap" }}>
          Yashwanth S
        </h1>

        <p style={{ fontSize: "clamp(16px, 2.5vw, 21px)", color: "#2563eb", fontWeight: 600, marginBottom: 22, animation: "fadeUp 0.55s ease 0.14s both" }}>
          Software Engineer &nbsp;·&nbsp; Python &nbsp;·&nbsp; React
        </p>

        <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.8, maxWidth: 520, margin: "0 auto 44px", animation: "fadeUp 0.55s ease 0.2s both" }}>
          Final-year CSE student building real-world applications with Python, REST APIs, and modern web technologies — focused on clean code and scalable solutions.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", animation: "fadeUp 0.55s ease 0.26s both" }}>
          <a href="/Yashwanth_S_Resume.pdf" download
            style={{ padding: "14px 28px", background: "#1d4ed8", color: "#fff", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 16px rgba(29,78,216,0.3)" }}>
            ↓ Download Resume
          </a>
          <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            style={{ padding: "14px 26px", background: "#fff", color: "#0f172a", border: "1.5px solid #cbd5e1", borderRadius: 10, fontWeight: 600, fontSize: 15, cursor: "pointer", fontFamily: "sans-serif" }}>
            View Projects →
          </button>
          <a href="https://yashwanths.in" target="_blank" rel="noopener noreferrer"
            style={{ padding: "14px 26px", background: "#f0fdf4", color: "#16a34a", border: "1.5px solid #bbf7d0", borderRadius: 10, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
            Visit Blog ↗
          </a>
        </div>
      </div>
    </section>
  );
}

// ── ABOUT ─────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" style={{ padding: "96px 24px", background: "#fff", borderTop: "1px solid #f1f5f9" }}>
      <div className="two-col" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <FadeIn><SectionHeader eyebrow="01 — About" title="Who I Am" /></FadeIn>
        <FadeIn delay={100}>
          <p style={{ fontSize: 15.5, color: "#475569", lineHeight: 1.9, marginBottom: 16 }}>
            I&apos;m a final-year Computer Science Engineering student at Atria Institute of Technology, Bengaluru (CGPA: 8.11), with a strong foundation in <strong style={{ color: "#0f172a" }}>Python, OOP, and REST APIs</strong>.
          </p>
          <p style={{ fontSize: 15.5, color: "#475569", lineHeight: 1.9, marginBottom: 16 }}>
            I build real-world applications — from expense trackers to ML pipelines — focusing on clean architecture and maintainable code. Drawn to backend engineering and scalable system design.
          </p>
          <p style={{ fontSize: 15.5, color: "#475569", lineHeight: 1.9 }}>
            Outside of projects, I write technical blog posts and actively practice DSA. <strong style={{ color: "#0f172a" }}>Available immediately</strong> for full-time roles in Bengaluru.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

// ── SKILLS ────────────────────────────────────────────────────────────────────
function Skills() {
  return (
    <section id="skills" style={{ padding: "96px 24px", background: "#f8fafc", borderTop: "1px solid #f1f5f9" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn><SectionHeader eyebrow="02 — Skills" title="Technical Stack" /></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 14 }}>
          {SKILLS.map((group, i) => (
            <FadeIn key={group.label} delay={i * 70}>
              <div style={{ background: "#fff", borderRadius: 14, padding: "22px 18px", border: "1px solid #e9edf5", height: "100%", boxShadow: "0 1px 3px rgba(0,0,0,0.04)", transition: "all 0.22s ease" }}
                onMouseEnter={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = "0 8px 24px rgba(59,130,246,0.11)"; d.style.borderColor = "#bfdbfe"; d.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)"; d.style.borderColor = "#e9edf5"; d.style.transform = "none"; }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3b82f6", marginBottom: 12, fontFamily: "monospace" }}>{group.label}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {group.items.map((item) => (
                    <span key={item} style={{ fontSize: 12, padding: "4px 10px", background: "#f1f5f9", color: "#334155", borderRadius: 6, fontWeight: 500 }}>{item}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── PROJECTS ──────────────────────────────────────────────────────────────────
function Projects() {
  return (
    <section id="projects" style={{ padding: "96px 24px", background: "#fff", borderTop: "1px solid #f1f5f9" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn><SectionHeader eyebrow="03 — Projects" title="What I've Built" /></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 18 }}>
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 80}>
              <div style={{ background: "#fff", borderRadius: 16, padding: "26px 22px", border: "1px solid #e9edf5", height: "100%", display: "flex", flexDirection: "column", boxShadow: "0 1px 4px rgba(0,0,0,0.05)", transition: "all 0.25s ease" }}
                onMouseEnter={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = "0 12px 32px rgba(59,130,246,0.11)"; d.style.borderColor = "#bfdbfe"; d.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = "0 1px 4px rgba(0,0,0,0.05)"; d.style.borderColor = "#e9edf5"; d.style.transform = "none"; }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, gap: 10 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", lineHeight: 1.3 }}>{p.title}</h3>
                  {p.live ? (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      style={{ flexShrink: 0, fontSize: 11, padding: "5px 12px", background: "#eff6ff", color: "#1d4ed8", border: "1px solid #bfdbfe", borderRadius: 99, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap", fontFamily: "monospace" }}>
                      {p.liveLabel} ↗
                    </a>
                  ) : (
                    <span style={{ flexShrink: 0, fontSize: 11, padding: "5px 12px", background: "#f8fafc", color: "#94a3b8", border: "1px solid #e2e8f0", borderRadius: 99, fontFamily: "monospace" }}>ML Model</span>
                  )}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                  {p.stack.map((t) => (
                    <span key={t} style={{ fontSize: 11, padding: "3px 9px", background: "#f1f5f9", color: "#64748b", borderRadius: 5, fontFamily: "monospace", fontWeight: 500 }}>{t}</span>
                  ))}
                </div>
                <ul style={{ flex: 1, listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {p.bullets.map((b, bi) => (
                    <li key={bi} style={{ display: "flex", gap: 10, fontSize: 13.5, color: "#64748b", lineHeight: 1.65 }}>
                      <span style={{ color: "#3b82f6", flexShrink: 0, marginTop: 4, fontSize: 9 }}>▸</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}


// ── EDUCATION ─────────────────────────────────────────────────────────────────
function Education() {
  return (
    <section id="education" style={{ padding: "96px 24px", background: "#f8fafc", borderTop: "1px solid #f1f5f9" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn><SectionHeader eyebrow="04 — Education & Certs" title="Background" /></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
          <FadeIn delay={80}>
            <div style={{ background: "#fff", borderRadius: 16, padding: "32px 28px", border: "1px solid #e9edf5", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3b82f6", marginBottom: 16, fontFamily: "monospace" }}>Education</p>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>B.E. Computer Science Engineering</h3>
              <p style={{ fontSize: 14, color: "#64748b", marginBottom: 28 }}>Atria Institute of Technology (VTU), Bengaluru</p>
              <div style={{ display: "flex", gap: 32 }}>
                <div>
                  <p style={{ fontSize: 30, fontWeight: 800, color: "#1d4ed8", lineHeight: 1 }}>8.11</p>
                  <p style={{ fontSize: 10, color: "#94a3b8", fontFamily: "monospace", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 4 }}>CGPA</p>
                </div>
                <div style={{ width: 1, background: "#e9edf5" }} />
                <div>
                  <p style={{ fontSize: 30, fontWeight: 800, color: "#1d4ed8", lineHeight: 1 }}>2026</p>
                  <p style={{ fontSize: 10, color: "#94a3b8", fontFamily: "monospace", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 4 }}>Expected</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={160}>
            <div style={{ background: "#fff", borderRadius: 16, padding: "32px 28px", border: "1px solid #e9edf5", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3b82f6", marginBottom: 16, fontFamily: "monospace" }}>Certifications</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {CERTS.map((c) => (
                  <li key={c} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ width: 20, height: 20, minWidth: 20, background: "#eff6ff", borderRadius: 99, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#1d4ed8", fontWeight: 800 }}>✓</span>
                    <span style={{ fontSize: 14, color: "#475569", lineHeight: 1.5 }}>{c}</span>
                  </li>
                ))}
                <li style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ width: 20, height: 20, minWidth: 20, background: "#f1f5f9", borderRadius: 99, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "#94a3b8", fontWeight: 700 }}>+</span>
                  <span style={{ fontSize: 14, color: "#94a3b8", fontStyle: "italic" }}>and more in progress...</span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ── CONTACT ───────────────────────────────────────────────────────────────────
function Contact() {
  // ✅ FIX 3: email + phone use window.location.href so they work on mobile & desktop
  const handleLink = (href: string) => {
    window.location.href = href;
  };

  const links = [
    { label: "Email",    href: "mailto:yashwanths4209@gmail.com",            display: "yashwanths4209@gmail.com" },
    { label: "Phone",    href: "tel:+917899245265",                           display: "+91 7899245265" },
    { label: "GitHub",   href: "https://github.com/Yashwanth1810",            display: "github.com/Yashwanth1810" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yashwanths1810",  display: "linkedin.com/in/yashwanths1810" },
  ];

  return (
    <section id="contact" style={{ padding: "96px 24px", background: "#fff", borderTop: "1px solid #f1f5f9" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn><SectionHeader eyebrow="05 — Contact" title="Get In Touch" /></FadeIn>
        <FadeIn delay={80}>
          <p style={{ fontSize: 15.5, color: "#64748b", marginBottom: 40, maxWidth: 440, lineHeight: 1.8 }}>
            Open to full-time roles, internships, and collaborations in Bengaluru. I respond within 24 hours.
          </p>
        </FadeIn>

        {/* Contact cards — using onClick with window.location.href for reliable email/phone */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12, maxWidth: 720 }}>
          {links.map((l, i) => (
            <FadeIn key={l.label} delay={i * 60}>
              <div
                onClick={() => handleLink(l.href)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && handleLink(l.href)}
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "#f8fafc", border: "1px solid #e9edf5", borderRadius: 12, cursor: "pointer", transition: "all 0.22s", boxShadow: "0 1px 3px rgba(0,0,0,0.04)", userSelect: "none" }}
                onMouseEnter={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = "#bfdbfe"; d.style.background = "#eff6ff"; d.style.transform = "translateY(-2px)"; d.style.boxShadow = "0 6px 20px rgba(59,130,246,0.1)"; }}
                onMouseLeave={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = "#e9edf5"; d.style.background = "#f8fafc"; d.style.transform = "none"; d.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)"; }}
              >
                <div>
                  <p style={{ fontSize: 10, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase", color: "#3b82f6", fontWeight: 700, marginBottom: 4 }}>{l.label}</p>
                  <p style={{ fontSize: 13.5, color: "#334155", fontWeight: 500 }}>{l.display}</p>
                </div>
                <span style={{ fontSize: 18, color: "#94a3b8" }}>↗</span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ✅ FIX 4: HIRE ME banner at bottom of contact */}
        <FadeIn delay={300}>
          <div style={{ marginTop: 52, padding: "36px 32px", background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)", borderRadius: 20, maxWidth: 720, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
            <div>
              <p style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 6 }}>Ready to work together?</p>
              <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.6 }}>Click the button — your email app opens with a pre-filled hiring message.</p>
            </div>
            <a href={HIRE_ME_HREF}
              style={{ padding: "14px 32px", background: "#fff", color: "#0f172a", borderRadius: 10, fontWeight: 800, fontSize: 15, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, whiteSpace: "nowrap", transition: "all 0.22s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#dbeafe"; e.currentTarget.style.color = "#1d4ed8"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#0f172a"; e.currentTarget.style.transform = "none"; }}>
              ✉ Hire Me
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #f1f5f9", padding: "28px 24px", textAlign: "center", background: "#f8fafc" }}>
      {/* ✅ FIX 5: copyright 2026 */}
      <p style={{ fontSize: 13, color: "#94a3b8", fontFamily: "monospace", letterSpacing: 0.5 }}>
        © 2026 Yashwanth S — Built with Next.js & Tailwind CSS
      </p>
    </footer>
  );
}

// ── ROOT ──────────────────────────────────────────────────────────────────────
export default function Portfolio() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400&family=DM+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', sans-serif; background: #fff; color: #0f172a; -webkit-font-smoothing: antialiased; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #f1f5f9; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Mobile: hide desktop nav, show hamburger */
        @media (max-width: 768px) {
          #nav-desktop  { display: none !important; }
          #nav-hamburger { display: flex !important; }
          .two-col { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}