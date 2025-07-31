import { ArrowRight, Play, Star, Users, TrendingUp } from 'lucide-react';

export default function Hero({ onDemoClick, onWaitlistClick }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-creator-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-creator-pink/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Social proof */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="flex -space-x-2">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-creator-purple to-creator-pink border-2 border-white"></div>
            ))}
          </div>
          <span className="text-sm text-gray-600">Join 1,247+ creators already on the waitlist</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          The <span className="gradient-text">Operating System</span>
          <br />
          for Content Creators
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Stop juggling 15 different tools. CreatorOS unifies your content planning, 
          publishing, analytics, and revenue tracking in one powerful platform.
        </p>

        {/* Key benefits */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center space-x-2 bg-white/80 rounded-full px-4 py-2 backdrop-blur-sm">
            <TrendingUp className="w-5 h-5 text-creator-purple" />
            <span className="text-sm font-medium">3x Faster Content Planning</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 rounded-full px-4 py-2 backdrop-blur-sm">
            <Users className="w-5 h-5 text-creator-pink" />
            <span className="text-sm font-medium">Unified Analytics</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 rounded-full px-4 py-2 backdrop-blur-sm">
            <Star className="w-5 h-5 text-creator-orange" />
            <span className="text-sm font-medium">AI-Powered Insights</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onDemoClick}
            className="group bg-gradient-to-r from-creator-purple to-creator-pink text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
          >
            <Play className="w-5 h-5" />
            <span>See Live Demo</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={onWaitlistClick}
            className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 border border-gray-200"
          >
            Join Waitlist - Free
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-4">Trusted by creators from</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <span className="font-semibold">YouTube</span>
            <span className="font-semibold">Instagram</span>
            <span className="font-semibold">TikTok</span>
            <span className="font-semibold">Twitter</span>
            <span className="font-semibold">LinkedIn</span>
          </div>
        </div>
      </div>
    </section>
  );
}