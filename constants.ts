import { Project, Experience, Education, Certificate, SkillCategory } from './types';
import {
  Github, Linkedin, Mail, Phone, Terminal,
  Database, Cpu, Layout, Award
} from 'lucide-react';

export const SOCIAL_LINKS = {
  email: "youssefbassiony113@gmail.com",
  phone: "+201001725166",
  whatsapp: "+201001725166",
  linkedin: "https://www.linkedin.com/in/youssef-bassiony/",
  github: "https://github.com/youssef-113",
  kaggle: "https://www.kaggle.com/youssefbassiony",
  leetcode: "https://leetcode.com/u/ybassiouny/",
  mostaql: "https://mostaql.com/u/youssefbassouny",
  freelancer: "https://www.freelancer.com/u/youssefbass",
  location: "Nasr City, Cairo, Egypt"
};

// Social Media Cards Configuration for Contact Page
export const SOCIAL_MEDIA_CARDS = [
  {
    name: "GitHub",
    url: "https://github.com/youssef-113",
    username: "@youssef-113",
    icon: "Github",
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gray-100 dark:bg-gray-800",
    description: "Check out my code and projects"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/youssef-bassiony/",
    username: "Youssef Bassiony",
    icon: "Linkedin",
    color: "from-blue-600 to-blue-800",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    description: "Connect professionally"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/201001725166",
    username: "+20 100 172 5166",
    icon: "MessageCircle",
    color: "from-green-600 to-green-700",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    description: "Send me a message"
  },
  {
    name: "Gmail",
    url: "mailto:youssefbassiony113@gmail.com",
    username: "youssefbassiony113@gmail.com",
    icon: "Mail",
    color: "from-red-600 to-red-700",
    bgColor: "bg-red-50 dark:bg-red-900/20",
    description: "Email me directly"
  },
  {
    name: "Mostaql",
    url: "https://mostaql.com/u/youssefbassouny",
    username: "@youssefbassouny",
    icon: "Briefcase",
    color: "from-teal-600 to-teal-700",
    bgColor: "bg-teal-50 dark:bg-teal-900/20",
    description: "Freelance projects"
  },
  {
    name: "Kaggle",
    url: "https://www.kaggle.com/youssefbassiony",
    username: "youssefbassiony",
    icon: "Database",
    color: "from-cyan-600 to-cyan-700",
    bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
    description: "Data science competitions"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/ybassiouny/",
    username: "@ybassiouny",
    icon: "Code",
    color: "from-orange-600 to-orange-700",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    description: "Coding challenges"
  },
  {
    name: "Freelancer",
    url: "https://www.freelancer.com/u/youssefbass",
    username: "@youssefbass",
    icon: "UserCheck",
    color: "from-indigo-600 to-indigo-700",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    description: "Freelance platform"
  }
];

export const HERO_CONTENT = {
  name: "Youssef Bassiouny",
  role: "Data Scientist, ML Engineer & Full-Stack Developer",
  bio: "I build data-driven products, machine learning systems, and full-stack web apps. I specialize in Python (ML/DL), Power BI, and modern JavaScript stacks. I craft reproducible ML pipelines, dashboards, and production-ready software.",
  image: "/images/profile.jpg"
};

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Data Scientist & ML Engineer",
    company: "Vmax (USA Company)",
    period: "July 2025 – Present",
    type: "work",
    description: [
      "Deployed a full pipeline data science applied Python (pandas, scikit-learn).",
      "Developed interactive dashboards using Power BI, React, and Streamlit, improving data accessibility by 35%.",
      "Worked on CRM 8X to manage sales deals and generate business insights.",
      "Designed CRM Callbacks with PHP and React."
    ]
  },
  {
    id: "2",
    role: "AI Developer & Automation",
    company: "Hoven (Saudi Arabia - Remote)",
    period: "Oct 2025 – Present",
    type: "work",
    description: [
      "Integrated Salla and Shopify with Odoo for automated sales reporting.",
      "Automated workflows and python scripts in n8n, Make, and Zapier."
    ]
  },
  {
    id: "3",
    role: "Full Stack Developer (PHP-JS-MySQL)",
    company: "Cloudjet LLC",
    period: "June 2025 – Sep 2025",
    type: "work",
    description: [
      "Developed backend in PHP connected with DB and frontend JS, CSS, HTML.",
      "Managed databases using PhpMyAdmin and server deployments via FileZilla/Xampp.",
      "Implemented security measures against web attacks."
    ]
  },
  {
    id: "4",
    role: "Data Scientist & ML Engineer",
    company: "Freelancer (Mostaql)",
    period: "Feb 2025 – Mar 2025",
    type: "work",
    description: [
      "Developed a machine learning model for predicting customer churn using Collab.",
      "Trained and evaluated models on customer datasets using Python."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "Cairo University – Faculty of Science",
    period: "2022 - Present",
    details: "Coursework: Data Structures & Algorithms, Database Systems, Machine Learning, Software Engineering, Operating Systems."
  }
];

