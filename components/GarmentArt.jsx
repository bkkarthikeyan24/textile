const palettes = {
  men: [
    ["#f7f1e8", "#8c3b2d", "#d3a15e"],
    ["#fff8ef", "#6b7a46", "#d7b067"],
    ["#fbf4ea", "#2f5d62", "#d6a44b"],
    ["#faf3ea", "#7a4b2c", "#c9a66b"]
  ],
  women: [
    ["#fdf2f0", "#a63d57", "#f0b44d"],
    ["#fff6ee", "#8246af", "#f3bf54"],
    ["#fff4f7", "#176b87", "#f4b13d"],
    ["#fff8f0", "#2f7d4a", "#e29c45"]
  ],
  kids: [
    ["#fef7ef", "#ff7a59", "#ffd166"],
    ["#f5fbff", "#3a86ff", "#ffbe0b"],
    ["#fff6fb", "#d65db1", "#6dd3ce"],
    ["#f7fff4", "#43aa8b", "#f9844a"]
  ]
};

export default function GarmentArt({ category, index = 0, label }) {
  const paletteSet = palettes[category] || palettes.men;
  const [base, main, accent] = paletteSet[index % paletteSet.length];

  return (
    <div className={`garment-art garment-${category}`} aria-label={label} role="img">
      <svg viewBox="0 0 320 320" className="garment-svg">
        <rect x="0" y="0" width="320" height="320" rx="36" fill={base} />
        <circle cx="60" cy="62" r="24" fill={`${accent}55`} />
        <circle cx="268" cy="84" r="18" fill={`${main}33`} />
        <circle cx="238" cy="250" r="28" fill={`${accent}40`} />

        {category === "men" && (
          <>
            <rect x="105" y="58" width="110" height="98" rx="20" fill={main} />
            <rect x="125" y="72" width="70" height="18" rx="9" fill={accent} />
            <rect x="154" y="90" width="12" height="56" rx="6" fill="#fff7ef" />
            <rect x="104" y="146" width="112" height="110" rx="18" fill="#fffaf2" />
            <rect x="104" y="192" width="112" height="12" rx="6" fill={accent} />
            <rect x="98" y="86" width="18" height="80" rx="9" fill={main} />
            <rect x="204" y="86" width="18" height="80" rx="9" fill={main} />
            <rect x="146" y="256" width="12" height="28" rx="6" fill={main} />
            <rect x="164" y="256" width="12" height="28" rx="6" fill={main} />
          </>
        )}

        {category === "women" && (
          <>
            <rect x="124" y="52" width="72" height="58" rx="18" fill={main} />
            <rect x="112" y="100" width="96" height="36" rx="16" fill={accent} />
            <path
              d="M110 130 C138 118, 182 118, 210 130 L232 262 C205 282, 115 282, 88 262 Z"
              fill={main}
            />
            <path
              d="M168 114 C190 136, 196 178, 176 250"
              stroke="#fff4dc"
              strokeWidth="16"
              strokeLinecap="round"
              fill="none"
            />
            <rect x="96" y="112" width="18" height="70" rx="9" fill={accent} />
            <rect x="206" y="112" width="18" height="70" rx="9" fill={accent} />
          </>
        )}

        {category === "kids" && (
          <>
            <rect x="126" y="62" width="68" height="52" rx="18" fill={main} />
            <rect x="108" y="104" width="104" height="28" rx="14" fill={accent} />
            <path
              d="M120 128 C138 120, 182 120, 200 128 L214 220 C192 236, 128 236, 106 220 Z"
              fill={main}
            />
            <rect x="104" y="112" width="16" height="54" rx="8" fill={accent} />
            <rect x="200" y="112" width="16" height="54" rx="8" fill={accent} />
            <rect x="136" y="220" width="14" height="34" rx="7" fill={accent} />
            <rect x="170" y="220" width="14" height="34" rx="7" fill={accent} />
          </>
        )}
      </svg>
    </div>
  );
}
