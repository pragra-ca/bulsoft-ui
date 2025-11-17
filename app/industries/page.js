'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mockIndustries } from '@/mock';
import * as LucideIcons from 'lucide-react';
import { ArrowRight, Users } from 'lucide-react';

export default function Industries() {
  const getIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName.split('-').map((word, i) => 
      i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    ).join('').replace(/^(.)/, (match) => match.toUpperCase())];
    return IconComponent || LucideIcons.Box;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-sky-100 text-sky-800 hover:bg-sky-200">Industries We Serve</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Quality Assurance Across Industries
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bring specialized testing expertise to diverse sectors, understanding unique 
            regulatory requirements and industry-specific challenges.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockIndustries.map((industry) => {
              const IconComponent = getIcon(industry.icon);
              return (
                <Card key={industry.id} className="border-2 border-gray-100 hover:border-sky-200 hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-sky-600 to-sky-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-2xl">{industry.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{industry.description}</p>
                    <div className="flex items-center text-sm text-sky-700 font-medium">
                      <Users size={18} className="mr-2" />
                      <span>{industry.clients}+ clients served</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industry-Specific Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deep domain knowledge combined with cutting-edge testing methodologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-gray-200 bg-white">
              <CardHeader>
                <CardTitle>Regulatory Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We ensure your applications meet industry-specific regulatory requirements:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• HIPAA compliance for healthcare applications</li>
                  <li>• PCI DSS for financial services and e-commerce</li>
                  <li>• GDPR and data privacy regulations</li>
                  <li>• SOC 2 and ISO certifications</li>
                  <li>• Industry-specific security standards</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 bg-white">
              <CardHeader>
                <CardTitle>Specialized Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Tailored testing approaches for different industry needs:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Real-time transaction testing for FinTech</li>
                  <li>• Patient data security for healthcare</li>
                  <li>• High-volume load testing for e-commerce</li>
                  <li>• AI model validation for ML platforms</li>
                  <li>• Multi-tenant testing for SaaS applications</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Global Reach, Local Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-sky-700 mb-2">10+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-sky-700 mb-2">200+</div>
              <div className="text-gray-600">Global Clients</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-sky-700 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-sky-700 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-700 to-sky-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Industry-Specific Testing?
          </h2>
          <p className="text-lg text-sky-50 mb-8">
            Let's discuss how we can help your industry meet its unique quality challenges
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-sky-700 hover:bg-gray-100">
              Contact Our Experts
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

