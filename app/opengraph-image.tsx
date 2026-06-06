import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Start2Growth — Build. Automate. Market. Grow.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,168,83,0.12) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(212,168,83,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            opacity: 0.4,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 20px",
              borderRadius: 999,
              border: "1px solid rgba(212,168,83,0.3)",
              background: "rgba(212,168,83,0.08)",
            }}
          >
            <span style={{ color: "#d4a853", fontSize: 13, letterSpacing: "0.15em", fontFamily: "sans-serif" }}>
              THREE COMPANIES · ONE GROWTH ENGINE
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              textAlign: "center",
              color: "#ffffff",
              fontFamily: "sans-serif",
            }}
          >
            <span style={{ color: "#ffffff" }}>Build. </span>
            <span style={{ color: "#d4a853" }}>Automate.</span>
            <br />
            <span style={{ color: "#ffffff" }}>Market. </span>
            <span style={{ color: "#d4a853" }}>Grow.</span>
          </div>

          {/* Domain */}
          <div style={{ color: "#a1a1a1", fontSize: 22, fontFamily: "sans-serif" }}>
            start2growth.in
          </div>

          {/* Company pills */}
          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            {["JM Creations", "Zigo Digital", "Tech Buddy Galaxy"].map((name) => (
              <div
                key={name}
                style={{
                  padding: "6px 18px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.04)",
                  color: "#a1a1a1",
                  fontSize: 14,
                  fontFamily: "sans-serif",
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
