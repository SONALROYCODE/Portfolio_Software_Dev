import { useEffect, useRef, useState } from "react";

const LINKEDIN = "https://linkedin.com";
const GITHUB = "https://github.com/SONALROYCODE";

/* SVG Icons for Executive & Technical UI */
function IconLinkedIn({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
    </svg>
  );
}

function IconGitHub({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  );
}

function IconCopy({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );
}

function IconCheck({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function IconArrowUp({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  );
}

function IconRefresh({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  );
}

function IconSun({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function IconMoon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );
}

const skills = [
  {
    title: "MERN Stack",
    desc: "Full-Stack Web Architecture • React, Node, Express & MongoDB",
    code: "const app = express(); app.use(cors());",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Frontend Dev",
    desc: "Responsive UI/UX • React JSX, Tailwind & Modern JavaScript",
    code: "<Component state={data} />",
    tags: ["React.js", "JSX", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Backend Dev",
    desc: "RESTful APIs, Node runtime & Express routing middleware",
    code: "router.get('/api/v1', controller);",
    tags: ["Node.js", "Express.js", "REST APIs", "JSON"],
  },
  {
    title: "Database",
    desc: "NoSQL MongoDB Schemas & Relational SQL DBMS",
    code: "db.users.aggregate([{ $match: {} }]);",
    tags: ["SQL", "DBMS", "MongoDB", "Schemas"],
  },
  {
    title: "Languages",
    desc: "Modern JavaScript (ES6+), Python & SQL Queries",
    code: "const asyncFetch = async () => {};",
    tags: ["JavaScript (ES6+)", "Python", "SQL"],
  },
  {
    title: "Tools & DevOps",
    desc: "Git Version Control, VS Code, Postman & OOP",
    code: "git commit -m 'feat: mern feature'",
    tags: ["Git & GitHub", "VS Code", "Postman", "OOP"],
  },
];

const faceTf = [
  "rotateY(0deg)",
  "rotateY(90deg)",
  "rotateY(180deg)",
  "rotateY(270deg)",
  "rotateX(90deg)",
  "rotateX(-90deg)",
];

const faceBg = [
  "gradient-01 border-[#ded1c6] text-[#0f2d4d]",
  "gradient-02 border-[#a77693] text-[#0f2d4d]",
  "gradient-03 border-[#174871] text-white",
  "gradient-05 border-[#0f2d4d] text-white",
  "gradient-02 border-[#a77693] text-[#0f2d4d]",
  "gradient-03 border-[#174871] text-white",
];

const experience = [
  {
    role: "Software Developer",
    org: "WazirZ SM India Private Limited • Full-time (Currently Working Here)",
    desc: "Currently working here as a Software Developer, building and maintaining responsive web interfaces and software applications using React. Collaborating with the product team to implement UI features and improve overall user experience.",
    date: "Jan 2026 – Present",
    tech: ["React.js", "Software Dev", "JavaScript (ES6+)", "Git"],
  },
  {
    role: "Database Management & Backend Intern",
    org: "ZillionX, Certify360.ai • Part-time • Remote",
    desc: "Handled data collection, extraction, cleaning, analysis, and reporting to support business decision-making.",
    date: "May 2025 – May 2026",
    tech: ["Database Mgt", "SQL", "Data Analysis", "Reporting"],
  },
  {
    role: "Data Scientist Intern",
    org: "YBI Foundation • Internship • Remote",
    desc: "Beginner-level data science internship focused on training and applying foundational ML concepts.",
    date: "May 2024 – Jul 2024",
    tech: ["Python", "Machine Learning", "Data Pipelines"],
  },
  {
    role: "Data Analyst Intern",
    org: "Null Class • Internship • Remote",
    desc: "Managed data collection, cleaning, and analysis; produced reports and decision-support outputs using Tableau and Power BI.",
    date: "May 2024 – Jul 2024",
    tech: ["Tableau", "Power BI", "Data Cleaning", "Analytics"],
  },
];

const projects = [
  {
    title: "Hubble Clone",
    stack: "React • JSX • Tailwind CSS • Node.js • Express.js • Pinelabs API",
    desc: "Replicated Hubble.co.in in React with frontend and backend work completed as a team.",
    backDetails: "Team Project • Integrated Pinelabs Payment Gateway API & Express backend API routing.",
    type: "Full-Stack MERN",
    techBadges: ["React", "Node.js", "Express", "Pinelabs API"],
  },
  {
    title: "Amazon Frontend Clone",
    stack: "React • JSX • Tailwind CSS",
    desc: "Replicated Amazon.in in React with reusable navbar, hero banner, product-card, and footer components.",
    backDetails: "Component Architecture • Reusable modular JSX components & responsive flex layout.",
    type: "Frontend React UI",
    techBadges: ["React", "JSX", "Tailwind CSS"],
  },
  {
    title: "Certificate Generator",
    stack: "React • JSX • Tailwind CSS • MongoDB",
    desc: "Generates Certificates of Internship completion Automated with localStorage.",
    backDetails: "Automated Certificate Engine • Persistent data storage with browser localStorage & MongoDB.",
    type: "MERN Web App",
    techBadges: ["React", "MongoDB", "localStorage"],
  },
  {
    title: "To-Do App",
    stack: "React • JSX • Tailwind CSS",
    desc: "Built functional components with useState; add, toggle, and delete tasks with responsive Tailwind CSS.",
    backDetails: "React Hooks & State Management • Immutable state updates, task filtering & responsive UI.",
    type: "React State App",
    techBadges: ["React", "useState", "Tailwind"],
  },
  {
    title: "Personal Portfolio",
    stack: "React • JSX • Tailwind",
    desc: "Built a responsive portfolio from scratch to showcase projects and skills; deployed on Vercel.",
    backDetails: "Performance Optimized • Interactive 3D CSS transforms & zero external heavy dependencies.",
    type: "React Portfolio",
    techBadges: ["React", "Tailwind", "Vercel"],
  },
];

const certs = [
  {
    title: "Introduction to Python",
    org: "Infosys Springboard",
    desc: "Python Programming + Advanced Python: Libraries & Applications",
  },
  {
    title: "Data Science Tools & Networking Basics",
    org: "Cisco Networking Academy IBM",
    desc: "Core networking concepts, data exploration tools, and data science fundamentals",
  },
  {
    title: "Data Visualization Workshop",
    org: "AI & Power BI Workshop",
    desc: "Hands-on experience with business intelligence dashboards and AI-assisted data visualization",
  },
  {
    title: "Research Paper Publication",
    org: "Brainware University, Kolkata",
    desc: "“AI and IoE Assisted Coordination and Communication Among Electric Vehicle Stations”",
  },
];

/* Silky 3D Liquid Water Ocean Wave Surface Engine (Exact Visual match for user uploaded image with mouse & touch interaction) */
function BackgroundWaves() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let time = 0;
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const handlePointerMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerMove);

    const render = () => {
      time += 0.8;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains("dark-theme") || document.body.classList.contains("dark-theme");

      // Deep Ocean Base Background
      const baseGrad = ctx.createLinearGradient(0, 0, 0, height);
      if (isDark) {
        baseGrad.addColorStop(0, "#071626");
        baseGrad.addColorStop(0.5, "#0b223a");
        baseGrad.addColorStop(1, "#05101c");
      } else {
        baseGrad.addColorStop(0, "#f2f3f4");
        baseGrad.addColorStop(0.4, "#ded1c6");
        baseGrad.addColorStop(1, "#174871");
      }
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, width, height);

      // Render Silky 3D Liquid Waves with Light Reflections
      const step = 8;
      const waveLinesCount = 36;

      for (let i = 0; i < waveLinesCount; i++) {
        const yBase = (height / (waveLinesCount - 1)) * i;
        const progress = i / waveLinesCount;

        ctx.save();
        ctx.beginPath();

        for (let x = 0; x <= width + step; x += step) {
          // Calculate distance to mouse cursor for interactive liquid swell
          const dx = x - mouse.x;
          const dy = yBase - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseEffect = Math.max(0, (1 - dist / 320)) * 42 * Math.sin(dist * 0.04 - time * 0.1);

          // Calculate 3D water surface wave height
          const waveHeight =
            Math.sin(x * 0.006 + time * 0.02 + i * 0.4) * 18 +
            Math.cos(x * 0.012 - time * 0.015 + i * 0.3) * 12 +
            Math.sin(x * 0.003 + time * 0.025) * 22 +
            mouseEffect;

          const y = yBase + waveHeight;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        // 3D Liquid Water Color & Glossy Specular Refraction
        const waveGrad = ctx.createLinearGradient(0, yBase - 30, 0, yBase + 40);
        if (isDark) {
          waveGrad.addColorStop(0, `rgba(23, 72, 113, ${0.15 + progress * 0.6})`);
          waveGrad.addColorStop(0.5, `rgba(15, 45, 77, ${0.4 + progress * 0.55})`);
          waveGrad.addColorStop(1, `rgba(7, 22, 38, 0.95)`);
        } else {
          waveGrad.addColorStop(0, `rgba(222, 209, 198, ${0.3 + progress * 0.5})`);
          waveGrad.addColorStop(0.5, `rgba(23, 72, 113, ${0.25 + progress * 0.6})`);
          waveGrad.addColorStop(1, `rgba(15, 45, 77, 0.9)`);
        }

        ctx.fillStyle = waveGrad;
        ctx.fill();

        // Draw Silky Glossy Crest Highlight along wave peak
        ctx.strokeStyle = isDark
          ? `rgba(222, 209, 198, ${Math.max(0, 0.55 - progress * 0.4)})`
          : `rgba(255, 255, 255, ${Math.max(0, 0.7 - progress * 0.5)})`;
        ctx.lineWidth = Math.max(1, 2.5 - progress * 1.5);
        ctx.shadowColor = isDark ? "#a77693" : "#ded1c6";
        ctx.shadowBlur = 10;
        ctx.stroke();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full block" />
    </div>
  );
}

/* 100% Always Visible Container */
function Reveal({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

/* Mouse-driven 3D tilt card */
function Tilt({ children, className = "", max = 8 }) {
  const ref = useRef(null);
  const move = (e) => {
    if (!ref.current) return;
    const b = ref.current.getBoundingClientRect();
    const x = (e.clientX - b.left) / b.width - 0.5;
    const y = (e.clientY - b.top) / b.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateY(${x * max * 2}deg) rotateX(${-y * max * 2}deg) translateZ(6px)`;
  };

  const leave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      className={`relative rounded-3xl glass-card transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  );
}

/* 3D Flip Project Card Component */
function FlipProjectCard({ proj }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 w-[300px] sm:w-[320px] h-[280px] cursor-pointer group shrink-0 snap-start"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`flip-card-inner relative h-full w-full rounded-3xl transition-transform duration-500 transform-style-3d ${isFlipped ? "rotate-y-180" : ""
          }`}
        style={{
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Face */}
        <div className="flip-card-front h-full w-full rounded-3xl bg-white border border-[#ded1c6] shadow-md p-5 flex flex-col justify-between backface-hidden overflow-hidden">
          <div>
            <div className="flex items-center justify-between">
              <span className="rounded bg-[#a77693]/15 px-2.5 py-0.5 text-[10px] font-mono font-bold text-[#174871] uppercase">
                {proj.type}
              </span>
              <span className="text-xs font-mono text-[#0f2d4d]/70 font-semibold">2026</span>
            </div>
            <h3 className="mt-2 text-base font-bold text-[#174871] group-hover:translate-x-1 transition-transform">
              {proj.title}
            </h3>

            {/* Horizontal Scrollable Tech Stack line for extra content */}
            <div className="mt-1 text-xs font-mono text-[#174871] font-semibold bg-[#ded1c6]/40 px-2 py-1 rounded overflow-x-auto whitespace-nowrap scrollbar-horizontal max-w-full">
              {proj.stack}
            </div>

            <p className="mt-2 text-xs leading-relaxed text-[#0f2d4d] font-normal line-clamp-3">
              {proj.desc}
            </p>
          </div>

          <div className="mt-2 pt-2.5 border-t border-[#ded1c6]/60 flex items-center justify-between gap-2">
            {/* Horizontal Scrollable Tech Badges for extra content */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 max-w-[200px] whitespace-nowrap scrollbar-horizontal">
              {proj.techBadges.map((b) => (
                <span key={b} className="rounded bg-[#f2f3f4] border border-[#ded1c6] px-1.5 py-0.5 text-[10px] font-mono font-semibold text-[#0f2d4d] shrink-0">
                  {b}
                </span>
              ))}
            </div>
            <span className="text-[11px] font-mono text-[#174871] font-bold flex items-center gap-1 shrink-0 group-hover:underline">
              <span>Details</span>
              <span>→</span>
            </span>
          </div>
        </div>

        {/* Back Face */}
        <div className="flip-card-back absolute inset-0 h-full w-full rounded-3xl gradient-05 text-white p-5 flex flex-col justify-between backface-hidden border border-[#174871] shadow-2xl overflow-hidden">
          <div>
            <div className="flex items-center justify-between border-b border-[#a77693]/40 pb-2">
              <span className="text-xs font-mono font-bold text-[#ded1c6] uppercase">
                Architecture Breakdown
              </span>
              <span className="text-xs font-mono text-white/70">{proj.title}</span>
            </div>
            <div className="mt-3 text-xs font-mono leading-relaxed text-white overflow-y-auto max-h-[160px] pr-1">
              {proj.backDetails}
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-[#a77693]/40 pt-2.5">
            <span className="text-[11px] font-mono text-white/80">Click to flip back</span>
            <span className="text-[11px] font-mono text-[#ded1c6] font-bold flex items-center gap-1">
              <IconRefresh className="w-3.5 h-3.5" />
              <span>Flip</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title({ children }) {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-bold text-[#174871] sm:text-4xl tracking-tight">
        {children}
      </h2>
    </div>
  );
}

/* Interactive Developer Terminal Component with Live Typing Effect */
function DevTerminal() {
  const [activeTab, setActiveTab] = useState("stack");
  const [copied, setCopied] = useState(false);
  const [displayedText, setDisplayedText] = useState([]);
  const typingTimer = useRef(null);

  const commands = {
    stack: {
      cmd: "sonal.getMernStack()",
      output: [
        "{",
        '  "frontend": ["React.js", "JSX", "Tailwind CSS", "HTML5/CSS3"],',
        '  "backend": ["Node.js", "Express.js", "REST APIs"],',
        '  "database": ["MongoDB", "SQL", "DBMS"],',
        '  "languages": ["JavaScript (ES6+)", "Python", "SQL"]',
        "}",
      ],
    },
    experience: {
      cmd: "sonal.getCurrentRole()",
      output: [
        "Software Developer @ WazirZ SM India Private Limited (Currently Working Here)",
        "• Experience: 9 Months Full-time Experience (Jan 2026 – Present)",
        "• Core Focus: Building & maintaining React software applications",
        "• Degree: BCA from Christ University (2023 - 2026)",
      ],
    },
    contact: {
      cmd: "sonal.getContactInfo()",
      output: [
        'Email: "soroy307875@gmail.com"',
        'Phone: "+91 8252982719"',
        'Location: "Noida, India"',
        'Status: "Available for MERN / Full-Stack Opportunities"',
      ],
    },
  };

  useEffect(() => {
    if (typingTimer.current) clearInterval(typingTimer.current);
    const targetLines = commands[activeTab].output;
    setDisplayedText([]);
    let lineIdx = 0;

    typingTimer.current = setInterval(() => {
      if (lineIdx < targetLines.length) {
        const line = targetLines[lineIdx];
        setDisplayedText((prev) => [...prev, line]);
        lineIdx++;
      } else {
        clearInterval(typingTimer.current);
      }
    }, 90);

    return () => clearInterval(typingTimer.current);
  }, [activeTab]);

  const copyCmd = () => {
    navigator.clipboard.writeText(`npm i mern-developer --author "Sonal Roy"`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 w-full max-w-2xl overflow-hidden rounded-2xl border border-[#ded1c6]/40 bg-[#0f2d4d]/40 backdrop-blur-xl text-white shadow-2xl font-mono text-xs sm:text-sm">
      {/* Terminal Bar */}
      <div className="flex items-center justify-between border-b border-[#ded1c6]/20 bg-[#0f2d4d]/50 backdrop-blur-md px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#a77693] inline-block" />
          <span className="h-3 w-3 rounded-full bg-[#ded1c6] inline-block" />
          <span className="h-3 w-3 rounded-full bg-[#174871] border border-white/30 inline-block" />
          <span className="ml-2 text-xs font-medium text-[#ded1c6]">bash — sonal@mern-dev:~</span>
        </div>
        <button
          onClick={copyCmd}
          className="text-xs text-[#ded1c6] hover:text-white transition flex items-center gap-1.5"
        >
          {copied ? (
            <>
              <IconCheck className="w-3.5 h-3.5 text-[#ded1c6]" />
              <span className="text-[#ded1c6]">Copied</span>
            </>
          ) : (
            <>
              <IconCopy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Terminal Interactive Tabs */}
      <div className="flex border-b border-[#ded1c6]/20 bg-[#0f2d4d]/30 backdrop-blur-md text-xs">
        {[
          ["stack", "1. mern-stack.js"],
          ["experience", "2. experience.json"],
          ["contact", "3. contact.env"],
        ].map(([tabKey, label]) => (
          <button
            key={tabKey}
            onClick={() => setActiveTab(tabKey)}
            className={`px-4 py-2 border-r border-[#ded1c6]/20 transition ${activeTab === tabKey
              ? "bg-[#174871]/80 text-white font-semibold border-b-2 border-b-[#ded1c6]"
              : "text-[#ded1c6]/80 hover:text-white hover:bg-[#174871]/40"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Terminal Output Window */}
      <div className="p-4 sm:p-5 space-y-2 leading-relaxed bg-[#0f2d4d]/30 backdrop-blur-md min-h-[160px]">
        <div className="flex items-center gap-2 text-[#ded1c6]">
          <span className="text-[#a77693] font-bold">$</span>
          <span className="text-white font-semibold">{commands[activeTab].cmd}</span>
        </div>

        <div className="pl-4 text-[#ded1c6] space-y-1">
          {displayedText.map((line, idx) => (
            <div key={idx} className="whitespace-pre-wrap">{line}</div>
          ))}
        </div>

        <div className="flex items-center gap-2 text-[#ded1c6] pt-2">
          <span className="text-[#a77693] font-bold">$</span>
          <span className="h-4 w-2 bg-[#ded1c6] animate-pulse inline-block" />
        </div>
      </div>
    </div>
  );
}

/* 3D Skills Cube with Touch / Finger & Mouse movement rotation */
function InteractiveSkillsCube() {
  const [rotX, setRotX] = useState(-15);
  const [rotY, setRotY] = useState(25);
  const [isDragging, setIsDragging] = useState(false);
  const [activeFace, setActiveFace] = useState(0);

  const dragStart = useRef({ x: 0, y: 0, rotX: 0, rotY: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const animFrame = useRef(null);
  const lastPos = useRef({ x: 0, y: 0, time: 0 });

  useEffect(() => {
    let cancel = false;
    const autoRotate = () => {
      if (!isDragging && Math.abs(velocity.current.x) < 0.05 && Math.abs(velocity.current.y) < 0.05) {
        setRotY((prev) => (prev + 0.25) % 360);
      }
      if (!cancel) {
        animFrame.current = requestAnimationFrame(autoRotate);
      }
    };
    animFrame.current = requestAnimationFrame(autoRotate);
    return () => {
      cancel = true;
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [isDragging]);

  const handlePointerDown = (clientX, clientY) => {
    setIsDragging(true);
    dragStart.current = { x: clientX, y: clientY, rotX, rotY };
    lastPos.current = { x: clientX, y: clientY, time: performance.now() };
    velocity.current = { x: 0, y: 0 };
  };

  const handlePointerMove = (clientX, clientY) => {
    if (!isDragging) return;
    const now = performance.now();
    const dt = Math.max(now - lastPos.current.time, 16);

    const deltaX = clientX - dragStart.current.x;
    const deltaY = clientY - dragStart.current.y;

    const vx = ((clientX - lastPos.current.x) / dt) * 14;
    const vy = ((clientY - lastPos.current.y) / dt) * 14;
    velocity.current = { x: vx, y: vy };

    lastPos.current = { x: clientX, y: clientY, time: now };

    setRotY(dragStart.current.rotY + deltaX * 0.6);
    setRotX(Math.max(-85, Math.min(85, dragStart.current.rotX - deltaY * 0.6)));
  };

  const handlePointerEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    let vx = velocity.current.x;
    let vy = velocity.current.y;

    const applyFriction = () => {
      if (Math.abs(vx) > 0.05 || Math.abs(vy) > 0.05) {
        setRotY((prev) => (prev + vx) % 360);
        setRotX((prev) => Math.max(-85, Math.min(85, prev - vy)));
        vx *= 0.92;
        vy *= 0.92;
        requestAnimationFrame(applyFriction);
      }
    };
    requestAnimationFrame(applyFriction);
  };

  const onMouseDown = (e) => handlePointerDown(e.clientX, e.clientY);
  const onMouseMove = (e) => handlePointerMove(e.clientX, e.clientY);
  const onMouseUp = () => handlePointerEnd();

  const onTouchStart = (e) => {
    if (e.touches.length === 1) {
      handlePointerDown(e.touches[0].clientX, e.touches[0].clientY);
    }
  };
  const onTouchMove = (e) => {
    if (e.touches.length === 1) {
      handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  };
  const onTouchEnd = () => handlePointerEnd();

  const snapToFace = (index) => {
    setActiveFace(index);
    const targets = [
      { x: 0, y: 0 },
      { x: 0, y: -90 },
      { x: 0, y: -180 },
      { x: 0, y: -270 },
      { x: -90, y: 0 },
      { x: 90, y: 0 },
    ];
    setRotX(targets[index].x);
    setRotY(targets[index].y);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="cube-container relative flex h-[340px] w-full max-w-[340px] items-center justify-center py-6 perspective-1200"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="relative h-64 w-64 transform-style-3d"
          style={{
            transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
            transition: isDragging ? "none" : "transform 0.4s ease-out",
          }}
        >
          {skills.map((item, i) => (
            <div
              key={item.title}
              onClick={() => snapToFace(i)}
              className={`absolute inset-0 flex flex-col justify-between rounded-3xl border p-5 text-center shadow-xl backdrop-blur-md cursor-pointer transition-transform duration-300 ${faceBg[i]}`}
              style={{
                transform: `${faceTf[i]} translateZ(128px)`,
                backfaceVisibility: "visible",
              }}
            >
              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-1 text-xs font-semibold leading-tight opacity-95">{item.desc}</p>
              </div>

              <div className="my-2 rounded-lg bg-[#0f2d4d] px-2.5 py-1.5 text-[11px] font-mono text-[#ded1c6] shadow-inner overflow-hidden text-ellipsis whitespace-nowrap">
                {item.code}
              </div>

              <div className="flex flex-wrap justify-center gap-1">
                {item.tags.map((t) => (
                  <span key={t} className="rounded bg-white px-1.5 py-0.5 text-[10px] font-bold text-[#0f2d4d]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Face indicator buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-xl px-4">
        {skills.map((item, i) => (
          <button
            key={item.title}
            onClick={() => snapToFace(i)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-mono transition-all duration-200 ${activeFace === i
              ? "gradient-03 text-white shadow-md shadow-[#174871]/30 font-bold scale-105"
              : "bg-white text-[#0f2d4d] border border-[#ded1c6] hover:bg-[#ded1c6]/50 hover:text-[#174871]"
              }`}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}

/* Interactive MERN Architecture Pipeline visualizer with 5 Palette Shades */
function MernArchitecture() {
  const steps = [
    { num: "01", title: "React.js Frontend", detail: "JSX • Components • State & Hooks", color: "gradient-01 border-[#ded1c6] text-[#0f2d4d]" },
    { num: "02", title: "REST API", detail: "JSON Payloads • HTTP Headers", color: "gradient-02 border-[#a77693] text-[#0f2d4d]" },
    { num: "03", title: "Node & Express Backend", detail: "Middleware • Controllers • Routes", color: "gradient-03 border-[#174871] text-white" },
    { num: "04", title: "MongoDB Database", detail: "Collections • Mongoose Schemas", color: "gradient-05 border-[#0f2d4d] text-white" },
  ];

  return (
    <div className="mt-12 rounded-3xl border border-[#ded1c6] bg-white p-6 shadow-lg">
      <h3 className="text-base font-bold text-[#174871] font-mono text-center sm:text-left mb-4">
        Full-Stack Architecture & Data Flow
      </h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
        {steps.map((s, idx) => (
          <div key={s.title} className={`relative flex flex-col items-center justify-center rounded-2xl border p-4 text-center ${s.color} hover:scale-105 transition-transform duration-200 shadow-md`}>
            <span className="text-xs font-mono font-bold opacity-90 mb-1">{s.num}</span>
            <p className="text-xs font-bold">{s.title}</p>
            <p className="mt-1 text-[11px] font-mono opacity-95">{s.detail}</p>
            {idx < steps.length - 1 && (
              <span className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-xs font-bold text-[#174871] bg-white rounded-full h-5 w-5 flex items-center justify-center border border-[#ded1c6] shadow-sm">
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* Interactive MERN REST API Playground Component */
function RestApiExplorer() {
  const [endpoint, setEndpoint] = useState("GET /api/v1/developer");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("200 OK");
  const [latency, setLatency] = useState("38ms");

  const endpoints = [
    {
      method: "GET",
      url: "/api/v1/developer",
      status: "200 OK",
      data: {
        name: "Sonal Roy",
        role: "MERN Software Developer",
        location: "Noida, India",
        experience: "9 Months Software Developer @ WazirZ SM India (Currently Working Here)",
        degree: "BCA from Christ University (2023 - 2026)",
        status: "Available for MERN / Full-Stack Opportunities",
      },
    },
    {
      method: "GET",
      url: "/api/v1/stack",
      status: "200 OK",
      data: {
        frontend: ["React.js", "JSX", "Tailwind CSS", "HTML5", "CSS3"],
        backend: ["Node.js", "Express.js", "REST APIs"],
        database: ["MongoDB", "SQL", "DBMS"],
        tools: ["Git & GitHub", "VS Code", "Postman", "OOP"],
      },
    },
    {
      method: "POST",
      url: "/api/v1/contact",
      status: "201 Created",
      data: {
        success: true,
        message: "Message dispatched to Sonal Roy",
        email: "soroy307875@gmail.com",
        phone: "+91 8252982719",
      },
    },
  ];

  const handleTestApi = (ep) => {
    setLoading(true);
    setEndpoint(`${ep.method} ${ep.url}`);
    setTimeout(() => {
      setResponse(ep.data);
      setStatus(ep.status);
      setLatency(`${Math.floor(22 + Math.random() * 25)}ms`);
      setLoading(false);
    }, 250);
  };

  useEffect(() => {
    handleTestApi(endpoints[0]);
  }, []);

  return (
    <div className="rounded-2xl border border-[#ded1c6] bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 border-b border-[#ded1c6] pb-2.5">
        <div>
          <h4 className="text-sm font-bold text-[#174871] font-mono">Interactive REST API Explorer</h4>
          <p className="text-[11px] text-[#0f2d4d]/70 font-mono">Test live MERN backend endpoint outputs</p>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[11px]">
          <span className="rounded bg-[#ded1c6]/60 px-2 py-0.5 font-bold text-[#174871]">HTTP/1.1</span>
          <span className="rounded bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5">{status}</span>
          <span className="text-[#0f2d4d]/60 font-semibold">{latency}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {endpoints.map((ep) => (
          <button
            key={ep.url}
            onClick={() => handleTestApi(ep)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${endpoint === `${ep.method} ${ep.url}`
              ? "gradient-03 text-white shadow-sm"
              : "bg-[#f2f3f4] text-[#0f2d4d] border border-[#ded1c6] hover:bg-[#ded1c6]/40"
              }`}
          >
            <span className="text-[#a77693] mr-1">{ep.method}</span>
            {ep.url}
          </button>
        ))}
      </div>

      <div className="rounded-xl bg-[#0f2d4d] p-3.5 text-xs font-mono text-[#ded1c6] shadow-inner min-h-[140px] relative overflow-hidden">
        {loading ? (
          <div className="flex items-center gap-2 text-white py-8 justify-center">
            <span className="h-2.5 w-2.5 rounded-full bg-[#a77693] animate-ping inline-block" />
            <span>Executing HTTP Request...</span>
          </div>
        ) : (
          <pre className="whitespace-pre-wrap overflow-x-auto text-[#ded1c6] text-[11px] leading-relaxed">
            {JSON.stringify(response, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("summary");
  const [isDark, setIsDark] = useState(false);
  const [isHeroFlipped, setIsHeroFlipped] = useState(false);

  useEffect(() => {
    const sectionIds = ["summary", "skills", "experience", "projects", "certifications", "education", "contact"];

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);
      setShowBackToTop(currentScroll > 350);

      // Top near hero
      if (currentScroll < 200) {
        setActiveSection("summary");
        return;
      }

      // Determine active front card
      const targetThreshold = currentScroll + window.innerHeight * 0.4;
      let currentActive = "summary";
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && targetThreshold >= el.offsetTop) {
          currentActive = sectionIds[i];
          break;
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`relative min-h-screen text-[#0f2d4d] bg-[#f2f3f4] transition-colors duration-300 ${isDark ? "dark-theme" : ""}`}>
      {/* Subtle Full-Screen Fluid Layered Wave Landscape Background */}
      <BackgroundWaves />

      {/* Subtle Top Edge Scroll Mask */}
      <div className="fixed top-0 left-0 right-0 z-40 h-8 pointer-events-none bg-gradient-to-b from-[#f2f3f4] to-transparent" />

      {/* Subtle Bottom Edge Scroll Mask */}
      <div className="fixed bottom-0 left-0 right-0 z-40 h-8 pointer-events-none bg-gradient-to-t from-[#f2f3f4] to-transparent" />

      {/* Top Scroll Progress Indicator with Multi-stop Gradient 04 */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1.5 bg-[#ded1c6]/30">
        <div
          className="h-full gradient-04 transition-all duration-150 ease-out shadow-sm"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navbar */}
      <nav className="fixed left-1/2 top-4 z-50 flex items-center -translate-x-1/2 gap-1 rounded-full border border-[#ded1c6] bg-white/95 px-3 py-2 text-sm shadow-xl backdrop-blur">
        {[
          ["summary", "Summary"],
          ["skills", "Skills"],
          ["experience", "Experience"],
          ["projects", "Projects"],
          ["certifications", "Certs"],
          ["education", "Education"],
          ["contact", "Contact"],
        ].map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className={`rounded-full px-3.5 py-1 transition-all duration-200 font-mono text-xs sm:text-sm font-bold ${activeSection === id
              ? "gradient-03 text-white shadow-md scale-105"
              : "text-[#0f2d4d] hover:bg-[#ded1c6]/40 hover:text-[#174871]"
              }`}
          >
            {label}
          </a>
        ))}

        {/* Icon-Only Dark & Light Mode Theme Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className={`ml-1.5 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${isDark
            ? "bg-[#ded1c6] text-[#0f2d4d] hover:bg-white shadow-md"
            : "bg-[#174871] text-white hover:bg-[#0f2d4d] shadow-md"
            }`}
          aria-label="Toggle Dark and Light Mode"
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDark ? <IconSun className="w-4 h-4" /> : <IconMoon className="w-4 h-4" />}
        </button>
      </nav>

      {/* Hero Header enclosed within one flippable transparent sheet */}
      <header
        className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-4 sm:px-6 pt-28 pb-16"
        style={{ perspective: 1200 }}
      >
        <Reveal className="w-full max-w-4xl">
          <div
            className={`relative w-full transition-transform duration-700 transform-style-3d ${isHeroFlipped ? "rotate-y-180" : ""
              }`}
            style={{
              transform: isHeroFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* Front Face: Hero Terminal & Details inside Transparent Sheet */}
            <div className="rounded-3xl border border-[#ded1c6] bg-white/80 backdrop-blur-md p-6 sm:p-10 shadow-2xl flex flex-col items-center text-center backface-hidden">
              <div className="w-full flex items-center justify-between mb-4 border-b border-[#ded1c6]/60 pb-3">
                <div className="rounded-full border border-[#a77693]/40 bg-[#ded1c6]/40 px-3.5 py-1 text-xs font-mono font-bold text-[#174871]">
                  MongoDB • Express • React • Node
                </div>
                <button
                  onClick={() => setIsHeroFlipped(true)}
                  className="flex items-center gap-1.5 rounded-full gradient-03 px-4 py-1.5 text-xs font-mono font-bold text-white shadow-md hover:scale-105 transition duration-300"
                >
                  <span>Photo & Achievements</span>
                  <IconRefresh className="w-3.5 h-3.5" />
                </button>
              </div>

              <h1 className="text-5xl font-extrabold tracking-tight text-gradient-hero sm:text-7xl">
                Sonal Roy
              </h1>

              <p className="mt-2 text-lg font-bold text-[#174871] sm:text-2xl tracking-wide">
                MERN Software Developer
              </p>

              <p className="mt-1 text-xs sm:text-sm text-[#0f2d4d] font-mono font-semibold">
                Noida • 8252982719 • soroy307875@gmail.com
              </p>

              {/* Interactive Developer Terminal */}
              <div className="w-full mt-4 flex justify-center">
                <DevTerminal />
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full gradient-03 px-5 py-2 text-xs font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
                >
                  <IconLinkedIn className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full gradient-05 px-5 py-2 text-xs font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
                >
                  <IconGitHub className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <button
                  onClick={() => setIsHeroFlipped(true)}
                  className="flex items-center gap-2 rounded-full bg-[#ded1c6] text-[#0f2d4d] px-5 py-2 text-xs font-bold shadow-md hover:bg-[#a77693] hover:text-white transition duration-300"
                >
                  <span>View Photo & Achievements</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Back Face: Photo & Achievements inside Transparent Sheet */}
            <div
              className="absolute inset-0 rounded-3xl border border-[#174871] bg-[#0f2d4d]/95 backdrop-blur-xl p-6 sm:p-8 text-white shadow-2xl flex flex-col justify-between backface-hidden"
              style={{ transform: "rotateY(180deg)" }}
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#a77693]/40 pb-3 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#a77693] animate-pulse" />
                    <h3 className="text-base sm:text-lg font-bold font-mono text-[#ded1c6]">
                      Developer Profile & Achievements
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsHeroFlipped(false)}
                    className="flex items-center gap-1.5 rounded-full gradient-03 px-4 py-1.5 text-xs font-mono font-bold text-white shadow-md hover:scale-105 transition duration-300"
                  >
                    <IconRefresh className="w-3.5 h-3.5" />
                    <span>Back to Terminal</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Left: Photo & Key Metrics */}
                  <div className="md:col-span-5 flex flex-col items-center text-center">
                    <div className="relative group">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#a77693] to-[#174871] blur opacity-70 group-hover:opacity-100 transition duration-500" />
                      <img
                        src="/sonal_roy_profile.jpg"
                        alt="Sonal Roy"
                        className="relative h-40 w-40 rounded-full object-cover border-2 border-[#ded1c6] shadow-xl"
                      />
                    </div>

                    <h4 className="mt-3 text-lg font-bold text-white">Sonal Roy</h4>
                    <p className="text-xs font-mono text-[#ded1c6]">MERN Software Developer</p>

                    <div className="mt-3 flex flex-wrap justify-center gap-2">
                      <span className="rounded-lg bg-[#174871] px-2.5 py-1 text-[11px] font-mono font-bold text-[#ded1c6]">
                        9 Mo Software Dev Exp
                      </span>
                      <span className="rounded-lg bg-[#a77693]/30 px-2.5 py-1 text-[11px] font-mono font-bold text-white">
                        BCA @ Christ Univ
                      </span>
                    </div>
                  </div>

                  {/* Right: Key Achievements List */}
                  <div className="md:col-span-7 space-y-2.5 font-mono text-xs">
                    <div className="rounded-xl bg-[#174871]/60 p-3 border border-[#a77693]/30">
                      <p className="font-bold text-[#ded1c6]">Software Developer @ WazirZ SM India</p>
                      <p className="text-[11px] text-white/90 mt-0.5">Currently working full-time building responsive React web interfaces.</p>
                    </div>

                    <div className="rounded-xl bg-[#174871]/60 p-3 border border-[#a77693]/30">
                      <p className="font-bold text-[#ded1c6]">Research Paper Publication</p>
                      <p className="text-[11px] text-white/90 mt-0.5">Published paper on EV Stations coordination at Brainware University, Kolkata.</p>
                    </div>

                    <div className="rounded-xl bg-[#174871]/60 p-3 border border-[#a77693]/30">
                      <p className="font-bold text-[#ded1c6]">Infosys & Cisco Certified</p>
                      <p className="text-[11px] text-white/90 mt-0.5">Certified in Python Programming, Data Science Tools & Networking Basics.</p>
                    </div>

                    <div className="rounded-xl bg-[#174871]/60 p-3 border border-[#a77693]/30">
                      <p className="font-bold text-[#ded1c6]">5+ Full-Stack Projects</p>
                      <p className="text-[11px] text-white/90 mt-0.5">Hubble Clone (Pinelabs API), Amazon Clone, Certificate Generator & To-Do App.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#a77693]/40 flex justify-between items-center">
                <span className="text-[11px] font-mono text-[#ded1c6]">Currently Software Developer @ WazirZ SM India</span>
                <button
                  onClick={() => setIsHeroFlipped(false)}
                  className="text-xs font-mono font-bold text-[#ded1c6] hover:text-white underline flex items-center gap-1"
                >
                  <span>Flip back to Dev Terminal</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </header>

      {/* Main Content */}
      <main className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 pb-64">
        {/* summary */}
        <section
          id="summary"
          className={`sticky top-24 z-10 sticky-overlapping-sheet p-6 sm:p-10 mb-32 scroll-mt-24 ${activeSection === "summary" ? "sheet-active" : ""
            }`}
        >
          <Reveal>
            <Title>Professional Summary</Title>
            <p className="leading-relaxed text-base sm:text-lg text-[#0f2d4d] font-medium">
              MERN Software Developer with a BCA from Christ University and 9 months of full-time software development experience. Currently working as a Software Developer at WazirZ SM India Private Limited, building and maintaining web interfaces and software applications with React, JavaScript, Tailwind CSS, HTML/CSS, and Node.js/Express.js for full-stack development. Experienced in responsive web projects and team-based frontend/backend work.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-[#ded1c6]">
              {["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript (ES6+)", "Tailwind CSS", "REST APIs"].map((stack) => (
                <span key={stack} className="rounded-md bg-[#ded1c6]/50 border border-[#a77693]/40 px-2.5 py-1 text-xs font-mono font-bold text-[#174871]">
                  {stack}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* skills: 3D Finger-Rotatable Cube & Architecture Flow */}
        <section
          id="skills"
          className={`sticky top-28 z-20 sticky-overlapping-sheet p-6 sm:p-10 mb-32 scroll-mt-24 ${activeSection === "skills" ? "sheet-active" : ""
            }`}
        >
          <Reveal>
            <Title>Technical Skills & Architecture</Title>
            <InteractiveSkillsCube />
            <MernArchitecture />
            <p className="mt-6 text-center text-sm font-mono text-[#174871] font-bold">
              Spoken: English (Fluent) • Hindi (Fluent) • French (Beginner)
            </p>
          </Reveal>
        </section>

        {/* experience */}
        <section
          id="experience"
          className={`sticky top-32 z-30 sticky-overlapping-sheet p-6 sm:p-10 mb-32 scroll-mt-24 ${activeSection === "experience" ? "sheet-active" : ""
            }`}
        >
          <Reveal>
            <div className="flex items-center justify-between mb-4">
              <Title>Work Experience</Title>
              <span className="text-xs font-mono font-bold text-[#a77693] flex items-center gap-1 bg-[#ded1c6]/30 px-3 py-1 rounded-full border border-[#a77693]/30">
                <span>Scroll Horizontally</span>
                <span>→</span>
              </span>
            </div>
          </Reveal>
          <div className="flex gap-6 overflow-x-auto p-2 pb-8 snap-x snap-mandatory scrollbar-horizontal">
            {experience.map(({ role, org, desc, date, tech }) => (
              <div key={role} className="w-[300px] sm:w-[350px] shrink-0 snap-start">
                <Reveal className="h-full">
                  <Tilt className="h-full p-6 sm:p-7 flex flex-col justify-between min-h-[300px]" max={8}>
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="text-base font-bold text-[#174871]">{role}</h3>
                        <span className="shrink-0 rounded-full bg-[#ded1c6] px-2.5 py-1 text-[11px] font-mono font-bold text-[#174871]">
                          {date}
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs font-bold text-[#0f2d4d]">{org}</p>
                      <p className="mt-3 text-xs leading-relaxed text-[#0f2d4d] font-normal">{desc}</p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-[#ded1c6]">
                      {tech.map((t) => (
                        <span key={t} className="rounded bg-[#f2f3f4] border border-[#ded1c6] px-2 py-0.5 text-[10px] font-mono font-bold text-[#174871]">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </Tilt>
                </Reveal>
              </div>
            ))}
          </div>
        </section>

        {/* projects with Horizontal Scrollbar */}
        <section
          id="projects"
          className={`sticky top-36 z-40 sticky-overlapping-sheet p-6 sm:p-10 mb-32 scroll-mt-24 ${activeSection === "projects" ? "sheet-active" : ""
            }`}
        >
          <Reveal>
            <div className="flex items-center justify-between mb-4">
              <Title>Projects</Title>
              <span className="text-xs font-mono font-bold text-[#a77693] flex items-center gap-1 bg-[#ded1c6]/30 px-3 py-1 rounded-full border border-[#a77693]/30">
                <span>Scroll Horizontally</span>
                <span>→</span>
              </span>
            </div>
          </Reveal>
          <div className="flex gap-6 overflow-x-auto p-2 pb-8 snap-x snap-mandatory scrollbar-horizontal">
            {projects.map((proj) => (
              <div key={proj.title} className="w-[300px] sm:w-[340px] shrink-0 snap-start">
                <Reveal>
                  <FlipProjectCard proj={proj} />
                </Reveal>
              </div>
            ))}
          </div>
        </section>

        {/* certifications */}
        <section
          id="certifications"
          className={`sticky top-40 z-50 sticky-overlapping-sheet p-6 sm:p-10 mb-32 scroll-mt-24 ${activeSection === "certifications" ? "sheet-active" : ""
            }`}
        >
          <Reveal>
            <Title>Certifications & Achievements</Title>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {certs.map((c, i) => (
              <Reveal key={i}>
                <Tilt className="h-full p-6 flex flex-col justify-between" max={8}>
                  <div>
                    <h3 className="text-base font-bold text-[#174871]">{c.title}</h3>
                    <p className="text-xs font-mono font-bold text-[#a77693] mt-1">{c.org}</p>
                    <p className="mt-3 text-xs leading-relaxed text-[#0f2d4d] font-normal">{c.desc}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </section>

        {/* education */}
        <section
          id="education"
          className={`sticky top-44 z-[60] sticky-overlapping-sheet p-6 sm:p-10 mb-32 scroll-mt-24 ${activeSection === "education" ? "sheet-active" : ""
            }`}
        >
          <Reveal>
            <Title>Education</Title>
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white p-6 border border-[#ded1c6] shadow-sm">
              <div>
                <h3 className="text-lg font-bold text-[#174871]">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="mt-1 text-sm font-bold text-[#0f2d4d]">Christ University, Delhi NCR</p>
              </div>
              <span className="rounded-full bg-[#ded1c6] px-4 py-1.5 text-xs font-mono font-bold text-[#0f2d4d] shadow-sm">
                July 2023 – July 2026
              </span>
            </div>
          </Reveal>
        </section>

        {/* contact */}
        <section
          id="contact"
          className={`sticky top-48 z-[70] sticky-overlapping-sheet p-6 sm:p-10 mb-32 scroll-mt-24 ${activeSection === "contact" ? "sheet-active" : ""
            }`}
        >
          <Reveal>
            <Title>Get In Touch & API Playground</Title>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 rounded-2xl bg-white border border-[#ded1c6] shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#174871]">Sonal Roy</h3>
                  <p className="text-sm font-semibold text-[#0f2d4d] mt-1">MERN Software Developer</p>
                  <p className="text-xs text-[#0f2d4d]/80 mt-3 font-mono">Location: Noida, India</p>
                  <p className="text-xs text-[#0f2d4d]/80 font-mono">Phone: +91 8252982719</p>
                  <p className="text-xs text-[#0f2d4d]/80 font-mono">Email: soroy307875@gmail.com</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="mailto:soroy307875@gmail.com"
                    className="rounded-full gradient-03 px-5 py-2 text-xs font-bold text-white shadow-md hover:scale-105 transition"
                  >
                    Send Email
                  </a>
                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[#174871] text-[#174871] px-5 py-2 text-xs font-bold hover:bg-[#174871] hover:text-white transition"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
              <RestApiExplorer />
            </div>
          </Reveal>
        </section>
      </main>

      {/* Scroll to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full gradient-03 text-white shadow-xl transition-transform hover:scale-110 magnetic-btn"
          aria-label="Back to top"
        >
          <IconArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
