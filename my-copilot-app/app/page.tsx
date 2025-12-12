// import { CopilotSidebar } from "@copilotkit/react-ui"; 

// export default function Page() {
//   return (
//     <main>
//       <h1>Your App</h1>
//       <CopilotSidebar />
//     </main>
//   );
// }

"use client";

import { CopilotSidebar } from "@copilotkit/react-ui";

export default function Page() {
  return (
    <main
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* ---------- Left Side: AG UI Panel ---------- */}
      <section
        style={{
          flex: 1,
          background: "#f5f7fa",
          padding: "40px",
        }}
      >
        <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
          Connect Your AG UI + Google ADK
        </h1>

        <p style={{ fontSize: "18px", marginTop: "10px", opacity: 0.8 }}>
          Your Google ADK agent is now connected through CopilotKit.
        </p>

        <ul style={{ marginTop: "20px", fontSize: "16px", lineHeight: "28px" }}>
          <li>✔ AG UI Loaded</li>
          <li>✔ CopilotKit Connected</li>
          <li>✔ Google ADK Runtime Active</li>
          <li>✔ Your Agent: <strong>my_agent</strong></li>
        </ul>
      </section>

      {/* ---------- Right Side: Copilot Sidebar ---------- */}
      <CopilotSidebar />
    </main>
  );
}

