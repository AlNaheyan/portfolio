import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "al naheyan",
  initials: "AN",
  url: "https://alnaheyan.me",
  location: "New York City, NY",
  locationLink: "https://www.google.com/maps/place/newyork",
  description:
    "software engineer based in nyc. I love building things and making an impact.",
  summary:
    "computer science student at The [City College of New York](/#education) who loves building things that solve real problems. Over the past few years, I’ve gone from tinkering with full-stack web development to landing swe internships at [Unadat and Pulp Internet](/#experience). I currently work at Fox Tech, where I help the finance tech team streamline tools and workflows. Outside of that, I’m usually experimenting with side projects [(Acadion, Pomly and etc)](/#projects), exploring distributed systems, or organizing small campus events that bring people together around tech and creativity.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Go",
    "React",
    "Next.js",
    "Typescript",
    "Express.js",
    "Node.js",
    "Python",
    "Java",
    "Springboot",
    "MySQL",
    "Postgres",
    "Redis",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "alnaheyan.nyc@gmail.com",
    tel: "+3472578567",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AlNaheyan",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/al-naheyan",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/0a1n1",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Fox Tech",
      href: "https://tech.fox.com/",
      badges: [],
      location: "New York City, NY",
      title: "Technology Analyst Intern",
      logoUrl: "/foxtech.jpeg",
      start: "Sep 2025",
      end: "Dec 2025",
      description:
        "Researching and evaluating enterprise software tools to optimize finance workflows at Fox Corporation. Analyzing vendor data, testing integrations, and collaborating with cross-functional teams to identify scalable, tech-driven solutions for long-term efficiency.",
    },
    {
      company: "Pulp Internet",
      badges: [],
      href: "https://www.pulp.chat/",
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/pulp.png",
      start: "July 2025",
      end: "Aug 2025",
      description:
        "Built scalable React UI library with shadcn/ui, Radix, and TypeScript, documenting 30+ components in Storybook for consistent design handoff. Integrated Neo4j queries into Next.js job-matching interface to enable efficient search, filtering, and ranking for user insights.",
    },
    {
      company: "CodePath",
      badges: [],
      href: "https://www.codepath.org/",
      location: "Remote",
      title: "Software Engineer Instructor",
      logoUrl: "/codepath.jpeg",
      start: "Jan 2025",
      end: "April 2025",
      description:
        "Mentored 50+ students in web development (HTML, CSS, JavaScript, React), strengthening their project skills and confidence. Created learning resources and provided technical support that helped CodePath expand to 70+ universities and boost course completion rates by 15%.",
    },
    {
      company: "Unadat",
      href: "https://unadat.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/unadat.png",
      start: "June 2024",
      end: "Aug 2024",
      description:
        "Built an end-to-end goal-setting and credit tracking system using PHP, MySQL, and Redis, enabling users to manage daily financial habits and log $50K+ in monthly transactions. Optimized database schemas with B-tree indexes and caching to cut API latency by 20% and improve response times by 150 ms. Added calendar sync via .ics generation and resolved 15+ bugs throughout the Agile development cycle.",
    },
  ],
  education: [
    {
      school: "CUNY City College of New York",
      href: "https://www.ccny.cuny.edu/",
      degree: "B.S Computer Science",
      logoUrl: "/CCNY.jpg",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Termchat",
      href: "https://github.com/AlNaheyan/termchat",
      dates: "Sep 2025 - Present",
      active: true,
      description:
        "Lightweight terminal-based chat that lets users create or join private rooms and talk in real time from the command line.",
      technologies: [
        "Go",
        "Bubbletea",
        "Fly.io",
        "Docker",
        "SQLite"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AlNaheyan/termchat",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/termchat.png",
      video:
        "",
    },
    {
      title: "Acadion",
      href: "https://github.com/AlNaheyan/ccny_cs_scheduler",
      dates: "June 2025 - July 2025",
      active: true,
      description:
        "Acadion helps CCNY CS students plan their next semester by browsing a complete, searchable course catalog and finding exactly the courses you need to graduate.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
        "Clerk",
        "Vercel"
      ],
      links: [
        {
          type: "Website",
          href: "https://ccny-cs-scheduler.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AlNaheyan/ccny_cs_scheduler",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/acadion.mp4",
    },
    {
      title: "Cryo.cli",
      href: "https://github.com/AlNaheyan/Cryo-cli",
      dates: "Febrary 2025 - March 2025",
      active: true,
      description:
        "A secure file sharing cli written in Rust.",
      technologies: [
        "Rust",
        "Clap",
        "ffSend"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AlNaheyan/Cryo-cli",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://asciinema.org/a/182225.svg",
      video: "",
    },
    {
      title: "Pomly",
      href: "#",
      dates: "Aug 2025 - Present",
      active: true,
      description:
        "Pomodoro timer syned for virtual study rooms.",
      technologies: [
        "Next.js",
        "Typescript",
        "Socket.IO",
        "Redis",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AlNaheyan/pomly",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/pomly.mp4",
    },
  ],
} as const;
