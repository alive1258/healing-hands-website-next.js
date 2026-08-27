/* ================= LOGO MARK (SVG) ================= */
/* A simple lotus-flower glyph inside a solid circle. Reused as-is on both
   light (Navbar) and dark (Footer) backgrounds since the circle carries
   its own brand fill. */
export const LogoMark = ({ className = "w-9 h-9" }: { className?: string }) => (
  <svg
    viewBox="0 0 40 40"
    className={`shrink-0 ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="20" cy="20" r="20" fill="#1F6F63" />
    <path
      d="M20 27c-5 0-8-3.5-8-8 4 0 6.5 1.7 8 4.2 1.5-2.5 4-4.2 8-4.2 0 4.5-3 8-8 8Z"
      fill="#EAF5F3"
    />
    <path
      d="M20 25.5c-3.4-1.3-5-4-5-7.5 3.2 0 5 1.2 6.3 3 .4-.6.8-1.1 1.3-1.6"
      stroke="#EAF5F3"
      strokeWidth="1.4"
      strokeLinecap="round"
      fill="none"
      opacity="0.7"
    />
    <path d="M20 27V14" stroke="#EAF5F3" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

/* ================= LOGO (MARK + WORDMARK) ================= */
const SIZES = {
  sm: { icon: "w-8 h-8", text: "text-base", tagline: "text-[9px]" },
  md: { icon: "w-10 h-10", text: "text-lg", tagline: "text-[10px]" },
  lg: { icon: "w-12 h-12", text: "text-xl", tagline: "text-[11px]" },
} as const;

interface LogoProps {
  variant?: "dark" | "light";
  size?: keyof typeof SIZES;
  className?: string;
}

const Logo = ({ variant = "dark", size = "md", className = "" }: LogoProps) => {
  const { icon, text, tagline } = SIZES[size];
  const isDark = variant === "dark";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={icon} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-bold whitespace-nowrap tracking-tight ${text} ${
            isDark ? "text-brand-900" : "text-white"
          }`}
        >
          Healing Hands
        </span>
        <span
          className={`mt-1 font-semibold whitespace-nowrap tracking-[0.2em] uppercase ${tagline} ${
            isDark ? "text-brand-600" : "text-brand-200"
          }`}
        >
          Wellness &amp; Spa
        </span>
      </span>
    </span>
  );
};

export default Logo;
