export default function handler(req, res) {
  if (req.method === 'GET') {
    const mockAnalytics = {
      totalUsers: 120,
      activeUsers: 80,
      dailyEngagement: [10, 20, 30, 40],
    };
    res.status(200).json(mockAnalytics);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
