'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';

const servicesData = [
  {
    category: "AI/ML Quality Assurance",
    items: [
      { title: "AI Agent Testing & Auditing", desc: "Validate LLM agents for alignment, compliance, and hallucination control.", icon: "Brain", slug: "ai-agent-testing" },
      { title: "MLOps & LLMOps Pipeline Testing", desc: "Automate ML concept drift, throughput, and system integration QA.", icon: "GitBranch", slug: "mlops-pipeline-testing" },
      { title: "AI Data Collection & Curation", desc: "Audit training dataset variance, ground-truth label fidelity, and representation.", icon: "Database", slug: "ai-data-collection" }
    ]
  },
  {
    category: "Core QA & Banking Services",
    items: [
      { title: "Core Banking & Payments Validation", desc: "Verify SWIFT ISO 20022 parsing, Temenos T24, and PowerCard workflows.", icon: "Landmark", slug: "core-banking-validation" },
      { title: "TCoE Advisory & QA Governance", desc: "Design Test Center of Excellence roadmaps and compliance governance frameworks.", icon: "Users", slug: "tcoe-advisory" },
      { title: "Enterprise Test Automation", desc: "CI/CD-ready parallel test automation and self-healing suites.", icon: "Zap", slug: "enterprise-test-automation" },
      { title: "Performance & Stress Engineering", desc: "High-volume load diagnostics and severe load-spike latency auditing.", icon: "Activity", slug: "performance-stress-engineering" },
      { title: "Cybersecurity & Pen Testing", desc: "Vulnerability research, penetration testing, and security posture validation.", icon: "Shield", slug: "cybersecurity-pen-testing" }
    ]
  }
];

