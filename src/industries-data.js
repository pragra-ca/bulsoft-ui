// Configurations and structured data for Bulsoft industries
export const industriesDataConfig = [
  {
    slug: "fintech-banking",
    title: "FinTech & Banking",
    icon: "landmark",
    clients: 45,
    shortDesc: "Secure digital banking, SWIFT payment networks, and compliance QA.",
    longDesc: "The financial sector requires zero-tolerance for processing lag, message discrepancies, or registry errors. Bulsoft supports central financial networks and global banks with high-scale transaction simulation, ledger synchronization validation, SWIFT/ISO 20022 parsing validation, and strict PCI-DSS alignment checks.",
    vulnerabilityFocus: [
      "SWIFT ISO 20022 structured message parsing",
      "PowerCard & payments network clearing loops",
      "Temenos T24 ledger transaction settles",
      "PCI-DSS audit compliance controls",
      "High-scale low-latency database queries"
    ],
    stats: [
      { value: "45+", label: "Financial Institutions" },
      { value: "ISO 20022", label: "Message Standardized" },
      { value: "Zero-lag", label: "Ledger Settlements" }
    ],
    simulator: {
      type: "fintech-trans",
      title: "SWIFT & T24 Payment Settlement Validator",
      description: "Simulate clearing payment flows. Audit transaction logs to verify SWIFT compliance and balance updates."
    }
  },
  {
    slug: "autonomous-systems",
    title: "Autonomous Systems",
    icon: "navigation",
    clients: 18,
    shortDesc: "Safety-critical validation of sensors, EV decision loops, and robotics.",
    longDesc: "Autonomous hardware—including self-driving vehicles, logistics robotics, and drones—must process sensor feeds under strict latency limits to ensure safety. Bulsoft audits feature pipelines, sensor data annotations, neural model classification boundaries, and edge computing bottlenecks to guarantee system reliability.",
    vulnerabilityFocus: [
      "LIDAR, camera, and radar sensor data calibration",
      "Adversarial neural network frame injection testing",
      "Real-time edge processing throughput & latency",
      "Dataset annotation classes representation",
      "System fault failover & auto-brakes execution"
    ],
    stats: [
      { value: "18", label: "EV/Robotics Clients" },
      { value: "99.97%", label: "Annotation Accuracy" },
      { value: "Edge-ready", label: "Pipeline Validation" }
    ],
    simulator: {
      type: "autonomous-sensor",
      title: "LIDAR & Sensor Calibration Auditor",
      description: "Stress test object detection algorithms with noise injection. Observe how the system filters anomalies to maintain safety."
    }
  },
  {
    slug: "healthcare-biotech",
    title: "Healthcare & Biotech",
    icon: "heart-pulse",
    clients: 32,
    shortDesc: "HIPAA-compliant validation for digital diagnostics and biometric feeds.",
    longDesc: "Biotech platforms and diagnostics algorithms must combine high diagnostic accuracy with absolute privacy. We build QA processes that scan database operations for HIPAA violations, audit security isolation zones, validate biometric data curation steps, and verify diagnostic algorithm latency limits.",
    vulnerabilityFocus: [
      "HIPAA compliance private record audits",
      "PII encryption & anonymized storage controls",
      "Biometric feed ingestion consistency testing",
      "Medical diagnostics pipeline accuracy metrics",
      "System isolation zones pen testing"
    ],
    stats: [
      { value: "32", label: "Biotech Partnerships" },
      { value: "HIPAA", label: "Compliance Certified" },
      { value: "100%", label: "PII Anonymization" }
    ],
    simulator: {
      type: "healthcare-hipaa",
      title: "HIPAA PII Privacy & Compliance Scanner",
      description: "Audit client diagnostics datasets. Automatically detect and scrub unencrypted health indicators and PII leaks."
    }
  },
  {
    slug: "enterprise-retail-saas",
    title: "Enterprise Retail & SaaS",
    icon: "shopping-cart",
    clients: 58,
    shortDesc: "Scalable load testing and performance assurance for SaaS architectures.",
    longDesc: "E-commerce apps and SaaS frameworks experience massive user spikes during campaigns or operations. Bulsoft executes multi-user concurrent simulations to map autoscaling thresholds, load-test database locking queries, optimize cache layers, and ensure smooth checkout conversions.",
    vulnerabilityFocus: [
      "High-volume checkout cart concurrency stress",
      "Database locks & catalog query indexes optimization",
      "Auto-scaling group triggers thresholds verification",
      "Caching hit/miss latency drop verification",
      "APM diagnostic telemetry configurations"
    ],
    stats: [
      { value: "58", label: "SaaS Platforms Optimized" },
      { value: "100k+", label: "Concurrent Load Cases" },
      { value: "99.99%", label: "System Uptime Uptime" }
    ],
    simulator: {
      type: "saas-load",
      title: "Checkout Cart Load Stress Simulator",
      description: "Scale concurrent catalog checkout load up to 100,000 requests/sec. Enable caching to avoid system failure."
    }
  },
  {
    slug: "telecom-networks",
    title: "Telecom & Networks",
    icon: "cpu",
    clients: 24,
    shortDesc: "Reliability validation for IoT layers, network routing, and edge computing.",
    longDesc: "High-speed networks require constant verification of network packages routing and signal latency. We construct automated test cases that audit routing pipelines, run edge processing stress scenarios, and measure packet loss rates under heavy network congestion.",
    vulnerabilityFocus: [
      "Packet routing latency & packet loss benchmarks",
      "Edge computing pipeline throughput tests",
      "IoT signaling protocol consistency tests",
      "Network failover and server fail redundancy",
      "Encryption zones message packet audits"
    ],
    stats: [
      { value: "24", label: "Telecom Carriers Served" },
      { value: "< 2ms", label: "Jitter Latency Assured" },
      { value: "IoT-scale", label: "Device Simulations" }
    ],
    simulator: {
      type: "telecom-packet",
      title: "Network Routing & Latency Diagnostic Panel",
      description: "Simulate telecom routing flows. Inject traffic noise to monitor jitter and packet loss spikes, then run router balancing."
    }
  },
  {
    slug: "defense-security",
    title: "Defense & Security",
    icon: "shield-alert",
    clients: 12,
    shortDesc: "Air-gapped verification, penetration testing, and security compliance.",
    longDesc: "National security structures and military-grade applications demand air-gapped system isolation and strict threat mitigation. Bulsoft performs intensive penetration audits, database injection stress tests, access control assertions, and security zones verification to satisfy strict security requirements.",
    vulnerabilityFocus: [
      "Air-gapped network boundary checks",
      "Access control & zero-trust authentication checks",
      "Database injection vulnerability fuzzing",
      "Security zones isolation Pen Testing",
      "Compliance audits (ISO 27001 / regional defense)"
    ],
    stats: [
      { value: "12", label: "Defense Entities Audited" },
      { value: "Zero-trust", label: "Isolation Verified" },
      { value: "100%", label: "Penetration Coverage" }
    ],
    simulator: {
      type: "defense-isolation",
      title: "Air-Gapped Network Boundary Auditor",
      description: "Run a simulated intrusion test against secure boundary zones. Ensure access isolation limits block unauthorized leaks."
    }
  }
];
