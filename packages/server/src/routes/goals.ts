import { Router } from 'express';

export const goalsRouter = Router();

// GET /api/goals
goalsRouter.get('/', async (req, res) => {
  try {
    const { userId } = req.query;
    
    // TODO: Fetch goals from database
    res.json({
      success: true,
      data: [
        {
          id: '1',
          userId,
          type: 'reduce_time',
          title: '减少社交媒体使用',
          description: '每天使用社交媒体不超过 60 分钟',
          targetValue: 60,
          currentValue: 45,
          period: 'daily',
          status: 'active',
        },
      ],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: 'FETCH_GOALS_ERROR',
        message: '获取目标失败',
      },
    });
  }
});

// POST /api/goals
goalsRouter.post('/', async (req, res) => {
  try {
    const { userId, type, title, description, targetValue, period } = req.body;
    
    // TODO: Create goal in database
    res.json({
      success: true,
      data: {
        id: '1',
        userId,
        type,
        title,
        description,
        targetValue,
        currentValue: 0,
        period,
        status: 'active',
        createdAt: new Date(),
      },
      message: '目标创建成功',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: 'CREATE_GOAL_ERROR',
        message: '创建目标失败',
      },
    });
  }
});
