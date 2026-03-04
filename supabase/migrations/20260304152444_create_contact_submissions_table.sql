/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Full name of the contact
      - `email` (text) - Email address of the contact
      - `phone` (text) - Phone number of the contact
      - `service` (text) - Service they are interested in
      - `message` (text) - Their message/inquiry
      - `created_at` (timestamptz) - Timestamp when submission was created
      - `status` (text) - Status of the submission (new, contacted, closed)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting new submissions (public access for contact form)
    - Add policy for authenticated users to read submissions (admin access)

  3. Important Notes
    - Public users can only insert new submissions
    - Only authenticated users can read submissions for admin purposes
    - All submissions are tracked with timestamps
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);