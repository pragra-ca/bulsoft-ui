'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mockServices } from '@/mock';
import * as LucideIcons from 'lucide-react';
import { 
  ArrowRight, 
  Zap, 
  Target, 
  Users, 
  TrendingUp, 
  Database,
  Cpu,
  GitPullRequest,
  CheckCircle2,
  RefreshCw,
  GitBranch
} from 'lucide-react';

export default function Testing() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getIcon = (iconName) => {
    if (iconName === 'git-branch') return GitBranch;
    if (iconName === 'database') return Database;
    if (iconName === 'brain') return LucideIcons.Brain;
    if (iconName === 'zap') return Zap;
    if (iconName === 'activity') return LucideIcons.Activity;
    if (iconName === 'shield') return LucideIcons.Shield;
    if (iconName === 'landmark') return LucideIcons.Landmark;
    if (iconName === 'users') return LucideIcons.Users;
    
    const IconComponent = LucideIcons[iconName.split('-').map((word, i) => 
      i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    ).join('').replace(/^(.)/, (match) => match.toUpperCase())];
    return IconComponent || LucideIcons.Box;
  };

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'ai', label: 'AI/ML Quality Assurance' },
    { id: 'core', label: 'Core Software Testing' }
  ];

  const filteredServices = mockServices.filter(s => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'ai') {
      return ['AI Agent Testing & Auditing', 'MLOps & LLMOps Pipeline Testing', 'AI Data Collection & Curation'].includes(s.title);
    }
    if (selectedCategory === 'core') {
      return [
        'Enterprise Test Automation', 
        'Performance & Stress Engineering', 
        'Cybersecurity & Pen Testing',
        'Core Banking & Payments Validation',
        'TCoE Advisory & QA Governance'
      ].includes(s.title);
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 text-slate-900 dark:text-white overflow-hidden border-b border-slate-200/50 dark:border-slate-800/30">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-sky-500/10 dark:bg-sky-500/15 rounded-full filter blur-[100px] animate-float-slow"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-sky-500/10 border border-sky-400/30 text-sky-655 dark:text-sky-450 px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-full">
            Full-Stack Quality Assurance Catalog
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
            Comprehensive Verification for
            <span className="block mt-3 bg-gradient-to-r from-sky-650 via-indigo-650 to-indigo-500 dark:from-sky-450 dark:via-indigo-300 dark:to-sky-300 bg-clip-text text-transparent">
              Enterprise Software & AI Models
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Bulsoft designs next-generation validation strategies. From automated UI/API regression cycles to custom data collection annotations checks, model hallucination stresses, and real-time MLOps pipeline monitoring.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
            {[
              { value: '50M+', label: 'Training Records Audited' },
              { value: '99.9%', label: 'Hallucination Mitigation' },
              { value: '70%', label: 'Shorter Release Timelines' },
              { value: 'SOC 2', label: 'Compliance Assured' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xl">
                <div className="text-3xl font-extrabold text-sky-600 dark:text-sky-400">{stat.value}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider mt-1.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase & Filter */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Category Filter Tabs */}
          <div className="flex justify-center mb-16">
            <div className="bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl flex space-x-1.5 border border-slate-200 dark:border-slate-800">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                    selectedCategory === cat.id
                      ? 'bg-white dark:bg-slate-800 text-slate-950 dark:text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-850'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {filteredServices.map((service) => {
              const IconComponent = getIcon(service.icon);
              return (
                <Card 
                  key={service.id} 
                  className="border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 group rounded-2xl bg-gradient-to-br from-white to-slate-50/40 dark:from-slate-900 dark:to-slate-950/40"
                >
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-indigo-500/10">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed min-h-[60px]">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div className="font-bold text-slate-950 dark:text-white text-xs uppercase tracking-wider mb-2">Technical Capabilities</div>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle2 size={16} className="text-indigo-600 dark:text-indigo-400 mr-2.5 mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Embedded QA Value Banner */}
          <div className="bg-gradient-to-r from-sky-600 to-indigo-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            
            <h3 className="text-3xl font-extrabold mb-8 text-center relative z-10 tracking-tight">
              Enterprise Integration Standards
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { icon: Zap, title: '95% Less Manual Effort', desc: 'Auto-scaffolding tests' },
                { icon: Target, title: 'Continuous Validation', desc: 'Drift & bias notifications' },
                { icon: Users, title: 'Expert Consultants', desc: 'ISTQB & AWS certified QA' },
                { icon: TrendingUp, title: 'Measurable QA ROI', desc: 'Drastically lower release costs' }
              ].map((item, idx) => (
                <div key={idx} className="text-center bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <item.icon className="w-10 h-10 mx-auto mb-4 text-sky-300" />
                  <div className="font-bold text-lg mb-1.5">{item.title}</div>
                  <div className="text-sky-100 text-xs leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/30 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-indigo-600 dark:text-indigo-400 font-extrabold text-xs uppercase tracking-widest bg-indigo-50 dark:bg-indigo-950/50 px-4 py-1.5 rounded-full">Methodology Workflow</span>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4 tracking-tight">Our Validation Lifecycle</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A precise, high-fidelity system of checks from initial data acquisition to live telemetry auditing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Visual connector line for large screens */}
            <div className="hidden md:block absolute top-[68px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-sky-400 via-indigo-500 to-sky-400 -z-10"></div>
            
            {[
              { 
                step: '01', 
                title: 'Data Curation Audit', 
                desc: 'Deep inspection of annotations, label density, bias variance, and data ingestion paths.',
                icon: Database 
              },
              { 
                step: '02', 
                title: 'Adversarial Benchmarks', 
                desc: 'Subjecting ML pipelines and software endpoints to prompt injections and extreme stress conditions.',
                icon: Cpu 
              },
              { 
                step: '03', 
                title: 'Regression & Auto QA', 
                desc: 'Parallel test runs verify features, API behaviors, browser interfaces, and backend systems.',
                icon: GitPullRequest 
              },
              { 
                step: '04', 
                title: 'Continuous MLOps Re-run', 
                desc: 'Continuous real-time drift validation checks triggering automated re-runs or rollbacks in production.',
                icon: RefreshCw 
              }
            ].map((item, idx) => {
              const StepIcon = item.icon;
              return (
                <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800/60 flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-md border border-slate-850">
                    <StepIcon size={22} className="text-sky-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5 tracking-tight">{item.title}</h3>
                  <p className="text-xs text-slate-505 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QA Comparison Matrix */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 relative border-t border-slate-200/50 dark:border-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sky-600 dark:text-sky-400 font-extrabold text-xs uppercase tracking-widest bg-sky-50 dark:bg-sky-950/50 px-4 py-1.5 rounded-full">Competitive Edge</span>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4 tracking-tight">Bulsoft TCoE vs. Traditional QA</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              How our automated, domain-specific testing frameworks stack up against standard testing cycles.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
            <table className="w-full text-left border-collapse bg-white dark:bg-slate-900/60 backdrop-blur-md">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800">
                  <th className="p-6 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">QA Benchmark</th>
                  <th className="p-6 text-sm font-bold text-red-650 dark:text-red-450 uppercase tracking-wider bg-red-500/5">Traditional Testing Agency</th>
                  <th className="p-6 text-sm font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider bg-sky-500/5">Bulsoft TCoE Sandbox Model</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-sm font-medium">
                {[
                  { metric: 'Regression Cycle Times', trad: '8 to 14 days per release (mainly manual)', bul: '4 hours (fully automated parallel pipeline execution)' },
                  { metric: 'Payments & SWIFT ISO 20022 Validation', trad: 'Manual message testing via static simulators', bul: 'Continuous sandbox simulation with 45,000+ test scenarios' },
                  { metric: 'ML/AI Pipeline Auditing', trad: 'Out of scope / no specialized capabilities', bul: 'Real-time data drift, safety audits, and bias alerts' },
                  { metric: 'Test Center of Excellence (TCoE) Integration', trad: 'Staff augmentation model only', bul: 'Strategic QA governance, automation assets & continuous dashboards' },
                  { metric: 'UAE Regulatory Compliance Alignment', trad: 'General auditing checks', bul: 'Direct alignment audits for Central Bank rules, NESA & PCI-DSS' }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20">
                    <td className="p-6 text-slate-900 dark:text-white font-bold">{row.metric}</td>
                    <td className="p-6 text-slate-550 dark:text-slate-400 bg-red-500/5">{row.trad}</td>
                    <td className="p-6 text-slate-700 dark:text-slate-350 bg-sky-500/5 font-semibold">{row.bul}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-600 via-indigo-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">
            Ready to Verify Your AI and Enterprise Stack?
          </h2>
          <p className="text-lg text-indigo-100 mb-10">
            Get a tailored audit framework customized for your company's data pipelines, model specifications, and compliance rules.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-indigo-700 hover:bg-slate-100 shadow-xl text-base font-bold px-10 py-6 rounded-xl">
                Schedule Service Audit
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-base font-semibold px-10 py-6 rounded-xl">
                View Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