const industriesData = [
  { name: "FinTech & Banking", desc: "Secure digital banking, SWIFT payment networks, and compliance QA.", icon: "Landmark", slug: "fintech-banking" },
  { name: "Autonomous Systems", desc: "Safety-critical validation of sensors, EV decision loops, and robotics.", icon: "Navigation", slug: "autonomous-systems" },
  { name: "Healthcare & Biotech", desc: "HIPAA-compliant validation for digital diagnostics and biometric feeds.", icon: "HeartPulse", slug: "healthcare-biotech" },
  { name: "Enterprise Retail & SaaS", desc: "Scalable load testing and performance assurance for SaaS architectures.", icon: "ShoppingCart", slug: "enterprise-retail-saas" },
  { name: "Telecom & Networks", desc: "Reliability validation for IoT layers, network routing, and edge computing.", icon: "Cpu", slug: "telecom-networks" },
  { name: "Defense & Security", desc: "Air-gapped verification, penetration testing, and security compliance.", icon: "ShieldAlert", slug: "defense-security" }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (path) => pathname === path;

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group transition-transform hover:scale-105">
            <svg width="140" height="36" viewBox="0 0 1510 394" className="h-9 w-auto text-[#0A1229] dark:text-white fill-none transition-colors duration-300" xmlns="http://www.w3.org/2000/svg">
              <g>
                {/* Cobalt Blue brand accent */}
                <path d="M 289.14 286.09 C288.19,286.86 287.48,287.46 286.66,287.76 C284.03,288.71 280.25,286.48 263.24,276.43 C262.83,276.19 262.42,275.94 262.00,275.70 C241.19,263.41 241.68,263.73 240.29,261.00 C239.35,259.13 239.03,249.66 239.01,223.32 C239.01,202.58 238.59,187.06 238.01,185.53 C237.43,184.00 234.64,181.46 231.26,179.39 C216.15,170.13 182.27,150.08 155.69,134.68 C146.16,129.16 141.44,125.82 140.44,123.89 C139.31,121.70 139.00,116.21 139.00,98.20 C139.00,77.29 139.16,75.17 140.83,73.65 C143.72,71.04 149.00,71.61 154.55,75.14 C157.27,76.86 163.55,80.62 168.50,83.49 C173.45,86.35 188.07,94.91 201.00,102.50 C244.51,128.04 247.48,129.78 254.24,133.65 C289.74,153.95 290.43,154.50 291.49,163.20 C291.85,166.11 291.99,194.53 291.82,226.34 L 291.50 284.18 Z" fill="#1857FF" />
                
                {/* Theme-aware primary text and symbol base */}
                <path d="M 214.00 342.30 C185.12,359.10 160.38,373.08 159.00,373.36 C155.19,374.14 151.80,372.72 140.69,365.72 C127.90,357.66 107.66,345.09 80.00,328.03 C68.18,320.74 56.92,313.76 55.00,312.53 C53.08,311.30 46.33,307.12 40.00,303.23 C25.19,294.13 19.15,289.51 17.96,286.39 C17.37,284.84 17.00,240.94 17.00,172.49 L 17.00 61.11 L 19.25 58.71 C20.49,57.39 25.10,54.05 29.50,51.28 C33.90,48.50 42.67,42.98 49.00,39.00 C55.33,35.02 64.57,29.12 69.55,25.88 C78.79,19.87 83.55,18.55 85.87,21.34 C86.66,22.30 87.05,56.43 87.24,142.23 C87.50,260.18 87.53,261.82 89.50,264.04 C90.60,265.28 93.30,267.14 95.50,268.18 C97.70,269.22 104.00,272.95 109.50,276.48 C115.00,280.00 121.30,283.97 123.50,285.29 C125.70,286.61 134.25,291.81 142.50,296.84 C150.94,301.99 158.60,306.00 160.03,306.00 C161.42,306.00 167.49,303.16 173.53,299.68 C179.56,296.21 191.94,289.24 201.04,284.18 C211.71,278.26 216.83,275.12 221.98,275.07 C227.21,275.01 232.48,278.14 243.65,284.77 C244.65,285.36 245.71,285.99 246.81,286.64 C257.64,293.05 267.29,298.97 268.25,299.80 C270.51,301.75 270.51,307.20 268.25,309.76 C267.29,310.86 242.88,325.50 214.00,342.30 ZM 519.45 299.58 C514.28,301.09 507.95,301.35 471.00,301.58 C428.45,301.84 424.16,301.62 414.11,298.63 C399.88,294.39 390.49,284.39 386.58,269.30 C385.21,264.02 385.00,253.34 385.00,189.11 L 385.00 115.00 L 410.00 115.00 L 410.00 146.08 C410.00,163.18 410.34,177.00 410.75,176.79 C411.16,176.58 414.65,174.86 418.50,172.96 L 425.50 169.50 L 468.36 169.20 C514.33,168.88 520.98,169.40 530.09,174.05 C540.70,179.46 548.72,191.39 550.94,205.08 C552.54,214.91 552.26,258.10 550.55,266.16 C546.73,284.18 537.26,294.36 519.45,299.58 ZM 1200.00 299.13 C1192.81,301.26 1190.74,301.36 1150.00,301.55 C1126.62,301.66 1105.93,301.56 1104.00,301.33 C1102.07,301.09 1096.90,299.79 1092.50,298.43 C1078.94,294.25 1069.71,285.10 1065.33,271.50 C1063.16,264.78 1062.21,218.08 1063.99,205.58 C1066.74,186.17 1077.48,174.34 1095.87,170.44 C1105.55,168.39 1188.56,168.41 1198.27,170.47 C1207.98,172.53 1216.13,177.18 1220.94,183.43 C1225.98,189.96 1227.45,193.49 1229.42,203.88 C1231.55,215.13 1231.64,254.50 1229.55,265.41 C1226.03,283.78 1217.02,294.07 1200.00,299.13 ZM 1010.88 299.17 L 1003.50 301.50 L 942.19 301.52 C908.46,301.53 880.68,301.34 880.44,301.10 C880.20,300.86 880.00,296.03 880.00,290.36 L 880.00 280.06 L 939.25 279.78 C996.75,279.51 998.60,279.44 1002.00,277.47 C1006.75,274.71 1009.00,269.89 1009.00,262.50 C1009.00,255.11 1006.75,250.29 1002.00,247.53 C998.66,245.59 996.38,245.47 952.50,244.93 C919.76,244.52 905.39,243.99 902.64,243.10 C891.98,239.64 883.86,231.28 882.30,222.15 C881.86,219.59 881.52,211.88 881.55,205.00 C881.60,194.19 881.92,191.79 883.92,187.27 C886.85,180.63 893.03,174.93 900.58,171.89 L 906.50 169.50 L 967.75 169.21 L 1029.00 168.93 L 1029.00 191.00 L 916.42 191.00 L 911.96 193.25 C906.62,195.95 905.14,199.34 905.06,209.12 C904.99,216.53 906.67,219.67 912.34,222.77 C915.17,224.32 920.45,224.55 963.00,225.00 C1009.92,225.49 1010.56,225.53 1015.50,227.80 C1022.04,230.81 1027.32,236.06 1030.18,242.39 C1032.26,247.00 1032.49,248.98 1032.50,262.50 C1032.50,276.12 1032.28,277.98 1030.14,282.71 C1026.60,290.56 1019.82,296.34 1010.88,299.17 ZM 1106.33 279.07 C1111.90,280.44 1185.94,279.57 1190.50,278.08 C1195.66,276.39 1202.43,269.59 1204.02,264.50 C1205.78,258.88 1206.53,220.07 1205.05,211.27 C1202.69,197.31 1197.35,192.54 1182.28,190.96 C1170.90,189.76 1123.07,189.76 1111.68,190.96 C1100.29,192.16 1095.54,194.80 1091.45,202.18 L 1088.50 207.50 L 1088.50 262.50 L 1091.24 267.70 C1094.12,273.15 1099.85,277.47 1106.33,279.07 ZM 428.40 279.09 C433.65,280.40 506.94,279.55 511.28,278.13 C516.16,276.53 521.54,271.76 524.31,266.59 C526.41,262.68 526.50,261.36 526.50,236.00 C526.50,207.53 526.09,204.64 521.29,198.93 C514.97,191.43 506.63,190.02 468.47,190.01 C427.28,190.00 418.48,191.99 413.02,202.61 C410.55,207.40 410.49,208.02 410.18,233.12 C409.84,260.16 410.28,264.15 414.29,270.10 C416.69,273.67 423.14,277.78 428.40,279.09 ZM 705.64 299.29 C699.95,301.17 696.65,301.34 660.50,301.59 C639.05,301.73 620.60,301.64 619.50,301.39 C612.45,299.79 605.09,297.56 602.64,296.30 C597.77,293.80 590.94,286.82 588.33,281.67 C583.42,271.98 583.04,267.21 583.02,216.25 L 583.00 169.00 L 607.93 169.00 L 608.21 215.75 L 608.50 262.50 L 611.58 267.92 C613.93,272.07 615.93,274.07 620.08,276.42 L 625.50 279.50 L 662.00 279.50 C702.16,279.50 706.60,279.02 714.37,273.88 C717.65,271.71 719.70,269.28 721.71,265.18 L 724.50 259.50 L 725.08 169.00 L 750.01 169.00 L 749.50 300.50 L 726.50 300.50 L 726.20 293.75 C726.04,290.04 725.55,287.00 725.11,287.00 C724.67,287.00 723.45,287.95 722.40,289.12 C718.99,292.91 711.90,297.21 705.64,299.29 ZM 1306.76 245.77 L 1306.50 300.50 L 1283.00 301.06 L 1283.00 191.06 L 1256.50 190.50 L 1256.22 179.78 L 1255.93 169.06 L 1269.22 168.78 L 1282.50 168.50 L 1283.12 156.50 C1284.12,136.96 1289.72,126.85 1303.16,120.33 C1312.77,115.66 1317.79,115.00 1343.58,115.00 L 1367.07 115.00 L 1366.50 136.50 L 1344.00 137.03 C1319.21,137.62 1316.55,138.18 1311.74,143.89 C1308.61,147.62 1307.58,151.93 1307.53,161.50 L 1307.50 168.50 L 1335.28 168.77 L 1363.07 169.03 L 1362.78 179.77 L 1362.50 190.50 L 1334.76 190.77 L 1307.02 191.03 ZM 1491.90 300.62 C1490.98,301.73 1486.02,301.98 1466.63,301.88 C1453.36,301.82 1440.47,301.41 1438.00,300.98 C1420.16,297.88 1408.29,286.37 1405.00,268.98 C1404.45,266.09 1404.00,247.38 1404.00,227.39 L 1404.00 191.06 L 1378.50 190.50 L 1378.50 169.50 L 1403.50 168.50 L 1404.05 135.00 L 1428.95 135.00 L 1429.50 168.50 L 1457.28 168.77 L 1485.07 169.03 L 1484.78 179.77 L 1484.50 190.50 L 1456.75 190.77 L 1429.00 191.03 L 1429.00 225.83 C1429.00,265.77 1429.37,268.39 1435.89,274.28 C1441.27,279.14 1446.44,280.00 1470.39,280.00 L 1490.68 280.00 L 1491.86 289.62 C1492.75,296.85 1492.76,299.58 1491.90,300.62 ZM 853.80 300.80 C852.42,302.18 821.21,302.32 814.50,300.98 C801.73,298.42 793.73,292.39 788.27,281.22 L 784.50 273.50 L 783.94 115.00 L 809.00 115.00 L 809.01 188.75 C809.01,236.40 809.38,263.82 810.04,266.22 C810.61,268.26 812.24,271.32 813.66,273.00 C818.48,278.73 820.93,279.40 838.75,279.82 L 855.00 280.21 L 855.00 289.90 C855.00,296.11 854.57,300.03 853.80,300.80 Z" fill="currentColor" />
                
                {/* Slate Grey graphic details */}
                <path d="M 104.66 273.45 C100.71,271.02 97.07,268.92 95.50,268.18 C93.30,267.14 90.60,265.28 89.50,264.04 C87.53,261.82 87.50,260.18 87.24,142.23 C87.05,56.43 86.66,22.30 85.87,21.34 C83.55,18.55 78.79,19.87 69.55,25.88 C64.57,29.12 55.33,35.02 49.00,39.00 C48.65,39.22 48.29,39.45 47.92,39.68 C48.48,39.33 49.01,38.99 49.50,38.68 C53.90,35.90 62.58,30.34 68.78,26.31 C74.99,22.29 81.14,19.00 82.46,19.00 C83.88,19.00 85.73,20.12 87.00,21.73 L 89.15 24.47 L 88.74 141.48 C88.50,209.23 88.70,259.61 89.22,261.14 C89.92,263.21 94.44,266.84 104.66,273.45 ZM 26.58 53.18 C23.22,55.43 20.21,57.69 19.25,58.71 L 17.00 61.11 L 17.00 172.49 C17.00,240.94 17.37,284.84 17.96,286.39 C18.76,288.49 21.74,291.26 28.11,295.61 C26.24,294.36 24.71,293.29 23.78,292.59 C22.16,291.37 20.87,290.76 19.83,289.85 C15.56,286.15 15.56,277.53 15.58,201.99 C15.58,193.27 15.59,183.66 15.58,173.07 C15.54,68.50 15.64,62.20 17.32,59.63 C18.30,58.13 20.13,56.52 21.38,56.05 C22.10,55.77 24.09,54.67 26.58,53.18 ZM 1206.15 172.84 C1203.68,171.85 1201.04,171.06 1198.27,170.47 C1188.56,168.41 1105.55,168.39 1095.87,170.44 C1092.30,171.20 1089.02,172.25 1086.03,173.60 C1088.98,172.06 1091.66,171.00 1093.05,171.00 C1093.90,171.00 1095.06,170.54 1095.63,169.97 C1097.94,167.66 1116.22,166.81 1153.50,167.27 C1190.89,167.73 1191.62,167.77 1199.19,170.27 C1201.78,171.13 1204.08,171.97 1206.15,172.84 ZM 905.06 208.44 C905.23,214.71 907.74,219.13 912.47,221.44 C916.20,223.26 918.62,223.36 953.47,223.15 C973.83,223.02 994.60,223.35 999.60,223.88 C1004.29,224.38 1008.46,225.26 1012.13,226.55 C1007.78,225.49 999.04,225.38 963.00,225.00 C920.45,224.55 915.17,224.32 912.34,222.77 C906.67,219.67 904.99,216.53 905.06,209.12 C905.06,208.89 905.06,208.66 905.06,208.44 ZM 426.33 169.49 C429.01,168.72 431.93,168.37 437.00,167.96 C450.46,166.86 494.49,166.84 507.52,167.92 C514.22,168.47 520.23,169.86 525.51,172.04 C517.64,169.25 506.61,168.93 468.36,169.20 ZM 540.85 182.74 C546.06,188.61 549.49,196.11 550.94,205.08 C549.56,196.57 545.94,188.75 540.85,182.74 ZM 126.92 287.36 C125.34,286.40 124.15,285.68 123.50,285.29 C121.78,284.26 117.56,281.61 113.17,278.82 C116.70,281.01 122.71,284.74 126.80,287.28 ZM 413.68 175.33 C415.15,174.59 417.03,173.64 419.00,172.63 C420.67,171.78 422.05,171.11 423.33,170.57 L 418.50 172.96 C416.73,173.83 415.04,174.67 413.68,175.33 ZM 1211.60 175.47 C1215.46,177.65 1218.31,180.09 1220.74,183.17 C1218.39,180.20 1215.28,177.59 1211.60,175.47 ZM 1031.51 245.87 C1032.38,248.91 1032.50,252.61 1032.50,262.50 C1032.50,267.69 1032.47,271.17 1032.31,273.76 C1032.47,271.17 1032.50,267.69 1032.50,262.50 C1032.49,252.68 1032.37,248.94 1031.51,245.87 ZM 907.17 197.31 C908.23,195.58 909.77,194.35 911.96,193.25 C909.80,194.34 908.25,195.60 907.17,197.31 ZM 159.66 305.94 C159.80,305.97 159.92,305.99 160.03,306.00 C159.93,306.00 159.81,305.98 159.66,305.94 Z" fill="rgb(142,147,164)" />
              </g>
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 h-full">
            <Link
              href="/"
              className={`text-sm font-semibold transition-all duration-200 relative py-6 ${
                isActive('/') 
                  ? 'text-sky-600 dark:text-sky-400' 
                  : 'text-slate-700 dark:text-slate-355 hover:text-sky-600 dark:hover:text-sky-400'
              }`}
            >
              Home
              {isActive('/') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full" />
              )}
            </Link>

            {/* Services Dropdown */}
            <div className="relative group/menu h-full flex items-center">
              <button 
                className={`flex items-center space-x-1 py-6 text-sm font-semibold transition-all duration-200 ${
                  pathname === '/testing'
                    ? 'text-sky-600 dark:text-sky-400'
                    : 'text-slate-700 dark:text-slate-355 hover:text-sky-600 dark:hover:text-sky-400'
                }`}
              >
                <span>Services</span>
                <ChevronDown size={14} className="group-hover/menu:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Dropdown Container */}
              <div className="absolute top-[80%] left-1/2 -translate-x-[40%] w-[820px] opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible group-hover/menu:top-[100%] transition-all duration-300 pt-3 z-50">
                <div className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200/60 dark:border-slate-800/60 overflow-hidden flex">
                  {/* Left Column Services List */}
                  <div className="p-8 w-[580px] grid grid-cols-2 gap-x-8 gap-y-6">
                    {servicesData.map((category, idx) => (
                      <div key={idx} className="space-y-4">
                        <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                          {category.category}
                        </div>
                        <div className="space-y-4">
                          {category.items.map((item, itemIdx) => {
                            const Icon = LucideIcons[item.icon] || LucideIcons.Box;
                            return (
                              <Link 
                                key={itemIdx} 
                                href={`/services/${item.slug}`} 
                                className="flex items-start space-x-3.5 group/item hover:translate-x-1 transition-transform"
                              >
                                <div className="w-9 h-9 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-500 group-hover/item:text-sky-500 dark:group-hover/item:text-sky-400 transition-colors">
                                  <Icon size={16} />
                                </div>
                                <div>
                                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover/item:text-sky-655 dark:group-hover/item:text-sky-400 transition-colors">
                                    {item.title}
                                  </div>
                                  <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-normal mt-0.5 line-clamp-2">
                                    {item.desc}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right Column CTA Block */}
                  <div className="w-[240px] bg-slate-50/50 dark:bg-slate-900/40 p-8 flex flex-col justify-between border-l border-slate-100 dark:border-slate-800/60">
                    <div className="space-y-4">
                      <div className="inline-flex items-center space-x-1.5 bg-indigo-500/10 border border-indigo-400/20 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider">
                        <Sparkles size={10} className="animate-pulse" />
                        <span>QA Assessment</span>
                      </div>
                      <h4 className="text-sm font-extrabold text-slate-900 dark:text-white leading-snug">
                        QA Maturity & Governance Roadmap
                      </h4>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        Schedule a diagnostic check of your regression suites, banking systems (SWIFT/T24), or AI model pipelines.
                      </p>
                    </div>
                    <Link href="/maturity-roadmap" className="group/cta flex items-center justify-between bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-xl p-3 text-xs font-bold shadow-lg hover:shadow-indigo-500/10 hover:scale-[1.02] active:scale-95 transition-all mt-6">
                      <span>Explore Roadmap</span>
                      <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div className="relative group/menu h-full flex items-center">
              <button 
                className={`flex items-center space-x-1 py-6 text-sm font-semibold transition-all duration-200 ${
                  pathname === '/industries'
                    ? 'text-sky-600 dark:text-sky-400'
                    : 'text-slate-700 dark:text-slate-355 hover:text-sky-600 dark:hover:text-sky-400'
                }`}
              >
                <span>Industries</span>
                <ChevronDown size={14} className="group-hover/menu:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Dropdown Container */}
              <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-[640px] opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible group-hover/menu:top-[100%] transition-all duration-300 pt-3 z-50">
                <div className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200/60 dark:border-slate-800/60 p-8 grid grid-cols-2 gap-x-8 gap-y-6">
                  {industriesData.map((item, idx) => {
                    const Icon = LucideIcons[item.icon] || LucideIcons.Box;
                    return (
                      <Link 
                        key={idx} 
                        href={`/industries/${item.slug}`} 
                        className="flex items-start space-x-3.5 group/item hover:translate-x-1 transition-transform"
                      >
                        <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-500 group-hover/item:text-indigo-500 dark:group-hover/item:text-indigo-400 transition-colors">
                          <Icon size={18} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-white group-hover/item:text-indigo-650 dark:group-hover/item:text-indigo-400 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-normal mt-0.5">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Case Studies Link */}
            <Link
              href="/case-studies"
              className={`text-sm font-semibold transition-all duration-200 relative py-6 ${
                isActive('/case-studies') 
                  ? 'text-sky-600 dark:text-sky-400' 
                  : 'text-slate-700 dark:text-slate-355 hover:text-sky-600 dark:hover:text-sky-400'
              }`}
            >
              Case Studies
              {isActive('/case-studies') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full" />
              )}
            </Link>

            {/* Contact Link */}
            <Link
              href="/contact"
              className={`text-sm font-semibold transition-all duration-200 relative py-6 ${
                isActive('/contact') 
                  ? 'text-sky-600 dark:text-sky-400' 
                  : 'text-slate-700 dark:text-slate-355 hover:text-sky-600 dark:hover:text-sky-400'
              }`}
            >
              Contact
              {isActive('/contact') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full" />
              )}
            </Link>

            {/* Theme Toggle Button */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850 hover:text-sky-600 dark:hover:text-sky-400 transition-all active:scale-90"
                aria-label="Toggle theme"
              >
                {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            <Link href="/contact">
              <Button className="bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-lg hover:shadow-xl hover:shadow-indigo-500/10 hover:scale-105 active:scale-95 transition-all">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Actions (Menu + Theme Toggle) */}
          <div className="flex items-center space-x-2 md:hidden">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                {resolvedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <button
              className="p-2 text-slate-700 dark:text-slate-300 hover:text-sky-600 rounded-lg focus:outline-none transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-slate-100 dark:border-slate-800 max-h-[80vh] overflow-y-auto animate-fadeInUp">
            {/* Home */}
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2.5 text-sm font-bold rounded-xl transition-colors ${
                isActive('/')
                  ? 'bg-sky-50 dark:bg-slate-800/50 text-sky-700 dark:text-sky-400'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850'
              }`}
            >
              Home
            </Link>

            {/* Services Accordion */}
            <div className="space-y-1">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex justify-between items-center px-4 py-2.5 text-sm font-bold text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-850"
              >
                <span>Services</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-6 space-y-1 border-l-2 border-slate-100 dark:border-slate-800 ml-4 py-1">
                  {servicesData.flatMap(cat => cat.items).map((item, idx) => (
                    <Link
                      key={idx}
                      href={`/services/${item.slug}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-sky-550 dark:hover:text-sky-400"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Accordion */}
            <div className="space-y-1">
              <button
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className="w-full flex justify-between items-center px-4 py-2.5 text-sm font-bold text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-850"
              >
                <span>Industries</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileIndustriesOpen && (
                <div className="pl-6 space-y-1 border-l-2 border-slate-100 dark:border-slate-800 ml-4 py-1">
                  {industriesData.map((item, idx) => (
                    <Link
                      key={idx}
                      href={`/industries/${item.slug}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-sky-550 dark:hover:text-sky-400"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Case Studies */}
            <Link
              href="/case-studies"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2.5 text-sm font-bold rounded-xl transition-colors ${
                isActive('/case-studies')
                  ? 'bg-sky-50 dark:bg-slate-800/50 text-sky-700 dark:text-sky-400'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850'
              }`}
            >
              Case Studies
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2.5 text-sm font-bold rounded-xl transition-colors ${
                isActive('/contact')
                  ? 'bg-sky-50 dark:bg-slate-800/50 text-sky-700 dark:text-sky-400'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850'
              }`}
            >
              Contact
            </Link>

            <div className="px-4 pt-2">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-medium py-3 rounded-xl shadow-md transition-all">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
