// Sample data for CreatorOS demo

export const sampleCreator = {
  name: "Alex Chen",
  handle: "@alexcreates",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  platforms: ["YouTube", "Instagram", "TikTok", "Twitter"],
  totalFollowers: 125000,
  monthlyRevenue: 8500
};

export const contentCalendar = [
  {
    id: 1,
    date: "2024-08-01",
    platform: "YouTube",
    type: "Video",
    title: "10 AI Tools Every Creator Needs",
    status: "published",
    engagement: 15420,
    revenue: 340
  },
  {
    id: 2,
    date: "2024-08-02",
    platform: "Instagram",
    type: "Reel",
    title: "Quick Editing Hack",
    status: "scheduled",
    engagement: 0,
    revenue: 0
  },
  {
    id: 3,
    date: "2024-08-03",
    platform: "TikTok",
    type: "Video",
    title: "Day in My Life as Creator",
    status: "draft",
    engagement: 0,
    revenue: 0
  },
  {
    id: 4,
    date: "2024-08-04",
    platform: "Twitter",
    type: "Thread",
    title: "Creator Economy Insights",
    status: "idea",
    engagement: 0,
    revenue: 0
  },
  {
    id: 5,
    date: "2024-08-05",
    platform: "YouTube",
    type: "Short",
    title: "Behind the Scenes",
    status: "scheduled",
    engagement: 0,
    revenue: 0
  }
];

export const analyticsData = {
  totalViews: 2450000,
  totalEngagement: 185000,
  totalRevenue: 12500,
  growthRate: 15.3,
  platformBreakdown: [
    { platform: "YouTube", followers: 85000, engagement: 12.5, revenue: 7500 },
    { platform: "Instagram", followers: 25000, engagement: 8.2, revenue: 2800 },
    { platform: "TikTok", followers: 12000, engagement: 15.8, revenue: 1200 },
    { platform: "Twitter", followers: 3000, engagement: 6.1, revenue: 1000 }
  ],
  monthlyGrowth: [
    { month: "Jan", views: 180000, revenue: 2100 },
    { month: "Feb", views: 220000, revenue: 2800 },
    { month: "Mar", views: 280000, revenue: 3500 },
    { month: "Apr", views: 320000, revenue: 4200 },
    { month: "May", views: 380000, revenue: 5100 },
    { month: "Jun", views: 420000, revenue: 6200 },
    { month: "Jul", views: 480000, revenue: 7500 }
  ]
};

export const aiSuggestions = [
  {
    id: 1,
    type: "trending",
    title: "React to the new AI announcement",
    platform: "TikTok",
    confidence: 92,
    reason: "AI content is trending +340% this week"
  },
  {
    id: 2,
    type: "optimization",
    title: "Post Instagram Reels at 7 PM",
    platform: "Instagram",
    confidence: 87,
    reason: "Your audience is most active at this time"
  },
  {
    id: 3,
    type: "content",
    title: "Create a 'Day in My Life' series",
    platform: "YouTube",
    confidence: 85,
    reason: "Personal content performs 23% better for your audience"
  },
  {
    id: 4,
    type: "collaboration",
    title: "Collaborate with @techreview",
    platform: "All",
    confidence: 78,
    reason: "Similar audience overlap of 65%"
  }
];

export const revenueStreams = [
  { source: "YouTube Ad Revenue", amount: 3200, percentage: 38 },
  { source: "Brand Partnerships", amount: 2800, percentage: 33 },
  { source: "Course Sales", amount: 1500, percentage: 18 },
  { source: "Affiliate Marketing", amount: 900, percentage: 11 }
];