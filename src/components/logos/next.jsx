export function NextLogo({ className }) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} stroke-current`}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Next.js</title>
      <defs>
        <linearGradient
          id="next-icon-gradient-a"
          x1="15.125"
          y1="18.25"
          x2="24.25"
          y2="27.375"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".24" stopColor="currentColor"></stop>
          <stop offset="1" stopColor="currentColor" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="next-icon-gradient-b"
          x1="20.5"
          y1="11.25"
          x2="20.5"
          y2="18.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="currentColor"></stop>
          <stop offset="1" stopColor="currentColor" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
      <path d="M16.25 28.5c6.765 0 12.25-5.485 12.25-12.25S23.015 4 16.25 4 4 9.485 4 16.25 9.485 28.5 16.25 28.5Z"></path>
      <path
        d="M12 21.5V12l12.25 14.25"
        stroke="url(#next-icon-gradient-a)"
      ></path>
      <path
        d="M21.25 12a.75.75 0 1 0-1.5 0v8.17l1.5 1.64V12Z"
        fill="url(#next-icon-gradient-b)"
        strokeWidth="0"
      ></path>
    </svg>
  );
}
