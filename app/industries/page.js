'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mockIndustries } from '@/mock';
import * as LucideIcons from 'lucide-react';
import { ArrowRight, Users, ShieldCheck, Brain } from 'lucide-react';

export default function Industries() {
  const getIcon = (iconName) => {
    if (iconName === 'shield-alert') return LucideIcons.ShieldAlert;
    if (iconName === 'navigation') return LucideIcons.Navigation;
    if (iconName === 'landmark') return LucideIcons.Landmark;
    if (iconName === 'heart-pulse') return LucideIcons.HeartPulse;
    if (iconName === 'shopping-cart') return LucideIcons.ShoppingCart;
    if (iconName === 'cpu') return LucideIcons.Cpu;
    
    const IconComponent = LucideIcons[iconName.split('-').map((word, i) => 
      i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    ).join('').replace(/^(.)/, (match) => match.toUpperCase())];
    return IconComponent || LucideIcons.Box;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 text-slate-900 dark:text-white overflow-hidden border-b border-slate-200/50 dark:border-slate-800/30">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35"></div>
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full filter blur-[100px] animate-float"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-indigo-500/10 border border-indigo-400/30 text-indigo-600 dark:text-indigo-400 px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-full">
            Global Sectors & Systems
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
            Specialized QA for
            <span className="block mt-3 bg-gradient-to-r from-sky-650 via-indigo-650 to-indigo-500 dark:from-sky-455 dark:via-indigo-300 dark:to-sky-305 bg-clip-text text-transparent">
              High-Risk & Regulated Industries
            </span>
          </h1>
          <p className="text-lg text-slate-605 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We provide custom, industry-specific test verification matrices. Serving global leaders in autonomous vehicles, secure fintech networks, digital health devices, SaaS, and aerospace networks.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockIndustries.map((industry) => {
              const IconComponent = getIcon(industry.icon);
              return (
                <Card 
                  key={industry.id} 
                  className="border border-slate-200 dark:border-slate-800/85 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group rounded-2xl overflow-hidden bg-gradient-to-br from-white to-slate-50/20 dark:from-slate-900 dark:to-slate-950/40"
                >
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-indigo-500/10">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {industry.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-655 dark:text-slate-400 mb-6 text-sm leading-relaxed min-h-[60px]">
                      {industry.description}
                    </p>
                    <div className="flex items-center text-xs text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider">
                      <Users size={16} className="mr-2 text-indigo-500 dark:text-indigo-400" />
                      <span>{industry.clients}+ Enterprise clients served</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry-specific standards & Compliance */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/30 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-indigo-600 dark:text-indigo-400 font-extrabold text-xs uppercase tracking-widest bg-indigo-50 dark:bg-indigo-950/50 px-4 py-1.5 rounded-full">Governance Frameworks</span>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4 tracking-tight">
              Enterprise Compliance & Data Protection
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Our operations, auditing mechanisms, and verification scripts are aligned with global security protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-3xl p-4 shadow-sm">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <ShieldCheck size={28} className="text-indigo-600 dark:text-indigo-400" />
                  <CardTitle className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Regulatory Conformance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  We guarantee that your systems remain completely compliant with relevant privacy and operational requirements during QA executions:
                </p>
                <ul className="space-y-3.5 text-sm font-semibold text-slate-700 dark:text-slate-300 font-sans">
                  <li className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-950/60 p-3 rounded-xl border border-slate-100 dark:border-slate-850">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    <span>HIPAA compliant test runs for biometric and health tech pipelines.</span>
                  </li>
                  <li className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-950/60 p-3 rounded-xl border border-slate-100 dark:border-slate-850">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    <span>PCI DSS validation matrices for merchant processors and financial nodes.</span>
                  </li>
                  <li className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-950/60 p-3 rounded-xl border border-slate-100 dark:border-slate-850">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    <span>UAE Central Bank clearing regulations, NESA, and strict regional data-privacy audits.</span>
                  </li>
                  <li className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-950/60 p-3 rounded-xl border border-slate-100 dark:border-slate-850">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    <span>SOC 2 Type II validation methodologies ensuring client system isolation.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-3xl p-4 shadow-sm">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Brain size={28} className="text-indigo-600 dark:text-indigo-400" />
                  <CardTitle className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Safety-Critical AI Audits</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  Custom verification models to test autonomous decision systems, algorithms, and deep neural models for high-risk domains:
                </p>
                <ul className="space-y-3.5 text-sm font-semibold text-slate-700 dark:text-slate-300 font-sans">
                  <li className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-950/60 p-3 rounded-xl border border-slate-100 dark:border-slate-850">
                    <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                    <span>Temenos T24, Finacle, SWIFT clearing, and HPS PowerCard validation under severe stresses.</span>
                  </li>
                  <li className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-950/60 p-3 rounded-xl border border-slate-100 dark:border-slate-850">
                    <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                    <span>Anomalous sensor injection tests for self-driving and robotic units.</span>
                  </li>
                  <li className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-950/60 p-3 rounded-xl border border-slate-100 dark:border-slate-850">
                    <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                    <span>Dataset representation and class balance metrics checks.</span>
                  </li>
                  <li className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-950/60 p-3 rounded-xl border border-slate-100 dark:border-slate-850">
                    <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                    <span>Strict compliance reporting for ISO-42001 AI systems.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Metrics Counter Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 relative border-b border-slate-200/50 dark:border-slate-850">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '3 Global Offices', label: 'San Jose, Singapore, India' },
              { value: '220+ Engineers', label: 'Accredited ISTQB specialists' },
              { value: '650+ Projects', label: 'Successfully launched' },
              { value: '98.5% Retention', label: 'Annual customer rate' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 border-r border-slate-100 dark:border-slate-900 last:border-0">
                <div className="text-3xl font-extrabold text-indigo-650 dark:text-indigo-400 mb-2">{stat.value}</div>
                <div className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-600 via-indigo-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">
            Need Domain-Specific Auditing Services?
          </h2>
          <p className="text-lg text-indigo-100 mb-8">
            Tell us about your industry sector and regulatory requirements. Our specialists will design a personalized validation checklist.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-indigo-700 hover:bg-slate-100 font-bold px-10 py-6 rounded-xl shadow-xl">
              Contact Sector Specialists
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}
