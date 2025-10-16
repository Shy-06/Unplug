import { Router } from 'express';

export const communityRouter = Router();

// GET /api/community/challenges
communityRouter.get('/challenges', async (req, res) => {
  try {
    // TODO: Fetch challenges from database
    res.json({
      success: true,
      data: [
        {
          id: '1',
          title: '7 天不刷短视频',
          description: '连续 7 天不使用短视频应用',
          duration: 7,
          participantCount: 1234,
          goalType: 'reduce_time',
          targetValue: 0,
          rewards: 100,
        },
      ],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: 'FETCH_CHALLENGES_ERROR',
        message: '获取挑战失败',
      },
    });
  }
});

// POST /api/community/challenges/:id/join
communityRouter.post('/challenges/:id/join', async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    
    // TODO: Join challenge
    res.json({
      success: true,
      data: {
        id: '1',
        challengeId: id,
        userId,
        progress: 0,
        status: 'in_progress',
        joinedAt: new Date(),
      },
      message: '加入挑战成功',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: 'JOIN_CHALLENGE_ERROR',
        message: '加入挑战失败',
      },
    });
  }
});

// GET /api/community/groups
communityRouter.get('/groups', async (req, res) => {
  try {
    // TODO: Fetch groups from database
    res.json({
      success: true,
      data: [
        {
          id: '1',
          name: '早起打卡组',
          description: '一起养成早起习惯',
          category: 'lifestyle',
          memberCount: 234,
          isPrivate: false,
        },
      ],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: 'FETCH_GROUPS_ERROR',
        message: '获取小组失败',
      },
    });
  }
});
