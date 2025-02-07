"use client";
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,0,0,0))]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Ments
            </h3>
            <p className="text-lg text-gray-400">Create Collaborate Conquer.</p>
            
            <div className="flex space-x-4 pt-2">
              {[
                { name: 'twitter', url: 'https://twitter.com/yourprofile', icon: Twitter, color: 'blue-400' },
                { name: 'instagram', url: 'https://instagram.com/yourprofile', icon: Instagram, color: 'pink-400' },
                { name: 'linkedin', url: 'https://www.linkedin.com/company/ments2024', icon: Linkedin, color: 'blue-400' }
              ].map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
                  <div className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:scale-110 transition-all duration-300 cursor-pointer">
                    <social.icon className={`w-5 h-5 group-hover:text-${social.color}`} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl"></div>
            <div className="relative p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Contact
              </h3>
              <div className="space-y-3">
                {[
                  { icon: MapPin, text: "IIT Madras, Chennai, 600036 ", color: "blue" },
                  { icon: Phone, text: "+916391859077", color: "purple" },
                  { icon: Mail, text: "Outreach@finsy.in", color: "pink" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                    <div className={`p-2 rounded-lg bg-${item.color}-500/10 group-hover:scale-110 transition-all duration-300`}>
                      <item.icon className={`w-4 h-4 text-${item.color}-400`} />
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-gray-200">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/5 mt-4">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Ments
          </p>
        </div>
      </div>
    </footer>
  );
}
