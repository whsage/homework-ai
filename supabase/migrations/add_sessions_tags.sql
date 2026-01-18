-- Add tags column to sessions table
-- This allows storing an array of knowledge point strings directly
ALTER TABLE sessions 
ADD COLUMN IF NOT EXISTS tags TEXT[] DEFAULT '{}';

-- Optional: Create an index for faster tag searching if needed later
CREATE INDEX IF NOT EXISTS idx_sessions_tags ON sessions USING GIN(tags);
