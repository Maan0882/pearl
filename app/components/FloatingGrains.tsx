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
    // Generate more grains dynamically for a richer "whole page" feel
    const elementTypes: GrainElement["type"][] = ["wheat-stalk", "rice-grain", "wheat-ear", "leaf"];
    const elements: GrainElement[] = Array.from({ length: 32 }, (_, i) => ({
      id: i,
      type: elementTypes[i % elementTypes.length],
      x: Math.random() * 100,
      startY: Math.random() * (totalHeight || 3000), // Distribute across full page height
      size: 0.7 + Math.random() * 0.8,
      speed: 0.35 + Math.random() * 0.45,
      swayAmp: 10 + Math.random() * 30,
      swayFreq: 0.0004 + Math.random() * 0.0008,
      rotStart: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 0.04,
      opacity: 0.4 + Math.random() * 0.3,
      delay: Math.random() * 2000,
    }));


    const nodes: HTMLDivElement[] = [];
    const phases: number[] = elements.map(() => Math.random() * Math.PI * 2);
    const currentY: number[] = elements.map(el => el.startY);
    const started: boolean[] = elements.map(() => false);

    // Create DOM nodes
    elements.forEach((el) => {
      const div = document.createElement("div");
      div.style.cssText = `
        position: absolute;
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
      if (!container) return;
      frame++;
      const containerHeight = container.offsetHeight;
      
      elements.forEach((el, i) => {
        if (!started[i]) return;

        // Drift downward
        currentY[i] += el.speed;

        // Wrap around: when element exits bottom, reset to top
        const elHeight = el.size * 200;
        if (currentY[i] > containerHeight + elHeight) {
          currentY[i] = -elHeight;
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
      className="absolute inset-0 overflow-hidden pointer-events-none z-[11]"
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
        <stop offset="0%" stop-color="#7b4bbf" stop-opacity="${opacity * 0.9}"/>
        <stop offset="50%" stop-color="#9b6dd7" stop-opacity="${opacity}"/>
        <stop offset="100%" stop-color="#5a3494" stop-opacity="${opacity * 0.7}"/>
      </linearGradient>
      <linearGradient id="ws-ear" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stop-color="#9b6dd7" stop-opacity="${opacity}"/>
        <stop offset="100%" stop-color="#c9a7f0" stop-opacity="${opacity * 0.95}"/>
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
      return `<line x1="${flip ? 15 : 33}" y1="${y+2}" x2="${cx}" y2="${y-10}" stroke="#9b6dd7" stroke-width="1.2" stroke-linecap="round" opacity="${opacity * 0.7}"/>`;
    }).join('')}
    <!-- Top awn -->
    <line x1="24" y1="10" x2="24" y2="-18" stroke="#9b6dd7" stroke-width="1.5" stroke-linecap="round" opacity="${opacity * 0.8}"/>
    <!-- Side leaves -->
    <path d="M24 140 Q8 130 4 115 Q14 120 24 140" fill="#7b4bbf" opacity="${opacity * 0.5}"/>
    <path d="M24 170 Q40 158 44 143 Q34 150 24 170" fill="#7b4bbf" opacity="${opacity * 0.4}"/>
  </svg>`;
}

function wheatEar(scale: number, opacity: number): string {
  const w = Math.round(60 * scale);
  const h = Math.round(160 * scale);
  return `<svg width="${w}" height="${h}" viewBox="0 0 60 160" xmlns="http://www.w3.org/2000/svg" style="overflow:visible;filter:drop-shadow(0 6px 20px rgba(155,109,215,0.3))">
    <defs>
      <radialGradient id="we-g" cx="35%" cy="30%" r="65%">
        <stop offset="0%" stop-color="#c9a7f0" stop-opacity="${opacity}"/>
        <stop offset="40%" stop-color="#9b6dd7" stop-opacity="${opacity * 0.9}"/>
        <stop offset="100%" stop-color="#7b4bbf" stop-opacity="${opacity * 0.6}"/>
      </radialGradient>
    </defs>
    <!-- Main ear body — overlapping ellipses to form a wheat head -->
    ${[0,1,2,3,4,5,6].map(n => {
      const y = 20 + n * 18;
      const rx = 14 - Math.abs(n - 3) * 1.5;
      return `<ellipse cx="30" cy="${y}" rx="${rx}" ry="11" fill="url(#we-g)" opacity="${opacity * (0.85 + (3 - Math.abs(n - 3)) * 0.03)}"/>`;
    }).join('')}
    <!-- Awns -->
    ${[-20,-10,0,10,20].map(x => `<line x1="${30 + x * 0.3}" y1="22" x2="${30 + x}" y2="0" stroke="#9b6dd7" stroke-width="1" stroke-linecap="round" opacity="${opacity * 0.7}"/>`).join('')}
    <!-- Stem -->
    <path d="M30 143 Q29 120 30 100" stroke="#7b4bbf" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="${opacity * 0.8}"/>
    <path d="M30 130 Q18 122 14 112" stroke="#7b4bbf" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="${opacity * 0.5}"/>
  </svg>`;
}

function riceGrain(scale: number, opacity: number): string {
  const w = Math.round(30 * scale);
  const h = Math.round(90 * scale);
  return `<svg width="${w}" height="${h}" viewBox="0 0 30 90" xmlns="http://www.w3.org/2000/svg" style="overflow:visible;filter:drop-shadow(0 6px 18px rgba(155,109,215,0.35))">
    <defs>
      <radialGradient id="rg-g" cx="30%" cy="25%" r="70%">
        <stop offset="0%" stop-color="#c9a7f0" stop-opacity="${opacity}"/>
        <stop offset="45%" stop-color="#9b6dd7" stop-opacity="${opacity * 0.9}"/>
        <stop offset="100%" stop-color="#5a3494" stop-opacity="${opacity * 0.5}"/>
      </radialGradient>
    </defs>
    <!-- Rice grain body -->
    <ellipse cx="15" cy="45" rx="12" ry="42" fill="url(#rg-g)"/>
    <!-- Highlight -->
    <ellipse cx="11" cy="38" rx="4" ry="28" fill="#e2d4f3" opacity="${opacity * 0.55}"/>
    <!-- Fine center line -->
    <line x1="15" y1="8" x2="15" y2="82" stroke="#7b4bbf" stroke-width="0.8" opacity="${opacity * 0.4}"/>
    <!-- Tip bristle -->
    <line x1="15" y1="3" x2="14" y2="-8" stroke="#9b6dd7" stroke-width="1.2" stroke-linecap="round" opacity="${opacity * 0.6}"/>
  </svg>`;
}

function grainLeaf(scale: number, opacity: number): string {
  const w = Math.round(80 * scale);
  const h = Math.round(120 * scale);
  return `<svg width="${w}" height="${h}" viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg" style="overflow:visible;filter:drop-shadow(0 8px 22px rgba(155,109,215,0.2))">
    <defs>
      <linearGradient id="gl-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#9b6dd7" stop-opacity="${opacity}"/>
        <stop offset="50%" stop-color="#7b4bbf" stop-opacity="${opacity * 0.85}"/>
        <stop offset="100%" stop-color="#5a3494" stop-opacity="${opacity * 0.6}"/>
      </linearGradient>
    </defs>
    <!-- Wheat/grass blade — long curved leaf -->
    <path d="M40 110 C35 80 10 50 8 10 C20 35 50 55 55 80 C58 92 45 100 40 110Z" fill="url(#gl-g)"/>
    <!-- Midrib -->
    <path d="M40 110 C38 80 22 50 18 12" stroke="#9b6dd7" stroke-width="1.2" fill="none" stroke-linecap="round" opacity="${opacity * 0.6}"/>
    <!-- Parallel veins -->
    <path d="M30 85 C25 70 15 55 18 38" stroke="#9b6dd7" stroke-width="0.7" fill="none" opacity="${opacity * 0.35}"/>
    <path d="M46 88 C45 72 38 58 35 40" stroke="#9b6dd7" stroke-width="0.7" fill="none" opacity="${opacity * 0.35}"/>
    <!-- Tip highlight -->
    <path d="M8 10 C12 20 18 28 22 38" stroke="#c9a7f0" stroke-width="1" fill="none" opacity="${opacity * 0.5}"/>
  </svg>`;
}