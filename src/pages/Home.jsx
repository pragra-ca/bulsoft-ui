import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Sparkles, Shield, Zap, TrendingUp, Award, Globe, Target } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { mockServices, mockStats, mockTestimonials } from '../mock';
import * as LucideIcons from 'lucide-react';

const Home = () => {
  const getIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName.split('-').map((word, i) => 
      i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    ).join('').replace(/^(.)/, (match) => match.toUpperCase())];
    return IconComponent || LucideIcons.Box;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Professional Corporate */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-sky-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-lg text-sm font-medium">
                <Shield size={16} />
                <span>Trusted by 200+ Global Enterprises</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Enterprise-Grade
                <span className="block text-sky-600 mt-2">
                  Quality Assurance Solutions
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Bulsoft delivers comprehensive testing services combining AI-powered innovation 
                with 15+ years of expertise in BFSI, telecom, and enterprise sectors. Trusted by 
                global leaders for mission-critical quality assurance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-sky-600 text-white hover:bg-sky-700 shadow-lg hover:shadow-xl transition-all">
                  Schedule Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Link to="/case-studies">
                  <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:border-sky-600 hover:text-sky-600">
                    View Case Studies
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t">
                <div>
                  <div className="text-3xl font-bold text-sky-600">500+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-sky-600">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-sky-600">10+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { 
                    icon: Sparkles, 
                    title: 'AI Agent Testing', 
                    desc: 'Advanced AI auditing & validation',
                    color: 'bg-gradient-to-br from-sky-500 to-sky-600'
                  },
                  { 
                    icon: Zap, 
                    title: 'Automation', 
                    desc: '70% faster release cycles',
                    color: 'bg-gradient-to-br from-blue-500 to-blue-600'
                  },
                  { 
                    icon: Shield, 
                    title: 'Security Testing', 
                    desc: 'Enterprise-grade security',
                    color: 'bg-gradient-to-br from-cyan-500 to-cyan-600'
                  },
                  { 
                    icon: TrendingUp, 
                    title: 'Performance', 
                    desc: '85% bug reduction rate',
                    color: 'bg-gradient-to-br from-teal-500 to-teal-600'
                  }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                  >
                    <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <item.icon className="text-white" size={24} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Decorative Element */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-200 rounded-full filter blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Card Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
            <h2 className="text-5xl font-bold text-gray-900 mt-4 mb-6">
              Comprehensive Testing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI agent auditing to traditional QA, we provide end-to-end testing services 
              that ensure your applications exceed quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockServices.map((service) => {
              const IconComponent = getIcon(service.icon);
              return (
                <Card key={service.id} className="group border-2 border-gray-100 hover:border-sky-300 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-sky-50/30">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-3">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle size={18} className="text-sky-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/testing">
              <Button size="lg" variant="outline" className="border-2 border-sky-600 text-sky-600 hover:bg-sky-50">
                Explore All Services
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Feature Highlights */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-sky-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Why Bulsoft</span>
            <h2 className="text-5xl font-bold text-gray-900 mt-4 mb-6">
              Setting the Standard in Quality Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep industry expertise with innovative testing methodologies 
              to deliver measurable results for global enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: Sparkles, 
                title: 'AI-First Approach',
                description: 'Pioneering AI agent testing and auditing methodologies that identify issues 70% faster than traditional methods. Our proprietary frameworks ensure AI reliability, accuracy, and ethical compliance.'
              },
              { 
                icon: Shield, 
                title: 'Enterprise Trust',
                description: 'Serving 200+ global clients across 10+ countries with a 98% satisfaction rate. Our expertise spans BFSI, telecom, healthcare, and e-commerce with deep regulatory compliance knowledge.'
              },
              { 
                icon: TrendingUp, 
                title: 'Proven ROI',
                description: '70% faster release cycles, 85% reduction in production bugs, and measurable cost savings. Our clients achieve critical quality thresholds while minimizing time, cost, and future maintenance.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-sky-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <item.icon className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Design */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Client Success</span>
            <h2 className="text-5xl font-bold text-gray-900 mt-4 mb-6">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-2 border-gray-100 hover:border-sky-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed text-lg">"{testimonial.content}"</p>
                  <div className="border-t pt-6">
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-sm text-sky-600 font-medium">{testimonial.role}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Bold & Engaging */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-sky-700 to-sky-600"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your QA?
          </h2>
          <p className="text-xl md:text-2xl text-sky-100 mb-12 leading-relaxed">
            Join 200+ global companies achieving exceptional quality with Bulsoft's 
            comprehensive testing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-10 py-6">
                Schedule Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-6">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
