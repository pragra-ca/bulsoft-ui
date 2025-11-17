import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    toast.success('Thank you! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Let's Start a Conversation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? Our testing experts are ready to help you achieve 
            exceptional quality. Get in touch today.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In *</Label>
                        <Select value={formData.service} onValueChange={(value) => handleChange('service', value)} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ai-agent">AI Agent Testing & Auditing</SelectItem>
                            <SelectItem value="automation">Automation Testing</SelectItem>
                            <SelectItem value="ai-testing">AI Testing</SelectItem>
                            <SelectItem value="app-dev">App Development</SelectItem>
                            <SelectItem value="performance">Performance Testing</SelectItem>
                            <SelectItem value="security">Security Testing</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project and testing needs..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-sky-600 to-sky-500 text-white hover:from-sky-700 hover:to-sky-600"
                    >
                      Send Message
                      <Send className="ml-2" size={20} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-sky-700" size={20} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <div className="text-sm text-gray-600">contact@bulsoft.com</div>
                      <div className="text-sm text-gray-600">support@bulsoft.com</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-sky-700" size={20} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Phone</div>
                      <div className="text-sm text-gray-600">+1 (555) 123-4567</div>
                      <div className="text-sm text-gray-600">+44 20 1234 5678</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-sky-700" size={20} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Global Presence</div>
                      <div className="text-sm text-gray-600">Operating in 10+ countries</div>
                      <div className="text-sm text-gray-600">24/7 support available</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-sky-200 bg-gradient-to-br from-sky-50 to-sky-50">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>• Free initial consultation</div>
                    <div>• Custom testing strategy</div>
                    <div>• Detailed project proposal</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Global Offices
            </h2>
            <p className="text-lg text-gray-600">
              Local expertise with global reach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { city: 'San Francisco', country: 'USA', address: '123 Tech Street, SF, CA 94105' },
              { city: 'London', country: 'UK', address: '456 Innovation Lane, London EC1A 1BB' },
              { city: 'Singapore', country: 'Singapore', address: '789 Testing Boulevard, Singapore 018956' }
            ].map((office, idx) => (
              <Card key={idx} className="border-2 border-gray-200 bg-white">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{office.city}</h3>
                  <p className="text-sm text-sky-700 font-medium mb-3">{office.country}</p>
                  <p className="text-sm text-gray-600">{office.address}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
