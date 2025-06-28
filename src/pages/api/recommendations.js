import dbConnect from '@/database/dbConnect';
import User from '@/schemas/userSchema';
import { getAIRecommendations } from '@/utils/aiHelper';

export default async function handler(req, res) {
  await dbConnect();
  
  if (req.method === 'POST') {
    const { userId } = req.body;
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ error: 'User not found' });

    const recommendations = await getAIRecommendations(user.progress);
    res.status(200).json({ recommendations });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
