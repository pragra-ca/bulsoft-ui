// Mock data for Bulsoft enterprise website

export const mockServices = [
  {
    id: 1,
    title: "AI Agent Testing & Auditing",
    description: "Rigorous auditing and behavioral validation of LLM-based autonomous agents to guarantee alignment, compliance, and hallucination control.",
    icon: "brain",
    features: [
      "Alignment & Safety Auditing",
      "Hallucination & Bias Identification",
      "Adversarial Prompt Injections",
      "Agentic Loop State Auditing"
    ]
  },
  {
    id: 2,
    title: "MLOps & LLMOps Pipeline Testing",
    description: "Automated verification of machine learning pipeline performance, tracking data drift, model decay, throughput, and system integration.",
    icon: "git-branch",
    features: [
      "Continuous Model Monitoring",
      "Data Drift & Concept Drift Detection",
      "Pipeline Latency & Bottleneck Auditing",
      "CI/CD Integration for ML Registries"
    ]
  },
  {
    id: 3,
    title: "AI Data Collection & Curation",
    description: "Comprehensive audits of training datasets, ensuring data diversity, high-fidelity labeling, and compliance with data governance standards.",
    icon: "database",
    features: [
      "Annotation Quality Audits",
      "Dataset Diversity & Representation",
      "Ethical Sourcing & PII Redaction",
      "Ground Truth Validation Checks"
    ]
  },
  {
    id: 4,
    title: "Enterprise Test Automation",
    description: "Cross-platform test automation setups designed to accelerate delivery while ensuring flawless functionality across web, mobile, and API layers.",
    icon: "zap",
    features: [
      "Self-healing Testing Frameworks",
      "Parallel Test Execution at Scale",
      "API & Microservice Validation",
      "Seamless CI/CD Integrations"
    ]
  },
  {
    id: 5,
    title: "Performance & Stress Engineering",
    description: "Deep diagnostic stress testing to assure systems, databases, and microservices handle extreme load spikes without latency degradation.",
    icon: "activity",
    features: [
      "High-Volume Load Simulation",
      "Server Bottleneck Diagnostics",
      "Scalability & Auto-scaling Audits",
      "Database Query Optimization Checks"
    ]
  },
  {
    id: 6,
    title: "Cybersecurity & Pen Testing",
    description: "Vulnerability research, penetration testing, and security posture validation to defend critical enterprise assets against cyber threats.",
    icon: "shield",
    features: [
      "Network Penetration Audits",
      "OWASP Top 10 Web/API Security",
      "Access Control & Threat Modeling",
      "Regulatory Compliance (SOC2/GDPR)"
    ]
  },
  {
    id: 7,
    title: "Core Banking & Payments Validation",
    description: "End-to-end integration and functionality audits for core banking systems, cards processing (PowerCard), and clearing networks (SWIFT / ISO 20022).",
    icon: "landmark",
    features: [
      "Temenos T24, Finacle & Flexcube Validation",
      "SWIFT & ISO 20022 Message Validation",
      "Cards & Payments Clearing (PowerCard) QA",
      "Digital Wallet & Mobile Banking Auditing"
    ]
  },
  {
    id: 8,
    title: "TCoE Advisory & QA Governance",
    description: "Strategic setups of Test Centres of Excellence (TCoE) to streamline release methodologies, govern test quality, and ensure regulatory compliance.",
    icon: "users",
    features: [
      "TCoE Setup, Advisory & Execution Roadmap",
      "QA Process Auditing & Maturity Assessments",
      "Regulatory Compliance Audits (Central Bank / NESA)",
      "Continuous Integration & Quality Gate Automation"
    ]
  }
];

export const mockIndustries = [
  {
    id: 1,
    name: "FinTech & Banking",
    description: "Highly secure, low-latency validation for digital banking systems, quantitative models, and high-frequency trading platforms.",
    icon: "landmark",
    clients: 45
  },
  {
    id: 2,
    name: "Autonomous Systems",
    description: "Specialized safety-critical validation of AI data collection and sensor model outputs for automotive, robotics, and aerospace.",
    icon: "navigation",
    clients: 18
  },
  {
    id: 3,
    name: "Healthcare & Biotech",
    description: "HIPAA-compliant testing for medical imaging algorithms, patient portals, clinical trial workflows, and diagnostic tools.",
    icon: "heart-pulse",
    clients: 32
  },
  {
    id: 4,
    name: "Enterprise Retail & SaaS",
    description: "Scalable load testing and performance assurance for multi-tenant SaaS platforms and globally distributed e-commerce architectures.",
    icon: "shopping-cart",
    clients: 58
  },
  {
    id: 5,
    name: "Telecom & Networks",
    description: "Reliability validation for high-throughput telecom pipelines, IoT networks, and distributed communication layers.",
    icon: "cpu",
    clients: 24
  },
  {
    id: 6,
    name: "Defense & Security",
    description: "Air-gapped verification, custom security auditing, and secure system verification for federal and security clients.",
    icon: "shield-alert",
    clients: 12
  }
];

