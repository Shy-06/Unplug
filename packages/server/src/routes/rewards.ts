import { Router } from 'express';

export const rewardsRouter = Router();

// GET /api/rewards
rewardsRouter.get('/', async (req, res) => {
  try {
    // TODO: Fetch available rewards from database
    res.json({
      success: true,
      data: [
        {
          id: '1',
          title: '1 个月会员',
          description: '解锁高级功能',
          pointsCost: 500,
          category: 'privilege',
        },
        {
          id: '2',
          title: '定制头像框',
          description: '个性化展示',
          pointsCost: 300,
          category: 'virtual',
        },
      ],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: 'FETCH_REWARDS_ERROR',
        message: '获取奖励失败',
      },
    });
  }
});

// POST /api/rewards/redeem
rewardsRouter.post('/redeem', async (req, res) => {
  try {
    const { userId, rewardId } = req.body;
    
    // TODO: Redeem reward and deduct points
    res.json({
      success: true,
      data: {
        id: '1',
        userId,
        rewardId,
        redeemedAt: new Date(),
        status: 'pending',
      },
      message: '兑换成功',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: 'REDEEM_ERROR',
        message: '兑换失败',
      },
    });
  }
});
