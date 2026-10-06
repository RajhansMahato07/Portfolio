import { EducationItem, SkillCategory, InternshipExperience, CertificateItem, ProjectItem } from '../types';
import { CERT_1_BASE64, CERT_2_BASE64, CV_PDF_BASE64 } from './assetsBase64';

export const PERSONAL_INFO = {
  name: 'Rajhans Mahato',
  title: 'Web Developer',
  tagline: 'Web Developer | B.Tech Information Technology',
  location: 'Dhanbad, Jharkhand',
  email: 'rajhansmahato1210@gmail.com',
  phone: '+91 7979044117',
  github: 'https://github.com/RajhansMahato07',
  githubUsername: 'RajhansMahato07',
  cvPath: CV_PDF_BASE64,
  resumeFileName: 'Rajhans_Mahato_Resume.pdf',
  bio: 'B.Tech Information Technology student with hands-on exposure to web development fundamentals and an interest in building responsive, user-friendly web applications. Familiar with HTML, CSS, JavaScript, Bootstrap, React, Git and GitHub, with working knowledge of REST API development, Node.js, Express.js, MongoDB and SQL. Completed an internship with EDU TANTR and developed practical web projects using modern frontend and backend technologies. Seeking an entry-level Web Developer role to contribute to real-world projects and grow as a full-stack developer.',
  about: [
    'I am a B.Tech Information Technology student at Bengal College of Engineering and Technology, Durgapur (2023 – 2027) with hands-on exposure to web development fundamentals and an interest in building responsive, user-friendly web applications.',
    'I am proficient with HTML, CSS, JavaScript, Bootstrap, React, Git and GitHub, along with working knowledge of REST API development, Node.js, Express.js, MongoDB and SQL database systems.',
    'I have completed a structured internship with EDU TANTR covering AI/ML and software engineering practices, and developed practical full-stack projects including ShopEase (an e-commerce web app) and StudentHub (a student management and notice portal). Seeking an entry-level Web Developer role to contribute to real-world projects and grow as a full-stack developer.'
  ]
};

