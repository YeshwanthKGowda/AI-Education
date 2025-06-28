import dbConnect from '@/database/dbConnect';
import User from '@/schemas/userSchema';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const { email } = req.body;

    // Find the user in the database
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'User found', user });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
