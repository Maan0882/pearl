"use client";

export default function FloatingGrains() {
  // Grain shapes: rice (elongated ellipses) and wheat (small circles)
  const grains = [
    // Rice grains
    { type: "rice", top: "8%", left: "5%", delay: "0s", duration: "9s", size: 28, rotate: 25 },
    { type: "rice", top: "15%", left: "85%", delay: "1.2s", duration: "11s", size: 22, rotate: -15 },
    { type: "rice", top: "40%", left: "92%", delay: "2.5s", duration: "10s", size: 18, rotate: 40 },
    { type: "rice", top: "60%", left: "3%", delay: "0.8s", duration: "12s", size: 24, rotate: -30 },
    { type: "rice", top: "75%", left: "78%", delay: "3.1s", duration: "9s", size: 20, rotate: 55 },
    { type: "rice", top: "25%", left: "45%", delay: "1.7s", duration: "10s", size: 16, rotate: -45 },
    // Wheat grains
    { type: "wheat", top: "12%", left: "70%", delay: "0.5s", duration: "11s", size: 14, rotate: 20 },
    { type: "wheat", top: "55%", left: "15%", delay: "2.0s", duration: "8s", size: 16, rotate: -25 },
    { type: "wheat", top: "35%", left: "60%", delay: "3.5s", duration: "13s", size: 12, rotate: 35 },
    { type: "wheat", top: "80%", left: "40%", delay: "1.5s", duration: "10s", size: 18, rotate: -10 },
    { type: "wheat", top: "5%", left: "30%", delay: "4.0s", duration: "9s", size: 14, rotate: 50 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]" aria-hidden="true">
      {grains.map((grain, i) => (
        <div
          key={i}
          className="grain-particle animate-float-3d"
          style={{
            top: grain.top,
            left: grain.left,
            animationDelay: grain.delay,
            animationDuration: grain.duration,
          }}
        >
          {grain.type === "rice" ? (
            <svg
              width={grain.size}
              height={grain.size * 2.5}
              viewBox="0 0 20 50"
              style={{ transform: `rotate(${grain.rotate}deg)` }}
            >
              <ellipse
                cx="10"
                cy="25"
                rx="7"
                ry="22"
                fill="rgba(201, 167, 240, 0.35)"
                stroke="rgba(155, 109, 215, 0.2)"
                strokeWidth="1"
              />
              <ellipse
                cx="10"
                cy="25"
                rx="3"
                ry="18"
                fill="rgba(155, 109, 215, 0.12)"
              />
            </svg>
          ) : (
            <svg
              width={grain.size}
              height={grain.size * 1.5}
              viewBox="0 0 16 24"
              style={{ transform: `rotate(${grain.rotate}deg)` }}
            >
              <ellipse
                cx="8"
                cy="12"
                rx="6"
                ry="10"
                fill="rgba(201, 167, 240, 0.3)"
                stroke="rgba(155, 109, 215, 0.18)"
                strokeWidth="1"
              />
              <line
                x1="8"
                y1="2"
                x2="8"
                y2="-4"
                stroke="rgba(155, 109, 215, 0.25)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>
      ))}

      {/* Large decorative glow orbs */}
      <div
        className="absolute rounded-full blur-[100px] animate-pulse-glow"
        style={{
          top: "-5%",
          right: "-5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(155,109,215,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute rounded-full blur-[80px] animate-pulse-glow"
        style={{
          bottom: "10%",
          left: "-5%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(201,167,240,0.1) 0%, transparent 70%)",
          animationDelay: "1.5s",
        }}
      />
    </div>
  );
}
