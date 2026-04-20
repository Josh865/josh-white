export function ReactLogo({ className }) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`stroke-current text-[#60dbfb] ${className}`}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>React</title>
      <ellipse cx="16" cy="16" rx="13" ry="5"></ellipse>
      <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)"></ellipse>
      <ellipse rx="13" ry="5" transform="matrix(-.5 .86603 .86603 .5 16 16)"></ellipse>
      <circle cx="16" cy="16" r="2"></circle>
    </svg>
  );
}
