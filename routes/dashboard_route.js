/* global DB */

const router = require('express').Router();

/**
 * Doctor's dashboard
 */
router.get('/doctor', (req, res) => {
  res.locals.user = { role: 'Coach' };
  res.render('dashboard_doctor', { meetings: DB.meetings_filter() })
});

/**
 * Patient's dashboard
 */
router.get('/patient', (req, res) => {
  res.locals.user = { role: 'client' };
  // Render view only with meetings that were booked
  res.render('dashboard_patient', { meetings: DB.meetings_filter(true) });
});

module.exports = router;
