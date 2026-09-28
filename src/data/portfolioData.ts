import { EducationItem, SkillCategory, InternshipExperience, CertificateItem, ProjectItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Rajhans Mahato',
  title: 'Full Stack Developer',
  tagline: 'B.Tech IT Student & Full Stack Developer',
  location: 'Durgapur, West Bengal, India',
  email: 'rdxraj3141@gmail.com',
  phone: '7979044117',
  github: 'https://github.com/RajhansMahato07',
  githubUsername: 'RajhansMahato07',
  cvPath: '/Rajhans_Mahato_CV.pdf',
  bio: "I'm a B.Tech Information Technology student and Full Stack Developer passionate about building modern web applications, learning new technologies, and solving real-world problems.",
  about: [
    "I am an enthusiastic Full Stack Developer and current B.Tech Information Technology student at Bengal College of Engineering & Technology, Durgapur.",
    "Driven by a strong foundation in modern web engineering and problem-solving, I focus on crafting clean, accessible, and scalable digital experiences.",
    "I continuously invest time in mastering cutting-edge frontend and backend architectures, writing structured code, and transforming complex engineering challenges into elegant solutions."
  ]
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'B.Tech in Information Technology',
    institution: 'Bengal College of Engineering & Technology',
    location: 'Durgapur, West Bengal, India',
    period: '2023 – 2027',
    status: 'Current Student',
    stream: 'Information Technology',
    highlights: [
      'Core coursework: Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Technologies',
      'Actively developing full-stack web applications and collaborating on technical projects',
      'Focusing on software development lifecycles and modern development workflows'
    ]
  },
  {
    id: 'edu-2',
    degree: 'Higher Secondary (12th)',
    institution: 'DGSS Intercollege',
    location: 'Bandgora, Bokaro, Jharkhand, India',
    period: '2022 – 2023',
    status: 'Completed',
    stream: 'Science Stream',
    highlights: [
      'Core Subjects: Physics, Chemistry, Mathematics & Computer Science',
      'Built early analytical reasoning and logical problem-solving foundations'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Frontend Development',
    description: 'Building responsive, high-performance, and visually engaging interfaces',
    skills: [
      { name: 'React.js', badge: 'Core' },
      { name: 'JavaScript (ES6+)', badge: 'Core' },
      { name: 'TypeScript', badge: 'Modern' },
      { name: 'HTML5 & Semantic Markup' },
      { name: 'CSS3 & Modern Layouts' },
      { name: 'Tailwind CSS', badge: 'Design' }
    ]
  },
  {
    category: 'Backend Development',
    description: 'Creating robust server-side architectures and APIs',
    skills: [
      { name: 'Node.js', badge: 'Core' },
      { name: 'Express.js', badge: 'Framework' },
      { name: 'RESTful API Architecture', badge: 'Standard' },
      { name: 'Server Routing & Middleware' },
      { name: 'Authentication Concepts' }
    ]
  },
  {
    category: 'Database Systems',
    description: 'Data modeling, schema design, and structured storage',
    skills: [
      { name: 'MongoDB', badge: 'NoSQL' },
      { name: 'SQL / Relational Databases', badge: 'Relational' },
      { name: 'Database Queries & Aggregations' }
    ]
  },
  {
    category: 'Programming Languages',
    description: 'Algorithmic problem-solving and structured programming',
    skills: [
      { name: 'JavaScript', badge: 'Primary' },
      { name: 'TypeScript' },
      { name: 'C / C++', badge: 'Foundations' },
      { name: 'Python', badge: 'Exploration' }
    ]
  },
  {
    category: 'Tools & Ecosystem',
    description: 'Developer workflows, version control, and development environments',
    skills: [
      { name: 'Git', badge: 'VCS' },
      { name: 'GitHub', badge: 'Collaboration' },
      { name: 'VS Code', badge: 'IDE' },
      { name: 'Postman', badge: 'API Testing' },
      { name: 'Vite', badge: 'Bundler' },
      { name: 'npm' }
    ]
  }
];

export const INTERNSHIP_DATA: InternshipExperience = {
  id: 'exp-1',
  role: 'Training & Internship - Artificial Intelligence & Machine Learning / Full Stack',
  company: 'VDT EDU TANTR VENTURES PVT LTD (Edu Tantr)',
  duration: '3 Months (Online / Remote)',
  type: 'Internship & Professional Training',
  location: 'Bengaluru, India (Remote)',
  referenceDoc: 'Offer Letter: IOL-EDUJ1632 (Dated: 23/07/2025)',
  responsibilities: [
    'Enrolled in structured training and internship program focusing on intelligent applications and software engineering principles.',
    'Undergoing hands-on exercises in data processing, algorithm implementation, and software architecture.',
    'Collaborating under mentor guidance on technical milestones and industry-oriented problem statements.',
    'Working with modern development tools and maintaining code versioning through Git/GitHub.'
  ],
  technologies: [
    'Python',
    'Machine Learning Foundations',
    'REST APIs',
    'JavaScript',
    'Git & GitHub'
  ],
  keyLearning: [
    'Real-world software engineering workflow and adherence to design specifications.',
    'Practical integration of backend logic with data models.',
    'Professional communication, task tracking, and milestone-driven deliverables.'
  ],
  isEditableNote: 'This internship section is pre-configured with your Edu Tantr offer letter data. You can easily adjust duties, specific company updates, or achievements anytime.'
};

