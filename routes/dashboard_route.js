/* global DB */

const router = require('express').Router();

/**
 * Doctor's dashboard
 */
router.get('/coach', (req, res) => {
  res.locals.user = { role: 'coach' };
  res.render('dashboard_coach', { meetings: DB.meetings_filter() })
});

/**
 * Patient's dashboard
 */
router.get('/client', (req, res) => {
  res.locals.user = { role: 'client' };
  // Render view only with meetings that were booked
  res.render('dashboard_client', { meetings: DB.meetings_filter(true) });
});

module.exports = router;