export const CORE_COMPETENCIES = [
  'Responsive Web Development',
  'REST API Integration',
  'CRUD Applications',
  'Version Control',
  'Problem Solving',
  'Team Collaboration'
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'B.Tech in Information Technology',
    institution: 'Bengal College of Engineering and Technology',
    location: 'Durgapur, West Bengal',
    period: '2023 – 2027',
    status: 'Pursuing',
    stream: 'Information Technology',
    highlights: [
      'Core focus: Data Structures, Algorithms, Object-Oriented Programming (OOP), DBMS, Operating Systems, Computer Networks',
      'Hands-on full-stack development with React.js, Node.js, Express.js, MongoDB, and RESTful APIs',
      'Active developer building production-grade web applications and contributing on GitHub'
    ]
  },
  {
    id: 'edu-2',
    degree: 'Class XII (Higher Secondary)',
    institution: 'DGSS Inter College',
    location: 'Bandgora, Bokaro, Jharkhand',
    period: '2023',
    status: 'Score: 71%',
    stream: 'Science Stream',
    highlights: [
      'Successfully completed Class XII with 71% marks',
      'Developed strong foundations in Mathematics, Analytical Reasoning, and Scientific Problem Solving'
    ]
  },
  {
    id: 'edu-3',
    degree: 'Class X (Secondary School)',
    institution: 'TATA DAV School',
    location: 'Jharkhand',
    period: '2019',
    status: 'Score: 70%',
    stream: 'General Sciences & Mathematics',
    highlights: [
      'Successfully completed Class X board examinations with 70% marks',
      'Built early discipline in logical problem solving and technical curiosity'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming Languages',
    description: 'Core languages for algorithmic logic and application development',
    skills: [
      { name: 'JavaScript', badge: 'Core' },
      { name: 'HTML5', badge: 'Web' },
      { name: 'CSS3', badge: 'Styling' },
      { name: 'Python', badge: 'AI/ML' },
      { name: 'Java', badge: 'OOP' },
      { name: 'C', badge: 'Foundations' },
      { name: 'SQL', badge: 'Data' }
    ]
  },
  {
    category: 'Frontend Development',
    description: 'Building responsive, accessible, and high-performance user interfaces',
    skills: [
      { name: 'React.js', badge: 'Core' },
      { name: 'Bootstrap', badge: 'Framework' },
      { name: 'Responsive Web Design', badge: 'Mobile-First' },
      { name: 'DOM Manipulation', badge: 'Vanilla' },
      { name: 'HTML5 Semantic', badge: 'Modern' },
      { name: 'CSS3 Flex/Grid', badge: 'Modern' }
    ]
  },
  {
    category: 'Backend Development',
    description: 'Server architectures, RESTful API design, and server-side logic',
    skills: [
      { name: 'Node.js', badge: 'Runtime' },
      { name: 'Express.js', badge: 'Framework' },
      { name: 'REST APIs', badge: 'Architecture' },
      { name: 'CRUD Operations', badge: 'Integration' },
      { name: 'API Routing & Middleware' }
    ]
  },
  {
    category: 'Database Systems',
    description: 'NoSQL and relational databases, data queries, and storage',
    skills: [
      { name: 'MongoDB', badge: 'NoSQL' },
      { name: 'MySQL', badge: 'RDBMS' },
      { name: 'SQL Queries', badge: 'Relational' },
      { name: 'Data Modeling' }
    ]
  },
  {
    category: 'Tools & Ecosystem',
    description: 'Developer workflows, version control, and development environments',
    skills: [
      { name: 'Git', badge: 'VCS' },
      { name: 'GitHub', badge: 'Collaboration' },
      { name: 'VS Code', badge: 'IDE' },
      { name: 'npm', badge: 'Package Mgr' }
    ]
  },
  {
    category: 'Core Computer Science',
    description: 'Fundamental theoretical computer science and systems architecture',
    skills: [
      { name: 'Object-Oriented Programming (OOP)', badge: 'Core' },
      { name: 'Database Management Systems (DBMS)', badge: 'Core' },
      { name: 'Data Structures', badge: 'Algorithms' },
      { name: 'Operating Systems', badge: 'Systems' },
      { name: 'Computer Networks', badge: 'Protocols' }
    ]
  }
];

export const INTERNSHIP_DATA: InternshipExperience = {
  id: 'exp-1',
  role: 'AI/ML Intern',
  company: 'EDU TANTR',
  duration: 'Aug 2025 – Nov 2025',
  type: 'Internship & Professional Training',
  location: 'Remote',
  referenceDoc: 'Offer Reference: IOL-EDUJ1632 (Edu Tantr - VDT Edu Tantr Ventures Pvt Ltd)',
  responsibilities: [
    'Completed a structured internship covering Python-based machine learning fundamentals and practical implementation.',
    'Worked on applied mini-projects involving data preparation, model building, testing and interpretation of results.',
    'Strengthened problem-solving, programming and software development practices through hands-on assignments.'
  ],
  technologies: [
    'Python',
    'Machine Learning Fundamentals',
    'Data Preparation & Modeling',
    'Model Testing & Interpretation',
    'Git & GitHub',
    'Software Development Practices'
  ],
  keyLearning: [
    'Hands-on experience applying machine learning algorithms to real-world datasets.',
    'Rigorous data preprocessing, pipeline construction, and performance metric evaluation.',
    'Adherence to software development workflows, versioning, and engineering best practices.'
  ],
  isEditableNote: 'Internship completed with EDU TANTR covering AI/ML and software engineering fundamentals.'
};

