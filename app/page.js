"use client";

import { useState } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import DemoModal from '../components/DemoModal';
import WaitlistModal from '../components/WaitlistModal';

export default function Home() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Hero 
        onDemoClick={() => setIsDemoOpen(true)}
        onWaitlistClick={() => setIsWaitlistOpen(true)}
      />
      <Features />
      
      {/* Final CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">transform</span> your creator business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join 1,247+ creators who are already on the waitlist for early access to CreatorOS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setIsWaitlistOpen(true)}
              className="bg-gradient-to-r from-creator-purple to-creator-pink text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
            >
              Join Waitlist - Free
            </button>
            <button
              onClick={() => setIsDemoOpen(true)}
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              See Demo First
            </button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Early bird pricing</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">CreatorOS</h3>
            <p className="text-gray-400 mb-6">The operating system for content creators</p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              © 2024 CreatorOS. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <DemoModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </main>
  );
}