import { useState } from 'react';
import { X, Check, Mail, User, Briefcase, AlertCircle } from 'lucide-react';

export default function WaitlistModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    creatorType: '',
    platforms: [],
    followers: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [waitlistPosition, setWaitlistPosition] = useState(null);

  if (!isOpen) return null;

  const creatorTypes = [
    'YouTuber',
    'Instagram Influencer',
    'TikTok Creator',
    'Blogger/Writer',
    'Podcaster',
    'Course Creator',
    'Other'
  ];

  const platformOptions = [
    'YouTube',
    'Instagram',
    'TikTok',
    'Twitter',
    'LinkedIn',
    'Twitch',
    'Pinterest',
    'Blog/Website'
  ];

  const followerRanges = [
    '< 1K',
    '1K - 10K',
    '10K - 100K',
    '100K - 1M',
    '1M+'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to join waitlist');
      }

      setWaitlistPosition(result.position);
      setIsSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePlatformToggle = (platform) => {
    setFormData(prev => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter(p => p !== platform)
        : [...prev.platforms, platform]
    }));
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">You&apos;re on the list! 🎉</h2>
          <p className="text-gray-600 mb-6">
            Thanks for joining! You&apos;re #{waitlistPosition} on the waitlist. We&apos;ll notify you as soon as CreatorOS launches.
          </p>
          <div className="bg-gradient-to-r from-creator-purple/10 to-creator-pink/10 rounded-lg p-4 mb-6">
            <p className="text-sm font-medium">🎁 Early Bird Bonus</p>
            <p className="text-sm text-gray-600">Get 3 months free when you&apos;re among the first 1,000 users!</p>
          </div>
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-creator-purple to-creator-pink text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold">Join the Waitlist</h2>
            <p className="text-gray-600">Be among the first to experience CreatorOS</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mx-6 mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-creator-purple focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-creator-purple focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          {/* Creator Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Briefcase className="w-4 h-4 inline mr-2" />
              What type of creator are you? *
            </label>
            <select
              required
              value={formData.creatorType}
              onChange={(e) => setFormData(prev => ({ ...prev, creatorType: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-creator-purple focus:border-transparent"
            >
              <option value="">Select creator type</option>
              {creatorTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Platforms */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Which platforms do you create on? (Select all that apply)
            </label>
            <div className="grid grid-cols-2 gap-2">
              {platformOptions.map(platform => (
                <button
                  key={platform}
                  type="button"
                  onClick={() => handlePlatformToggle(platform)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    formData.platforms.includes(platform)
                      ? 'bg-creator-purple text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>

          {/* Followers */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total followers across all platforms *
            </label>
            <select
              required
              value={formData.followers}
              onChange={(e) => setFormData(prev => ({ ...prev, followers: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-creator-purple focus:border-transparent"
            >
              <option value="">Select range</option>
              {followerRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-creator-purple to-creator-pink text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Joining Waitlist...' : 'Join Waitlist - Free'}
          </button>

          <p className="text-xs text-gray-500 text-center">
            By joining, you agree to receive updates about CreatorOS. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </div>
  );
}