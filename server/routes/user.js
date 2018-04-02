import express from 'express';

import db from '../models';

const router = express.Router();

router.get('/me', async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      user: req.user
    })
  } catch (err) {
    res.status(200).json({
      success: false,
    })
  }
})

export default router;