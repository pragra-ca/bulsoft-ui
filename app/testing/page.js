'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mockServices } from '@/mock';
import * as LucideIcons from 'lucide-react';
import { CheckCircle, ArrowRight, Zap, Target, Users, TrendingUp } from 'lucide-react';

export default function Testing() {
  const getIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName.split('-').map((word, i) => 
      i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    ).join('').replace(/^(.)/, (match) => match.toUpperCase())];
    return IconComponent || LucideIcons.Box;
  };

  const priorityServices = mockServices.filter(s => 
    ['AI Agent Testing & Auditing', 'Automation Testing', 'AI Testing'].includes(s.title)
  );
  const otherServices = mockServices.filter(s => 
    !['AI Agent Testing & Auditing', 'Automation Testing', 'AI Testing'].includes(s.title)
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-sky-50">
          <div className="absolute top-20 right-20 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-sky-100 text-sky-700 hover:bg-sky-200 px-6 py-2 text-sm font-semibold">
            Comprehensive Testing Solutions
          </Badge>
          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Elevate Quality with
            <span className="block mt-2 bg-gradient-to-r from-sky-600 via-sky-700 to-sky-600 bg-clip-text text-transparent">
              Next-Gen Testing Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From AI-powered auditing to comprehensive automation, we deliver testing excellence 
            that accelerates delivery, reduces costs, and ensures exceptional quality across your entire technology stack.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
            {[
              { value: '10M+', label: 'Tests Executed' },
              { value: '70%', label: 'Faster Releases' },
              { value: '85%', label: 'Bug Reduction' },
              { value: '98%', label: 'Client Satisfaction' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-sky-600">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Priority Services - Featured */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Core Expertise</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">Flagship Testing Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Our specialized services designed for modern, AI-powered applications and enterprise systems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {priorityServices.map((service, index) => {
              const IconComponent = getIcon(service.icon);
              return (
                <Card key={service.id} className={`border-2 border-sky-200 bg-gradient-to-br ${
                  index === 0 ? 'from-sky-50 to-white' : 
                  index === 1 ? 'from-sky-50 to-white' : 
                  'from-blue-50 to-white'
                } hover:shadow-2xl transition-all duration-300 group`}>
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-600 to-sky-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-3 mb-6">
                      <div className="font-semibold text-gray-900 text-sm">Key Capabilities:</div>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle size={18} className="text-sky-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t">
                      <span className="text-sm text-sky-600 font-medium">Industry-Leading Methodology</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Value Props */}
          <div className="bg-gradient-to-r from-sky-600 to-sky-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-8 text-center">Why Choose Our Testing Services?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Zap, title: 'Rapid Execution', desc: '70% faster test cycles' },
                { icon: Target, title: 'Precision Testing', desc: '99.8% accuracy rate' },
                { icon: Users, title: 'Expert Team', desc: '150+ certified engineers' },
                { icon: TrendingUp, title: 'Proven ROI', desc: '500% average return' }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <item.icon className="w-12 h-12 mx-auto mb-4" />
                  <div className="font-bold text-lg mb-2">{item.title}</div>
                  <div className="text-sky-100 text-sm">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-sky-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Complete Coverage</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">Full-Stack Testing Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Comprehensive quality assurance for every aspect of your application lifecycle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherServices.map((service) => {
              const IconComponent = getIcon(service.icon);
              return (
                <Card key={service.id} className="border-2 border-gray-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 bg-white group">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-sky-100 to-sky-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="text-sky-600" size={26} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle size={16} className="text-sky-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Our Methodology</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">Proven Testing Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic, results-driven approach to comprehensive quality assurance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Requirements Analysis', desc: 'Deep-dive into your application architecture and quality objectives' },
              { step: '02', title: 'Strategic Planning', desc: 'Custom test strategy aligned with your business goals and timelines' },
              { step: '03', title: 'Comprehensive Execution', desc: 'Rigorous testing across functionality, performance, and security' },
              { step: '04', title: 'Actionable Insights', desc: 'Detailed reports with prioritized recommendations and ROI metrics' }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-sky-600 to-sky-700 text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-sky-300 to-transparent -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-600 to-sky-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Elevate Your Testing Strategy?
          </h2>
          <p className="text-xl text-sky-100 mb-10">
            Let's discuss how our comprehensive testing services can accelerate your delivery and improve quality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100 shadow-xl text-lg px-10 py-6">
                Schedule Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-6">
                View Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

