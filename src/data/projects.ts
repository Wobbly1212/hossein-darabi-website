export interface Project {
  slug: string;
  title: string;
  role: string;
  category: string;
  summary: string;
  overview: string;
  problem: string;
  approach: string;
  technical: string[];
  tags: string[];
  outcomes: string[];
  featured: boolean;
  coverGradient: string;
  github?: string;
}

const projects: Project[] = [
  {
    slug: "novelties-ios-app",
    title: "Novelties — Mindfulness iOS App",
    role: "iOS Developer & Designer",
    category: "iOS Development",
    summary:
      "An iOS app that disrupts automatic thinking through daily micro-activities, promoting mindfulness and present-moment awareness.",
    overview:
      "Novelties is an iOS application designed to break automatic thinking patterns and promote mindfulness. It delivers randomized daily micro-activities (max 5 minutes each) that focus user attention on sensory experiences — textures, sounds, scents, movement — encouraging present-moment awareness without formal meditation.",
    problem:
      "People get stuck in automatic routines and lose awareness of the present moment. Traditional mindfulness apps often require meditation sessions that feel like a commitment. The challenge was building something that integrates naturally into daily life with minimal friction.",
    approach:
      "Designed and built a SwiftUI app with a custom randomization engine that delivers unique sensory prompts each day. Created an Inner Archive feature for users to store completed reflections. Focused on unusual, disruptive interactions designed to engage the brain's salience network.",
    technical: [
      "Swift & SwiftUI for native iOS development",
      "Custom randomization engine for daily prompts",
      "44 curated color palette options for personalization",
      "Local data persistence for the Inner Archive",
      "Variable task durations targeting different sensory modalities",
    ],
    tags: ["Swift", "SwiftUI", "iOS", "UX Design", "Product Design"],
    outcomes: [
      "Delivered a polished iOS app with unique interaction patterns",
      "Designed a non-traditional approach to mindfulness that requires no meditation",
      "Built a complete product from concept through design to implementation",
    ],
    featured: true,
    coverGradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    github: "https://github.com/Wobbly1212/Novelties-ios-application",
  },
  {
    slug: "skin-cancer-classifier",
    title: "CNN Skin Cancer Classifier",
    role: "ML Engineer",
    category: "Deep Learning",
    summary:
      "A deep learning pipeline that classifies dermatoscopic images into 7 skin lesion categories using convolutional neural networks.",
    overview:
      "A comprehensive deep learning pipeline for identifying and classifying skin cancer lesions. Processes 10,015 dermatoscopic images from the HAM10000 dataset across seven lesion categories, with emphasis on transparency, reproducibility, and practical clinical applicability.",
    problem:
      "Early skin cancer detection can save lives, but requires specialist dermatologists. The challenge was building an automated classification system that can reliably distinguish between different types of skin lesions from dermatoscopic images, while being transparent about its limitations.",
    approach:
      "Built a sequential CNN architecture with dropout regularization and data augmentation. Used ImageDataGenerator for augmentation, ReduceLROnPlateau for learning rate optimization, and comprehensive evaluation including confusion matrices and per-class analysis. Identified class imbalance as a key challenge and documented recommendations.",
    technical: [
      "Sequential CNN architecture with dropout regularization",
      "Data augmentation via ImageDataGenerator",
      "Learning rate optimization with ReduceLROnPlateau callbacks",
      "10,015 images across 7 lesion categories (HAM10000 dataset)",
      "Comprehensive evaluation with confusion matrices and classification reports",
    ],
    tags: ["Python", "TensorFlow", "Keras", "CNN", "Medical AI"],
    outcomes: [
      "Achieved 77.7% validation accuracy across 7 skin lesion categories",
      "Built a fully reproducible pipeline from preprocessing to evaluation",
      "Identified limitations and recommended improvements (transfer learning, focal loss)",
    ],
    featured: true,
    coverGradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    github: "https://github.com/Wobbly1212/CNN_Skin-Cancer-Classifier",
  },
  {
    slug: "twitter-sentiment-analysis",
    title: "Twitter Sentiment Analysis at Scale",
    role: "Data Scientist",
    category: "Big Data & NLP",
    summary:
      "Large-scale sentiment classification of 1.6M tweets using Apache Spark and distributed ML on Databricks.",
    overview:
      "A big data machine learning project that classifies tweets as positive or negative by processing 1.6 million labeled tweets from the Sentiment140 dataset. Built on Apache Spark and Databricks, leveraging distributed computing for scalable NLP processing.",
    problem:
      "Understanding public sentiment at scale requires processing millions of text entries efficiently. Traditional single-machine approaches don't scale. The challenge was building a distributed ML pipeline that handles massive text data while maintaining classification accuracy.",
    approach:
      "Developed a PySpark pipeline: text preprocessing (lowercasing, URL removal, tokenization, stopword filtering), TF-IDF vectorization, and model comparison between Logistic Regression and Naive Bayes. Deployed on Databricks for scalable cloud-based processing.",
    technical: [
      "Apache Spark & PySpark for distributed computing",
      "TF-IDF vectorization for text feature extraction",
      "Logistic Regression vs Naive Bayes comparison",
      "Databricks cloud platform for scalable execution",
      "1.6M tweet dataset (balanced: 800K positive, 800K negative)",
    ],
    tags: ["PySpark", "NLP", "Databricks", "Big Data", "ML"],
    outcomes: [
      "Logistic Regression achieved 77.96% accuracy (outperforming Naive Bayes at 76.37%)",
      "Built production-ready pipeline on scalable cloud infrastructure",
      "Demonstrated distributed ML capabilities for real-world NLP tasks",
    ],
    featured: true,
    coverGradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    github: "https://github.com/Wobbly1212/twitter-sentiment-analysis",
  },
  {
    slug: "ficto-creativity-app",
    title: "Ficto — Creative Writing iOS App",
    role: "Lead Developer",
    category: "iOS Development",
    summary:
      "A galaxy-themed iOS app built at Apple Developer Academy to help writers overcome creative block through timed challenges.",
    overview:
      "Ficto is a mobile application developed at Apple Developer Academy to help writers and content creators overcome creative block. It delivers timed writing challenges with creative prompts in an immersive galaxy-themed interface, grounded in cognitive science and behavioral activation research.",
    problem:
      "Creative block is a common challenge for writers and content creators. Existing tools either feel too clinical or don't provide enough structure. The goal was to create an engaging, science-backed tool that makes writing feel like play rather than pressure.",
    approach:
      "Applied design thinking methodology from Apple Developer Academy: user research, problem framing, ideation, prototyping, and iterative development. Built a database of 100+ creative prompts sourced from creativity research. Designed a galaxy-themed UI to make the experience immersive and inviting.",
    technical: [
      "Swift for native iOS/iPadOS development",
      "Galaxy-themed immersive user interface",
      "Database of 100+ research-backed creative prompts",
      "Timed writing challenges with countdown mechanics",
      "Design thinking methodology and user research",
    ],
    tags: ["Swift", "iOS", "UX Research", "Product Design", "Apple Academy"],
    outcomes: [
      "Delivered a functional creative writing tool with immersive UI",
      "Grounded in cognitive science research on creativity",
      "Built collaboratively as part of a team at Apple Developer Academy",
    ],
    featured: false,
    coverGradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
    github: "https://github.com/Wobbly1212/ficto-creativity-IOS_app",
  },
  {
    slug: "ecommerce-database-design",
    title: "E-Commerce Database Architecture",
    role: "Database Designer",
    category: "Database Design",
    summary:
      "A comprehensive relational database design for a full e-commerce platform — from ER modeling to normalized SQL schema.",
    overview:
      "A complete relational database design project for a full-featured e-commerce platform. Models physical and digital products, subscriptions, training programs, customer management, orders, inventory, deliveries, reviews, and supplier relationships. Focused on proper ER modeling, normalization, and query design.",
    problem:
      "E-commerce platforms need databases that can handle complex relationships — products with variants, subscription models, inventory tracking, multi-step delivery, and review systems. The challenge was designing a schema that handles all these relationships cleanly while remaining performant and maintainable.",
    approach:
      "Started with conceptual ER diagrams, then restructured to eliminate inheritance for relational compatibility. Normalized the schema to Third Normal Form. Designed a comprehensive SQL query suite for customer management, order processing, inventory tracking, and review aggregation.",
    technical: [
      "Entity-Relationship modeling with cardinality mappings",
      "Database normalization to Third Normal Form (3NF)",
      "SQL query suite for CRUD operations and analytics",
      "Generalization/specialization handling for product types",
      "Foreign key constraint design for referential integrity",
    ],
    tags: ["SQL", "Database Design", "ER Modeling", "Normalization"],
    outcomes: [
      "Designed a complete, normalized schema for a real-world e-commerce platform",
      "Created comprehensive ER diagrams with proper constraint documentation",
      "Built a reusable query suite for common business operations",
    ],
    featured: false,
    coverGradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    github: "https://github.com/Wobbly1212/Ecommerce-database-design",
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
