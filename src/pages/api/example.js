import dbConnect from '@/database/dbConnect';

export default async function handler(req, res) {
  await dbConnect();
  res.status(200).json({ message: 'Connected to the database!' });
}