// Internships
export const INTERNSHIPS = [
  {
    id: "i1",
    role: "Data Scientist Intern",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    location: "Cairo, Egypt",
    period: "Oct 2024 – May 2025",
    supervisor: "Under The Supervision of EYouth for Development",
    description: [
      "Analyzed datasets and developed models using Python and Scikit-learn",
      "Built dashboards to communicate insights using Python and Power BI",
      "Collaborated in teams to deliver scalable ML solutions for real-world problems"
    ],
    skills: ["Python", "Scikit-learn", "Pandas", "Power BI", "Machine Learning", "Data Analysis"]
  },
  {
    id: "i2",
    role: "Freelancer Intern",
    company: "ITIDA Gigs",
    location: "Online",
    period: "Jan 2025 – April 2025",
    supervisor: "Under The Supervision of EYouth for Development",
    description: [
      "Prepared for freelance work and learned how to acquire clients",
      "Developed skills in client communication and project management",
      "Gained experience in freelance marketplace dynamics"
    ],
    skills: ["Freelancing", "Client Management", "Project Bidding", "Communication"]
  },
  {
    id: "i3",
    role: "Data Science & Machine Learning Intern",
    company: "Code Alpha",
    location: "Remote",
    period: "April 2025 – June 2025",
    description: [
      "Engineered a data science bootcamp with hands-on projects and assessments",
      "Resulted in 80% of participants reporting successful job placement within three months",
      "Demonstrated program effectiveness through comprehensive training delivery"
    ],
    skills: ["Data Science", "Machine Learning", "Python", "Project Development", "Bootcamp Instruction"]
  },
  {
    id: "i4",
    role: "AI & Machine Learning Intern",
    company: "Tech Academy",
    location: "Remote",
    period: "April 2025 – May 2025",
    description: [
      "Gained practical exposure to real-world AI applications",
      "Explored AI concepts, data preprocessing, and supervised learning",
      "Learned model deployment techniques and best practices"
    ],
    skills: ["AI", "Machine Learning", "Data Preprocessing", "Supervised Learning", "Model Deployment"]
  },
  {
    id: "i5",
    role: "Full Stack Developer",
    company: "CloudJet LLC",
    location: "Remote",
    period: "June 2025 – Sep 2025",
    description: [
      "Developed backend in PHP connected with database and frontend technologies",
      "Created creative designs using JavaScript, CSS, and HTML",
      "Managed databases using FileZilla, Xampp, and PhpMyAdmin",
      "Solved real-time problems for the company",
      "Implemented security measures to protect websites from attacks"
    ],
    skills: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "FileZilla", "XAMPP", "PhpMyAdmin", "Web Security"]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Machine Learning & AI",
    skills: [
      { name: "Python", level: 95 },
      { name: "TensorFlow / PyTorch", level: 85 },
      { name: "Scikit-learn", level: 90 },
      { name: "Collab", level: 85 },
      { name: "NLP (Hugging Face)", level: 80 },
      { name: "Deep Learning", level: 80 }
    ]
  },
  {
    name: "Data Science & Viz",
    skills: [
      { name: "Pandas / NumPy", level: 95 },
      { name: "Power BI", level: 90 },
      { name: "SQL", level: 85 },
      { name: "Streamlit", level: 90 },
      { name: "Matplotlib / Seaborn", level: 85 }
    ]
  },
  {
    name: "Full Stack Development",
    skills: [
      { name: "React / Next.js", level: 85 },
      { name: "Node.js / Express", level: 80 },
      { name: "PHP", level: 75 },
      { name: "Laravel", level: 70 },
      { name: "JavaScript", level: 85 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "Bootstrap", level: 80 },
      { name: "jQuery", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "MySQL / MongoDB", level: 80 }
    ]
  },
  {
    name: "Tools & DevOps",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Odoo", level: 65 },
      { name: "Zapier / n8n", level: 80 },
      { name: "FileZilla", level: 85 },
      { name: "XAMPP", level: 80 },
      { name: "PhpMyAdmin", level: 75 },
      { name: "Web Security", level: 85 },
      { name: "API Development", level: 80 },
      { name: "Version Control", level: 90 },
      { name: "CI/CD", level: 75 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Sports Training Management System",
    short_description: "Award-winning full-stack platform managing 200+ users (clubs, coaches, players).",
    tech_stack: ["PHP", "MySQL", "JavaScript", "Security"],
    thumbnail_url: "/images/projects/sports-training.png",
    github_url: "https://github.com/youssef-113",
    presentation_url: "#", // Placeholder
    type: "software",
    year: "2025",
    featured: true
  },
  {
    id: "p2",
    title: "Sales Forecasting for Car Sales",
    short_description: "End-to-end pipeline cleaning, analysis, and forecasting for car datasets with Power BI dashboard.",
    tech_stack: ["Python", "Power BI", "Scikit-learn", "Pandas"],
    thumbnail_url: "/images/projects/car-sales.png",
    github_url: "https://github.com/youssef-113",
    presentation_url: "#", // Placeholder
    type: "ds",
    year: "2025",
    featured: true
  },
  {
    id: "p3",
    title: "DCGAN Digit Generator",
    short_description: "Deep Convolutional GAN in PyTorch to synthesize handwritten digits with interactive Streamlit UI.",
    tech_stack: ["PyTorch", "Streamlit", "TorchVision", "GANs"],
    thumbnail_url: "/images/projects/gan.png",
    github_url: "https://github.com/youssef-113",
    notebook_url: "https://colab.research.google.com/",
    type: "ds",
    year: "2025",
    featured: true
  },
  {
    id: "p4",
    title: "VMAX Sales CRM Website",
    short_description: "Web-based CRM system to streamline sales tracking and deal management with analytics.",
    tech_stack: ["React", "PHP", "SQL", "Chart.js"],
    thumbnail_url: "/images/projects/vmax.png",
    github_url: "https://github.com/youssef-113",
    presentation_url: "#",
    type: "software",
    year: "2025",
    featured: false
  },
  {
    id: "p5",
    title: "Fine-Tuned BERT Sentiment Classifier",
    short_description: "BERT-based text classifier using Hugging Face transformers achieving 91% accuracy.",
    tech_stack: ["Transformers", "PyTorch", "Hugging Face", "Streamlit"],
    thumbnail_url: "/images/projects/bert.png",
    github_url: "https://github.com/youssef-113",
    notebook_url: "https://huggingface.co/",
    type: "ds",
    year: "2025",
    featured: false
  },
  {
    id: "p6",
    title: "Mushroom Classification Pipeline",
    short_description: "Reproducible ML pipeline with data preprocessing and model training (Logistic Regression, Decision Tree).",
    tech_stack: ["Python", "MLOps", "Scikit-learn"],
    thumbnail_url: "/images/projects/mushroom.png",
    github_url: "https://github.com/youssef-113/Classification-Model-Mushroom-dataset",
    presentation_url: "#",
    type: "ds",
    year: "2025",
    featured: false
  },
  {
    id: "p7",
    title: "Student Behavior Prediction System",
    short_description: "ML and Deep Learning models to predict student behavior patterns and academic performance using various algorithms.",
    tech_stack: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "Deep Learning"],
    thumbnail_url: "/images/projects/student-behavior.png",
    github_url: "https://github.com/youssef-113/Build-ML-DL-On-Student-Behavior",
    notebook_url: "#",
    type: "ds",
    year: "2024",
    featured: false
  },
  {
    id: "p8",
    title: "Adidas Sales Forecasting Analytics",
    short_description: "Comprehensive sales forecasting and analytics dashboard for Adidas dataset as part of BrainWave Matrix internship.",
    tech_stack: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "Time Series"],
    thumbnail_url: "/images/projects/adidas-sales.png",
    github_url: "https://github.com/youssef-113/BrainWave-Matrix-Adidas-Sales-Forecasting-Analytics",
    presentation_url: "#",
    type: "ds",
    year: "2024",
    featured: false
  },
  {
    id: "p9",
    title: "Stock Price Prediction",
    short_description: "Stock market prediction model using machine learning algorithms as part of CodeAlpha Data Science internship.",
    tech_stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "LSTM"],
    thumbnail_url: "/images/projects/stock-prediction.png",
    github_url: "https://github.com/youssef-113/CoseAlpha_STOCK-_PREDICTION",
    notebook_url: "#",
    type: "ds",
    year: "2024",
    featured: false
  },
  {
    id: "p10",
    title: "Titanic Survival Classification",
    short_description: "Classic Titanic dataset classification using various ML algorithms to predict passenger survival rates.",
    tech_stack: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    thumbnail_url: "/images/projects/titanic.png",
    github_url: "https://github.com/youssef-113/CodeAlpha_Titanic_Classification",
    notebook_url: "#",
    type: "ds",
    year: "2024",
    featured: false
  },
  {
    id: "p11",
    title: "Data Visualization ",
    short_description: "Collection of data visualization projects showcasing various techniques and tools for insightful data storytelling.",
    tech_stack: ["Python", "Matplotlib", "Seaborn", "Plotly", "Power BI"],
    thumbnail_url: "/images/projects/data-viz.png",
    github_url: "https://github.com/youssef-113/Data-Visualization",
    presentation_url: "#",
    type: "ds",
    year: "2024",
    featured: false
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "c1",
    name: "Data Science & Machine Learning Internship",
    issuer: "Digital Egypt Pioneers Initiative (DEPI)",
    date: "October 2024 - May 2025",
    description: "Completed intensive 6-month data science and machine learning internship covering Python, ML algorithms, deep learning, data visualization, and real-world project implementation",
    image: "/images/certifications/depi-internship.jpg",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "Deep Learning", "Data Visualization", "Power BI", "SQL", "Machine Learning Algorithms"]
  },
  {
    id: "c2",
    name: "Full-Stack Developer Internship",
    issuer: "CloudJet Innovations",
    date: "January 9, 2025",
    description: "Successfully completed 2-month internship as Full-Stack Developer, demonstrating technical skills and strong commitment to learning",
    image: "/images/certifications/cloudjet.jpg",
    skills: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "jQuery", "AJAX", "REST APIs", "FileZilla", "XAMPP", "Web Security"]
  },
  {
    id: "c3",
    name: "Data Analysis Using Excel",
    issuer: "eYouth Business",
    date: "2025",
    description: "Successfully completed comprehensive data analysis course using Excel with professional instructors",
    image: "/images/certifications/excel.png",
    skills: ["Microsoft Excel", "Data Cleaning", "Pivot Tables", "VLOOKUP", "Data Visualization", "Charts & Graphs", "Statistical Analysis", "Conditional Formatting"]
  },
  {
    id: "c4",
    name: "CU-AI NEXUS 2025",
    issuer: "Cairo University",
    date: "October 18-19, 2025",
    description: "Attended Cairo University's Premier AI Conference - Bridging Academia and Industry",
    image: "/images/certifications/cu-ai.jpg",
    skills: ["Artificial Intelligence", "Machine Learning", "AI Ethics", "Industry Applications", "Research Methodologies", "Neural Networks"]
  },
  {
    id: "c5",
    name: "Data Analysis with AI Boot Camp",
    issuer: "eYouth Business",
    date: "2025",
    description: "Intensive bootcamp covering AI-powered data analysis techniques and tools",
    image: "/images/certifications/bootcamp.png",
    skills: ["Python", "AI Tools", "Data Analysis", "Machine Learning", "Data Processing", "Analytics Frameworks"]
  },
  {
    id: "c6",
    name: "Machine Learning Internship",
    issuer: "Optifyx Technology",
    date: "2025",
    description: "Completed machine learning internship focusing on practical ML applications and model development",
    image: "/images/certifications/optifyx.png",
    skills: ["Machine Learning", "Python", "Model Development", "ML Deployment", "Data Preprocessing", "Model Evaluation"]
  },
  {
    id: "c7",
    name: "Data Science Internship",
    issuer: "CodeAlpha",
    date: "2025",
    description: "Hands-on internship experience in data science projects and analytics",
    image: "/images/certifications/codealpha.png",
    skills: ["Data Science", "Python", "Analytics", "Data Wrangling", "Statistical Analysis", "Project Management"]
  },
  {
    id: "c8",
    name: "Data Science/Analytics Internship",
    issuer: "Brainwave Matrix",
    date: "2025",
    description: "Internship focused on data analytics and business intelligence solutions",
    image: "/images/certifications/brainwave.png",
    skills: ["Data Analytics", "Business Intelligence", "SQL", "Dashboard Creation", "Reporting", "Data Modeling"]
  },
  {
    id: "c9",
    name: "Machine Learning with Tree-Based Models",
    issuer: "DataCamp",
    date: "2025",
    description: "Advanced course on decision trees, random forests, and gradient boosting algorithms",
    image: "/images/certifications/datacamp-ml.png",
    skills: ["Decision Trees", "Random Forests", "Gradient Boosting", "XGBoost", "Scikit-learn", "Model Tuning"]
  },
  {
    id: "c10",
    name: "Intermediate Python",
    issuer: "DataCamp",
    date: "2025",
    description: "Comprehensive Python programming course covering intermediate concepts and best practices",
    image: "/images/certifications/datacamp-python.png",
    skills: ["Python", "OOP", "List Comprehensions", "Functions", "Data Structures", "Error Handling"]
  },
  {
    id: "c11",
    name: "Introduction to Python",
    issuer: "DataCamp",
    date: "2025",
    description: "Foundational Python programming course for data science",
    image: "/images/certifications/datacamp-intro.png",
    skills: ["Python Basics", "Variables", "Data Types", "Control Flow", "Functions", "NumPy Basics"]
  },
  {
    id: "c12",
    name: "Data Cleaning in Python",
    issuer: "DataCamp",
    date: "2025",
    description: "Specialized course on data preprocessing and cleaning techniques",
    image: "/images/certifications/datacamp-cleaning.png",
    skills: ["Data Cleaning", "Pandas", "Missing Values", "Data Validation", "String Manipulation", "Duplicate Handling"]
  },
  {
    id: "c13",
    name: "Supervised Learning with scikit-learn",
    issuer: "DataCamp",
    date: "2025",
    description: "In-depth course on supervised machine learning algorithms using scikit-learn",
    image: "/images/certifications/datacamp-supervised.png",
    skills: ["Supervised Learning", "Scikit-learn", "Classification", "Regression", "Model Selection", "Cross-Validation"]
  },
  {
    id: "c14",
    name: "Overview of Data Tools and Languages",
    issuer: "IBM",
    date: "2025",
    description: "Comprehensive overview of modern data science tools and programming languages",
    image: "/images/certifications/ibm.png",
    skills: ["Python", "R", "SQL", "Jupyter Notebooks", "Data Science Tools", "Programming Languages"]
  },
  {
    id: "c15",
    name: "Data Analysis Workshop",
    issuer: "Udemy",
    date: "2025",
    description: "Practical workshop on data analysis techniques and methodologies",
    image: "/images/certifications/udemy-workshop.png",
    skills: ["Data Analysis", "Excel", "Statistics", "Data Collection", "Analysis Techniques", "Reporting"]
  },
  {
    id: "c16",
    name: "Web Development Challenger Track",
    issuer: "Udacity / ITIDA",
    date: "2022",
    description: "Comprehensive web development program covering full-stack technologies",
    image: "/images/certifications/udacity.jpg",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "REST APIs", "Git"]
  }
];