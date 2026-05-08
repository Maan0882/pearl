"use client";

import { useEffect, useRef } from "react";

interface GrainElement {
  id: number;
  type: "wheat-stalk" | "rice-grain" | "wheat-ear" | "leaf";
  x: number;          // vw %
  startY: number;     // starting Y in px (can be above viewport)
  size: number;       // scale multiplier
  speed: number;      // px per frame
  swayAmp: number;    // horizontal sway amplitude px
  swayFreq: number;   // sway frequency
  rotStart: number;   // initial rotation deg
  rotSpeed: number;   // rotation deg per frame
  opacity: number;
  delay: number;      // animation start delay (ms)
}

export default function FloatingGrains() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalHeight = document.documentElement.scrollHeight;
    const vw = window.innerWidth;

    // Spread elements across the full page height, not just viewport
    const elements: GrainElement[] = [
      // Large wheat stalks — hero-section anchors
      { id: 0,  type: "wheat-stalk", x: 6,   startY: -200, size: 1.4, speed: 0.55, swayAmp: 18, swayFreq: 0.0008, rotStart: -12, rotSpeed: 0.018, opacity: 0.55, delay: 0 },
      { id: 1,  type: "wheat-ear",   x: 91,  startY: -600, size: 1.2, speed: 0.45, swayAmp: 22, swayFreq: 0.0006, rotStart: 8,  rotSpeed: -0.014, opacity: 0.5,  delay: 1200 },
      { id: 2,  type: "rice-grain",  x: 78,  startY: -300, size: 1.0, speed: 0.70, swayAmp: 14, swayFreq: 0.0011, rotStart: 30, rotSpeed: 0.022,  opacity: 0.45, delay: 400 },
      { id: 3,  type: "wheat-stalk", x: 18,  startY: -900, size: 1.1, speed: 0.50, swayAmp: 20, swayFreq: 0.0007, rotStart: 5,  rotSpeed: -0.016, opacity: 0.5,  delay: 800 },
      { id: 4,  type: "leaf",        x: 85,  startY: -100, size: 1.3, speed: 0.40, swayAmp: 30, swayFreq: 0.0005, rotStart: -20, rotSpeed: 0.012, opacity: 0.40, delay: 200 },
      { id: 5,  type: "rice-grain",  x: 42,  startY: -1200,size: 0.9, speed: 0.65, swayAmp: 12, swayFreq: 0.0012, rotStart: -45, rotSpeed: 0.028, opacity: 0.40, delay: 600 },
      { id: 6,  type: "wheat-ear",   x: 55,  startY: -500, size: 1.0, speed: 0.48, swayAmp: 25, swayFreq: 0.0009, rotStart: 15, rotSpeed: -0.020, opacity: 0.45, delay: 1000 },
      { id: 7,  type: "leaf",        x: 30,  startY: -1500,size: 1.2, speed: 0.38, swayAmp: 35, swayFreq: 0.0004, rotStart: 25, rotSpeed: 0.010,  opacity: 0.38, delay: 1600 },
      { id: 8,  type: "wheat-stalk", x: 70,  startY: -800, size: 0.85,speed: 0.58, swayAmp: 16, swayFreq: 0.0010, rotStart: -8, rotSpeed: -0.018, opacity: 0.48, delay: 300 },
      { id: 9,  type: "rice-grain",  x: 12,  startY: -400, size: 1.1, speed: 0.72, swayAmp: 10, swayFreq: 0.0013, rotStart: 60, rotSpeed: 0.030,  opacity: 0.42, delay: 900 },
      { id: 10, type: "wheat-ear",   x: 96,  startY: -1100,size: 1.3, speed: 0.44, swayAmp: 28, swayFreq: 0.0006, rotStart: -5, rotSpeed: 0.015,  opacity: 0.50, delay: 700 },
      { id: 11, type: "leaf",        x: 62,  startY: -700, size: 0.9, speed: 0.42, swayAmp: 32, swayFreq: 0.0005, rotStart: 10, rotSpeed: -0.012, opacity: 0.36, delay: 1400 },
    ];

    const nodes: HTMLDivElement[] = [];
    const phases: number[] = elements.map(() => Math.random() * Math.PI * 2);
    const currentY: number[] = elements.map(el => el.startY);
    const started: boolean[] = elements.map(() => false);

    // Create DOM nodes
    elements.forEach((el) => {
      const div = document.createElement("div");
      div.style.cssText = `
        position: fixed;
        top: 0;
        left: ${el.x}%;
        pointer-events: none;
        will-change: transform;
        opacity: 0;
        z-index: 1;
        transition: opacity 1.2s ease;
      `;
      div.innerHTML = getSVG(el.type, el.size, el.opacity);
      container.appendChild(div);
      nodes.push(div);

      // Staggered fade-in
      setTimeout(() => {
        div.style.opacity = "1";
        started[el.id] = true;
      }, el.delay);
    });

    let frame = 0;
    let rafId: number;

    function animate() {
      frame++;
      elements.forEach((el, i) => {
        if (!started[i]) return;

        // Drift downward
        currentY[i] += el.speed;

        // Wrap around: when element exits bottom, reset to top with some randomness
        const elHeight = el.size * 200;
        if (currentY[i] > window.innerHeight + elHeight) {
          currentY[i] = -elHeight - Math.random() * 400;
        }

        // Horizontal sway (Lissajous-style)
        const swayOffset = Math.sin(frame * el.swayFreq * 60 + phases[i]) * el.swayAmp;
        const swayX = swayOffset + Math.sin(frame * el.swayFreq * 30 + phases[i] * 1.3) * el.swayAmp * 0.3;

        // Rotation — continuous + sway-coupled
        const rot = el.rotStart + frame * el.rotSpeed + swayOffset * 0.3;

        nodes[i].style.transform = `translate3d(${swayX}px, ${currentY[i]}px, 0) rotate(${rot}deg)`;
      });

      rafId = requestAnimationFrame(animate);
    }

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      nodes.forEach(n => n.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-[1]"
      aria-hidden="true"
    />
  );
}

