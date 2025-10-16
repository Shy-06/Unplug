import { Router } from 'express';

export const usageRouter = Router();

// POST /api/usage/report
usageRouter.post('/report', async (req, res) => {
  try {
    const { userId, appName, appCategory, startTime, endTime, duration, deviceType } = req.body;
    
    // TODO: Store usage data in database
    res.json({
      success: true,
      data: {
        id: '1',
        userId,
        appName,
        appCategory,
        startTime,
        endTime,
        duration,
        deviceType,
      },
      message: '使用数据上报成功',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: 'REPORT_ERROR',
        message: '上报失败',
      },
    });
  }
});

// GET /api/usage/stats
usageRouter.get('/stats', async (req, res) => {
  try {
    const { userId, period, startDate, endDate } = req.query;
    
    // TODO: Fetch usage stats from database
    res.json({
      success: true,
      data: {
        totalTime: 420, // minutes
        byCategory: {
          social: 120,
          entertainment: 90,
          work: 180,
          study: 30,
        },
        byApp: {
          'WeChat': 80,
          'Douyin': 60,
          'DingTalk': 120,
        },
        healthIndex: 78,
        comparedToLastWeek: -15,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: 'STATS_ERROR',
        message: '获取统计数据失败',
      },
    });
  }
});
