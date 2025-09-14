// Tech Stack Data
export const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "AWS", color: "#232F3E" },
  { name: "Docker", color: "#2496ED" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "MongoDB", color: "#47A248" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "GraphQL", color: "#E10098" },
  { name: "Next.js", color: "#000000" },
  { name: "Vue.js", color: "#4FC08D" },
  { name: "Angular", color: "#DD0031" },
  { name: "Laravel", color: "#FF2D20" },
  { name: "Django", color: "#092E20" },
];

// Featured Projects Data
export const featuredProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with AI-powered recommendations and real-time analytics.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    category: "Web Development",
    client: "RetailCorp",
    duration: "6 months",
    results: ["300% increase in sales", "99.9% uptime", "50% faster load times"]
  },
  {
    id: 2,
    title: "FinTech Mobile App",
    description: "Secure mobile banking application with biometric authentication and blockchain integration.",
    image: "/api/placeholder/600/400",
    technologies: ["React Native", "Python", "PostgreSQL", "Blockchain"],
    category: "Mobile Development",
    client: "SecureBank",
    duration: "8 months",
    results: ["1M+ downloads", "Bank-grade security", "4.8/5 user rating"]
  },
  {
    id: 3,
    title: "IoT Dashboard",
    description: "Real-time monitoring dashboard for smart city infrastructure with predictive analytics.",
    image: "/api/placeholder/600/400",
    technologies: ["Vue.js", "Python", "InfluxDB", "Docker"],
    category: "IoT & Analytics",
    client: "SmartCity Inc",
    duration: "4 months",
    results: ["Real-time monitoring", "30% cost reduction", "Predictive maintenance"]
  },
  {
    id: 4,
    title: "AI-Powered CRM",
    description: "Customer relationship management system with machine learning for lead scoring and automation.",
    image: "/api/placeholder/600/400",
    technologies: ["Angular", "Django", "TensorFlow", "PostgreSQL"],
    category: "AI & Automation",
    client: "SalesForce Pro",
    duration: "10 months",
    results: ["40% increase in conversions", "Automated workflows", "Smart lead scoring"]
  }
];

// Testimonials Data
export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechStartup Inc",
    content: "TechFlow transformed our outdated systems into a modern, scalable platform. Their expertise and attention to detail exceeded our expectations. The project was delivered on time and within budget.",
    rating: 5,
    avatar: "/api/placeholder/100/100"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Founder",
    company: "EcommerceHub",
    content: "Working with TechFlow was a game-changer for our business. They built us a robust e-commerce platform that handles thousands of transactions daily. Their 24/7 support is exceptional.",
    rating: 5,
    avatar: "/api/placeholder/100/100"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "VP of Engineering",
    company: "DataCorp",
    content: "The team at TechFlow demonstrated incredible technical depth and project management skills. They delivered a complex data analytics platform that processes millions of records seamlessly.",
    rating: 5,
    avatar: "/api/placeholder/100/100"
  },
  {
    id: 4,
    name: "David Park",
    position: "CEO",
    company: "FinanceApp",
    content: "TechFlow's expertise in fintech regulations and security was invaluable. They built us a compliant, secure platform that our users trust. The ROI has been phenomenal.",
    rating: 5,
    avatar: "/api/placeholder/100/100"
  }
];

// Services Data
export const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Full-stack web applications built with modern frameworks and best practices.",
    features: ["Responsive Design", "Progressive Web Apps", "API Integration", "Performance Optimization"],
    technologies: ["React", "Vue.js", "Angular", "Node.js", "Python", "PHP"],
    startingPrice: "$5,000",
    icon: "🌐"
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: ["Native Performance", "Cross-Platform", "Push Notifications", "Offline Support"],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"],
    startingPrice: "$8,000",
    icon: "📱"
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern businesses.",
    features: ["Auto Scaling", "Load Balancing", "Disaster Recovery", "Cost Optimization"],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
    startingPrice: "$3,000",
    icon: "☁️"
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive and engaging experiences.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
    startingPrice: "$2,500",
    icon: "🎨"
  },
  {
    id: 5,
    title: "AI & Automation",
    description: "Intelligent solutions that automate processes and provide data-driven insights.",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Process Automation"],
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "AutoML", "RPA Tools"],
    startingPrice: "$10,000",
    icon: "🤖"
  }
];

