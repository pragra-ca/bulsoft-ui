'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Shield, 
  Zap, 
  TrendingUp, 
  Database,
  GitBranch,
  Brain,
  Activity,
  ChevronRight,
  CheckCircle,
  Layers,
  DatabaseZap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { mockServices, mockTestimonials } from '@/mock';
import * as LucideIcons from 'lucide-react';

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const [driftValue, setDriftValue] = useState(0.021);
  const [logMessages, setLogMessages] = useState([
    'Initializing dataset check...',
    'Found 12 duplicate records. Redacting...',
    'Running semantic variance tests on labels...'
  ]);

  // Dynamic values simulation for high-end feel
  useEffect(() => {
    const driftInterval = setInterval(() => {
      setDriftValue(prev => {
        const delta = (Math.random() - 0.5) * 0.004;
        const next = prev + delta;
        return parseFloat(Math.max(0.012, Math.min(0.035, next)).toFixed(4));
      });
    }, 2500);

    const logInterval = setInterval(() => {
      const logs = [
        'PII scrub completed successfully.',
        'Auditing LLM temperature sensitivity (T=0.7)...',
        'Data drift threshold verified: OK.',
        'Continuous MLOps deployment pipeline: HEALTHY.',
        'Security regression scan: 0 critical vulnerabilities.',
        'Running API latency load benchmarking...'
      ];
      setLogMessages(prev => {
        const nextLog = logs[Math.floor(Math.random() * logs.length)];
        const updated = [...prev.slice(1), `[${new Date().toLocaleTimeString()}] ${nextLog}`];
        return updated;
      });
    }, 4000);

    return () => {
      clearInterval(driftInterval);
      clearInterval(logInterval);
    };
  }, []);

  const getIcon = (iconName) => {
    if (iconName === 'git-branch') return GitBranch;
    if (iconName === 'database') return Database;
    if (iconName === 'brain') return Brain;
    if (iconName === 'zap') return Zap;
    if (iconName === 'activity') return Activity;
    if (iconName === 'shield') return Shield;
    if (iconName === 'landmark') return LucideIcons.Landmark;
    if (iconName === 'users') return LucideIcons.Users;
    
    const IconComponent = LucideIcons[iconName.split('-').map((word, i) => 
      i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    ).join('').replace(/^(.)/, (match) => match.toUpperCase())];
    return IconComponent || LucideIcons.Box;
  };

  const steps = [
    {
      title: "Data Collection & Curation",
      tagline: "Annotation & Diversity",
      desc: "We perform high-fidelity audits on ground truth data labels, scrub PII, identify label bias, and ensure representative class distributions.",
      icon: DatabaseZap,
      status: "Verified 12M+ records"
    },
    {
      title: "Model Validation",
      tagline: "Fine-Tuning Audits",
      desc: "Adversarial stress-testing of models to map out boundaries, capture extreme edge cases, prevent hallucinations, and verify compliance.",
      icon: Brain,
      status: "Hallucination score < 0.1%"
    },
    {
      title: "MLOps Continuous Testing",
      tagline: "Pipeline & Drift Monitoring",
      desc: "Automated triggers monitor production data distributions. Trigger automated validation and rollbacks if drift exceed tolerances.",
      icon: GitBranch,
      status: "Auto-trigger validation active"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 text-slate-900 dark:text-white border-b border-slate-200/50 dark:border-slate-800/30">
        {/* Animated Background Gradients & Grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35"></div>
        
        {/* Glowing Decorative Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-sky-400/10 dark:bg-sky-500/20 rounded-full filter blur-[100px] animate-float-slow -z-10"></div>
        <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-indigo-400/10 dark:bg-indigo-500/20 rounded-full filter blur-[100px] animate-float -z-10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column (Hero copy) */}
            <div className="space-y-8 lg:col-span-7">
              <div className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-400/30 text-sky-600 dark:text-sky-400 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider animate-fadeInUp">
                <Sparkles size={14} className="text-sky-500 dark:text-sky-400 animate-pulse" />
                <span>Next-Gen Quality Engineering</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-slate-900 dark:text-white animate-fadeInUp">
                Enterprise-Grade QA for 
                <span className="block mt-3 bg-gradient-to-r from-sky-600 via-indigo-600 to-indigo-500 dark:from-sky-450 dark:via-indigo-300 dark:to-sky-300 bg-clip-text text-transparent">
                  Core IT & AI Pipelines
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl animate-fadeInUp">
                Continuous reliability checks across your enterprise stack. We specialize in AI data collection annotation audits, ML model fine-tuning validation, continuous MLOps pipeline monitoring, and high-volume test automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fadeInUp">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-semibold shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:scale-105 active:scale-95 transition-all text-base px-8 py-6 rounded-xl">
                    Schedule Audit Consultation
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
                <Link href="/testing">
                  <Button size="lg" variant="outline" className="border-2 border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 bg-white/5 backdrop-blur-sm px-8 py-6 rounded-xl text-base transition-all">
                    Explore Services
                  </Button>
                </Link>
              </div>

              {/* Quick High-End Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-slate-200 dark:border-slate-800 animate-fadeInUp">
                <div>
                  <div className="text-3xl lg:text-4xl font-extrabold text-sky-600 dark:text-sky-400">50M+</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider font-semibold">Data Records Audited</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">99.9%</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider font-semibold">Model Accuracy Verified</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-extrabold text-sky-600 dark:text-sky-400">100%</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider font-semibold">SWIFT/ISO Compliance</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">70%</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider font-semibold">Shorter Release Cycles</div>
                </div>
              </div>
            </div>

            {/* Right Column (High-fidelity interactive console mockup) */}
            <div className="lg:col-span-5 relative animate-float">
              {/* Outer Glow wrapper */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl blur-lg opacity-20 dark:opacity-30"></div>
              
              <div className="relative bg-white dark:bg-slate-950/80 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 font-mono text-xs">
                {/* Console header */}
                <div className="bg-slate-50 dark:bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-200 dark:border-slate-800/80">
                  <div className="flex space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-semibold tracking-wider">MLOps Validation Platform</span>
                  <Activity size={14} className="text-indigo-500 dark:text-indigo-400 animate-pulse" />
                </div>
                
                {/* Console Body */}
                <div className="p-6 space-y-5">
                  {/* Realtime Stats row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-950/60 rounded-xl p-3 border border-slate-200 dark:border-slate-800/60">
                      <div className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">Data Drift Index</div>
                      <div className="text-xl font-bold text-sky-655 dark:text-sky-400 flex items-baseline">
                        {driftValue} <span className="text-[10px] text-green-500 dark:text-green-400 ml-1.5 font-normal">▼ normal</span>
                      </div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-950/60 rounded-xl p-3 border border-slate-200 dark:border-slate-800/60">
                      <div className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">Curation Audit Status</div>
                      <div className="text-xl font-bold text-green-600 dark:text-green-400 flex items-center">
                        PASSED <CheckCircle2 size={16} className="text-green-500 dark:text-green-400 ml-1.5" />
                      </div>
                    </div>
                  </div>

                  {/* Logs stream */}
                  <div className="space-y-2.5 bg-slate-100 dark:bg-slate-950/80 rounded-xl p-4 border border-slate-200 dark:border-slate-850 font-mono text-[11px] leading-relaxed min-h-[135px]">
                    <div className="text-slate-500">// Real-time Quality Stream</div>
                    {logMessages.map((log, index) => (
                      <div key={index} className={`${index === logMessages.length - 1 ? 'text-indigo-650 dark:text-indigo-300 font-bold' : 'text-slate-600 dark:text-slate-400'}`}>
                        {log}
                      </div>
                    ))}
                    <div className="text-sky-600 dark:text-sky-400/90 animate-pulse font-bold">● Listening to pipeline events...</div>
                  </div>

                  {/* Active Validation Tasks list */}
                  <div className="space-y-2 text-[11px]">
                    <div className="text-slate-605 dark:text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-800/50 pb-1.5 flex items-center">
                      <Layers size={12} className="mr-1.5 text-indigo-500 dark:text-indigo-400" /> Continuous Verifications
                    </div>
                    {[
                      { name: 'Model bias test suite', status: 'Passed', percent: '100%' },
                      { name: 'Adversarial vulnerability check', status: 'Secure', percent: '0 issues' },
                      { name: 'HIPAA compliance checks', status: 'Compliant', percent: 'Passed' }
                    ].map((task, i) => (
                      <div key={i} className="flex justify-between items-center py-1">
                        <span className="text-slate-500 dark:text-slate-400">{task.name}</span>
                        <div className="flex space-x-3 items-center">
                          <span className="text-slate-400 dark:text-slate-500 text-[10px]">{task.percent}</span>
                          <span className="px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-[9px] border border-sky-500/20 font-bold">{task.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-indigo-600 dark:text-indigo-400 font-extrabold text-xs uppercase tracking-widest bg-indigo-50 dark:bg-indigo-950/50 px-4 py-1.5 rounded-full">Our Core Scope</span>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-4 mb-6 tracking-tight">
              Enterprise-Grade Quality Engineering Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We validate every critical link in your technology ecosystem, combining advanced automation testing with specialized audits for AI data and pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockServices.map((service) => {
              const IconComponent = getIcon(service.icon);
              return (
                <Card 
                  key={service.id} 
                  className="group glow-card border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-900/60 rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-8">
                    {/* Icon container */}
                    <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-indigo-500/10">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed min-h-[60px]">
                      {service.description}
                    </p>
                    
                    {/* Capabilities bullets */}
                    <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle2 size={16} className="text-indigo-650 dark:text-indigo-400 mr-2.5 mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Link href="/testing">
              <Button size="lg" className="border-2 border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 bg-transparent font-bold py-6 px-8 rounded-xl transition-all">
                Explore Methodologies
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive AI Pipeline Lifecycle Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-slate-950 text-white border-t border-b border-slate-850 dark:border-slate-900 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-25"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full filter blur-[120px] -z-10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-sky-400 font-extrabold text-xs uppercase tracking-widest bg-sky-500/10 border border-sky-400/20 px-4 py-1.5 rounded-full">Advanced AI Quality Lifecycle</span>
            <h2 className="text-4xl font-extrabold text-white mt-4 mb-6 tracking-tight">
              Interactive AI Validation Model
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              How we inspect, secure, and monitor artificial intelligence pipelines at enterprise scale. Click through each step to reveal details.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Steps select list */}
            <div className="lg:col-span-5 space-y-4">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isSelected = activeStep === idx;
                return (
                  <div 
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start space-x-4 ${
                      isSelected 
                        ? 'bg-slate-800/80 dark:bg-slate-900 border-sky-500 shadow-lg shadow-sky-500/5' 
                        : 'bg-slate-900/40 dark:bg-slate-950/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
                    }`}
                  >
                    <div className={`p-3 rounded-xl flex-shrink-0 transition-colors ${
                      isSelected ? 'bg-sky-500 text-slate-900' : 'bg-slate-800 text-slate-400'
                    }`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-1">{step.tagline}</div>
                      <h3 className="text-lg font-bold text-white mb-1.5 flex items-center">
                        {step.title}
                        {isSelected && <ChevronRight className="ml-1 text-sky-400 animate-pulse" size={16} />}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interactive Step Preview Panel */}
            <div className="lg:col-span-7 bg-slate-950/60 dark:bg-slate-950/30 rounded-3xl p-8 border border-slate-800/80 min-h-[350px] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></span>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Operational Dashboard</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-[10px] font-bold">
                    {steps[activeStep].status}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                  {steps[activeStep].title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  {steps[activeStep].desc}
                </p>

                {/* Sub features */}
                <div className="grid grid-cols-2 gap-4 text-xs font-mono text-slate-400">
                  <div className="flex items-center space-x-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                    <CheckCircle className="text-sky-400" size={14} />
                    <span>Real-time Curation check</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                    <CheckCircle className="text-sky-400" size={14} />
                    <span>Autonomous model validation</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-500">Methodology Framework: ISO-42001 Audited</span>
                <Link href="/testing">
                  <Button variant="link" className="text-sky-400 hover:text-sky-300 p-0 font-bold flex items-center">
                    Read Testing Methodology
                    <ArrowRight className="ml-1.5" size={14} />
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950/40 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-indigo-600 dark:text-indigo-400 font-extrabold text-xs uppercase tracking-widest bg-indigo-50 dark:bg-indigo-950/50 px-4 py-1.5 rounded-full">Corporate Standards</span>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-4 mb-6 tracking-tight">
              Setting the Standard in Quality Excellence
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              We combine deep compliance expertise, state-of-the-art AI tooling, and senior testing personnel to deliver absolute quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-First Quality Framework",
                desc: "Pioneering validation engines that test deep neural networks, unstructured training data, and complex agentic autonomous loops. We catch regression, bias, and drift before they impact clients."
              },
              {
                icon: Shield,
                title: "Bank-Grade Compliance Auditing",
                desc: "Specialized regulatory verifications covering HIPAA for healthcare, SOC 2 for SaaS apps, and strict quantitative compliance matrices for financial institutions across over 10 countries."
              },
              {
                icon: Zap,
                title: "Accelerated Test Automation",
                desc: "Moving beyond slow scripts. Our custom framework implements self-healing test automation scripts that plug directly into your GitHub Actions / GitLab pipelines to deliver 70% faster releases."
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white dark:bg-slate-900/60 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-800/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-6">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-400">
                    Enterprise Certified Integration
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-r from-sky-600 via-indigo-600 to-indigo-700">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-400/25 rounded-full filter blur-[150px] -z-10 animate-float-slow"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Ready to Secure Your AI & Core Infrastructure?
          </h2>
          <p className="text-lg md:text-xl text-indigo-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Ensure regulatory compliance, scrub training dataset bias, automate test suites, and audit autonomous agent loops with Bulsoft's enterprise QA engine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-indigo-700 hover:bg-slate-100 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all text-base px-10 py-6 rounded-xl font-bold">
                Schedule Compliance Consultation
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link href="/testing">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-base px-10 py-6 rounded-xl font-semibold transition-all">
                Download QA Whitepaper
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
