import {
  SiDotnet,
  SiPhp,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiLaravel,
  SiTypescript,
  SiGo,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiGithub,
  SiFramer,
  SiOdoo,
  SiGooglesheets,
  SiGoogle,
  SiPython,
  SiPostgresql,
} from "react-icons/si";
import {
  FaFilePdf,
  FaGlobe,
  FaEnvelope,
  FaUser,
  FaLinkedin,
} from "react-icons/fa";
import {
  FaFileExcel,
  FaFileWord,
  FaUsers,
  FaChartPie,
  FaUserClock,
} from "react-icons/fa6";
import {
  DiVisualstudio,
  DiJira,
} from "react-icons/di";
import {
  BsFileEarmarkPptFill,
} from "react-icons/bs";
import {
  User,
  FileSpreadsheet,
  FileText,
  BarChart3,
  Clock,
  Database,
} from "lucide-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  globe: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="10" fill="#3B82F6" />
      <path
        d="M3.6 9C5 9 6.5 10 7.5 9C8.5 8 9 6.5 11 6.5C12.5 6.5 13.5 7.5 14 8.5C14.5 9.5 13.5 10.5 13 11.5C12.5 12.5 13 13.5 14 14C15 14.5 16 13.5 17 14C17.7 14.3 18.5 15.5 18 16.5C17.5 17.5 16 17.5 15.5 18.5C15 19.5 16 20.5 15.5 21.3C14.4 21.8 13.2 22 12 22C6.5 22 2 17.5 2 12C2 10.9 2.2 9.9 2.5 9H3.6Z"
        fill="#22C55E"
      />
      <path
        d="M16 3C17 4 18 4.5 18 5.5C18 6.5 16.5 7 16.5 8C16.5 9 17.5 9.5 18.5 9.5C19.5 9.5 20.5 8.5 21.2 9.5C21.7 10.3 22 11.1 22 12C22 9.5 21 7.2 19.4 5.5C18.4 4.5 17.3 3.6 16 3Z"
        fill="#22C55E"
      />
      <circle cx="12" cy="12" r="9.5" stroke="#2563EB" strokeWidth="0.8" fill="none" />
    </svg>
  ),
  email: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="3" fill="#EA4335" />
      <path d="M2 6L12 13L22 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  user: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="7" r="4" fill="#6366F1" />
      <path d="M4 21C4 16.6 7.6 13 12 13C16.4 13 20 16.6 20 21" fill="#4F46E5" />
    </svg>
  ),

  // HR Tools & Technologies (Official Real Brand Colors)
  excel: (props: IconProps) => (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M37 6H17C14.7909 6 13 7.79086 13 10V16H37C39.2091 16 41 14.2091 41 12C41 8.68629 38.3137 6 35 6H37Z" fill="#185C37" />
      <path d="M13 16H37C39.2091 16 41 17.7909 41 20V28C41 30.2091 39.2091 32 37 32H13V16Z" fill="#107C41" />
      <path d="M13 32H37C39.2091 32 41 33.7909 41 36C41 39.3137 38.3137 42 35 42H17C14.7909 42 13 40.2091 13 38V32Z" fill="#0E4829" />
      <rect x="7" y="13" width="22" height="22" rx="4" fill="#21A366" />
      <path d="M14.5 18L18 24L14.5 30H17.2L19.3 25.6L21.4 30H24L20.5 24L24 18H21.4L19.3 22.3L17.2 18H14.5Z" fill="white" />
    </svg>
  ),
  sheets: (props: IconProps) => (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M37 42H11C9.89543 42 9 41.1046 9 40V8C9 6.89543 9.89543 6 11 6H29L39 16V40C39 41.1046 38.1046 42 37 42Z" fill="#0F9D58" />
      <path d="M29 6L39 16H29V6Z" fill="#87CEAC" />
      <rect x="15" y="21" width="18" height="13" rx="1.5" fill="#E8F5E9" />
      <line x1="24" y1="21" x2="24" y2="34" stroke="#0F9D58" strokeWidth="2" />
      <line x1="15" y1="27" x2="33" y2="27" stroke="#0F9D58" strokeWidth="2" />
    </svg>
  ),
  googlesheets: (props: IconProps) => (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M37 42H11C9.89543 42 9 41.1046 9 40V8C9 6.89543 9.89543 6 11 6H29L39 16V40C39 41.1046 38.1046 42 37 42Z" fill="#0F9D58" />
      <path d="M29 6L39 16H29V6Z" fill="#87CEAC" />
      <rect x="15" y="21" width="18" height="13" rx="1.5" fill="#E8F5E9" />
      <line x1="24" y1="21" x2="24" y2="34" stroke="#0F9D58" strokeWidth="2" />
      <line x1="15" y1="27" x2="33" y2="27" stroke="#0F9D58" strokeWidth="2" />
    </svg>
  ),
  word: (props: IconProps) => (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M37 6H17C14.7909 6 13 7.79086 13 10V16H37C39.2091 16 41 14.2091 41 12C41 8.68629 38.3137 6 35 6H37Z" fill="#185ABD" />
      <path d="M13 16H37C39.2091 16 41 17.7909 41 20V28C41 30.2091 39.2091 32 37 32H13V16Z" fill="#103F91" />
      <path d="M13 32H37C39.2091 32 41 33.7909 41 36C41 39.3137 38.3137 42 35 42H17C14.7909 42 13 40.2091 13 38V32Z" fill="#0B2463" />
      <rect x="7" y="13" width="22" height="22" rx="4" fill="#2B7CD3" />
      <path d="M13 19L15.2 29H17.5L19.2 22.8L20.9 29H23.2L25.4 19H23.2L21.9 25.5L20.3 19H18.1L16.5 25.5L15.2 19H13Z" fill="white" />
    </svg>
  ),
  powerpoint: (props: IconProps) => (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M37 6H17C14.7909 6 13 7.79086 13 10V16H37C39.2091 16 41 14.2091 41 12C41 8.68629 38.3137 6 35 6H37Z" fill="#C43E1C" />
      <path d="M13 16H37C39.2091 16 41 17.7909 41 20V28C41 30.2091 39.2091 32 37 32H13V16Z" fill="#A42D15" />
      <path d="M13 32H37C39.2091 32 41 33.7909 41 36C41 39.3137 38.3137 42 35 42H17C14.7909 42 13 40.2091 13 38V32Z" fill="#741C07" />
      <rect x="7" y="13" width="22" height="22" rx="4" fill="#D24726" />
      <path d="M15 19H20.5C22.4 19 23.8 20.3 23.8 22.2C23.8 24.1 22.4 25.4 20.5 25.4H17.2V29H15V19ZM17.2 23.4H20.3C21.2 23.4 21.7 22.9 21.7 22.2C21.7 21.5 21.2 21 20.3 21H17.2V23.4Z" fill="white" />
    </svg>
  ),
  hris: (props: IconProps) => (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <circle cx="24" cy="24" r="20" fill="url(#hrisGrad)" />
      <defs>
        <linearGradient id="hrisGrad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4F46E5" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="17" r="5" fill="white" />
      <path d="M15 32C15 27.5 19 25 24 25C29 25 33 27.5 33 32V33H15V32Z" fill="white" />
      <circle cx="34" cy="18" r="3.5" fill="#E0E7FF" />
      <path d="M30.5 29C32.5 28.5 36 29.5 37 32" stroke="#E0E7FF" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="14" cy="18" r="3.5" fill="#E0E7FF" />
      <path d="M17.5 29C15.5 28.5 12 29.5 11 32" stroke="#E0E7FF" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  odoo: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="#714B67" {...props}>
      <path d="M12.012 8.783c-2.336 0-4.237 1.89-4.237 4.215 0 2.325 1.9 4.214 4.237 4.214 2.338 0 4.238-1.89 4.238-4.214 0-2.326-1.9-4.215-4.238-4.215zm0 6.643c-1.346 0-2.438-1.087-2.438-2.428s1.092-2.428 2.438-2.428 2.438 1.087 2.438 2.428-1.092 2.428-2.438 2.428zM3.407 8.783C1.528 8.783 0 10.304 0 12.174s1.528 3.391 3.407 3.391c1.88 0 3.407-1.521 3.407-3.391s-1.527-3.391-3.407-3.391zm0 5.087c-.939 0-1.704-.761-1.704-1.696s.765-1.696 1.704-1.696c.938 0 1.703.761 1.703 1.696s-.765 1.696-1.703 1.696zm17.186-5.087c-1.88 0-3.407 1.521-3.407 3.391s1.527 3.391 3.407 3.391c1.88 0 3.407-1.521 3.407-3.391s-1.527-3.391-3.407-3.391zm0 5.087c-.939 0-1.704-.761-1.704-1.696s.765-1.696 1.704-1.696 1.704.761 1.704 1.696-.765 1.696-1.704 1.696z" />
    </svg>
  ),
  jibble: (props: IconProps) => (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <circle cx="24" cy="24" r="20" fill="#FF6000" />
      <circle cx="24" cy="24" r="14" fill="white" />
      <path d="M24 16V24L29 27" stroke="#FF6000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="2" fill="#FF6000" />
    </svg>
  ),
  googleworkspace: (props: IconProps) => (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M43.6 20.1H42V20H24V28H35.3C33.7 32.7 29.2 36 24 36C17.4 36 12 30.6 12 24C12 17.4 17.4 12 24 12C27.1 12 29.8 13.1 32 15L37.7 9.3C34.1 6 29.3 4 24 4C13 4 4 13 4 24C4 35 13 44 24 44C35 44 44 35 44 24C44 22.7 43.9 21.4 43.6 20.1Z" fill="#4285F4" />
      <path d="M6.3 14.7L12.9 19.5C14.7 15.1 19 12 24 12C27.1 12 29.8 13.1 32 15L37.7 9.3C34.1 6 29.3 4 24 4C16.3 4 9.7 8.4 6.3 14.7Z" fill="#EA4335" />
      <path d="M24 44C29.2 44 33.9 42.1 37.4 38.9L31.1 34C29.2 35.3 26.8 36 24 36C18.9 36 14.5 32.8 12.8 28.3L6.2 33.4C9.5 39.7 16.2 44 24 44Z" fill="#34A853" />
      <path d="M43.6 20.1H42V20H24V28H35.3C34.6 30.2 33.1 32.3 31.1 34L37.4 38.9C41.3 35.3 44 29.9 44 24C44 22.7 43.9 21.4 43.6 20.1Z" fill="#FBBC05" />
    </svg>
  ),
  powerbi: (props: IconProps) => (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <rect x="7" y="22" width="9" height="20" rx="2" fill="#EAA700" />
      <rect x="19.5" y="14" width="9" height="28" rx="2" fill="#F2C811" />
      <rect x="32" y="6" width="9" height="36" rx="2" fill="#FBE158" />
    </svg>
  ),
  tableau: (props: IconProps) => (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M22 17H26V31H22V17Z" fill="#E8762D" />
      <path d="M17 22H31V26H17V22Z" fill="#E8762D" />
      <path d="M23 7H25V15H23V7ZM19 10H29V12H19V10Z" fill="#2A7AB0" />
      <path d="M23 33H25V41H23V33ZM19 36H29V38H19V36Z" fill="#2A7AB0" />
      <path d="M7 23H15V25H7V23ZM10 19H12V29H10V19Z" fill="#CE4E35" />
      <path d="M33 23H41V25H33V23ZM36 19H38V29H36V19Z" fill="#359CA7" />
    </svg>
  ),
  database: (props: IconProps) => (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M24 6C14.06 6 6 8.69 6 12C6 15.31 14.06 18 24 18C33.94 18 42 15.31 42 12C42 8.69 33.94 6 24 6Z" fill="#0284C7" />
      <path d="M42 18.5C42 21.81 33.94 24.5 24 24.5C14.06 24.5 6 21.81 6 18.5V23.5C6 26.81 14.06 29.5 24 29.5C33.94 29.5 42 26.81 42 23.5V18.5Z" fill="#0369A1" />
      <path d="M42 29.5C42 32.81 33.94 35.5 24 35.5C14.06 35.5 6 32.81 6 29.5V34.5C6 37.81 14.06 40.5 24 40.5C33.94 40.5 42 37.81 42 34.5V29.5Z" fill="#075985" />
      <ellipse cx="24" cy="12" rx="18" ry="6" fill="#38BDF8" />
    </svg>
  ),
  python: (props: IconProps) => (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M23.6 4C14.8 4 15.3 7.8 15.3 7.8L15.3 11.7H24.3V13H10.5C6 13 4 17.5 4 22C4 26.8 7.9 26.4 7.9 26.4H10.5V22.6C10.5 17.6 14.8 17.6 14.8 17.6H23.8C28.4 17.6 28.5 13.5 28.5 13.5V7.8C28.5 7.8 28.8 4 23.6 4ZM19.2 7C20.2 7 21 7.8 21 8.8C21 9.8 20.2 10.6 19.2 10.6C18.2 10.6 17.4 9.8 17.4 8.8C17.4 7.8 18.2 7 19.2 7Z" fill="#3776AB" />
      <path d="M24.4 44C33.2 44 32.7 40.2 32.7 40.2V36.3H23.7V35H37.5C42 35 44 30.5 44 26C44 21.2 40.1 21.6 40.1 21.6H37.5V25.4C37.5 30.4 33.2 30.4 33.2 30.4H24.2C19.6 30.4 19.5 34.5 19.5 34.5V40.2C19.5 40.2 19.2 44 24.4 44ZM28.8 41C27.8 41 27 40.2 27 39.2C27 38.2 27.8 37.4 28.8 37.4C29.8 37.4 30.6 38.2 30.6 39.2C30.6 40.2 29.8 41 28.8 41Z" fill="#FFD43B" />
    </svg>
  ),
  analytics: (props: IconProps) => <BarChart3 color="#6366F1" {...props} />,
  clock: (props: IconProps) => <Clock color="#F59E0B" {...props} />,

  // Development & Tech (Authentic Official Colors)
  dotnet: (props: IconProps) => <SiDotnet color="#512BD4" {...props} />,
  php: (props: IconProps) => <SiPhp color="#777BB4" {...props} />,
  nextjs: (props: IconProps) => <SiNextdotjs {...props} />,
  react: (props: IconProps) => <SiReact color="#61DAFB" {...props} />,
  nodejs: (props: IconProps) => <SiNodedotjs color="#5FA04E" {...props} />,
  express: (props: IconProps) => <SiExpress {...props} />,
  javascript: (props: IconProps) => <SiJavascript color="#F7DF1E" {...props} />,
  laravel: (props: IconProps) => <SiLaravel color="#FF2D20" {...props} />,
  typescript: (props: IconProps) => <SiTypescript color="#3178C6" {...props} />,
  go: (props: IconProps) => <SiGo color="#00ADD8" {...props} />,
  html5: (props: IconProps) => <SiHtml5 color="#E34F26" {...props} />,
  css3: (props: IconProps) => <SiCss color="#1572B6" {...props} />,
  bootstrap: (props: IconProps) => <SiBootstrap color="#7952B3" {...props} />,
  tailwindcss: (props: IconProps) => <SiTailwindcss color="#06B6D4" {...props} />,
  mysql: (props: IconProps) => <SiMysql color="#4479A1" {...props} />,
  postgresql: (props: IconProps) => <SiPostgresql color="#4169E1" {...props} />,
  mongodb: (props: IconProps) => <SiMongodb color="#47A248" {...props} />,
  github: (props: IconProps) => <SiGithub {...props} />,
  jira: (props: IconProps) => <DiJira color="#0052CC" {...props} />,
  vscode: (props: IconProps) => <DiVisualstudio color="#007ACC" {...props} />,

  framermotion: (props: IconProps) => <SiFramer color="#0055FF" {...props} />,

  linkedin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        d="M19 19H16.2V14.6C16.2 13.5 15.8 12.8 14.8 12.8C14.1 12.8 13.6 13.3 13.4 13.8C13.3 14 13.3 14.3 13.3 14.6V19H10.5C10.5 19 10.5 11.2 10.5 10.4H13.3V11.6C13.7 11 14.4 10.2 15.8 10.2C17.6 10.2 19 11.4 19 13.9V19ZM7.6 9.2C6.7 9.2 6.1 8.6 6.1 7.8C6.1 7 6.7 6.4 7.7 6.4C8.6 6.4 9.2 7 9.2 7.8C9.2 8.6 8.6 9.2 7.6 9.2ZM6.2 19H9V10.4H6.2V19Z"
        fill="white"
      />
    </svg>
  ),

  portfolio: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect width="24" height="24" rx="4.5" fill="#2563EB" />
      <path
        d="M9 7C9 5.89543 9.89543 5 11 5H13C14.1046 5 15 5.89543 15 7V8.5H9V7Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="4" y="8" width="16" height="11.5" rx="2" fill="white" />
      <path
        d="M4 12C7.5 13.5 16.5 13.5 20 12"
        stroke="#2563EB"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <rect x="10.5" y="11" width="3" height="2.5" rx="0.6" fill="#2563EB" />
    </svg>
  ),

  cv: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect width="24" height="24" rx="4.5" fill="#E11D48" />
      <path
        d="M15.5 3H19C20.1 3 21 3.9 21 5V8.5L15.5 3Z"
        fill="white"
        fillOpacity="0.25"
      />
      <path
        d="M10.2 10C9.6 9.4 8.7 9 7.8 9C5.9 9 4.6 10.5 4.6 12.5C4.6 14.5 5.9 16 7.8 16C8.7 16 9.6 15.6 10.2 15"
        stroke="white"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M13 9.3L15.8 15.7L18.6 9.3"
        stroke="white"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
} as const;