export const CERTIFICATE_DATA: CertificateItem[] = [
  {
    id: 'cert-edutantr-1',
    title: 'Internship Offer & Verification Letter (Page 1)',
    issuer: 'VDT EDU TANTR VENTURES PVT LTD',
    date: '23/07/2025',
    category: 'Internship',
    image: CERT_1_BASE64,
    description: 'Official Internship Offer Letter (Ref: IOL-EDUJ1632) for Training & Internship in Artificial Intelligence and Machine Learning with Edu Tantr.'
  },
  {
    id: 'cert-edutantr-2',
    title: 'Terms of Engagement & Acceptance (Page 2)',
    issuer: 'VDT EDU TANTR VENTURES PVT LTD',
    date: '23/07/2025',
    category: 'Internship',
    image: CERT_2_BASE64,
    description: 'Formal confirmation and terms of internship engagement with official company stamp and signature.'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'ShopEase — Responsive E-Commerce Web Application',
    tagline: 'Full-stack responsive e-commerce platform with product catalogs, category filtering, cart & checkout',
    status: 'Completed',
    category: 'Full Stack Web App',
    description: 'Developed a responsive e-commerce website with product listing, category filtering, search, cart and checkout UI. Built reusable React components and responsive layouts using HTML5, CSS3, JavaScript and Bootstrap. Implemented a Node.js and Express.js backend with REST APIs for products, users and order-related operations. Used MongoDB for storing product and order data and Git/GitHub for version control.',
    problemStatement: 'Modern consumers demand rapid, intuitive, and mobile-friendly shopping experiences with instantaneous catalog filtering, robust state management, and reliable checkout procedures.',
    solution: 'Designed and engineered an end-to-end full-stack web application featuring reusable React components, Bootstrap responsive grids, Express.js RESTful APIs, and MongoDB for structured order and inventory management.',
    techStack: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'GitHub'],
    features: [
      'Responsive e-commerce interface optimized across mobile, tablet, and desktop screens',
      'Dynamic product listing with instant category filtering and real-time keyword search',
      'Interactive shopping cart management with live quantity updates and subtotal calculations',
      'Clean checkout UI workflow with form input verification',
      'Node.js & Express.js REST API endpoints managing products, user accounts, and orders',
      'Persistent MongoDB database collections for items, categories, and customer orders',
      'Comprehensive version control and milestone tracking on Git and GitHub'
    ],
    futureImprovements: [
      'Stripe & Razorpay secure payment gateway integration',
      'JWT token-based user authentication and order history dashboard',
      'Automated email notifications on order confirmation'
    ],
    liveDemoUrl: '',
    githubUrl: 'https://github.com/RajhansMahato07',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'proj-2',
    title: 'StudentHub — Student Management & Notice Portal',
    tagline: 'Full-stack student portal for academic profiles, notice management, and institution communications',
    status: 'Completed',
    category: 'Full Stack Web App',
    description: 'Built a full-stack student portal for managing student profiles, notices and academic information through a clean web interface. Created responsive React-based pages with reusable components, form validation and client-side navigation. Developed REST APIs with Node.js and Express.js and connected the application with a MongoDB database. Added basic search, filtering and CRUD functionality to improve usability and data management.',
    problemStatement: 'Educational campuses frequently experience fragmented communication channels, making student profile administration and urgent notice dissemination inefficient.',
    solution: 'Implemented a unified student hub with responsive React UI pages, client-side routing, Node.js and Express REST endpoints, and MongoDB database integration providing complete CRUD capabilities.',
    techStack: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'GitHub'],
    features: [
      'Unified student management portal with clean, intuitive user experience',
      'Responsive React-based pages with modular component architecture',
      'Client-side navigation and client/server-side form validation',
      'Full CRUD functionality (Create, Read, Update, Delete) for notices and student records',
      'RESTful APIs constructed with Node.js and Express.js connecting directly to MongoDB',
      'Search and filtering capabilities for quick notice lookup and record sorting',
      'Managed and maintained through Git & GitHub repository workflow'
    ],
    futureImprovements: [
      'Role-based access controls for Admin, Faculty, and Students',
      'File upload support for PDF notice circulars and syllabus documents',
      'Push notification alerts for urgent examination and event bulletins'
    ],
    liveDemoUrl: '',
    githubUrl: 'https://github.com/RajhansMahato07',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop'
  }
];

// For backwards compatibility
export const UPCOMING_PROJECTS_DATA = PROJECTS_DATA;