export const CERTIFICATE_DATA: CertificateItem[] = [
  {
    id: 'cert-edutantr-1',
    title: 'Internship Offer & Verification Letter (Page 1)',
    issuer: 'VDT EDU TANTR VENTURES PVT LTD',
    date: '23/07/2025',
    category: 'Internship',
    image: '/certificates/cert1.jpeg',
    description: 'Official Internship Offer Letter (Ref: IOL-EDUJ1632) for 3-month Training & Internship in Artificial Intelligence and Machine Learning.'
  },
  {
    id: 'cert-edutantr-2',
    title: 'Terms of Engagement & Acceptance (Page 2)',
    issuer: 'VDT EDU TANTR VENTURES PVT LTD',
    date: '23/07/2025',
    category: 'Internship',
    image: '/certificates/cert2.jpeg',
    description: 'Formal confirmation and terms of internship engagement with official company stamp and signature.'
  }
];

export const UPCOMING_PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'CloudDev Workspace: Full Stack Collaborative IDE',
    tagline: 'Browser-based code editor with real-time execution and WebSocket collaboration',
    status: 'In Progress',
    category: 'Web Development',
    description: 'A modern cloud-first development environment enabling developers to write, compile, and collaborate on code directly in the browser with minimal latency.',
    problemStatement: 'Setting up local developer environments often creates dependency mismatches, heavy machine resource consumption, and friction during peer programming sessions.',
    solution: 'An in-browser containerized execution engine combined with low-latency WebSockets for instant collaborative editing and automated testing sandboxes.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'Socket.io', 'Tailwind CSS'],
    features: [
      'Multi-file virtual file tree with syntax highlighting',
      'Real-time cursor synchronization and peer presence',
      'Sandboxed code preview terminal and logs',
      'Dark mode developer aesthetic with keyboard shortcuts'
    ],
    futureImprovements: [
      'Docker containerized isolation for running heavy backend services',
      'GitHub OAuth repository cloning and commit integration',
      'Integrated AI code suggestions assistant'
    ],
    liveDemoUrl: '',
    githubUrl: 'https://github.com/RajhansMahato07',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'proj-2',
    title: 'DevPulse: Student Developer Community & Project Hub',
    tagline: 'Centralized platform for engineering students to discover teammates, share roadmaps, and showcase verified projects',
    status: 'Planned',
    category: 'Full Stack Web App',
    description: 'A platform tailored for computer science and engineering students to track their tech stacks, post peer review requests, and find open-source collaboration buddies.',
    problemStatement: 'College students often struggle to find motivated team members for hackathons, final year projects, and peer code reviews outside their immediate circle.',
    solution: 'A verified campus project discovery portal with skill tagging, structured issue boards, and portfolio integration.',
    techStack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'REST APIs', 'Tailwind CSS'],
    features: [
      'Role-based teammate discovery filterable by tech stack',
      'Project showcase feed with live demo embeds',
      'Interactive skill roadmap tracker for B.Tech students',
      'Direct messaging and collaboration invitations'
    ],
    futureImprovements: [
      'Automated GitHub repository analytics badge generation',
      'Campus club events and hackathon integration',
      'Markdown-powered engineering blog engine'
    ],
    liveDemoUrl: '',
    githubUrl: 'https://github.com/RajhansMahato07',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'proj-3',
    title: 'NexusAPI: Intelligent REST API Analytics & Mock Engine',
    tagline: 'Lightweight mock server with instant endpoint generation and request payload telemetry',
    status: 'Planned',
    category: 'Backend & Tools',
    description: 'A developer utility to quickly simulate REST APIs with custom schemas, dynamic latency testing, and comprehensive analytics on incoming payloads.',
    problemStatement: 'Frontend developers frequently get blocked waiting for backend APIs to be implemented, while existing mock tools are either bloated or require paid tiers.',
    solution: 'A simple zero-config mock endpoint generator that simulates status codes, delays, error responses, and data schemas on the fly.',
    techStack: ['Node.js', 'Express', 'TypeScript', 'React', 'MongoDB'],
    features: [
      'Visual schema builder with realistic mock data generators',
      'Configurable latency and error rate simulation (404, 500, timeout)',
      'Live request log inspector with header details',
      'One-click OpenAPI / Swagger specification export'
    ],
    futureImprovements: [
      'GraphQL mocking support and schema federation',
      'Local CLI proxy for offline development',
      'Automated contract test validation'
    ],
    liveDemoUrl: '',
    githubUrl: 'https://github.com/RajhansMahato07',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop'
  }
];
