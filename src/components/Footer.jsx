import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="https://www.bulsoft.com/_next/static/media/bulsoft.1e1f3ecc.svg" 
                alt="Bulsoft Logo" 
                className="h-11 w-auto"
                style={{
                  filter: 'grayscale(100%) brightness(0) invert(1) contrast(1.2)',
                  imageRendering: 'crisp-edges'
                }}
              />
            </div>
            <p className="text-sm leading-relaxed">
              Global testing company specializing in AI agent auditing, automation testing, and quality assurance for enterprise clients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-sky-500 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-sky-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-sky-500 transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-sky-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/testing" className="text-sm hover:text-sky-500 transition-colors">
                  Testing Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-sm hover:text-sky-500 transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm hover:text-sky-500 transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm">AI Agent Auditing</li>
              <li className="text-sm">Automation Testing</li>
              <li className="text-sm">AI Testing</li>
              <li className="text-sm">Performance Testing</li>
              <li className="text-sm">Security Testing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>contact@bulsoft.com</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Global presence across 10+ countries</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Bulsoft. All rights reserved. | Quality Assurance Excellence Since 2010</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
