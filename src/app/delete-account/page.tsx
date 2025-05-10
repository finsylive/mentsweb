"use client";

import React, { useState } from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export default function DeleteAccount() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    reason: "",
    feedback: "",
    confirmation: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: target.checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would implement your account deletion logic
    // For example, connecting to your backend API
    
    // Simulating an API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center px-4 pt-20 pb-10">
        <div className="w-full max-w-md">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold mb-2">Delete Your Account</h1>
                <p className="text-white/70">We're sorry to see you go. Please provide some information before deleting your account.</p>
              </div>
              
              <div className="border border-white/15 rounded-xl p-6 bg-white/5 backdrop-blur">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-white/70 mb-1">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      required
                      value={formData.username}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/10 border border-white/15 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-300/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/10 border border-white/15 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-300/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="reason" className="block text-sm font-medium text-white/70 mb-1">Reason for Leaving</label>
                    <select
                      id="reason"
                      name="reason"
                      required
                      value={formData.reason}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/10 border border-white/15 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-300/50"
                    >
                      <option value="" disabled>Select a reason</option>
                      <option value="not-useful">Not finding it useful</option>
                      <option value="complex">Too complicated to use</option>
                      <option value="better-alternative">Found a better alternative</option>
                      <option value="privacy">Privacy concerns</option>
                      <option value="temporary">Taking a break, will be back</option>
                      <option value="other">Other reason</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="feedback" className="block text-sm font-medium text-white/70 mb-1">Additional Feedback (Optional)</label>
                    <textarea
                      id="feedback"
                      name="feedback"
                      rows={3}
                      value={formData.feedback}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/10 border border-white/15 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-300/50 resize-none"
                      placeholder="What could we improve?"
                    />
                  </div>
                  
                  <div className="pt-2">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="confirmation"
                        checked={formData.confirmation}
                        onChange={handleChange}
                        required
                        className="mt-1 mr-3"
                      />
                      <span className="text-sm text-white/70">
                        I understand that deleting my account is permanent and cannot be undone. All my data will be removed.
                      </span>
                    </label>
                  </div>
                  
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.confirmation}
                      className="w-full px-4 py-2 bg-red-600/80 hover:bg-red-600 text-white font-medium rounded-full transition duration-300 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {isSubmitting ? "Processing..." : "Delete My Account"}
                    </button>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <div className="text-center border border-white/15 rounded-xl p-8 bg-white/5 backdrop-blur">
              <h2 className="text-2xl font-bold mb-4">Account Deletion Request Received</h2>
              <p className="mb-6 text-white/70">
                We've received your account deletion request. Your account will be permanently deleted within 24 hours.
              </p>
              <a
                href="/"
                className="inline-block px-6 py-2 bg-emerald-600/80 hover:bg-emerald-600 text-white font-medium rounded-full transition duration-300"
              >
                Return to Home
              </a>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
