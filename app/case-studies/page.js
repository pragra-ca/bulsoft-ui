'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mockCaseStudies } from '@/mock';
import { CheckCircle, Clock, ArrowRight } from 'lucide-react';

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const industries = ['All', ...new Set(mockCaseStudies.map(cs => cs.industry))];
  const filteredCases = selectedIndustry === 'All' 
    ? mockCaseStudies 
    : mockCaseStudies.filter(cs => cs.industry === selectedIndustry);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-sky-100 text-sky-800 hover:bg-sky-200">Success Stories</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Proven Results Across Industries
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped global companies achieve exceptional quality through 
            innovative testing solutions and AI-powered auditing.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((industry) => (
              <Button
                key={industry}
                variant={selectedIndustry === industry ? 'default' : 'outline'}
                onClick={() => setSelectedIndustry(industry)}
                className={selectedIndustry === industry 
                  ? 'bg-gradient-to-r from-sky-600 to-sky-500 text-white' 
                  : 'border-2 border-gray-300 hover:border-sky-600'}
              >
                {industry}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCases.map((caseStudy) => (
              <Card key={caseStudy.id} className="border-2 border-gray-100 hover:border-sky-200 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <Badge className="bg-sky-100 text-sky-800">{caseStudy.industry}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock size={16} className="mr-1" />
                      <span>{caseStudy.duration}</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2">{caseStudy.title}</CardTitle>
                  <p className="text-sm text-gray-500 font-medium">{caseStudy.client}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600 text-sm">{caseStudy.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600 text-sm">{caseStudy.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Results</h4>
                    <div className="space-y-2">
                      {caseStudy.results.map((result, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle size={16} className="text-sky-700 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Impact by the Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-sky-700 mb-2">500+</div>
              <div className="text-gray-600 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sky-700 mb-2">70%</div>
              <div className="text-gray-600 text-sm">Avg. Faster Releases</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sky-700 mb-2">85%</div>
              <div className="text-gray-600 text-sm">Bug Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sky-700 mb-2">10M+</div>
              <div className="text-gray-600 text-sm">Tests Executed</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-700 to-sky-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-sky-50 mb-8">
            Join the companies that have transformed their quality assurance with Bulsoft
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-sky-700 hover:bg-gray-100">
              Start Your Project
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