export const mockCaseStudies = [
  {
    id: 1,
    title: "MLOps Drift Detection at Scale",
    client: "Tier-1 Retail Bank",
    industry: "FinTech & Banking",
    challenge: "Credit risk scoring models were suffering from post-deployment feature drift, threatening credit risk modeling compliance.",
    solution: "Designed and deployed a continuous MLOps pipeline validation system triggering automated alerts and validation checks on drift detection.",
    results: [
      "Zero compliance penalties in the fiscal year",
      "92% reduction in manual data drift inspections",
      "Under 12ms pipeline latency verification",
      "Successfully SOC 2 Type II audit validation"
    ],
    technologies: ["MLOps Testing", "Drift Detection", "CI/CD Integration", "Data Quality Audits"],
    duration: "6 months",
    image: "placeholder"
  },
  {
    id: 2,
    title: "Autonomous Driving Data Validation",
    client: "Next-Gen EV Manufacturer",
    industry: "Autonomous Systems",
    challenge: "Invalid labels and corrupted data artifacts in the training data set caused neural network regression issues.",
    solution: "Created an automated AI Data Collection & Annotation curation system checking data completeness, variance, and label fidelity.",
    results: [
      "99.97% annotation label accuracy",
      "60% faster training data validation lifecycle",
      "Discarded 12% of corrupted sensor records before training",
      "Improved model validation accuracy by 8%"
    ],
    technologies: ["AI Data Collection Auditing", "Dataset Diversity Checks", "Ground Truth Validation"],
    duration: "4 months",
    image: "placeholder"
  },
  {
    id: 3,
    title: "LLM Compliance & Hallucination Audit",
    client: "Global Insurance Provider",
    industry: "Healthcare & Biotech",
    challenge: "Customer-facing AI agent draft recommendations suffered from hallucinations, risking regulatory infractions.",
    solution: "Designed custom adversarial validation checks and prompt injection suites to stress-test agent compliance boundaries.",
    results: [
      "99.9% reduction in risky agent recommendations",
      "100% compliance with HIPAA guidelines",
      "45% decrease in automated review escalations",
      "Verified compliance with SOC 2 guidelines"
    ],
    technologies: ["AI Agent Auditing", "Adversarial Prompting", "Bias Detection"],
    duration: "5 months",
    image: "placeholder"
  },
  {
    id: 4,
    title: "Enterprise Core QA Transformation",
    client: "Logistics SaaS Platform",
    industry: "Enterprise Retail & SaaS",
    challenge: "SaaS application releases suffered delays due to manual regression tests taking over 8 days per release.",
    solution: "Implemented self-healing test automation framework integrated with parallel cloud executions.",
    results: [
      "Release cycle shortened from 8 days to 4 hours",
      "85% reduction in production post-release bugs",
      "500%+ Return on Investment in Year 1",
      "99.99% system uptime achieved"
    ],
    technologies: ["Test Automation", "Performance Testing", "Stress Engineering"],
    duration: "8 months",
    image: "placeholder"
  },
  {
    id: 5,
    title: "ISO 20022 Payments Migration Audit",
    client: "Central Bank of UAE Consortium",
    industry: "FinTech & Banking",
    challenge: "Migrating legacy clearing and cards networks to SWIFT ISO 20022 schemas under tight regulatory deadlines without service disruption.",
    solution: "Built a high-fidelity clearing simulator validating parsing accuracy, message routing rules, load scalability, and security zone configurations.",
    results: [
      "100% compliance with UAE Central Bank payment rules",
      "Zero transaction errors across 8 participant national banks",
      "Automated over 45,000 payment scenario validations",
      "Full PCI-DSS compliance certified during flight"
    ],
    technologies: ["Payments Systems Testing", "ISO 20022 Compliance", "Test Automation", "Performance Engineering"],
    duration: "7 months",
    image: "placeholder"
  }
];

export const mockStats = [
  { label: "Projects Completed", value: "650+" },
  { label: "AI Models Validated", value: "180+" },
  { label: "Data Records Audited", value: "50M+" },
  { label: "Global Locations", value: "3" },
  { label: "Active Engineers", value: "220+" },
  { label: "Client Retention Rate", value: "98.5%" }
];

export const mockTestimonials = [
  {
    id: 1,
    name: "Dr. Clara Mendoza",
    role: "VP of AI Research",
    company: "Apex Autonomous Systems",
    content: "Bulsoft's AI data curation and dataset validation services revolutionized our neural network training cycle. Their deep auditing expertise saved us months of rework.",
    rating: 5
  },
  {
    id: 2,
    name: "Richard Vance",
    role: "Chief MLOps Engineer",
    company: "Summit Credit Corp",
    content: "Deploying Bulsoft's MLOps pipeline testing framework transformed our deployment strategy. We now catch feature drifts and latency bugs before our models ever hit production.",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "VP of Quality Engineering",
    company: "SaaS Logix",
    content: "Their core test automation suite has reduced our release cycle times by 95% while keeping production quality at an all-time high. A phenomenal partner.",
    rating: 5
  }
];

export const mockTeam = [
  {
    id: 1,
    name: "Dr. Alex Kumar",
    role: "Chief AI Testing Officer",
    bio: "Ph.D. in Machine Learning. 15+ years in AI quality assurance, model auditing, and training data validation."
  },
  {
    id: 2,
    name: "Jennifer Liu",
    role: "Head of MLOps Test Engineering",
    bio: "Former MLOps Lead at Tech Giants. Expert in model drift detection systems and ML pipeline automation."
  },
  {
    id: 3,
    name: "Marcus Williams",
    role: "Lead Cybersecurity Architect",
    bio: "Certified Ethical Hacker (CEH) with 12+ years of experience auditing enterprise systems and military-grade applications."
  }
];
