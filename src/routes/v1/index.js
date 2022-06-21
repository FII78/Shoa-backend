const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const notifRoute = require('./notification.route');
const config = require('../../config/config');

//hr routes
const employeeRoute = require('./hr/employee.route');
const companyRoute = require('./hr/company.route');
const branchRoute = require('./hr/branch.route');
const departmentRoute = require('./hr/department.route');
const insuranceRoute = require('./hr/insurance.route');
const workRoute = require('./hr/work.route');
const salaryRoute = require('./hr/salary.route');
const educationRoute = require('./hr/education.route');
const attendanceRequestRoute = require('./hr/attendanceRequest.route');
const leaveRequestRoute = require('./hr/leaveRequest.route');
const travelRequestRoute = require('./hr/travelRequest.route');

//transport routes
const vehicleRoute = require('./vehicle.route');

//inventory routes

const router = express();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/vehicle',
    route: vehicleRoute,
  },
  {
    path: '/employee',
    route: employeeRoute,
  },
  {
    path: '/company',
    route: companyRoute,
  },
  {
    path: '/notification',
    route: notifRoute,
  },
  {
    path: '/branch',
    route: branchRoute,
  },
  {
    path: '/department',
    route: departmentRoute,
  },
  {
    path: '/education',
    route: educationRoute,
  },
  {
    path: '/insurance',
    route: insuranceRoute,
  },
  {
    path: '/work',
    route: workRoute,
  },
  {
    path: '/salary',
    route: salaryRoute,
  },
  {
    path: '/request/attendance',
    route: attendanceRequestRoute,
  },
  {
    path: '/request/leave',
    route: leaveRequestRoute,
  },
  {
    path: '/request/travel',
    route: travelRequestRoute,
  }
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