// ── SVG shapes ──────────────────────────────────────────────────────────────

function getSVG(type: GrainElement["type"], scale: number, opacity: number): string {
  switch (type) {
    case "wheat-stalk":
      return wheatStalk(scale, opacity);
    case "wheat-ear":
      return wheatEar(scale, opacity);
    case "rice-grain":
      return riceGrain(scale, opacity);
    case "leaf":
      return grainLeaf(scale, opacity);
  }
}

function wheatStalk(scale: number, opacity: number): string {
  const w = Math.round(48 * scale);
  const h = Math.round(220 * scale);
  return `<svg width="${w}" height="${h}" viewBox="0 0 48 220" xmlns="http://www.w3.org/2000/svg" style="overflow:visible;filter:drop-shadow(0 8px 24px rgba(155,109,215,0.25))">
    <defs>
      <linearGradient id="ws-stem" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#c9a7f0" stop-opacity="${opacity * 0.9}"/>
        <stop offset="50%" stop-color="#e8d5ff" stop-opacity="${opacity}"/>
        <stop offset="100%" stop-color="#9b6dd7" stop-opacity="${opacity * 0.7}"/>
      </linearGradient>
      <linearGradient id="ws-ear" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stop-color="#e2d4f3" stop-opacity="${opacity}"/>
        <stop offset="100%" stop-color="#ffffff" stop-opacity="${opacity * 0.95}"/>
      </linearGradient>
    </defs>
    <!-- Stem -->
    <path d="M24 220 Q22 160 24 80 Q25 40 24 10" stroke="url(#ws-stem)" stroke-width="3" fill="none" stroke-linecap="round"/>
    <!-- Wheat head spikelets -->
    ${[0,1,2,3,4,5].map(n => {
      const y = 10 + n * 18;
      const flip = n % 2 === 0;
      return `<ellipse cx="${flip ? 15 : 33}" cy="${y + 6}" rx="9" ry="5" fill="url(#ws-ear)" opacity="${opacity * 0.9}" transform="rotate(${flip ? -30 : 30} ${flip ? 15 : 33} ${y + 6})"/>`;
    }).join('')}
    <!-- Awn tips -->
    ${[0,1,2,3,4,5].map(n => {
      const y = 10 + n * 18;
      const flip = n % 2 === 0;
      const cx = flip ? 10 : 38;
      return `<line x1="${flip ? 15 : 33}" y1="${y+2}" x2="${cx}" y2="${y-10}" stroke="#e2d4f3" stroke-width="1.2" stroke-linecap="round" opacity="${opacity * 0.7}"/>`;
    }).join('')}
    <!-- Top awn -->
    <line x1="24" y1="10" x2="24" y2="-18" stroke="#e8d5ff" stroke-width="1.5" stroke-linecap="round" opacity="${opacity * 0.8}"/>
    <!-- Side leaves -->
    <path d="M24 140 Q8 130 4 115 Q14 120 24 140" fill="#c9a7f0" opacity="${opacity * 0.5}"/>
    <path d="M24 170 Q40 158 44 143 Q34 150 24 170" fill="#c9a7f0" opacity="${opacity * 0.4}"/>
  </svg>`;
}

