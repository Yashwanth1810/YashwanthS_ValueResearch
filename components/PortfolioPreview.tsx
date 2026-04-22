// export default function PortfolioPreview() {
//   return (
//     <section style={{
//       margin: "20px auto",
//       maxWidth: "1200px",
//       padding: "20px",
//       background: "#f8fafc",
//       borderRadius: "12px",
//       border: "1px solid #e2e8f0"
//     }}>
      
//       <h1 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "10px" }}>
//          My Portfolio
//       </h1>

//       <p style={{ color: "#475569", marginBottom: "15px" }}>
//         Final-year CSE student building real-world projects using Python, React and APIs.
//       </p>

//       <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        
//         <a href="https://yashwanths.in" target="_blank"
//           style={{
//             padding: "10px 16px",
//             background: "#1d4ed8",
//             color: "#fff",
//             borderRadius: "8px",
//             textDecoration: "none",
//             fontWeight: "600"
//           }}>
//           View Portfolio
//         </a>

//         <a href="/Yashwanth_S_Resume.pdf"
//           style={{
//             padding: "10px 16px",
//             background: "#0f172a",
//             color: "#fff",
//             borderRadius: "8px",
//             textDecoration: "none",
//             fontWeight: "600"
//           }}>
//           Download Resume
//         </a>

//       </div>
//     </section>
//   );
// }

import Link from "next/link";

export default function PortfolioPreview() {
  return (
    <section style={{
      margin: "20px auto",
      maxWidth: "1200px",
      padding: "20px",
      background: "#f8fafc",
      borderRadius: "12px",
      border: "1px solid #e2e8f0"
    }}>
      
      <h1 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "10px" }}>
         My Portfolio
      </h1>

      <p style={{ color: "#475569", marginBottom: "15px" }}>
        Final-year CSE student building real-world applications using Python, React, APIs, and Machine Learning.
      </p>

      <div style={{ display: "flex", gap: "12px",alignItems: "center", flexWrap: "nowrap" }}>
        
        {/* ✅ FIX 1: Go to /portfolio */}
        <Link href="/portfolio">
          <span style={{
            padding: "10px 16px",
            background: "#1d4ed8",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            cursor: "pointer"
          }}>
            View Portfolio
          </span>
        </Link>

        {/* ✅ FIX 2: Force download */}
        <a
          href="/Yashwanth_S_Resume.pdf"
          download="Yashwanth_S_Resume.pdf"
          style={{
            padding: "10px 16px",
            background: "#0f172a",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600"
          }}>
          Download Resume
        </a>

      </div>
    </section>
  );
}