// Blog Posts Data
export const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping web development, from AI integration to serverless architecture.",
    content: "Full blog content here...",
    author: "Alex Thompson",
    authorAvatar: "/api/placeholder/100/100",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["React", "AI", "Serverless", "Trends"],
    image: "/api/placeholder/800/400",
    featured: true
  },
  {
    id: 2,
    title: "Building Scalable Microservices with Docker and Kubernetes",
    excerpt: "Learn how to architect and deploy microservices using containerization technologies.",
    content: "Full blog content here...",
    author: "Maria Garcia",
    authorAvatar: "/api/placeholder/100/100",
    publishedAt: "2024-01-12",
    readTime: "12 min read",
    category: "DevOps",
    tags: ["Docker", "Kubernetes", "Microservices", "Scalability"],
    image: "/api/placeholder/800/400",
    featured: false
  },
  {
    id: 3,
    title: "AI-Powered Applications: From Concept to Production",
    excerpt: "A comprehensive guide to building and deploying AI applications in real-world scenarios.",
    content: "Full blog content here...",
    author: "Dr. James Wilson",
    authorAvatar: "/api/placeholder/100/100",
    publishedAt: "2024-01-10",
    readTime: "15 min read",
    category: "Artificial Intelligence",
    tags: ["AI", "Machine Learning", "Production", "Deployment"],
    image: "/api/placeholder/800/400",
    featured: true
  }
];

// Job Positions Data
export const jobPositions = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    remote: true,
    experience: "5+ years",
    salary: "$120K - $160K",
    description: "We're looking for a senior full stack developer to join our growing team...",
    requirements: [
      "5+ years of experience with React and Node.js",
      "Strong knowledge of database design and optimization",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Excellent problem-solving and communication skills"
    ],
    benefits: [
      "Competitive salary and equity",
      "Comprehensive health insurance",
      "Flexible working hours",
      "Professional development budget"
    ],
    postedAt: "2024-01-15"
  },
  {
    id: 2,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    remote: true,
    experience: "3+ years",
    salary: "$100K - $140K",
    description: "Join our infrastructure team to help scale our cloud operations...",
    requirements: [
      "3+ years of experience with Docker and Kubernetes",
      "Strong knowledge of CI/CD pipelines",
      "Experience with Infrastructure as Code (Terraform, CloudFormation)",
      "Familiarity with monitoring and logging tools"
    ],
    benefits: [
      "Remote-first culture",
      "Stock options",
      "Health and dental insurance",
      "Learning and development opportunities"
    ],
    postedAt: "2024-01-12"
  }
];

// Company milestones for About page
export const companyMilestones = [
  {
    year: "2018",
    title: "Company Founded",
    description: "Started with a vision to transform businesses through technology"
  },
  {
    year: "2019",
    title: "First Major Client",
    description: "Secured our first enterprise client and delivered a groundbreaking solution"
  },
  {
    year: "2020",
    title: "Team Expansion",
    description: "Grew to 25+ developers and expanded our service offerings"
  },
  {
    year: "2021",
    title: "50+ Projects",
    description: "Successfully delivered over 50 projects across various industries"
  },
  {
    year: "2022",
    title: "AI Division Launch",
    description: "Launched our AI and automation division with specialized expertise"
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Expanded operations globally with clients across 15+ countries"
  },
  {
    year: "2024",
    title: "Innovation Hub",
    description: "Established innovation lab for emerging technologies and R&D"
  }
];

// Team members data
export const teamMembers = [
  {
    id: 1,
    name: "John Smith",
    position: "CEO & Founder",
    bio: "15+ years of experience in tech leadership and business strategy.",
    image: "/api/placeholder/300/300",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 2,
    name: "Sarah Davis",
    position: "CTO",
    bio: "Expert in scalable architecture and emerging technologies.",
    image: "/api/placeholder/300/300",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 3,
    name: "Mike Johnson",
    position: "Head of Engineering",
    bio: "Full-stack developer with passion for clean code and mentorship.",
    image: "/api/placeholder/300/300",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 4,
    name: "Emily Chen",
    position: "Design Director",
    bio: "UI/UX specialist creating beautiful and functional user experiences.",
    image: "/api/placeholder/300/300",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  }
];