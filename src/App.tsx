import type { ReactNode } from "react";

const lineArt = {
  fill: "none",
  stroke: "#F5F7FA",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconFrame({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="icon-cell">
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-label={label}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g {...lineArt}>{children}</g>
      </svg>
    </div>
  );
}

function RouteBanner() {
  return (
    <figure
      className="route-map relative w-full overflow-hidden bg-[#07080C]"
      aria-label="Route from Warsaw to Toronto"
    >
      <svg
        className="block h-auto w-full"
        viewBox="0 0 1600 600"
        role="img"
        aria-labelledby="route-title route-description"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="route-title">Warsaw to Toronto route</title>
        <desc id="route-description">
          A precise red arc crosses a dark field between Warsaw and Toronto,
          with a secondary dotted route below.
        </desc>
        <defs>
          <filter
            id="cool-glow"
            x="-60%"
            y="-60%"
            width="220%"
            height="220%"
          >
            <feGaussianBlur stdDeviation="14" />
          </filter>
          <filter
            id="route-glow"
            x="-10%"
            y="-40%"
            width="120%"
            height="180%"
          >
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        <rect width="1600" height="600" fill="#07080C" />

        <g fill="none" stroke="#AEB6C2" strokeWidth="1" opacity="0.12">
          <path d="M-40 148 C360 122 1240 122 1640 148" />
          <path d="M-40 225 C360 204 1240 204 1640 225" />
          <path d="M-40 300 C360 286 1240 286 1640 300" />
          <path d="M-40 375 C360 366 1240 366 1640 375" />
          <path d="M-40 452 C360 448 1240 448 1640 452" />
        </g>

        <g stroke="#AEB6C2" strokeWidth="1" opacity="0.18">
          {[128, 320, 512, 704, 896, 1088, 1280, 1472].map((x) => (
            <g key={x}>
              <path d={`M${x} 144v8`} />
              <path d={`M${x} 221v8`} />
              <path d={`M${x} 296v8`} />
              <path d={`M${x} 371v8`} />
              <path d={`M${x} 448v8`} />
            </g>
          ))}
        </g>

        <g fill="#9FD0FF" opacity="0.08" filter="url(#cool-glow)">
          <circle cx="198" cy="368" r="50" />
          <circle cx="1402" cy="368" r="50" />
        </g>

        <path
          d="M198 368 C520 430 1080 430 1402 368"
          fill="none"
          stroke="#AEB6C2"
          strokeWidth="1.25"
          strokeDasharray="2 11"
          strokeLinecap="round"
          opacity="0.62"
        />
        <path
          d="M198 368 C490 40 1110 40 1402 368"
          fill="none"
          stroke="#B0182A"
          strokeWidth="5"
          opacity="0.15"
          filter="url(#route-glow)"
        />
        <path
          d="M198 368 C490 40 1110 40 1402 368"
          fill="none"
          stroke="#B0182A"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <g>
          <circle
            cx="198"
            cy="368"
            r="10"
            fill="#07080C"
            stroke="#F5F7FA"
            strokeWidth="1"
          />
          <circle cx="198" cy="368" r="2.5" fill="#B0182A" />
          <path
            d="M198 384v18"
            stroke="#F5F7FA"
            strokeWidth="1"
            opacity="0.45"
          />
          <circle
            cx="1402"
            cy="368"
            r="10"
            fill="#07080C"
            stroke="#F5F7FA"
            strokeWidth="1"
          />
          <circle cx="1402" cy="368" r="2.5" fill="#B0182A" />
          <path
            d="M1402 384v18"
            stroke="#F5F7FA"
            strokeWidth="1"
            opacity="0.45"
          />
        </g>

        <g
          fill="#F5F7FA"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
          fontSize="17"
          letterSpacing="1.6"
        >
          <text x="198" y="435" textAnchor="middle">
            Warsaw
          </text>
          <text x="1402" y="435" textAnchor="middle">
            Toronto
          </text>
        </g>
      </svg>
    </figure>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#07080C] flex flex-col items-center justify-center gap-24 px-8 py-16">
      <RouteBanner />
      <section className="icon-sheet" aria-label="Product family icons">
        <IconFrame label="Office chair">
          <rect x="21" y="8" width="22" height="20" rx="5" />
          <path d="M24 28v7M40 28v7M17 35h30a3 3 0 0 1 3 3v1H14v-1a3 3 0 0 1 3-3Z" />
          <path d="M32 39v10M32 49 20 54M32 49l12 5M32 49v7" />
          <circle cx="19" cy="56" r="2" />
          <circle cx="45" cy="56" r="2" />
          <circle cx="32" cy="58" r="2" />
          <circle cx="39" cy="44" r="2.5" fill="#B0182A" stroke="none" />
        </IconFrame>

        <IconFrame label="Furniture hinge with screws">
          <path d="M9 14h18v36H9a3 3 0 0 1-3-3V17a3 3 0 0 1 3-3ZM37 14h18a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H37" />
          <path d="M27 17h10M27 25h10M27 39h10M27 47h10M27 14v36M37 14v36" />
          <circle cx="16" cy="23" r="2.5" />
          <circle cx="16" cy="41" r="2.5" />
          <circle cx="48" cy="41" r="2.5" />
          <circle cx="48" cy="23" r="3" fill="#B0182A" stroke="none" />
        </IconFrame>

        <IconFrame label="Folded paper box">
          <path d="m15 23 17-9 17 9-17 9-17-9Z" />
          <path d="M15 23v20l17 9 17-9V23M32 32v20" />
          <path d="m15 23-8 8 17 9 8-8M49 23l8 8-17 9-8-8" />
          <path d="m22 18 10-6 10 6" />
          <path
            d="m29 17 3-1.8 3 1.8-3 1.8Z"
            fill="#B0182A"
            stroke="none"
          />
        </IconFrame>

        <IconFrame label="Glass jar and plastic bottle">
          <path d="M8 23h23M10 23v4c0 2-2 4-2 7v17a4 4 0 0 0 4 4h15a4 4 0 0 0 4-4V34c0-3-2-5-2-7v-4" />
          <path d="M11 17h17v6H11zM12 40h15" />
          <path d="M40 20h10v7c0 2 5 5 5 10v15a3 3 0 0 1-3 3H38a3 3 0 0 1-3-3V37c0-5 5-8 5-10v-7Z" />
          <path d="M38 40h14M41 14h8v6h-8z" />
          <rect
            x="41"
            y="14"
            width="8"
            height="4"
            rx="1"
            fill="#B0182A"
            stroke="none"
          />
        </IconFrame>

        <IconFrame label="Three stacked plywood sheets">
          <path d="m8 24 34-13 14 7-34 13L8 24Z" />
          <path d="m8 24v5l14 7 34-13v-5M8 34l14 7 34-13M8 34v5l14 7 34-13v-5" />
          <path d="m8 44 14 7 34-13M8 44v5l14 7 34-13v-5M22 31v25" />
          <path
            d="m22 41 8-3v4l-8 3Z"
            fill="#B0182A"
            stroke="none"
          />
        </IconFrame>

        <IconFrame label="Cosmetic pump bottle">
          <path d="M20 27h24v29H20a3 3 0 0 1-3-3V30a3 3 0 0 1 3-3Z" />
          <path d="M23 20h18v7H23zM27 14h10v6M32 14V8M32 8h14M46 8v5" />
          <path d="M22 42h17M39 27v29" />
          <circle cx="46" cy="13" r="2.75" fill="#B0182A" stroke="none" />
        </IconFrame>
      </section>
    </main>
  );
}
