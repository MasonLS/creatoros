-- Waitlist table schema for all experimental products
-- This supports multiple products in the same Supabase project

CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product VARCHAR(50) NOT NULL, -- 'creatoros', 'vetflow', 'shopmind', etc.
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  creator_type VARCHAR(100), -- For creator-focused products
  platforms TEXT[], -- Array of platforms
  followers VARCHAR(50), -- Follower range
  status VARCHAR(20) DEFAULT 'active', -- 'active', 'converted', 'unsubscribed'
  metadata JSONB, -- Flexible field for product-specific data
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_waitlist_product ON waitlist(product);
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_product_email ON waitlist(product, email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);
CREATE INDEX IF NOT EXISTS idx_waitlist_status ON waitlist(status);

-- RLS (Row Level Security) policies
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Policy to allow inserts (for waitlist signups)
CREATE POLICY "Allow waitlist inserts" ON waitlist
  FOR INSERT WITH CHECK (true);

-- Policy to allow reads (for admin dashboard)
CREATE POLICY "Allow waitlist reads" ON waitlist
  FOR SELECT USING (true);

-- Comments for documentation
COMMENT ON TABLE waitlist IS 'Waitlist signups for all experimental products';
COMMENT ON COLUMN waitlist.product IS 'Product identifier (creatoros, vetflow, shopmind, etc.)';
COMMENT ON COLUMN waitlist.metadata IS 'Product-specific data and tracking info';

-- Example queries for different products:
-- SELECT * FROM waitlist WHERE product = 'creatoros';
-- SELECT COUNT(*) FROM waitlist WHERE product = 'creatoros' AND status = 'active';
-- SELECT product, COUNT(*) FROM waitlist GROUP BY product;