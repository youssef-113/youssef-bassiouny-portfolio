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
    long_description: "Comprehensive sports training management system featuring player registration, training schedules, chat functionality, and QR code check-in system. Built with PHP, MySQL, and modern JavaScript.",
    problem_solved: "Al Ahly Sports Club needed a centralized system to manage 200+ users including coaches, players, and administrators. Manual processes for training schedules, attendance tracking, and communication were time-consuming and error-prone, leading to inefficiencies and poor coordination.",
    technical_highlights: [
      "Built secure authentication system with role-based access control (Admin, Coach, Player)",
      "Implemented real-time chat functionality using WebSocket for instant team communication",
      "Developed QR code check-in system for automated attendance tracking",
      "Created responsive UI compatible with mobile devices for on-field access",
      "Integrated PhpMyAdmin for efficient database management and reporting",
      "Implemented security measures to protect against SQL injection and XSS attacks",
      "Designed modular architecture for easy feature expansion and maintenance"
    ],
    business_impact: [
      "Reduced administrative overhead by 60% through automated attendance and scheduling",
      "Improved communication efficiency with real-time messaging between 200+ users",
      "Enhanced training coordination leading to better team performance",
      "Eliminated paper-based tracking, saving costs and improving data accuracy",
      "Enabled data-driven decision making through comprehensive analytics dashboards",
      "Increased user satisfaction with mobile-friendly interface for coaches and players"
    ],
    tech_stack: ["PHP", "MySQL", "JavaScript", "Security"],
    thumbnail_url: "/Images/al ahly crm/training management.PNG",
    gallery_images: [
      "/Images/al ahly crm/training management.PNG",
      "/Images/al ahly crm/chats.PNG",
      "/Images/al ahly crm/checkup.PNG",
      "/Images/al ahly crm/chek.PNG",
      "/Images/al ahly crm/daw.PNG",
      "/Images/al ahly crm/ew.PNG",
      "/Images/al ahly crm/re23.PNG",
      "/Images/al ahly crm/sae.PNG",
      "/Images/al ahly crm/sde.PNG",
      "/Images/al ahly crm/tawk.PNG",
      "/Images/al ahly crm/tawk2.PNG"
    ],
    github_url: "https://github.com/youssef-113",
    presentation_url: "/Images/al ahly crm/Al ahly club CRM.pdf",
    type: "software",
    year: "2025",
    featured: true
  },
  {
    id: "p2",
    title: "Sales Forecasting for Car Sales",
    short_description: "End-to-end pipeline cleaning, analysis, and forecasting for car datasets with Power BI dashboard.",
    long_description: "Complete data science project featuring data cleaning, exploratory analysis, predictive modeling, and interactive Power BI visualizations for car sales forecasting.",
    problem_solved: "Car dealerships struggled with inventory management and sales planning due to lack of accurate demand forecasting. This led to overstocking slow-moving models and understocking popular ones, resulting in lost revenue and increased holding costs.",
    technical_highlights: [
      "Performed comprehensive data cleaning handling missing values, outliers, and inconsistencies",
      "Conducted exploratory data analysis (EDA) to identify sales patterns and trends",
      "Built ARIMA time series models for accurate sales forecasting",
      "Engineered features including seasonality indicators and lag variables",
      "Created interactive Power BI dashboards with drill-through capabilities",
      "Implemented DAX calculations for dynamic KPIs and metrics",
      "Achieved 85% forecast accuracy through model optimization and validation"
    ],
    business_impact: [
      "Improved inventory planning accuracy by 40% reducing overstock costs",
      "Enabled data-driven sales strategies based on predictive insights",
      "Reduced stock-out situations by 35% through better demand forecasting",
      "Provided executive dashboard for quick decision-making on pricing and promotions",
      "Identified best-performing models and companies for targeted marketing",
      "Enhanced profitability through optimized inventory turnover rates"
    ],
    tech_stack: ["Python", "Power BI", "Scikit-learn", "Pandas", "ARIMA"],
    thumbnail_url: "/Images/Forcast car sales/OverView.PNG",
    gallery_images: [
      "/Images/Forcast car sales/OverView.PNG",
      "/Images/Forcast car sales/Total Sales.PNG",
      "/Images/Forcast car sales/Total Sales per Company.PNG",
      "/Images/Forcast car sales/Dril-Drow.PNG"
    ],
    github_url: "https://github.com/youssef-113",
    type: "ds",
    year: "2025",
    featured: true
  },
  {
    id: "p3",
    title: "DCGAN Digit Generator",
    short_description: "Deep Convolutional GAN in PyTorch to synthesize handwritten digits with interactive Streamlit UI.",
    long_description: "Advanced deep learning project implementing Deep Convolutional Generative Adversarial Network (DCGAN) to generate realistic handwritten digits. Features interactive Streamlit interface for real-time generation and model exploration.",
    problem_solved: "Traditional data augmentation techniques were insufficient for creating diverse training samples for digit recognition systems. Organizations needed a way to generate realistic synthetic data to improve model robustness without collecting more real-world samples.",
    technical_highlights: [
      "Implemented DCGAN architecture in PyTorch with generator and discriminator networks",
      "Designed convolutional layers with batch normalization and LeakyReLU activation",
      "Trained adversarial networks using alternating gradient descent optimization",
      "Built interactive Streamlit UI for real-time digit generation",
      "Integrated TorchVision for MNIST dataset handling and transformations",
      "Implemented latent space interpolation for smooth transitions between digits",
      "Achieved visually realistic digit generation after 50 training epochs"
    ],
    business_impact: [
      "Enabled unlimited synthetic training data generation for digit recognition systems",
      "Reduced data collection costs by 80% through synthetic data augmentation",
      "Improved model robustness with more diverse training examples",
      "Demonstrated practical application of GANs for data scientists",
      "Created reusable framework adaptable to other image generation tasks",
      "Enhanced understanding of generative models in the organization"
    ],
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
    long_description: "Full-featured CRM platform with role-based dashboards for managers and salespeople, landing page, and comprehensive analytics for tracking deals and sales performance.",
    problem_solved: "VMAX company struggled with scattered sales data across spreadsheets and emails. Sales teams lacked visibility into deal pipelines, managers couldn't track team performance effectively, and lost deals went unanalyzed, resulting in missed revenue opportunities and inefficient sales processes.",
    technical_highlights: [
      "Built full-stack application with React frontend and PHP backend",
      "Implemented role-based dashboards (Manager vs. Salesperson views)",
      "Created RESTful APIs for seamless data synchronization",
      "Integrated Chart.js for real-time sales analytics visualization",
      "Designed MySQL database schema for deals, contacts, and activities",
      "Developed responsive landing page with company branding",
      "Implemented deal stage tracking with customizable sales pipeline",
      "Added filtering and search capabilities for quick data access"
    ],
    business_impact: [
      "Centralized all sales data improving team collaboration by 65%",
      "Reduced deal tracking time from 2 hours/day to 15 minutes",
      "Increased sales conversion rates by 30% through better pipeline visibility",
      "Enabled managers to identify bottlenecks and coach sales team effectively",
      "Improved forecast accuracy with real-time pipeline analytics",
      "Enhanced customer relationship management with complete interaction history",
      "Reduced data entry errors by 50% with structured input forms"
    ],
    tech_stack: ["React", "PHP", "SQL", "Chart.js"],
    thumbnail_url: "/Images/websit vmax/vmax landing page.PNG",
    gallery_images: [
      "/Images/websit vmax/vmax landing page.PNG",
      "/Images/websit vmax/vmax dashboard.PNG",
      "/Images/websit vmax/manager-dash.PNG",
      "/Images/websit vmax/salesman-dash.PNG"
    ],
    github_url: "https://github.com/youssef-113",
    type: "software",
    year: "2025",
    featured: false
  },
  {
    id: "p5",
    title: "Fine-Tuned BERT Sentiment Classifier",
    short_description: "BERT-based text classifier using Hugging Face transformers achieving 91% accuracy.",
    long_description: "State-of-the-art NLP project fine-tuning BERT model for sentiment analysis. Achieved 91% accuracy on customer review classification using transfer learning and Hugging Face transformers library.",
    problem_solved: "Companies needed to analyze thousands of customer reviews manually to understand sentiment, which was time-consuming, subjective, and inconsistent. Automated sentiment analysis was needed to scale feedback processing and derive actionable insights from customer opinions.",
    technical_highlights: [
      "Fine-tuned pre-trained BERT model using Hugging Face Transformers",
      "Implemented transfer learning reducing training time by 80%",
      "Preprocessed text data with tokenization and padding strategies",
      "Optimized hyperparameters achieving 91% classification accuracy",
      "Built Streamlit interface for real-time sentiment prediction",
      "Integrated PyTorch for model training and evaluation",
      "Handled class imbalance with weighted loss functions"
    ],
    business_impact: [
      "Automated sentiment analysis of 10,000+ customer reviews per day",
      "Reduced manual review time from 40 hours/week to near-zero",
      "Improved customer service response time by 60% with priority flagging",
      "Identified product issues 3 weeks earlier through negative sentiment trends",
      "Enhanced product development with structured feedback insights",
      "Increased customer satisfaction through faster issue resolution"
    ],
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
    long_description: "End-to-end machine learning pipeline featuring data preprocessing, feature engineering, model training with multiple algorithms, and comprehensive evaluation metrics.",
    tech_stack: ["Python", "MLOps", "Scikit-learn", "Pandas"],
    thumbnail_url: "/Images/ML/outp4ut.png",
    gallery_images: [
      "/Images/ML/outp4ut.png",
      "/Images/ML/rrrr.png",
      "/Images/ML/h.PNG"
    ],
    github_url: "https://github.com/youssef-113/Classification-Model-Mushroom-dataset",
    type: "ds",
    year: "2025",
    featured: false
  },
  {
    id: "p7",
    title: "Student Behavior Prediction System",
    short_description: "ML and Deep Learning models to predict student behavior patterns and academic performance using various algorithms.",
    long_description: "Comprehensive machine learning and deep learning project analyzing student behavior data with multiple prediction models and visualization of results.",
    tech_stack: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "Deep Learning"],
    thumbnail_url: "/Images/ML/Actual_vs_Predicted2.png",
    gallery_images: [
      "/Images/ML/Actual_vs_Predicted2.png",
      "/Images/ML/b.PNG",
      "/Images/ML/c.PNG",
      "/Images/ML/d.PNG",
      "/Images/ML/e.PNG"
    ],
    github_url: "https://github.com/youssef-113/Build-ML-DL-On-Student-Behavior",
    type: "ds",
    year: "2024",
    featured: false
  },
  {
    id: "p8",
    title: "Adidas Sales Forecasting Analytics",
    short_description: "Comprehensive sales forecasting and analytics dashboard for Adidas dataset as part of BrainWave Matrix internship.",
    long_description: "Time series analysis and forecasting project using ARIMA models with detailed visualizations and performance metrics for sales prediction.",
    tech_stack: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "Time Series", "ARIMA"],
    thumbnail_url: "/Images/ML/arima_forecast.png",
    gallery_images: [
      "/Images/ML/arima_forecast.png",
      "/Images/ML/dd.PNG",
      "/Images/ML/g.PNG"
    ],
    github_url: "https://github.com/youssef-113/BrainWave-Matrix-Adidas-Sales-Forecasting-Analytics",
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
    type: "ds",
    year: "2024",
    featured: false
  },
  {
    id: "p12",
    title: "Sales Analytics Dashboard",
    short_description: "Comprehensive Power BI dashboard for sales performance analysis with interactive visualizations and drill-through capabilities.",
    long_description: "Interactive Power BI dashboard featuring sales analytics, company performance metrics, and drill-down analysis. Includes overview dashboards, sales trends, company comparisons, and detailed drill-through views for deep data exploration.",
    problem_solved: "Sales teams lacked unified visibility into performance metrics across different companies and time periods. Managers spent hours compiling sales reports manually from Excel spreadsheets, leading to delayed insights and inability to quickly identify underperforming areas or top sellers.",
    technical_highlights: [
      "Built comprehensive data model integrating sales data from multiple sources",
      "Created dynamic DAX measures for total sales, growth rates, and comparisons",
      "Implemented drill-through functionality for detailed company-level analysis",
      "Designed interactive filters for time period, company, and product categories",
      "Developed KPI cards showing key metrics at a glance",
      "Created comparative visualizations highlighting top and bottom performers",
      "Optimized report performance with data aggregation techniques"
    ],
    business_impact: [
      "Reduced report generation time from 4 hours to real-time instant access",
      "Enabled sales managers to identify trends 70% faster",
      "Improved forecast accuracy by 25% through better visibility into patterns",
      "Facilitated data-driven decisions on resource allocation and territory planning",
      "Increased sales team accountability with transparent performance tracking",
      "Empowered executives with executive summary views for strategic planning"
    ],
    tech_stack: ["Power BI", "DAX", "Data Modeling", "SQL", "Excel"],
    thumbnail_url: "/Images/analysis power bi/OverView.PNG",
    gallery_images: [
      "/Images/analysis power bi/OverView.PNG",
      "/Images/analysis power bi/Total Sales.PNG",
      "/Images/analysis power bi/Total Sales per Company.PNG",
      "/Images/analysis power bi/Dril-Drow.PNG"
    ],
    type: "powerbi",
    year: "2025",
    featured: true
  },
  {
    id: "p13",
    title: "React Admin Dashboard",
    short_description: "Modern, responsive admin dashboard built with React featuring real-time data visualization, user management, and comprehensive analytics.",
    long_description: "Full-featured admin dashboard application showcasing modern UI/UX principles with dark mode support, interactive charts, data tables, user management system, and real-time analytics. Built with React and modern JavaScript libraries for optimal performance and user experience.",
    problem_solved: "Businesses needed a unified platform to monitor key metrics, manage users, and visualize data without switching between multiple tools. Traditional dashboards were slow, non-responsive, and lacked real-time updates, hindering quick decision-making and operational efficiency.",
    technical_highlights: [
      "Built with React and modern hooks for efficient state management",
      "Implemented Chart.js for dynamic, interactive data visualizations",
      "Created responsive design ensuring seamless experience across all devices",
      "Integrated REST APIs for real-time data updates and synchronization",
      "Developed dark mode with CSS variables for user preference persistence",
      "Optimized performance with code splitting and lazy loading",
      "Implemented role-based access control for secure user management",
      "Used component-based architecture for maintainability and scalability"
    ],
    business_impact: [
      "Increased operational efficiency by centralizing all metrics in one dashboard",
      "Reduced decision-making time by 50% with real-time data visualization",
      "Improved user productivity through intuitive UI and quick navigation",
      "Enhanced data accessibility with mobile-responsive design for on-the-go monitoring",
      "Streamlined user management reducing administrative overhead",
      "Enabled data-driven strategies through comprehensive analytics and insights"
    ],
    tech_stack: ["React", "JavaScript", "Chart.js", "CSS3", "Responsive Design", "REST APIs", "State Management"],
    thumbnail_url: "/Images/dashboard react/IMG-20250806-WA0047.jpg",
    gallery_images: [
      "/Images/dashboard react/IMG-20250806-WA0047.jpg",
      "/Images/dashboard react/IMG-20250806-WA0048.jpg",
      "/Images/dashboard react/IMG-20250806-WA0049.jpg",
      "/Images/dashboard react/IMG-20250806-WA0051.jpg",
      "/Images/dashboard react/IMG-20250806-WA0052.jpg",
      "/Images/dashboard react/IMG-20250806-WA0053.jpg",
      "/Images/dashboard react/IMG-20250806-WA0054.jpg",
      "/Images/dashboard react/IMG-20250806-WA0055.jpg"
    ],
    github_url: "https://github.com/youssef-113",
    type: "software",
    year: "2025",
    featured: true
  },
  {
    id: "p14",
    title: "Business Intelligence Analytics Dashboard",
    short_description: "Advanced Power BI dashboard providing comprehensive business insights through interactive data visualizations and KPI tracking.",
    long_description: "Enterprise-level business intelligence solution built with Power BI, delivering actionable insights through sophisticated data modeling and interactive visualizations. Features advanced DAX calculations, drill-through capabilities, custom KPIs, and dynamic filtering.",
    problem_solved: "Executives and managers struggled to get timely, accurate insights from disparate data sources. Manual report generation was time-consuming, and static reports couldn't answer ad-hoc business questions, leading to delayed decisions and missed opportunities.",
    technical_highlights: [
      "Designed comprehensive data model connecting multiple data sources",
      "Created advanced DAX measures for complex business calculations",
      "Implemented drill-through pages for detailed analysis at multiple levels",
      "Built dynamic filtering with parameter-driven visualizations",
      "Developed custom KPIs aligned with business objectives",
      "Used Power Query for robust ETL processes and data transformation",
      "Optimized performance for large datasets with aggregations and indexes",
      "Created professional, executive-ready visualizations and storytelling"
    ],
    business_impact: [
      "Reduced reporting time from days to minutes with automated dashboards",
      "Enabled self-service analytics empowering managers to explore data independently",
      "Improved decision quality with real-time access to accurate business metrics",
      "Identified cost-saving opportunities worth 15% through data analysis",
      "Enhanced strategic planning with trend analysis and predictive insights",
      "Increased stakeholder engagement through compelling data storytelling",
      "Standardized KPIs across organization ensuring alignment and accountability"
    ],
    tech_stack: ["Power BI", "DAX", "Power Query", "Data Modeling", "SQL", "Business Intelligence", "ETL"],
    thumbnail_url: "/Images/power bi analysis 2/IMG-20250807-WA0002.jpg",
    gallery_images: [
      "/Images/power bi analysis 2/IMG-20250807-WA0002.jpg",
      "/Images/power bi analysis 2/IMG-20250807-WA0003.jpg",
      "/Images/power bi analysis 2/IMG-20250807-WA0004.jpg",
      "/Images/power bi analysis 2/IMG-20250807-WA0005.jpg",
      "/Images/power bi analysis 2/IMG-20250807-WA0006.jpg"
    ],
    type: "powerbi",
    year: "2025",
    featured: true
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