function wheatEar(scale: number, opacity: number): string {
  const w = Math.round(60 * scale);
  const h = Math.round(160 * scale);
  return `<svg width="${w}" height="${h}" viewBox="0 0 60 160" xmlns="http://www.w3.org/2000/svg" style="overflow:visible;filter:drop-shadow(0 6px 20px rgba(155,109,215,0.3))">
    <defs>
      <radialGradient id="we-g" cx="35%" cy="30%" r="65%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="${opacity}"/>
        <stop offset="40%" stop-color="#e2d4f3" stop-opacity="${opacity * 0.9}"/>
        <stop offset="100%" stop-color="#9b6dd7" stop-opacity="${opacity * 0.6}"/>
      </radialGradient>
    </defs>
    <!-- Main ear body — overlapping ellipses to form a wheat head -->
    ${[0,1,2,3,4,5,6].map(n => {
      const y = 20 + n * 18;
      const rx = 14 - Math.abs(n - 3) * 1.5;
      return `<ellipse cx="30" cy="${y}" rx="${rx}" ry="11" fill="url(#we-g)" opacity="${opacity * (0.85 + (3 - Math.abs(n - 3)) * 0.03)}"/>`;
    }).join('')}
    <!-- Awns -->
    ${[-20,-10,0,10,20].map(x => `<line x1="${30 + x * 0.3}" y1="22" x2="${30 + x}" y2="0" stroke="#e8d5ff" stroke-width="1" stroke-linecap="round" opacity="${opacity * 0.7}"/>`).join('')}
    <!-- Stem -->
    <path d="M30 143 Q29 120 30 100" stroke="#c9a7f0" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="${opacity * 0.8}"/>
    <path d="M30 130 Q18 122 14 112" stroke="#c9a7f0" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="${opacity * 0.5}"/>
  </svg>`;
}

function riceGrain(scale: number, opacity: number): string {
  const w = Math.round(30 * scale);
  const h = Math.round(90 * scale);
  return `<svg width="${w}" height="${h}" viewBox="0 0 30 90" xmlns="http://www.w3.org/2000/svg" style="overflow:visible;filter:drop-shadow(0 6px 18px rgba(155,109,215,0.35))">
    <defs>
      <radialGradient id="rg-g" cx="30%" cy="25%" r="70%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="${opacity}"/>
        <stop offset="45%" stop-color="#ede0ff" stop-opacity="${opacity * 0.9}"/>
        <stop offset="100%" stop-color="#7b4bbf" stop-opacity="${opacity * 0.5}"/>
      </radialGradient>
    </defs>
    <!-- Rice grain body -->
    <ellipse cx="15" cy="45" rx="12" ry="42" fill="url(#rg-g)"/>
    <!-- Highlight -->
    <ellipse cx="11" cy="38" rx="4" ry="28" fill="#ffffff" opacity="${opacity * 0.55}"/>
    <!-- Fine center line -->
    <line x1="15" y1="8" x2="15" y2="82" stroke="#c9a7f0" stroke-width="0.8" opacity="${opacity * 0.4}"/>
    <!-- Tip bristle -->
    <line x1="15" y1="3" x2="14" y2="-8" stroke="#e2d4f3" stroke-width="1.2" stroke-linecap="round" opacity="${opacity * 0.6}"/>
  </svg>`;
}

function grainLeaf(scale: number, opacity: number): string {
  const w = Math.round(80 * scale);
  const h = Math.round(120 * scale);
  return `<svg width="${w}" height="${h}" viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg" style="overflow:visible;filter:drop-shadow(0 8px 22px rgba(155,109,215,0.2))">
    <defs>
      <linearGradient id="gl-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ddd0f5" stop-opacity="${opacity}"/>
        <stop offset="50%" stop-color="#c9a7f0" stop-opacity="${opacity * 0.85}"/>
        <stop offset="100%" stop-color="#9b6dd7" stop-opacity="${opacity * 0.6}"/>
      </linearGradient>
    </defs>
    <!-- Wheat/grass blade — long curved leaf -->
    <path d="M40 110 C35 80 10 50 8 10 C20 35 50 55 55 80 C58 92 45 100 40 110Z" fill="url(#gl-g)"/>
    <!-- Midrib -->
    <path d="M40 110 C38 80 22 50 18 12" stroke="#e2d4f3" stroke-width="1.2" fill="none" stroke-linecap="round" opacity="${opacity * 0.6}"/>
    <!-- Parallel veins -->
    <path d="M30 85 C25 70 15 55 18 38" stroke="#e2d4f3" stroke-width="0.7" fill="none" opacity="${opacity * 0.35}"/>
    <path d="M46 88 C45 72 38 58 35 40" stroke="#e2d4f3" stroke-width="0.7" fill="none" opacity="${opacity * 0.35}"/>
    <!-- Tip highlight -->
    <path d="M8 10 C12 20 18 28 22 38" stroke="#ffffff" stroke-width="1" fill="none" opacity="${opacity * 0.5}"/>
  </svg>`;
}