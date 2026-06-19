// Configuration and structured data for Bulsoft services
export const servicesDataConfig = [
  {
    slug: "ai-agent-testing",
    title: "AI Agent Testing & Auditing",
    category: "ai",
    categoryLabel: "AI/ML Quality Assurance",
    icon: "brain",
    shortDesc: "Validate LLM agents for alignment, compliance, and hallucination control.",
    longDesc: "As autonomous AI agents assume critical roles in customer service, underwriting, and operations, validating their behavioral consistency becomes a regulatory and operational imperative. Bulsoft's AI Agent Testing suite subjects LLM agents to comprehensive safety alignment, compliance constraints, and adversarial conditions. We ensure your agentic loops make correct decisions, respect system instructions, and prevent data leakage.",
    capabilities: [
      "Semantic & Alignment Policy Verification",
      "Hallucination Rate Scoring & Injection Stressing",
      "Adversarial Prompt Injection & Guardrail Probing",
      "Multi-agent State Loop Loopback Analysis",
      "PII & Confidential Data Leakage Validation"
    ],
    stats: [
      { value: "99.9%", label: "Hallucination Mitigation" },
      { value: "45k+", label: "Adversarial Test Prompts" },
      { value: "SOC 2", label: "Compliance Certified" }
    ],
    methodology: [
      { phase: "Probing", title: "Guardrail Mapping", desc: "Scan agent endpoints to map compliance parameters and input guardrails." },
      { phase: "Attack", title: "Adversarial Fuzzing", desc: "Inject prompt anomalies and context jailbreaks to force policy violations." },
      { phase: "Evaluation", title: "Safety Alignment Score", desc: "Evaluate accuracy, hallucination tendency, and bias metrics." }
    ],
    simulator: {
      type: "ai-agent-chat",
      title: "Hallucination & Safety Compliance Scanner",
      description: "Stress test an LLM customer service agent with adversarial injection inputs and watch the real-time guardrail scan."
    }
  },
  {
    slug: "mlops-pipeline-testing",
    title: "MLOps & LLMOps Pipeline Testing",
    category: "ai",
    categoryLabel: "AI/ML Quality Assurance",
    icon: "git-branch",
    shortDesc: "Automate ML concept drift, throughput, and system integration QA.",
    longDesc: "Machine learning pipelines differ from traditional software due to model degradation, data drift, and throughput shifts. Our MLOps testing framework monitors live feature pipelines and prediction endpoints. We validate data schema consistency, identify feature store drift, measure prediction latency under load, and automate validation gates prior to container register promotions.",
    capabilities: [
      "Real-time Feature Store & Input Data Schema Validation",
      "Automated Concept & Data Drift Detection Indicators",
      "Throughput, Latency, & System Saturation Auditing",
      "CI/CD Quality Gates for Model Registries & Container Promotes",
      "Model Bias & Prediction Integrity Monitoring"
    ],
    stats: [
      { value: "10ms", label: "Pipeline Latency Validation" },
      { value: "92%", label: "Manual Inspection Reduction" },
      { value: "Continuous", label: "Drift Monitoring" }
    ],
    methodology: [
      { phase: "Ingestion", title: "Schema Consistency Checks", desc: "Validate that incoming stream schemas match feature store schemas." },
      { phase: "Monitoring", title: "Drift Metric Calculations", desc: "Calculate Population Stability Index (PSI) to flag accuracy drifts." },
      { phase: "Action", title: "Automated Re-training Gates", desc: "Deploy triggers to automatically roll back models or kick off retraining." }
    ],
    simulator: {
      type: "mlops-drift",
      title: "Model Drift & Accuracy Pipeline Monitor",
      description: "Trigger data drifts on a simulated ML credit risk prediction pipeline and observe how accuracy degrades and alerts automatic rollbacks."
    }
  },
  {
    slug: "ai-data-collection",
    title: "AI Data Collection & Curation",
    category: "ai",
    categoryLabel: "AI/ML Quality Assurance",
    icon: "database",
    shortDesc: "Audit training dataset variance, ground-truth label fidelity, and representation.",
    longDesc: "High-quality model outputs require clean, unbiased, and secure training inputs. Bulsoft delivers extensive auditing for data annotation pipelines and datasets. We inspect annotations for high-fidelity alignment, check datasets for representation variance, and sanitize records to comply with international privacy standards.",
    capabilities: [
      "Annotation Quality Audits & Ground-Truth Verification",
      "PII Scans & Custom Redaction Workflows",
      "Dataset Diversity, Representation & Variance Scoring",
      "Ethical Data Sourcing & Compliance Cleanses",
      "Anonymized Data Tokenization Validation"
    ],
    stats: [
      { value: "99.97%", label: "Label Fidelity Verified" },
      { value: "50M+", label: "Records Audited" },
      { value: "GDPR/HIPAA", label: "Regulatory Compliance" }
    ],
    methodology: [
      { phase: "Audit", title: "Annotation Variance Check", desc: "Verify annotator alignment with target labels using kappa metrics." },
      { phase: "Privacy", title: "Sanitization Audit", desc: "Scan datasets for potential PII violations and execute dynamic redact." },
      { phase: "Fidelity", title: "Ground Truth Benchmarking", desc: "Establish bias variance benchmarks against verified baseline validation datasets." }
    ],
    simulator: {
      type: "data-curation",
      title: "Ground Truth Curation & PII Sanitizer",
      description: "Upload a raw dataset batch to scan for PII leaks, annotator tag errors, and representation imbalance."
    }
  },
  {
    slug: "core-banking-validation",
    title: "Core Banking & Payments Validation",
    category: "core",
    categoryLabel: "Core QA & Banking Services",
    icon: "landmark",
    shortDesc: "Verify SWIFT ISO 20022 parsing, Temenos T24, and PowerCard workflows.",
    longDesc: "Financial transaction platforms require flawless execution. A single parsing error in a clearing network or core banking registry can disrupt markets and trigger regulatory fines. Bulsoft provides end-to-end clearing audits, validating SWIFT message structures, ISO 20022 compliance, card clearing rules, and core ledger integrity.",
    capabilities: [
      "Temenos T24, Finacle, & Flexcube Integration QA",
      "SWIFT & ISO 20022 Structured Message Schema Parsing",
      "PowerCard & Payments Network Clearing Assertions",
      "High-Volume Transaction Synchronization Validation",
      "PCI-DSS Compliance Alignment & Auditing"
    ],
    stats: [
      { value: "45k+", label: "Validation Test Cases" },
      { value: "Zero-error", label: "Ledger Migrations" },
      { value: "100%", label: "Central Bank Alignment" }
    ],
    methodology: [
      { phase: "Parse", title: "ISO 20022 Schema Validation", desc: "Ensure XML messages compile perfectly against strict MX and MT bank rules." },
      { phase: "Ledger", title: "T24 Ledger Checking", desc: "Validate that clearing transactions settle correctly in the core bank registries." },
      { phase: "Clearing", title: "End-to-End Payment Runs", desc: "Simulate high-volume network clears across secure sandbox interfaces." }
    ],
    simulator: {
      type: "payments-validation",
      title: "SWIFT ISO 20022 Clearing Validator",
      description: "Input payment schemas into the financial simulator and parse them against ISO 20022 Central Bank validation rules."
    }
  },
  {
    slug: "tcoe-advisory",
    title: "TCoE Advisory & QA Governance",
    category: "core",
    categoryLabel: "Core QA & Banking Services",
    icon: "users",
    shortDesc: "Design Test Center of Excellence roadmaps and compliance governance frameworks.",
    longDesc: "Transforming quality assurance from an ad-hoc process to a centralized strategic asset requires structural changes. Bulsoft's TCoE Advisory team works with enterprise leaders to design customized Test Centers of Excellence. We audit release maturity, build automated compliance gates, align testing with Central Bank/NESA regulations, and define KPIs that track quality efficiency.",
    capabilities: [
      "QA Maturity Assessments & Roadmap Auditing",
      "NESA, UAE Central Bank, & PCI-DSS Audit Controls",
      "Centralized QA Tooling & Framework Governance",
      "Continuous Integration Metrics & Gate Automation",
      "Automation Training & QA Skill Transitioning"
    ],
    stats: [
      { value: "70%", label: "Faster Release Cycles" },
      { value: "ISTQB", label: "Certified Team Quality" },
      { value: "Level 5", label: "Target CMMI Maturity" }
    ],
    methodology: [
      { phase: "Assess", title: "Maturity Evaluation", desc: "Audit current release workflows, pipeline controls, and testing gaps." },
      { phase: "Design", title: "Governance Playbook", desc: "Define centralized standards, metric dashboards, and compliance rules." },
      { phase: "Scale", title: "TCoE Deployment", desc: "Govern automated CD checks and enable cross-team release controls." }
    ],
    simulator: {
      type: "tcoe-advisory-flow",
      title: "TCoE Quality Maturity Diagnostic",
      description: "Analyze your enterprise QA operations to calculate your CMMI Maturity Score and generate a custom improvement roadmap."
    }
  },
  {
    slug: "enterprise-test-automation",
    title: "Enterprise Test Automation",
    category: "core",
    categoryLabel: "Core QA & Banking Services",
    icon: "zap",
    shortDesc: "CI/CD-ready parallel test automation and self-healing suites.",
    longDesc: "Maintaining manual regression testing suites is unsustainable at cloud scale. Bulsoft designs high-velocity automated testing frameworks built to run parallel cycles in CI/CD pipelines. Using self-healing locators and dynamic API virtualization, we reduce test maintenance effort by 95% and shorten release testing times from days to minutes.",
    capabilities: [
      "Self-Healing Locators & Dynamic Element Detection",
      "Parallel Test Pipeline Execution at Scale",
      "API, GraphQL, & Microservices Mock Auditing",
      "Continuous CI/CD Pipeline Regression Integrations",
      "Cross-Browser & Native App Automation Setup"
    ],
    stats: [
      { value: "95%", label: "Maintenance Reductions" },
      { value: "4 hours", label: "Full Regression Cycle" },
      { value: "CI/CD", label: "Ready Pipelines" }
    ],
    methodology: [
      { phase: "Audit", title: "Locator Setup", desc: "Structure tests using page object designs with robust ID configurations." },
      { phase: "Pipeline", title: "Parallel Executions", desc: "Integrate regression checks in GitHub Actions, GitLab CI, or Jenkins." },
      { phase: "Maintenance", title: "Self-Healing Runs", desc: "Enable semantic DOM updates to automatically patch broken element selectors." }
    ],
    simulator: {
      type: "test-automation-code",
      title: "Self-Healing Automated Test Terminal",
      description: "Watch a simulated automated test run. Alter the DOM nodes to see how self-healing locator engines dynamically heal the broken selector in real-time."
    }
  },
  {
    slug: "performance-stress-engineering",
    title: "Performance & Stress Engineering",
    category: "core",
    categoryLabel: "Core QA & Banking Services",
    icon: "activity",
    shortDesc: "High-volume load diagnostics and severe load-spike latency auditing.",
    longDesc: "System availability under extreme stress defines digital reliability. Bulsoft designs heavy load scenarios to test system saturation, database index efficiency, and network auto-scaling triggers. We don't just run load generators; we engineer diagnostic telemetry to uncover garbage collection loops, query locks, and thread blockages.",
    capabilities: [
      "High-Volume Load Simulation & Latency Audits",
      "Auto-Scaling Trigger & Network Saturation Checks",
      "Database Query Blockages & Index Diagnostics",
      "Garbage Collection & System Memory Leak Tests",
      "Microservice Failover & Circuit Breaker Verifications"
    ],
    stats: [
      { value: "100k+", label: "Simulated Concurrent Users" },
      { value: "Zero-degrade", label: "Under Peak Load" },
      { value: "45ms", label: "Optimized Load Latency" }
    ],
    methodology: [
      { phase: "Profile", title: "Telemetry Configuration", desc: "Instrument APM monitors on target instances, databases, and routes." },
      { phase: "Stress", title: "SPIKE Load Injections", desc: "Inject load-spike ramps to isolate autoscaling limits and bottleneck bounds." },
      { phase: "Resolve", title: "Query & Architecture Tune", desc: "Optimize indexing tables, cache routing protocols, and load distribution layers." }
    ],
    simulator: {
      type: "performance-latency-spike",
      title: "High-Load Latency Optimizer",
      description: "Simulate scaling concurrent load. Watch latency bottlenecks occur at 50,000+ users, then toggle optimization to scale smoothly."
    }
  },
  {
    slug: "cybersecurity-pen-testing",
    title: "Cybersecurity & Pen Testing",
    category: "core",
    categoryLabel: "Core QA & Banking Services",
    icon: "shield",
    shortDesc: "Vulnerability research, penetration testing, and security posture validation.",
    longDesc: "A robust QA suite must address security. Bulsoft provides comprehensive penetration testing and security posture audits. We look for web and mobile vulnerabilities, audit authorization protocols, stress-test API boundaries against injections, and verify security isolation zone configurations to ensure compliance with standards like ISO 27001, SOC 2, and PCI-DSS.",
    capabilities: [
      "OWASP Top 10 Web Application Vulnerability Scans",
      "API Authentication & Authorization Penetration Testing",
      "Database SQL Injection & Script Injection Probing",
      "Security Zone Isolation & Access Control Inspections",
      "Compliance Audits (SOC 2, ISO 27001, Central Bank)"
    ],
    stats: [
      { value: "Zero-leak", label: "Critical Vulnerabilities" },
      { value: "100%", label: "OWASP Compliance" },
      { value: "SOC 2/ISO", label: "Audit Standard Ready" }
    ],
    methodology: [
      { phase: "Probe", title: "Target Footprinting", desc: "Map all public-facing endpoints, API gateways, and authorization portals." },
      { phase: "Exploit", title: "Fuzzing & Vulnerability Penetration", desc: "Fuzz input payloads to scan for SQLi, XSS, and authorization bypasses." },
      { phase: "Fortify", title: "Mitigation Reporting", desc: "Deliver actionable remediation recipes to dev teams to close vulnerabilities." }
    ],
    simulator: {
      type: "cybersecurity-scan",
      title: "API Endpoint Security Scanner",
      description: "Run an interactive vulnerability probe against public endpoints to scan for OWASP flaws and verify network compliance."
    }
  }
];
