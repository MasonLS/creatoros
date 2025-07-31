import { useState } from 'react';
import { Calendar, BarChart3, Lightbulb, DollarSign, X, Youtube, Instagram, Twitter } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { contentCalendar, analyticsData, aiSuggestions, revenueStreams, sampleCreator } from '../lib/sampleData';

const platformIcons = {
  YouTube: Youtube,
  Instagram: Instagram,
  Twitter: Twitter,
  TikTok: () => <div className="w-5 h-5 bg-black rounded-sm flex items-center justify-center text-white text-xs font-bold">T</div>
};

const statusColors = {
  published: 'bg-green-100 text-green-800',
  scheduled: 'bg-blue-100 text-blue-800',
  draft: 'bg-yellow-100 text-yellow-800',
  idea: 'bg-gray-100 text-gray-800'
};

export default function DemoModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('calendar');

  if (!isOpen) return null;

  const tabs = [
    { id: 'calendar', label: 'Content Calendar', icon: Calendar },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'ai', label: 'AI Insights', icon: Lightbulb },
    { id: 'revenue', label: 'Revenue', icon: DollarSign }
  ];

  const COLORS = ['#8b5cf6', '#ec4899', '#f97316', '#06b6d4'];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <img 
              src={sampleCreator.avatar} 
              alt={sampleCreator.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="text-xl font-bold">{sampleCreator.name}</h2>
              <p className="text-gray-600">{sampleCreator.handle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id 
                    ? 'border-b-2 border-creator-purple text-creator-purple' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {activeTab === 'calendar' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Upcoming Content</h3>
              {contentCalendar.map(item => {
                const Icon = platformIcons[item.platform];
                return (
                  <div key={item.id} className="demo-card">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{item.platform}</span>
                        </div>
                        <span className="text-gray-500">{item.date}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[item.status]}`}>
                        {item.status}
                      </span>
                    </div>
                    <h4 className="font-semibold mt-2">{item.title}</h4>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      <span>Type: {item.type}</span>
                      {item.engagement > 0 && <span>Engagement: {item.engagement.toLocaleString()}</span>}
                      {item.revenue > 0 && <span>Revenue: ${item.revenue}</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="demo-card text-center">
                  <h4 className="text-sm text-gray-600">Total Views</h4>
                  <p className="text-2xl font-bold text-creator-purple">{analyticsData.totalViews.toLocaleString()}</p>
                </div>
                <div className="demo-card text-center">
                  <h4 className="text-sm text-gray-600">Engagement</h4>
                  <p className="text-2xl font-bold text-creator-pink">{analyticsData.totalEngagement.toLocaleString()}</p>
                </div>
                <div className="demo-card text-center">
                  <h4 className="text-sm text-gray-600">Revenue</h4>
                  <p className="text-2xl font-bold text-creator-orange">${analyticsData.totalRevenue.toLocaleString()}</p>
                </div>
                <div className="demo-card text-center">
                  <h4 className="text-sm text-gray-600">Growth Rate</h4>
                  <p className="text-2xl font-bold text-green-600">+{analyticsData.growthRate}%</p>
                </div>
              </div>

              <div className="demo-card">
                <h4 className="text-lg font-semibold mb-4">Monthly Growth</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={analyticsData.monthlyGrowth}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="views" stroke="#8b5cf6" strokeWidth={3} />
                    <Line type="monotone" dataKey="revenue" stroke="#ec4899" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === 'ai' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">AI-Powered Recommendations</h3>
              {aiSuggestions.map(suggestion => (
                <div key={suggestion.id} className="demo-card">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="px-2 py-1 bg-creator-purple/10 text-creator-purple rounded-full text-xs font-medium">
                          {suggestion.type}
                        </span>
                        <span className="text-sm text-gray-600">{suggestion.platform}</span>
                      </div>
                      <h4 className="font-semibold">{suggestion.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{suggestion.reason}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-green-600">{suggestion.confidence}% confidence</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'revenue' && (
            <div className="space-y-6">
              <div className="demo-card">
                <h4 className="text-lg font-semibold mb-4">Revenue Breakdown</h4>
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="w-64 h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={revenueStreams}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="amount"
                        >
                          {revenueStreams.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `$${value}`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-3">
                    {revenueStreams.map((stream, index) => (
                      <div key={stream.source} className="flex items-center space-x-3">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        ></div>
                        <div>
                          <div className="font-medium">{stream.source}</div>
                          <div className="text-sm text-gray-600">${stream.amount} ({stream.percentage}%)</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}