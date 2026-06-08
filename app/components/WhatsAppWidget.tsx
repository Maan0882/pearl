"use client";

const WHATSAPP_NUMBER = "917990353622"; // +91 79903 53622
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Pearl Logistics! I'm interested in your products. Could you please share more details?"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function WhatsAppButton() {
  return (
    <>
      <style>{`
        @keyframes wa-enter {
          from { opacity: 0; transform: scale(0) translateY(40px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes wa-ping-1 {
          0%   { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes wa-ping-2 {
          0%   { transform: scale(1); opacity: 0.25; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        .wa-btn-wrap {
          position: fixed;
          bottom: 96px;
          right: 24px;
          z-index: 999999;
          animation: wa-enter 0.6s cubic-bezier(0.22,1,0.36,1) 1.2s both;
        }
        .wa-link {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }
        .wa-ring-1 {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: #25D366;
          animation: wa-ping-1 1.8s ease-out infinite;
        }
        .wa-ring-2 {
          position: absolute;
          inset: -4px;
          border-radius: 9999px;
          background: #25D366;
          animation: wa-ping-2 1.8s ease-out 0.4s infinite;
        }
        .wa-btn {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: 9999px;
          background: linear-gradient(135deg, #25D366, #128C7E);
          box-shadow: 0 12px 40px rgba(37,211,102,0.5);
          border: 2px solid rgba(255,255,255,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          cursor: pointer;
        }
        .wa-btn:hover {
          transform: scale(1.12) rotate(5deg);
          box-shadow: 0 20px 60px rgba(37,211,102,0.65);
        }
        .wa-btn:active {
          transform: scale(0.94);
        }
        .wa-tooltip {
          position: absolute;
          right: 72px;
          padding: 8px 16px;
          border-radius: 12px;
          background: rgba(15,23,42,0.95);
          color: white;
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          transform: translateX(10px);
          transition: opacity 0.25s ease, transform 0.25s ease;
          pointer-events: none;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .wa-tooltip::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -5px;
          transform: translateY(-50%) rotate(45deg);
          width: 10px;
          height: 10px;
          background: rgba(15,23,42,0.95);
          border-right: 1px solid rgba(255,255,255,0.08);
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .wa-dot {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: #25D366;
          animation: wa-ping-1 1.5s ease-out infinite;
          flex-shrink: 0;
        }
        .wa-link:hover .wa-tooltip {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      <div className="wa-btn-wrap">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-link"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulse rings */}
          <div className="wa-ring-1" />
          <div className="wa-ring-2" />

          {/* Main button */}
          <div className="wa-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="30"
              height="30"
              fill="white"
            >
              <path d="M16.002 2.667C8.638 2.667 2.667 8.638 2.667 16c0 2.364.638 4.672 1.848 6.693L2.667 29.333l6.84-1.794A13.28 13.28 0 0 0 16.002 29.333c7.364 0 13.331-5.971 13.331-13.333S23.366 2.667 16.002 2.667Zm0 24.267a10.924 10.924 0 0 1-5.574-1.527l-.4-.238-4.059 1.065 1.082-3.95-.26-.415A10.908 10.908 0 0 1 5.069 16c0-6.031 4.904-10.933 10.933-10.933S26.935 9.969 26.935 16 22.033 26.934 16.002 26.934Zm5.994-8.19c-.328-.164-1.944-.96-2.247-1.07-.302-.11-.522-.164-.742.164-.22.328-.853 1.07-1.045 1.29-.192.22-.384.247-.712.082-.328-.164-1.385-.51-2.638-1.626-.975-.869-1.633-1.943-1.825-2.271-.192-.328-.02-.506.144-.668.148-.147.328-.384.493-.576.164-.192.22-.328.328-.548.11-.22.055-.412-.027-.576-.082-.164-.742-1.79-1.016-2.45-.268-.644-.54-.557-.742-.567l-.632-.012a1.213 1.213 0 0 0-.878.412c-.302.328-1.153 1.127-1.153 2.748s1.18 3.188 1.344 3.408c.164.22 2.322 3.546 5.627 4.97.786.34 1.4.543 1.878.695.789.251 1.508.216 2.076.131.633-.094 1.944-.795 2.218-1.563.274-.768.274-1.427.192-1.563-.082-.137-.302-.22-.632-.384Z" />
            </svg>
          </div>

          {/* Tooltip */}
          <div className="wa-tooltip">
            <div className="wa-dot" />
            Chat on WhatsApp
          </div>
        </a>
      </div>
    </>
  );
}