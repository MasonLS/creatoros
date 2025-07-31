-- CreatorOS Waitlist Table Setup
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS creatoros_waitlist (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    creator_type TEXT NOT NULL,
    platforms TEXT[] DEFAULT '{}',
    followers TEXT NOT NULL,
    status TEXT DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_creatoros_waitlist_email ON creatoros_waitlist(email);
CREATE INDEX IF NOT EXISTS idx_creatoros_waitlist_created_at ON creatoros_waitlist(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE creatoros_waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (for waitlist signups)
CREATE POLICY "Allow public inserts" ON creatoros_waitlist
    FOR INSERT WITH CHECK (true);

-- Create policy to allow reads (for admin dashboard)
CREATE POLICY "Allow service role to read" ON creatoros_waitlist
    FOR SELECT USING (auth.role() = 'service_role');

-- Insert a test record to verify everything works
INSERT INTO creatoros_waitlist (name, email, creator_type, platforms, followers)
VALUES ('Test User', 'test@example.com', 'YouTuber', ARRAY['YouTube', 'Instagram'], '10K-50K')
ON CONFLICT (email) DO NOTHING;

SELECT 'CreatorOS waitlist table created successfully!' as message;
