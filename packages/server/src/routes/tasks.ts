import { Router } from 'express';

export const tasksRouter = Router();

// GET /api/tasks/recommend
tasksRouter.get('/recommend', async (req, res) => {
  try {
    const { userId } = req.query;
    
    // TODO: Implement AI-based task recommendation
    res.json({
      success: true,
      data: [
        {
          id: '1',
          title: '5分钟冥想',
          description: '通过冥想放松身心',
          category: 'meditation',
          duration: 5,
          difficulty: 'easy',
          points: 5,
        },
        {
          id: '2',
          title: '室外散步',
          description: '呼吸新鲜空气，放松大脑',
          category: 'exercise',
          duration: 10,
          difficulty: 'easy',
          points: 10,
        },
      ],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: 'RECOMMEND_ERROR',
        message: '推荐任务失败',
      },
    });
  }
});

// POST /api/tasks/complete
tasksRouter.post('/complete', async (req, res) => {
  try {
    const { userId, taskId } = req.body;
    
    // TODO: Mark task as completed and award points
    res.json({
      success: true,
      data: {
        points: 10,
        totalPoints: 900,
      },
      message: '任务完成，获得 10 积分',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: 'COMPLETE_TASK_ERROR',
        message: '完成任务失败',
      },
    });
  }
});
