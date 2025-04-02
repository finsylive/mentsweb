"use client";
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import grainImage from "@/assets/images/grain.jpg";

export function Footer() {
  return (
    <footer className="relative bg-gray-800 text-gray-300 overflow-hidden">
      {/* Grain overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <h3 className="text-4xl font-serif bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
              Ments
            </h3>
            <p className="text-lg text-white/60">Create Collaborate Conquer.</p>
            
            <div className="flex space-x-6 pt-4">
              {[
                { name: 'twitter', url: 'https://twitter.com/yourprofile', icon: Twitter },
                { name: 'instagram', url: 'https://instagram.com/ments_app', icon: Instagram },
                { name: 'linkedin', url: 'https://linkedin.com/company/ments2024', icon: Linkedin }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  className="h-10 w-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all border border-white/10 hover:border-white/20"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20">
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-emerald-300" />
                  <span>support@ments.app</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-sky-400" />
                  <span>+91 8800243842</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-emerald-300" />
                  <span>Chennai, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-white/10 my-8" />
        
        <div className="text-center text-sm text-white/60">
          © {new Date().getFullYear()} Ments. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
