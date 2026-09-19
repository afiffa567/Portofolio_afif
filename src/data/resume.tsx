import { HomeIcon, NotebookIcon, UserIcon, Sparkles } from "lucide-react";
import { Icons } from "@/components/icons";

export const DATA = {
  name: "AFIF FAISAL ALAMSYAH",
  initials: "Afif",
  location: "East Java",
  description:
    "Human Resources professional with hands-on experience supporting end-to-end HR operations, including recruitment, employee administration, attendance management, BPJS administration, and outsourced workforce coordination. Skilled in maintaining accurate employee records, coordinating recruitment activities, and ensuring efficient HR administrative processes. Strong organizational, communication, and analytical skills, supported by a Bachelor's degree in Informatics with expertise in data management, process improvement, and technology-driven HR operations.",
  taglines: [
    "Human Resources Professional",
    "HR Operations & Administration",
    "Recruitment & Workforce Coordination",
    "Payroll & BPJS Administration",
    "People Analytics & HRIS Solutions",
  ] as string[],
  summary:
    "Human Resources professional with hands-on experience supporting end-to-end HR operations, including recruitment, employee administration, attendance management, BPJS administration, and outsourced workforce coordination. Skilled in maintaining accurate employee records, coordinating recruitment activities, and ensuring efficient HR administrative processes. Strong organizational, communication, and analytical skills, supported by a Bachelor's degree in Informatics with expertise in data management, process improvement, and technology-driven HR operations.",
  about: {
    title: "About",
    content: `I am a Human Resources professional with hands-on experience supporting end-to-end HR operations, including recruitment, employee administration, attendance management, BPJS administration, and outsourced workforce coordination. During my tenure at PT Djati Perkasa Baofeng Indonesia, I maintained personnel documentation for 30 internal employees, supported recruitment across 5 staff vacancies by screening approximately 150 candidates, and coordinated workforce placement, onboarding, and performance monitoring for 160 outsourced personnel.

Holding a Bachelor of Informatics from Telkom University Surabaya (GPA 3.62/4.00), I bridge the gap between people-centric HR management and technology-driven efficiency. My technical background in software engineering, database management, and data analysis allows me to approach HR processes not only from administrative and human perspectives, but through data accuracy, digital workflow automation, and structured systems.

Certified across HR Generalist, HRGA Staff, eBootcamp HR, and Jago Payroll competencies by PT MSDM Indonesia Bisa, as well as Human Resource Bootcamp by KarirNex (PT Ebiz Karisma Internasional), I am dedicated to driving compliant, transparent, and data-driven HR practices while continuously advancing my capabilities in HRIS, People Analytics, and workforce technology.`,
    stats: "HR Operations & People Management"
  },

  avatarUrl: "/FOTO.png",

  techStack: [
    { name: "Excel", icon: "excel" },
    { name: "Google Sheets", icon: "sheets" },
    { name: "Word", icon: "word" },
    { name: "PowerPoint", icon: "powerpoint" },
    { name: "HRIS System", icon: "hris" },
    { name: "Odoo HR", icon: "odoo" },
    { name: "Jibble", icon: "jibble" },
    { name: "Workspace", icon: "googleworkspace" },
    { name: "Power BI", icon: "powerbi" },
    { name: "Tableau", icon: "tableau" },
    { name: "SQL Database", icon: "database" },
    { name: "Python", icon: "python" },
  ],

  skills: [
    "HR Operations",
    "Recruitment & Selection",
    "Employee Administration",
    "Onboarding & Employee Induction",
    "Attendance & Overtime Administration",
    "BPJS Health & Employment Administration",
    "HR Documentation & PKWT",
    "Outsourced Workforce Coordination",
    "HR Reporting & Analytics",
    "Payroll & Compensation",
    "Job Analysis & SOP Drafting",
    "Training Needs Analysis (TNA)",
    "KPI & Performance Management",
    "HRIS (Odoo & Jibble)",
    "Microsoft Excel for HR",
    "Google Workspace",
    "Data Management & SQL",
    "People Analytics & Automation",
  ] as string[],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/about", icon: UserIcon, label: "About" },
    { href: "/ai", icon: Sparkles, label: "Ask AI" },
  ],
  contact: {
    email: "afiffaisalalamsyah567@gmail.com",
    tel: "+62 822-2963-4571",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/afiffaisalalamsyah",
        icon: Icons.linkedin,
        navbar: true,
      },
      CV: {
        name: "Download CV",
        url: "https://drive.google.com/file/d/1jPOZqMHj_qjvy1qPkKbGCpt05nfTF8E6/view?usp=sharing",
        icon: Icons.cv,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "PT Djati Perkasa Baofeng Indonesia",
      href: "",
      badges: [],
      location: "Pasuruan, East Java",
      title: "Human Resources Department (HRD)",
      logoUrl: "/universitas.png",
      start: "Jan 2026",
      end: "May 2026",
      description: `• Managed employee administration and maintained accurate personnel records for 30 internal employees, ensuring complete, confidential, and up-to-date HR documentation.
• Supported end-to-end recruitment for 5 staff vacancies by screening approximately 150 applications, scheduling interviews, coordinating with hiring managers, and facilitating the selection process.
• Administered employee attendance, leave, overtime, and personnel data using Microsoft Excel, ensuring accurate record-keeping and timely HR reporting.
• Processed BPJS Kesehatan and BPJS Ketenagakerjaan administration, including employee enrollment, data updates, and compliance with company policies and government regulations.
• Coordinated manpower requests, onboarding, placement, and performance monitoring for 160 outsourced employees, working closely with external vendors to meet operational workforce requirements.
• Prepared HR reports, maintained organized personnel documentation, and supported daily HR operations by ensuring data accuracy, regulatory compliance, and efficient administrative processes.`,
    },
    {
      company: "MOSHEE Universitas Telkom Surabaya",
      href: "",
      badges: [],
      location: "Surabaya, East Java",
      title: "Intern Back End Developer",
      logoUrl: "/universitas.png",
      start: "Sep 2025",
      end: "Dec 2025",
      description: `• Supported the development and maintenance of an online learning platform serving 500+ users, ensuring reliable system performance and accurate data management.
• Collaborated with cross-functional teams to analyze requirements, coordinate project implementation, and deliver technology solutions aligned with organizational needs.
• Streamlined operational workflows by automating deployment processes, reducing deployment time by 83% and improving overall team productivity.
• Optimized application and database performance, improving system response time by 40% while maintaining 99.8% system availability.`,
    },
    {
      company: "Telkom University Surabaya",
      href: "",
      badges: [],
      location: "Surabaya, East Java",
      title: "Practicum Assistant (Informatics, Information Technology & Data Science)",
      logoUrl: "/universitas.png",
      start: "Feb 2025",
      end: "Jun 2025",
      description: `• Facilitated practical training sessions for 150+ students across three academic programs, achieving a 92% satisfaction rate through effective communication and learner-focused guidance.
• Coordinated 40+ laboratory sessions and supervised 25+ academic projects, ensuring timely completion and consistent learning outcomes.
• Mentored students by providing structured feedback, improving analytical thinking, collaboration, and problem-solving capabilities throughout the learning process.
• Designed supplementary training materials and learning workshops that enhanced student performance and reduced recurring learning errors by 65%.`,
    },
    {
      company: "Telkom University Surabaya",
      href: "",
      badges: [],
      location: "Surabaya, East Java",
      title: "Operating Systems Practicum Assistant (Informatics)",
      logoUrl: "/universitas.png",
      start: "Sep 2024",
      end: "Dec 2024",
      description: `• Conducted practical training sessions for 40 students, fostering an engaging learning environment through effective communication and structured facilitation.
• Mentored 8 student project teams, providing continuous feedback that resulted in a 100% project completion rate.
• Developed training materials, reducing learning errors by 50% and improving practical exam performance by 35%.`,
    },
    {
      company: "PT Integrasi Inti Sinergi",
      href: "",
      badges: [],
      location: "Malang, East Java",
      title: "Front End Developer",
      logoUrl: "/intisinergi.jpeg",
      start: "Oct 2021",
      end: "Feb 2022",
      description: `• Developed and maintained two web applications, ensuring high-quality user experience and achieving a Lighthouse performance score of 95+.
• Collaborated with cross-functional teams to integrate backend services, improving application performance and reducing page load time by 40%.
• Coordinated project tasks using Jira and Bitbucket within an Agile team of six members, contributing to the successful and timely completion of all project milestones.`,
    },
    {
      company: "PT Netsindo Sentra Computama",
      href: "",
      badges: [],
      location: "Banjarbaru, South Kalimantan",
      title: "Web Developer Internship",
      logoUrl: "/netsindo.jpg",
      start: "Jan 2020",
      end: "Mar 2020",
      description: `• Developed and maintained 10+ client websites, contributing to a 30% increase in client satisfaction through improved user experience and website functionality.
• Built reusable website components and templates, reducing development time by 50% and improving project efficiency.
• Optimized website performance, achieving 45% faster page load times and 98% mobile responsiveness across multiple client projects.`,
    },
  ],
  education: [
    {
      school: "Universitas Telkom Surabaya",
      href: "",
      degree: "Bachelor of Informatics, 3.62/4.00",
      logoUrl: "/universitas.png",
      start: "Aug 2022",
      end: "Dec 2025",
      description: `• Relevant Coursework: Software Engineering, Data Structures & Algorithms, Database Management Systems, Web Technology, and System Design.
• Active member of the Informatics Student Association (HMIF), contributing to 10+ technology workshops and seminars.`,
    },
    {
      school: "SMK TELKOM Banjarbaru",
      href: "",
      degree: "High School Diploma in Software Engineering",
      logoUrl: "/smk.png",
      start: "Jul 2019",
      end: "May 2022",
      description: `• Earned the Junior Web Developer Certification issued by the National Professional Certification Agency (BNSP).
• Proficient in HTML5, CSS3, Bootstrap, JavaScript, PHP, and MySQL, with hands-on experience through practical projects.`,
    },
  ],
  projects: [
    {
      title: "Job Analysis & Job Requirements",
      href: "https://bit.ly/afifhrproject",
      dates: "2026",
      active: true,
      description:
        "Conducted a comprehensive job analysis to identify key role requirements and developed standardized Job Descriptions and Job Specifications, aligning manpower planning with recruitment workflows.",
      technologies: [
        "Job Analysis",
        "Job Description",
        "Job Requirements",
        "Manpower Planning",
        "Workflow Design",
      ],
      links: [
        {
          type: "Project Details",
          href: "https://bit.ly/afifhrproject",
        },
      ],
      image: "/hr-job-analysis.png",
      video: null,
    },
    {
      title: "Recruitment & Selection Process",
      href: "https://bit.ly/afifhrproject",
      dates: "2026",
      active: true,
      description:
        "Developed an end-to-end recruitment and selection process for Sales Staff, including job vacancy flyers, Behavioral Event Interview (BEI) question guides, applicant scoring rubrics, and formal interview reports.",
      technologies: [
        "Recruitment & Selection",
        "Candidate Screening",
        "BEI Interview",
        "Interview Scoring",
        "Talent Acquisition",
      ],
      links: [
        {
          type: "Project Details",
          href: "https://bit.ly/afifhrproject",
        },
      ],
      image: "/hr-recruitment.png",
      video: null,
    },
    {
      title: "Human Resource Administration",
      href: "https://bit.ly/afifhrproject",
      dates: "2026",
      active: true,
      description:
        "Drafted and structured legally compliant Fixed-Term Employment Agreements (PKWT) and formal Warning Letters (Surat Peringatan / SP) to document employment terms, company policies, and labor regulations.",
      technologies: [
        "PKWT Drafting",
        "Surat Peringatan (SP)",
        "Labor Compliance",
        "HR Documentation",
        "Personnel Records",
      ],
      links: [
        {
          type: "Project Details",
          href: "https://bit.ly/afifhrproject",
        },
      ],
      image: "/hr-administration.png",
      video: null,
    },
    {
      title: "Structured Onboarding Program",
      href: "https://bit.ly/afifhrproject",
      dates: "2026",
      active: true,
      description:
        "Designed a 4-week structured onboarding program covering company profile, organizational culture, safety induction, job procedures, and mentor-guided workplace adaptation.",
      technologies: [
        "Onboarding Program",
        "Company Culture",
        "Job Immersion",
        "Work Instructions",
        "Evaluation & Feedback",
      ],
      links: [
        {
          type: "Project Details",
          href: "https://bit.ly/afifhrproject",
        },
      ],
      image: "/hr-onboarding.png",
      video: null,
    },
    {
      title: "Absence Rate Analytics",
      href: "https://bit.ly/afifhrproject",
      dates: "2026",
      active: true,
      description:
        "Analyzed employee attendance and absence data using the HR analytics continuum (Descriptive, Diagnostic, Predictive, Prescriptive) to identify lateness patterns and develop data-driven recommendations.",
      technologies: [
        "HR Analytics",
        "Attendance Data",
        "Absence Rate",
        "Data-Driven HR",
        "Microsoft Excel",
      ],
      links: [
        {
          type: "Project Details",
          href: "https://bit.ly/afifhrproject",
        },
      ],
      image: "/hr-absence-analytics.png",
      video: null,
    },
    {
      title: "Key Performance Indicators (KPI)",
      href: "https://bit.ly/afifhrproject",
      dates: "2026",
      active: true,
      description:
        "Established SMART-based KPI targets and developed an interactive performance dashboard to monitor departmental KPI achievement, attendance rates, and employee performance.",
      technologies: [
        "SMART KPI",
        "Performance Dashboard",
        "HR Metrics",
        "Performance Scoring",
        "Productivity Tracking",
      ],
      links: [
        {
          type: "Project Details",
          href: "https://bit.ly/afifhrproject",
        },
      ],
      image: "/hr-kpi.png",
      video: null,
    },
    {
      title: "Training Needs Analysis (TNA)",
      href: "https://bit.ly/afifhrproject",
      dates: "2026",
      active: true,
      description:
        "Conducted competency gap assessments using structured evaluation forms to identify training priorities, design relevant skill development workshops, and support employee growth.",
      technologies: [
        "Training Needs Analysis",
        "Competency Gap",
        "Skill Assessment",
        "Training Design",
        "People Development",
      ],
      links: [
        {
          type: "Project Details",
          href: "https://bit.ly/afifhrproject",
        },
      ],
      image: "/hr-tna.png",
      video: null,
    },
    {
      title: "Compensation & Payroll System",
      href: "https://bit.ly/afifhrproject",
      dates: "2026",
      active: true,
      description:
        "Calculated compensation and severance pay (Pesangon, UPMK, UPH) per government regulations, and built an automated monthly payroll system with payslip generation covering earnings, allowances, BPJS, and tax deductions.",
      technologies: [
        "Payroll Automation",
        "Uang Kompensasi",
        "Hak Pesangon",
        "BPJS & Tax Deductions",
        "Automated Payslip",
      ],
      links: [
        {
          type: "Project Details",
          href: "https://bit.ly/afifhrproject",
        },
      ],
      image: "/hr-payroll.png",
      video: null,
    },
  ],
  hackathons: [
    {
      title: "Himpunan Mahasiswa Informatika",
      dates: "Mar 2025 - Dec 2026",
      location: "Ristek Division, Telkom University Surabaya",
      description: "Organized academic support activities such as seminars, workshops, and training aimed at enhancing the competence and knowledge of Informatics students. Served as an innovation hub by facilitating research- and technology-oriented programs that supported students' potential and skill development.",
      image: "/HMIF.png",
      links: [],
    },
    {
      title: "Himpunan Mahasiswa Informatika",
      dates: "Mar 2024 - Feb 2025",
      location: "Kominfo Division, Telkom University Surabaya",
      description: "Designed visual content for national holidays, birthday greetings for board members, and promotional content for HMIF activities. Managed social media platforms (@hmif.telkomsurabaya) to increase engagement and visibility.",
      image: "/HMIF.png",
      links: [],
    },
    {
      title: "Pemira Committee",
      dates: "Dec 2023 - Jan 2024",
      location: "PDD Division, Telkom University Surabaya",
      description: "Designed Instagram feed content to boost awareness and student participation in campus elections. Documented events for reporting and evaluation purposes, and coordinated with team members to ensure successful execution.",
      image: "/dpm.jpg",
      links: [],
    },
    {
      title: "Student Representative Council",
      dates: "Mar 2023 - Feb 2024",
      location: "Advocacy Division, Telkom University Surabaya",
      description: "Accommodated student aspirations by collecting and managing input regarding campus issues. Built communication channels between students and university officials, and managed documentation for transparency and evaluation.",
      image: "/dpm.jpg",
      links: [],
    },
    {
      title: "Bootcamp Human Resource",
      dates: "2026",
      location: "KarirNex by PT Ebiz Karisma Internasional",
      description: "Certificate of Appreciation for active participation in the Human Resource Bootcamp covering fundamental HR competencies, recruitment strategies, and organizational HR management.",
      image: "/karirnex.jpg",
      links: [],
    },
    {
      title: "Kelas HR : Jago Payroll Batch - 27",
      dates: "2025",
      location: "ManajemenSDM.net (PT MSDM Indonesia Bisa)",
      description: "Completed intensive payroll training covering compensation structures, attendance & overtime calculations, PPh 21 tax deductions, BPJS Kesehatan & Ketenagakerjaan calculations, and automated monthly payroll administration.",
      image: "/ManajemenSDM.jpg",
      links: [],
    },
    {
      title: "Kelas Siap Menjadi HRGA Staff",
      dates: "2025",
      location: "ManajemenSDM.net (PT MSDM Indonesia Bisa)",
      description: "Certified as ready to become an HR & General Affair Staff, mastering office administration, asset and facility management, Indonesian labor regulations compliance, and third-party vendor coordination.",
      image: "/ManajemenSDM.jpg",
      links: [],
    },
    {
      title: "eBootcamp HR : Staff HR",
      dates: "2025",
      location: "ManajemenSDM.net (PT MSDM Indonesia Bisa)",
      description: "Completed intensive HR Staff eBootcamp, demonstrating practical competencies in drafting essential HR documentation, company policies, employment contracts (PKWT), and standard operating procedures.",
      image: "/ManajemenSDM.jpg",
      links: [],
    },
    {
      title: "Kelas Siap Jadi HR Generalist - Batch 13",
      dates: "2025",
      location: "ManajemenSDM.net (PT MSDM Indonesia Bisa)",
      description: "Certified as ready to become an HR Generalist with competencies across HR Management, HR Administration, Recruitment Process, Indonesian Labor Law, Performance Management, People Development, and People Analytics.",
      image: "/ManajemenSDM.jpg",
      links: [],
    },
    {
      title: "Dicoding Intermediate Web Development",
      dates: "2025",
      location: "Dicoding Indonesia",
      description: "Certification covering advanced web development concepts including modern JavaScript frameworks, performance optimization, and scalable application architecture.",
      image: "/dicoding.jpeg",
      links: [],
    },
    {
      title: "Dicoding Fundamental Front-End Web Development",
      dates: "2025",
      location: "Dicoding Indonesia",
      description: "Certification covering core front-end development skills including HTML, CSS, JavaScript, responsive design, and modern layout techniques.",
      image: "/dicoding.jpeg",
      links: [],
    },
    {
      title: "Dicoding Front-End Web Development for Beginners",
      dates: "2025",
      location: "Dicoding Indonesia",
      description: "Introductory certification covering basic front-end web development concepts and technologies for building user interfaces.",
      image: "/dicoding.jpeg",
      links: [],
    },
    {
      title: "Dicoding Beginner Back-End with JavaScript",
      dates: "2025",
      location: "Dicoding Indonesia",
      description: "Entry-level certification covering basic back-end development concepts and JavaScript server-side programming fundamentals.",
      image: "/dicoding.jpeg",
      links: [],
    },
    {
      title: "Dicoding Machine Learning for Beginners",
      dates: "2024",
      location: "Dicoding Indonesia",
      description: "Certification introducing fundamental machine learning concepts, algorithms, and practical implementation techniques.",
      image: "/dicoding.jpeg",
      links: [],
    },
    {
      title: "Dicoding Basic Data Visualization",
      dates: "2024",
      location: "Dicoding Indonesia",
      description: "Certification covering data visualization principles and techniques for effectively presenting and analyzing data.",
      image: "/dicoding.jpeg",
      links: [],
    },
    {
      title: "Dicoding Fundamental Back-End with JavaScript",
      dates: "2023",
      location: "Dicoding Indonesia",
      description: "Certification covering fundamental back-end development using JavaScript, including RESTful APIs, server-side programming, and database integration.",
      image: "/dicoding.jpeg",
      links: [],
    },
    {
      title: "Junior Web Developer (BNSP)",
      dates: "2022",
      location: "National Professional Certification Agency (BNSP)",
      description: "National professional certification validating skills in web development technologies including HTML, CSS, JavaScript, PHP, and responsive design aligned with industry standards.",
      image: "/bnsp.png",
      links: [],
    },
    {
      title: "Conflict Management: Hadapi Konflik Secara Profesional",
      dates: "2020",
      location: "Skill Academy by Ruangguru",
      description: "Certificate of Excellence for successfully passing the final examination on professional workplace conflict resolution, interpersonal communication strategies, and collaborative problem solving.",
      image: "/Ruangguru.jpg",
      links: [],
    },
    {
      title: "Kuasai Cara Berbicara Depan Umum dengan Teknik NLP",
      dates: "2020",
      location: "Skill Academy by Ruangguru",
      description: "Certificate of Excellence for mastering public speaking, presentation delivery, and communication influence using Neuro-Linguistic Programming (NLP) techniques.",
      image: "/Ruangguru.jpg",
      links: [],
    },
  ],
} as const;